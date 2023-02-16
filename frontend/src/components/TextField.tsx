import { HTMLProps } from 'react'

interface TextFieldProps extends HTMLProps<HTMLInputElement> {
  label: string
  error?: string
}

const TextField = ({
  label,
  error,
  onChange,
  name,
  value,
  ...props
}: TextFieldProps) => (
  <div className="form__fieldset">
    <label className="form__label" htmlFor={name}>
      {label}
    </label>
    <input
      {...props}
      value={value}
      id={name}
      name={name}
      className={`form__input ${error ? 'error' : ''}`}
      placeholder={name}
      onChange={onChange}
    />
    {error && <p className="form__error-label">{error}</p>}
  </div>
)

export default TextField
