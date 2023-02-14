import { ChangeEvent, HTMLInputTypeAttribute, useRef } from 'react'
import { formatToInputDate } from '../utils/dateTime'

type DateTimeFieldProps = {
  label: string
  name: string
  fieldChange: Function
  value: Date
  error?: string
}

const DateTimeField = ({
  label,
  name,
  fieldChange,
  value,
  error,
}: DateTimeFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLDataElement>) => {
    fieldChange({ [name]: new Date(event.target.value) })
  }

  return (
    <div className="form__fieldset">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <input
        type="datetime-local"
        name={name}
        id={name}
        className={`form__input ${error ? 'error' : ''}`}
        onChange={handleChange}
        defaultValue={formatToInputDate(value)}
      />
      {error && <p className="form__error-label">{error}</p>}
    </div>
  )
}

export default DateTimeField
