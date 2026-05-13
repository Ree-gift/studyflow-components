import './Card.css';

/**
 * FeatureCard Component
 * A card component for displaying features with icon, title, description, and click handler.
 * 
 * @param {string} icon - Icon class name (e.g., 'feature-icon-1')
 * @param {string} title - Card title
 * @param {string} description - Card description
 * @param {function} onClick - Click handler for interactive cards
 * @param {boolean} expanded - Whether card is in expanded state
 * @param {ReactNode} children - Additional content when expanded
 * @param {string} className - Additional CSS classes
 */
export function FeatureCard({
  icon,
  title,
  description,
  onClick,
  expanded = false,
  children,
  className = ''
}) {
  return (
    <div 
      className={`sf-card sf-feature-card ${expanded ? 'sf-feature-card--expanded' : ''} ${className}`}
      onClick={onClick}
    >
      <div className={`sf-feature-card__icon ${icon}`}></div>
      <h3 className="sf-feature-card__title">{title}</h3>
      <p className="sf-feature-card__description">{description}</p>
      {expanded && children && (
        <div className="sf-feature-card__expanded">
          {children}
        </div>
      )}
      {onClick && (
        <span className="sf-feature-card__expand-hint">Click to learn more</span>
      )}
    </div>
  );
}

/**
 * TestimonialCard Component
 * A card for displaying user testimonials with rating, quote, and author info.
 * 
 * @param {number} rating - Star rating (1-5)
 * @param {string} quote - Testimonial quote
 * @param {string} authorName - Author's name
 * @param {string} authorRole - Author's role/title
 * @param {string} authorInitials - Author's initials for avatar
 * @param {string} className - Additional CSS classes
 */
export function TestimonialCard({
  rating = 5,
  quote,
  authorName,
  authorRole,
  authorInitials,
  className = ''
}) {
  return (
    <div className={`sf-card sf-testimonial-card ${className}`}>
      <div className="sf-testimonial-card__rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`sf-testimonial-card__star ${i < rating ? 'filled' : ''}`}></span>
        ))}
      </div>
      <p className="sf-testimonial-card__quote">"{quote}"</p>
      <div className="sf-testimonial-card__author">
        <div className="sf-testimonial-card__avatar">{authorInitials}</div>
        <div>
          <div className="sf-testimonial-card__name">{authorName}</div>
          <div className="sf-testimonial-card__role">{authorRole}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * PricingCard Component
 * A card for displaying pricing tiers with features list and CTA.
 * 
 * @param {string} planName - Name of the plan (e.g., 'Pro')
 * @param {string} description - Plan description
 * @param {string|number} price - Price amount
 * @param {string} period - Billing period (e.g., '/month')
 * @param {boolean} popular - Whether this is the popular/featured plan
 * @param {string} popularBadge - Badge text for popular plan
 * @param {Array} features - Array of feature strings
 * @param {function} onAction - CTA button click handler
 * @param {string} actionLabel - CTA button text
 * @param {string} className - Additional CSS classes
 */
export function PricingCard({
  planName,
  description,
  price,
  period = '/month',
  popular = false,
  popularBadge = 'Most Popular',
  features = [],
  onAction,
  actionLabel = 'Get Started',
  className = ''
}) {
  return (
    <div className={`sf-card sf-pricing-card ${popular ? 'sf-pricing-card--popular' : ''} ${className}`}>
      {popular && <span className="sf-pricing-card__badge">{popularBadge}</span>}
      <div className="sf-pricing-card__header">
        <h3 className="sf-pricing-card__name">{planName}</h3>
        <p className="sf-pricing-card__description">{description}</p>
      </div>
      <div className="sf-pricing-card__price">
        <span className="sf-pricing-card__amount">${price}</span>
        <span className="sf-pricing-card__period">{period}</span>
      </div>
      <ul className="sf-pricing-card__features">
        {features.map((feature, index) => (
          <li key={index} className={`sf-pricing-card__feature ${feature.included === false ? 'disabled' : ''}`}>
            <span className="sf-pricing-card__check"></span>
            {feature.text}
          </li>
        ))}
      </ul>
      <button 
        className={`sf-pricing-card__action ${popular ? 'primary' : 'secondary'}`}
        onClick={onAction}
      >
        {actionLabel}
      </button>
    </div>
  );
}
