import { Input as CustomInput } from 'reactstrap'

const Input = ({ label, name, formik, type = 'text' }) => {
  return (
    <div className='formControl w-75 mt-3'>
      <label htmlFor={name} className='text-end px-2'>
        {label}
      </label>
      <CustomInput
        className='p-3'
        id={name}
        type={type}
        {...formik.getFieldProps(name)}
        name={name}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className='error'>{formik.errors[name]}</div>
      )}
    </div>
  )
}
export default Input
