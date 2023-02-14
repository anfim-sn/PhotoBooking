import { ChangeEvent } from 'react'

type CheckboxFieldProps = {
  name: string
  label: string
  fieldChange: Function
  error?: string
  value: boolean
}

const CheckboxField = ({
  name,
  label,
  fieldChange,
  error,
  value,
}: CheckboxFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fieldChange({ [name]: event.target.checked })
  }

  return (
    <div className="form__checkbox-fieldset">
      <input
        type="checkbox"
        name={name}
        id={name}
        className={`form__checkbox ${error ? 'error' : ''}`}
        onChange={handleChange}
        checked={value}
      />
      <label className="form__checkbox-label" htmlFor={name}>
        {label}
      </label>
      {error && <p className="form__error-label">{error}</p>}
    </div>
  )
}

export default CheckboxField
