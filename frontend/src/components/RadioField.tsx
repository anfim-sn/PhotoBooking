import { ChangeEvent, HTMLProps } from 'react'

import { RadioItemType } from '../types/option'

interface RadioFieldProps extends HTMLProps<HTMLInputElement> {
  label: string
  radioItems: RadioItemType[]
  error?: string
}

const RadioField = ({
  label,
  name,
  radioItems,
  onChange,
  error,
  value,
  ...props
}: RadioFieldProps) => (
  <div className="form__fieldset">
    <label className="form__label">{label}</label>
    {radioItems.map(item => {
      return (
        <div key={item.id} className="form__radio-group">
          <input
            {...props}
            type="radio"
            name={name}
            id={item.value}
            value={item.value}
            className={`form__radio ${error ? 'error' : ''}`}
            onChange={onChange}
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

export default RadioField
