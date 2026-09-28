import { UsersRound } from 'lucide-react'
import contributors from '../contributors.json'

const avatarAssets = import.meta.glob('../assets/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

function getAvatarUrl(name: string) {
  const assetEntry = Object.entries(avatarAssets).find(([path]) => {
    const filename = path.split('/').pop()?.replace(/\.(png|jpe?g|webp)$/i, '')
    return filename === name
  })

  return assetEntry?.[1]
}

export function ContributorsView() {
  const contributorNames: string[] = contributors
  const names = contributorNames.filter((name) => name.trim() !== '')

  return (
    <div className="view-content">
      <div className="page-heading">
        <div>
          <p className="eyebrow">LAB 0</p>
          <h1>贡献者</h1>
          <p className="page-subtitle">一起构建 WisePenCat 的同学</p>
        </div>
        <div className="count-badge"><UsersRound size={16} /> {names.length} 位贡献者</div>
      </div>

      <section className="list-section" aria-label="贡献者列表">
        <div className="section-heading">
          <h2>名单</h2>
          <span>{String(names.length).padStart(2, '0')}</span>
        </div>
        {names.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon"><UsersRound size={27} strokeWidth={1.7} /></div>
            <h3>名单还空着</h3>
            <p>第一个名字，等你来写。</p>
          </div>
        ) : (
          <ol className="contributors-list">
            {names.map((name, index) => (
              <li className="contributor-row" key={`${name}-${index}`}>
                <span className="row-index">{String(index + 1).padStart(2, '0')}</span>
                {getAvatarUrl(name) ? (
                  <img className="avatar avatar-image" src={getAvatarUrl(name)} alt={`${name}头像`} />
                ) : (
                  <span className="avatar" aria-hidden="true">{name.trim().charAt(0).toUpperCase()}</span>
                )}
                <span className="contributor-name">{name}</span>
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  )
}
