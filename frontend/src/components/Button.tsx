import { MouseEvent, HTMLAttributes } from 'react'

type ButtonProps = {
  title: string
  disabled: boolean
} & HTMLAttributes<HTMLButtonElement>

const Button = ({ title, onClick, disabled, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="form__button"
      onClick={onClick}
      disabled={disabled}
      role="button"
    >
      {title}
    </button>
  )
}

export default Button
