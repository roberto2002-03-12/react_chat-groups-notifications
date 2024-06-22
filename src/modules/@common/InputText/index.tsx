import type { FC, InputHTMLAttributes } from 'react'

export type InputTextType = 'text' | 'email' | 'password'

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  type: InputTextType
  errorMessage?: string
  isSubmited: boolean
  containerClassName?: string
  inputClassName?: string
}

export const InputText: FC<InputTextProps> = ({
  placeholder,
  type,
  errorMessage,
  isSubmited,
  containerClassName,
  inputClassName
}) => {
  return (
    <div className={containerClassName}>
      <input
        type={type}
        className={
          `border-solid border-2 border-gray-200 focus:border-gray-300 focus:outline-none placeholder:text-slate-700/50
          rounded-lg py-1 px-2 text-slate-700 h-[48px] text-lg placeholder:text-lg sm:h-[38px] sm:text-base sm:placeholder:text-base
          ${errorMessage && isSubmited && 'border-red-600 focus:border-red-400 mb-1'} ${inputClassName}`
        }
        placeholder={placeholder}
      />
      { errorMessage && isSubmited && <p className='text-red-600'>{errorMessage}</p> }
    </div>
  )
}
