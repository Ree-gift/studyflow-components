import './Button.css';

/**
 * Button Component
 * A versatile button with multiple variants, sizes, and states.
 * 
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'white' | 'danger'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} fullWidth - Whether button takes full width
 * @param {boolean} disabled - Disable the button
 * @param {boolean} loading - Show loading spinner
 * @param {string} type - 'button' | 'submit' | 'reset'
 * @param {function} onClick - Click handler
 * @param {ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 * @param {object} rest - Additional props passed to button element
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  children,
  className = '',
  ...rest
}) {
  const classes = [
    'sf-button',
    `sf-button--${variant}`,
    `sf-button--${size}`,
    fullWidth && 'sf-button--full',
    loading && 'sf-button--loading',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading && <span className="sf-button__spinner"></span>}
      <span className={loading ? 'sf-button__text--hidden' : ''}>{children}</span>
    </button>
  );
}