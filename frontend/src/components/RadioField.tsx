import { ChangeEvent } from 'react'
import { FormState } from '../types/form'
import { OptionType, RadioItemType } from '../types/option'

type RadioFieldProps = {
  name: string
  label: string
  radioItems: RadioItemType[]
  fieldChange: Function
  error?: string
  value: string
}

const RadioField = ({
  label,
  name,
  radioItems,
  fieldChange,
  error,
  value,
}: RadioFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fieldChange({ [event.target.name]: event.target.value })
  }

  return (
    <div className="form__fieldset">
      <label className="form__label">{label}</label>
      {radioItems.map(item => {
        return (
          <div key={item.id} className="form__radio-group">
            <input
              type="radio"
              name={name}
              id={item.value}
              value={item.value}
              className={`form__radio ${error ? 'error' : ''}`}
              onChange={handleChange}
              checked={item.value === value}
            />
            <label className="form__radio-label" htmlFor={item.value}>
              {item.label}
            </label>
          </div>
        )
      })}
      {error && <p className="form__error-label">{error}</p>}
    </div>
  )
}

export default RadioField
