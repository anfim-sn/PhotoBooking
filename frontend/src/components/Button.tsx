import { error } from 'console'
import { MouseEvent, HTMLAttributes } from 'react'

type ButtonProps = {
  title: string
  disabled: boolean
  error: boolean
} & HTMLAttributes<HTMLButtonElement>

const Button = ({ error, title, onClick, disabled, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`form__button ${error ? 'error' : ''}`}
      onClick={onClick}
      disabled={disabled}
      role="button"
    >
      {title}
    </button>
  )
}

export default Button
