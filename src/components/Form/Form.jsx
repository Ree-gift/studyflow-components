import './Form.css';

/**
 * Input Component
 * A text input field with label, error handling, and optional icons.
 * 
 * @param {string} label - Input label
 * @param {string} type - Input type (text, email, password, etc.)
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {string} error - Error message to display
 * @param {boolean} required - Whether field is required
 * @param {string} id - Input ID
 * @param {string} name - Input name
 * @param {string} className - Additional CSS classes
 * @param {object} rest - Additional props
 */
export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  id,
  name,
  className = '',
  ...rest
}) {
  return (
    <div className={`sf-form-group ${error ? 'sf-form-group--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className="sf-form-label">
          {label}
          {required && <span className="sf-form-required">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="sf-form-input"
        required={required}
        {...rest}
      />
      {error && <span className="sf-form-error">{error}</span>}
    </div>
  );
}

/**
 * Checkbox Component
 * A checkbox input with label.
 * 
 * @param {string} label - Checkbox label
 * @param {boolean} checked - Whether checked
 * @param {function} onChange - Change handler
 * @param {string} id - Checkbox ID
 * @param {string} name - Checkbox name
 * @param {boolean} disabled - Whether disabled
 * @param {string} className - Additional CSS classes
 * @param {object} rest - Additional props
 */
export function Checkbox({
  label,
  checked,
  onChange,
  id,
  name,
  disabled = false,
  className = '',
  ...rest
}) {
  return (
    <label className={`sf-form-checkbox ${disabled ? 'sf-form-checkbox--disabled' : ''} ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sf-form-checkbox__input"
        {...rest}
      />
      <span className="sf-form-checkbox__box"></span>
      <span className="sf-form-checkbox__label">{label}</span>
    </label>
  );
}

/**
 * Select Component
 * A dropdown select field.
 * 
 * @param {string} label - Select label
 * @param {Array} options - Array of { value, label } objects
 * @param {string} value - Selected value
 * @param {function} onChange - Change handler
 * @param {string} placeholder - Placeholder option text
 * @param {string} id - Select ID
 * @param {string} name - Select name
 * @param {boolean} required - Whether required
 * @param {string} className - Additional CSS classes
 * @param {object} rest - Additional props
 */
export function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  id,
  name,
  required = false,
  className = '',
  ...rest
}) {
  return (
    <div className={`sf-form-group ${className}`}>
      {label && (
        <label htmlFor={id} className="sf-form-label">
          {label}
          {required && <span className="sf-form-required">*</span>}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="sf-form-select"
        required={required}
        {...rest}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 * Textarea Component
 * A multi-line text input.
 * 
 * @param {string} label - Textarea label
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Textarea value
 * @param {function} onChange - Change handler
 * @param {number} rows - Number of rows
 * @param {string} id - Textarea ID
 * @param {string} name - Textarea name
 * @param {boolean} required - Whether required
 * @param {string} className - Additional CSS classes
 * @param {object} rest - Additional props
 */
export function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  id,
  name,
  required = false,
  className = '',
  ...rest
}) {
  return (
    <div className={`sf-form-group ${className}`}>
      {label && (
        <label htmlFor={id} className="sf-form-label">
          {label}
          {required && <span className="sf-form-required">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="sf-form-textarea"
        required={required}
        {...rest}
      />
    </div>
  );
}

export default { Input, Checkbox, Select, Textarea };