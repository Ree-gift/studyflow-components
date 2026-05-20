import { memo } from 'react';
import './PostCard.css';

function PostCard({ post, onReadMore }) {
  return (
    <article className="sf-post-card" aria-labelledby={`post-title-${post.id}`}>
      <div className="sf-post-card__image-wrapper">
        <img
          className="sf-post-card__image"
          src={`https://picsum.photos/seed/${post.id}/400/250`}
          alt={`Illustration for ${post.title}`}
          loading="lazy"
          width="400"
          height="250"
        />
      </div>
      <div className="sf-post-card__body">
        <span className="sf-post-card__badge">Community Post</span>
        <h3 id={`post-title-${post.id}`} className="sf-post-card__title">
          {post.title}
        </h3>
        <p className="sf-post-card__excerpt">{post.body}</p>
        <button
          className="sf-post-card__action"
          onClick={() => onReadMore?.(post)}
          aria-label={`Read more about ${post.title}`}
        >
          Read More
        </button>
      </div>
    </article>
  );
}

export default memo(PostCard);
