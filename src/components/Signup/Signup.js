import * as Yup from 'yup'

import { Button, Col, Row } from 'reactstrap'

import Input from '../../common'
import { useFormik } from 'formik'

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
}

const onSubmit = (values) => {
  console.log(values)
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is Required')
    .min(3, 'Name length is not valid'),
  lastName: Yup.string()
    .required('Last name is Required')
    .min(3, 'Last name length is not valid'),
  email: Yup.string()
    .email('Invalid email format')
    .required(6, 'Email is required'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{11}$/, 'Invalid phone number')
    .nullable(),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Password must match'),
})

const SignupForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit} className='mx-5'>
        <Row md='12'>
          <Col md='4'>
            <Input formik={formik} name='name' label='Name' />
          </Col>
          <Col md='4'>
            <Input formik={formik} name='lastName' label='Last Name' />
          </Col>
          <Col md='4'>
            <Input formik={formik} name='email' label='Email' type='email' />
          </Col>
          <Col md='4'>
            <Input
              formik={formik}
              name='phoneNumber'
              label='Phone Number'
              type='tel'
            />
          </Col>
          <Col md='4'>
            <Input
              formik={formik}
              name='password'
              label='Password'
              type='password'
            />
          </Col>
          <Col md='4'>
            <Input
              formik={formik}
              name='confirmPassword'
              label='Password Confirm'
              type='password'
            />
          </Col>
        </Row>
        <Row className='d-flex justify-content-end mt-5'>
          <Col md='4'></Col>
          <Col md='4'></Col>
          <Col md='4'>
            <Button className='w-75 mt-5 p-3' color='success'>
              confirm
            </Button>
          </Col>
        </Row>
      </form>
    </>
  )
}
export default SignupForm
