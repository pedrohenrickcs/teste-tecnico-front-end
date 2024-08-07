import { useMobile } from '@/hooks/useMobile'
import { ContentProfile } from '@/types/Profile'
import Image from 'next/image'

export type ProfileProps = {
  profile: ContentProfile
}

export const Profile = ({ profile }: ProfileProps) => {
  const isMobile = useMobile()

  return (
    <div className="w-full md:w-1/4">
      <div className="w-full flex justify-center text-center flex-col border rounded border-border-and-line p-4 md:px-6 md:py-10">
        <div className="flex flex-row md:flex-col">
          <Image
            src={profile?.avatar_url}
            width={isMobile ? 48 : 200}
            height={isMobile ? 48 : 200}
            alt={profile?.name}
            className="mr-2 md:m-auto rounded-full"
          />

          <div className="flex flex-col text-left md:text-center">
            <h1 className="md:mt-6 text-lg md:text-xl font-semibold text-gray-neutral">
              {profile?.name}
            </h1>
            <a
              href={profile?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-dark font-normal"
            >
              {profile?.login}
            </a>
          </div>
        </div>

        <hr className="border-border-and-line my-2 md:hidden" />

        <p className="md:mt-6 font-normal text-xs md:text-sm text-gray-dark text-left md:text-center">
          {profile?.bio}
        </p>
      </div>
    </div>
  )
}
