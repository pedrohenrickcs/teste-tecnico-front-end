import Icon from '@/components/icons/icons'
import { IconsEnum } from '@/enums/IconsEnum'
import { ContentRepo } from '@/types/Repos'

export type ReposProps = {
  repos: ContentRepo[]
}

export const Repos = ({ repos }: ReposProps) => {
  const languageColors: { [key: string]: string } = {
    TypeScript: '#3276C6',
    JavaScript: '#F5DA79',
    HTML: '#FF4343',
  }

  return (
    <div className="w-full md:w-[70%]">
      <h2 className="text-primary-color text-xl font-semibold mb-4 mt-4 md:mt-0">
        Repositórios
      </h2>
      <ul className="space-y-4">
        {repos?.map((repo) => {
          const color = languageColors[repo.language] || '#CCCCCC'

          return (
            <div key={repo.id} className="relative">
              <a
                href={repo.html_url}
                className="flex w-full text-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
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
                    <span className="pl-6">
                      {new Date(repo.pushed_at).toLocaleDateString()}
                    </span>
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
