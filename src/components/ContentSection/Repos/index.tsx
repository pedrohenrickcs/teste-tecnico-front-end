import Icon from '@/components/icons/icons'
import { IconsEnum } from '@/enums/IconsEnum'
import { RepoProps } from '@/types/Repos'

export const Repos = ({ data }: RepoProps) => {
  const languageColors: { [key: string]: string } = {
    TypeScript: '#3276C6',
    JavaScript: '#F5DA79',
    HTML: '#FF4343',
  }

  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-primary-color text-xl font-semibold mb-4">
        Repositórios
      </h2>
      <ul className="space-y-4">
        {data.map((repo) => {
          const color = languageColors[repo.language] || '#CCCCCC'

          return (
            <div key={repo.id} className="relative">
              <a
                href={repo.html_url}
                className="flex w-full text-lg font-semibold"
                target="_blank"
              >
                <li className="w-full border border-border-and-line text-gray-neutral p-4 rounded">
                  {repo.name}
                  <p className="text-sm font-normal text-placeholder">
                    {repo.description}
                  </p>
                  <p className="pt-4 text-xs font-normal">
                    <span
                      className="w-4 h-4 inline-block align-middle rounded-2xl mr-2"
                      style={{ backgroundColor: color }}
                    ></span>
                    <span>{repo.language}</span>
                    <span className="pl-6">{repo.pushed_at}</span>
                  </p>
                </li>
              </a>
              <div className="absolute right-4 top-4 cursor-pointer">
                <Icon name={IconsEnum.HeartO} />
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
