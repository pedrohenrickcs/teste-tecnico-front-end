import { ContentProfile } from '@/types/Profile'
import Image from 'next/image'

export type ProfileProps = {
  profile: ContentProfile
}

export const Profile = ({ profile }: ProfileProps) => {
  return (
    <div className="w-full md:w-1/4">
      <div className="w-full flex justify-center text-center flex-col border rounded border-border-and-line px-6 py-10">
        <Image
          src={profile.avatar_url}
          width={200}
          height={200}
          alt={profile.name}
          className="m-auto rounded-full"
        />
        <h1 className="mt-6 text-xl font-semibold text-gray-neutral">
          {profile.name}
        </h1>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-dark font-normal"
        >
          {profile.login}
        </a>
        <p className="mt-6 font-normal text-sm text-gray-dark">{profile.bio}</p>
      </div>
    </div>
  )
}
