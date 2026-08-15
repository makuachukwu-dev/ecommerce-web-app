import postBedroom from '../assets/posts/post-bedroom.png'
import postKitchen from '../assets/posts/post-kitchen.png'
import postBedroomGreen from '../assets/posts/post-bedroom-green.png'
import PostCard from '../components/PostCard'
import './FeaturedPosts.css'

const POSTS = [
  {
    image: postBedroom,
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: '10 comments',
  },
  {
    image: postKitchen,
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: '10 comments',
  },
  {
    image: postBedroomGreen,
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: '10 comments',
  },
]

function FeaturedPosts() {
  return (
    <section className="featured-posts">
      <div className="featured-posts__heading">
        <p className="featured-posts__eyebrow">Practice Advice</p>
        <h2 className="featured-posts__title">Featured Posts</h2>
      </div>
      <div className="featured-posts__grid">
        {POSTS.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedPosts
