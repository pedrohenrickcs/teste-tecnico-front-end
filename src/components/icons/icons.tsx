import { IconType } from '@/types/Icon'
import Search from './search'
import Heart from './heart'
import HeartO from './heart-o'
import Star from './star'
import CodeFork from './code-fork'
import User from './user'

const Icon = ({ name, size, color, className }: IconType) => {
  switch (name) {
    case 'search':
      return <Search size={size} color={color} className={className} />
    case 'heart':
      return <Heart size={size} color={color} className={className} />
    case 'heart-o':
      return <HeartO size={size} color={color} className={className} />
    case 'star':
      return <Star size={size} color={color} className={className} />
    case 'code-fork':
      return <CodeFork size={size} color={color} className={className} />
    case 'user':
      return <User size={size} color={color} className={className} />
    default:
      return null
  }
}

export default Icon
