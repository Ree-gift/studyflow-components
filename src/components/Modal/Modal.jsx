import { useEffect, useCallback } from 'react';
import './Modal.css';

/**
 * Modal Component
 * A reusable modal dialog with overlay, close button, and keyboard navigation.
 * 
 * @param {boolean} isOpen - Whether modal is visible
 * @param {function} onClose - Function to close the modal
 * @param {string} title - Modal header title
 * @param {ReactNode} children - Modal body content
 * @param {ReactNode} footer - Modal footer content (actions)
 * @param {string} size - 'sm' | 'md' | 'lg' | 'xl'
 * @param {boolean} closeOnOverlayClick - Close when clicking overlay
 * @param {boolean} closeOnEscape - Close when pressing Escape
 * @param {string} className - Additional CSS classes
 */
export default function Modal({
  isOpen = false,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = ''
}) {
  const handleKeyDown = useCallback((e) => {
    if (closeOnEscape && e.key === 'Escape') {
      onClose();
    }
  }, [closeOnEscape, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div 
      className={`sf-modal-overlay ${className}`}
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div 
        className={`sf-modal sf-modal--${size}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="sf-modal__close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        {title && (
          <div className="sf-modal__header">
            <h2 className="sf-modal__title">{title}</h2>
          </div>
        )}
        <div className="sf-modal__body">
          {children}
        </div>
        {footer && (
          <div className="sf-modal__footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}