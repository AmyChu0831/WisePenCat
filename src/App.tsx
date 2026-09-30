import { useState } from 'react'
import { Code2, UsersRound } from 'lucide-react'
import { ContributorsView } from './views/ContributorsView'
import { DebugView } from './views/DebugView'

type View = 'contributors' | 'debug'

function App() {
  const [view, setView] = useState<View>('contributors')

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand" aria-label="WisePen">
            <img className="brand-logo" src={`${import.meta.env.BASE_URL}wisepen-logo.svg`} alt="WisePen" />
          </div>
          <nav className="header-tabs" aria-label="主导航">
            <button className={view === 'contributors' ? 'header-tab active' : 'header-tab'} onClick={() => setView('contributors')} aria-current={view === 'contributors' ? 'page' : undefined}>
              <UsersRound size={17} />
              <span>贡献者</span>
            </button>
            <button className={view === 'debug' ? 'header-tab active' : 'header-tab'} onClick={() => setView('debug')} aria-current={view === 'debug' ? 'page' : undefined}>
              <Code2 size={17} />
              <span>调试</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {view === 'contributors' ? <ContributorsView /> : <DebugView />}
      </main>
    </div>
  )
}

export default App
