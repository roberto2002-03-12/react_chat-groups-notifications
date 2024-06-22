import { useForm } from 'react-hook-form'
import { InputText } from './modules/@common/InputText'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },

  } = useForm()

  return (
    <>
      <InputText 
        errorMessage='ejemplo'
        isSubmited={true}
        type='text'
        placeholder='Ejemplo'
        {
          ...register('hola')
        }
      />
    </>
  )
}

export default App
