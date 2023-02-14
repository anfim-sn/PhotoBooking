import { ChangeEvent } from 'react'

type TimeFieldProps = {
  label: string
  name: string
  fieldChange: Function
  value: string
  error?: string
}

const TimeField = ({
  label,
  name,
  fieldChange,
  value,
  error,
}: TimeFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLDataElement>) => {
    console.log('TimeField: ' + event.target.value)
    fieldChange({ [name]: event.target.value })
  }

  return (
    <div className="form__fieldset">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <input
        type="time"
        name={name}
        id={name}
        className={`form__input ${error ? 'error' : ''}`}
        onChange={handleChange}
        defaultValue={value}
      />
      {error && <p className="form__error-label">{error}</p>}
    </div>
  )
}

export default TimeField
