import { HTMLProps } from 'react'
import { OptionType } from '../types/option'

interface SelectFieldProps extends HTMLProps<HTMLSelectElement> {
  label: string
  options: OptionType[]
  error?: string
}

const SelectField = ({
  label,
  options,
  onChange,
  error,
  ...props
}: SelectFieldProps) => (
  <div className="form__fieldset">
    <label className="form__label" htmlFor={props.name}>
      {label}
    </label>
    <select
      {...props}
      className={`form__select ${error ? 'error' : ''}`}
      id={props.name}
      onChange={onChange}
    >
      <option value="0">Select room</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
    {error && <p className="form__error-label">{error}</p>}
  </div>
)

export default SelectField
