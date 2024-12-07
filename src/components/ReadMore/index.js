import {useState} from 'react'
import {
  ReadMoreContainer,
  Description,
  ReadMoreButton,
  Heading,
  Image,
} from './styledComponents'

const ReadMoreReadLess = ({reactHooksDescription}) => {
  const [isReadMore, setIsReadMore] = useState(true)

  const toggleReadMore = () => {
    setIsReadMore(prevState => !prevState)
  }

  const shortDescription = reactHooksDescription.slice(0, 170)

  return (
    <ReadMoreContainer>
      <Heading>React Hooks</Heading>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>
        {isReadMore ? shortDescription : reactHooksDescription}
      </Description>
      <ReadMoreButton onClick={toggleReadMore}>
        {isReadMore ? 'Read More' : 'Read Less'}
      </ReadMoreButton>
    </ReadMoreContainer>
  )
}

export default ReadMoreReadLess
