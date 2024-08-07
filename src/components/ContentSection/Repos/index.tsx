import Title from '@/components/common/Title'
import Icon from '@/components/icons/icons'
import { useFavorites } from '@/context/FavoritesContext'
import { IconsEnum } from '@/enums/IconsEnum'
import { useMobile } from '@/hooks/useMobile'
import { ReposProps } from '@/types/Repos'

export const Repos = ({ repos, title }: ReposProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const isFavorite = (repoId: number) =>
    favorites.some((repo) => repo.id === repoId)
  const isMobile = useMobile()

  const languageColors: { [key: string]: string } = {
    TypeScript: '#3276C6',
    JavaScript: '#F5DA79',
    HTML: '#FF4343',
  }

  return (
    <div className="w-full md:w-[70%]">
      <Title text={title} />
      <ul className="space-y-4">
        {repos?.map((repo) => {
          const color = languageColors[repo.language] || '#CCCCCC'
          const isFav = isFavorite(repo.id)

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
                    <span className="pl-6 flex md:inline-flex mt-1">
                      Updated on{' '}
                      {new Date(repo.pushed_at).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </p>
                </li>
              </a>
              {isFav ? (
                <div
                  className="absolute cursor-pointer border border-primary-color rounded-full p-2 md:p-3 right-4 top-4"
                  onClick={() =>
                    isFav ? removeFavorite(repo.id) : addFavorite(repo)
                  }
                >
                  <Icon
                    name={IconsEnum.Heart}
                    size={isMobile ? 12 : 24}
                    className="fill-primary-color"
                  />
                </div>
              ) : (
                <div
                  className="absolute cursor-pointer border border-white-background-matte bg-white-background-matte rounded-full p-2 md:p-3 right-4 top-4"
                  onClick={() =>
                    isFav ? removeFavorite(repo.id) : addFavorite(repo)
                  }
                >
                  <Icon
                    name={IconsEnum.HeartO}
                    size={isMobile ? 12 : 24}
                    className="fill-placeholder"
                  />
                </div>
              )}
            </div>
          )
        })}
      </ul>
    </div>
  )
}
