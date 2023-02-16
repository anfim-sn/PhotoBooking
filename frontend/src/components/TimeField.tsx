import { HTMLProps } from 'react'

interface TimeFieldProps extends HTMLProps<HTMLInputElement> {
  label: string
  error?: string
}

const TimeField = ({ label, name, onChange, value, error }: TimeFieldProps) => (
  <div className="form__fieldset">
    <label className="form__label" htmlFor={name}>
      {label}
    </label>
    <input
      type="time"
      name={name}
      id={name}
      className={`form__input ${error ? 'error' : ''}`}
      onChange={onChange}
      defaultValue={value}
    />
    {error && <p className="form__error-label">{error}</p>}
  </div>
)

export default TimeField
