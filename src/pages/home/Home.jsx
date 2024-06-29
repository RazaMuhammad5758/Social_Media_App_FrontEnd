import Stories from '../../stories/Stories'
import Posts from '../../posts/Post'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts/>
    </div>
  )
}

export default Home
