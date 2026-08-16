import './PostCard.css'

interface PostCardProps {
  image: string
  title: string
  description: string
  date: string
  comments: string
}

function PostCard({ image, title, description, date, comments }: PostCardProps) {
  return (
    <div className="post-card">
      <div className="post-card__image-wrap">
        <img src={image} alt={title} className="post-card__image" />
        <span className="post-card__badge">NEW</span>
      </div>
      <div className="post-card__body">
        <div className="post-card__tags">
          <span className="post-card__tag post-card__tag--primary">Google</span>
          <span className="post-card__tag">Trending</span>
          <span className="post-card__tag">New</span>
        </div>
        <h3 className="post-card__title">{title}</h3>
        <p className="post-card__description">{description}</p>
        <div className="post-card__meta">
          <span className="post-card__meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {date}
          </span>
          <span className="post-card__meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {comments}
          </span>
        </div>
        <a href="#" className="post-card__link">
          Learn More
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default PostCard
