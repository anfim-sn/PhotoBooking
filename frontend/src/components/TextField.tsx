interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string
  error?: string
  symbol?: string
}

const TextField = ({
  label,
  error,
  onChange,
  name,
  ...props
}: TextFieldProps) => {
  return (
    <div className="form__fieldset">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        id={name}
        name={name}
        className={`form__input ${error ? 'error' : ''}`}
        placeholder={name}
        onChange={onChange}
      />
      {error && <p className="form__error-label">{error}</p>}
    </div>
  )
}

export default TextField
