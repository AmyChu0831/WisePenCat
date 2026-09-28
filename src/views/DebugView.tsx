import { useEffect, useState } from 'react'
import { Activity } from 'lucide-react'
import { getAgentStatuses } from '../server/agent'
import type { AgentStatus } from '../server/agent'

const statusLabels: Record<AgentStatus['status'], string> = {
  queued: '排队中',
  running: '运行中',
  checking: '校验中',
  completed: '已完成',
}

export function DebugView() {
  const [agents, setAgents] = useState<AgentStatus[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    const poll = async () => {
      try {
        const nextAgents = await getAgentStatuses()
        if (active) {
          setAgents(nextAgents)
          setError(null)
        }
      } catch {
        if (active) setError('读取 Agent 状态失败')
      }
    }

    void poll()
    const intervalId = window.setInterval(() => void poll(), 1_000)

    return () => {
      active = false
      window.clearInterval(intervalId)
    }
  }, [])

  const runningCount = agents.filter((agent) => agent.status === 'running').length

  return (
    <div className="view-content">
      <div className="page-heading">
        <div>
          <p className="eyebrow">DEVELOPMENT</p>
          <h1>调试</h1>
          <p className="page-subtitle">查看 Agent 状态</p>
        </div>
        <div className="count-badge"><Activity size={16} /> {agents.length} 个 Agent · {runningCount} 个运行中</div>
      </div>

      <section className="status-section" aria-label="Agent 状态">
        <div className="section-heading"><h2>Agent 状态</h2></div>
        {error ? <p className="status-error" role="alert">{error}</p> : (
          <>
            <div className="agent-grid" aria-label="Agent 状态列表">
              {agents.map((agent) => (
                <article className={`agent-card agent-card-${agent.status}`} key={agent.id}>
                  <div className="agent-card-top">
                    <span className="agent-id">{agent.id}</span>
                    <span className={`agent-indicator agent-indicator-${agent.status}`} aria-hidden="true" />
                  </div>
                  <h3 className="agent-name">{agent.name}</h3>
                  <div className={`agent-status agent-status-${agent.status}`}>
                    <span className="agent-status-dot" />
                    {statusLabels[agent.status]}
                  </div>
                  <p className="agent-message">{agent.msg}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
