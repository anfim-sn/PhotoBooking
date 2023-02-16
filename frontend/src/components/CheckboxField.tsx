import { ChangeEvent, HTMLProps } from 'react'

interface CheckboxFieldProps extends HTMLProps<HTMLInputElement> {
  label: string
  error?: string
}

const CheckboxField = ({
  name,
  label,
  onChange,
  checked,
  error,
}: CheckboxFieldProps) => (
  <div className="form__checkbox-fieldset">
    <input
      type="checkbox"
      name={name}
      id={name}
      className={`form__checkbox ${error ? 'error' : ''}`}
      onChange={onChange}
      checked={checked}
    />
    <label className="form__checkbox-label" htmlFor={name}>
      {label}
    </label>
    {error && <p className="form__error-label">{error}</p>}
  </div>
)

export default CheckboxField
