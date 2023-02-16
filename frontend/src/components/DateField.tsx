import { HTMLProps } from 'react'

interface DateFieldProps extends HTMLProps<HTMLInputElement> {
  label: string
  error?: string
}

const DateField = ({ label, name, onChange, value, error }: DateFieldProps) => (
  <div className="form__fieldset">
    <label className="form__label" htmlFor={name}>
      {label}
    </label>
    <input
      type="date"
      name={name}
      id={name}
      className={`form__input ${error ? 'error' : ''}`}
      onChange={onChange}
      defaultValue={value}
    />
    {error && <p className="form__error-label">{error}</p>}
  </div>
)

export default DateField
