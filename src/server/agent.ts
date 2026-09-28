export type AgentStatus = {
  id: string
  name: string
  status: 'queued' | 'running' | 'checking' | 'completed'
  msg: string
}

const agents = [
  { id: 'agent-01', name: '任务规划', task: '拆解任务' },
  { id: 'agent-02', name: '资料检索', task: '检索资料' },
  { id: 'agent-03', name: '方案分析', task: '分析方案' },
  { id: 'agent-04', name: '代码生成', task: '生成代码' },
  { id: 'agent-05', name: '代码审查', task: '审查改动' },
  { id: 'agent-06', name: '测试执行', task: '执行测试' },
  { id: 'agent-07', name: '文档整理', task: '整理文档' },
  { id: 'agent-08', name: '结果汇总', task: '汇总结果' },
] as const

const simulationStartedAt = Date.now()
const cycleDurationMs = 180_000

export async function getAgentStatuses(): Promise<AgentStatus[]> {
  const elapsed = Date.now() - simulationStartedAt

  return agents.map((agent, index) => {
    const phase = (elapsed + index * 18_000) % cycleDurationMs

    if (phase < 20_000) {
      return { id: agent.id, name: agent.name, status: 'queued', msg: '等待调度' }
    }

    if (phase < 105_000) {
      return { id: agent.id, name: agent.name, status: 'running', msg: `正在${agent.task}` }
    }

    if (phase < 130_000) {
      return { id: agent.id, name: agent.name, status: 'checking', msg: '正在校验本轮输出' }
    }

    return { id: agent.id, name: agent.name, status: 'completed', msg: '本轮任务已完成' }
  })
}
