import { TextType } from '@/types/Title'

const Title = ({ text }: TextType) => {
  return (
    <h2 className="text-primary-color text-xl font-semibold mb-4 mt-4 md:mt-0">
      {text}
    </h2>
  )
}

export default Title
