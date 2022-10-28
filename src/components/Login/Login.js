import * as Yup from 'yup'

import { Button, Col, Row } from 'reactstrap'

import Input from '../../common'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

const initialValues = {
  email: '',
  password: '',
}

const onSubmit = (values) => {
  console.log(values)
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format'),
  password: Yup.string().required('Password is required'),
})

const LoginForm = () => {
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
            <Input formik={formik} name='email' label='Email' type='email' />
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
            <Button
              disabled={!formik.isValid}
              className='w-75 p-3'
              style={{ marginTop: '40px' }}
              color='success'
            >
              Login
            </Button>
            <Link to='/sign-up'><p className='mt-2'>Not Sign up yet?</p></Link>
          </Col>
        </Row>
      </form>
    </>
  )
}
export default LoginForm
