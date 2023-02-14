import { ChangeEvent, FormEvent } from 'react'
import { OptionType } from '../types/option'

type SelectFieldProps = {
  label: string
  name: string
  options: OptionType[]
  fieldChange: Function
  error?: string
  value: number
}

const SelectField = ({
  label,
  name,
  options,
  fieldChange,
  error,
  value,
}: SelectFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    fieldChange({ [name]: event.target.value })
  }

  return (
    <div className="form__fieldset">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <select
        className={`form__select ${error ? 'error' : ''}`}
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
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
}

export default SelectField
