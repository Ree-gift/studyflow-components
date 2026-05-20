import { useState, useEffect, useCallback, useMemo } from 'react';
import PostCard from '../PostCard/PostCard';
import './CommunityPosts.css';

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=6';

export default function CommunityPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) setPosts(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchPosts();
    return () => { cancelled = true; };
  }, []);

  const handleReadMore = useCallback((post) => {
    alert(`Opening post: "${post.title}"`);
  }, []);

  const filteredPosts = useMemo(() => {
    if (!search.trim()) return posts;
    const q = search.toLowerCase();
    return posts.filter(
      (p) => p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
    );
  }, [posts, search]);

  const stats = useMemo(() => ({
    total: posts.length,
    filtered: filteredPosts.length,
  }), [posts.length, filteredPosts.length]);

  if (error) {
    return (
      <section className="sf-community" role="alert" aria-live="assertive">
        <div className="sf-community__error">
          <h3>Failed to load posts</h3>
          <p>{error}</p>
          <button
            className="sf-community__retry"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="sf-community" aria-label="Community posts feed">
      <div className="sf-community__toolbar">
        <div className="sf-community__stats" aria-live="polite">
          {!loading && (
            <span>
              Showing {stats.filtered} of {stats.total} posts
            </span>
          )}
        </div>
        <div className="sf-community__search" role="search">
          <label htmlFor="post-search" className="sf-visually-hidden">
            Search posts
          </label>
          <input
            id="post-search"
            className="sf-community__search-input"
            type="search"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search community posts"
          />
        </div>
      </div>

      {loading ? (
        <div className="sf-community__loading" role="status" aria-live="polite">
          <div className="sf-community__spinner" aria-hidden="true"></div>
          <p>Loading community posts...</p>
        </div>
      ) : (
        <div className="sf-community__grid" role="list">
          {filteredPosts.length === 0 ? (
            <p className="sf-community__empty">No posts match your search.</p>
          ) : (
            filteredPosts.map((post) => (
              <div key={post.id} role="listitem">
                <PostCard post={post} onReadMore={handleReadMore} />
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
}
