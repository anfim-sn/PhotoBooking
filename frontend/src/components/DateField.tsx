import { ChangeEvent } from 'react'

type DateFieldProps = {
  label: string
  name: string
  fieldChange: Function
  value: string
  error?: string
}

const DateField = ({
  label,
  name,
  fieldChange,
  value,
  error,
}: DateFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLDataElement>) => {
    console.log('DateField:' + event.target.value)
    fieldChange({ [name]: event.target.value }) //new Date(
  }

  return (
    <div className="form__fieldset">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <input
        type="date"
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

export default DateField
