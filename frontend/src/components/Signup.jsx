import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Password is required')
      .matches('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).+$', 'Password is invalid'),
    confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

const Signup = () => {

    const navigate = useNavigate();

    const signupForm = useFormik({
        initialValues: {
          username: '',
          email: '',
          password: '',
          confirm: ''
        },
    
        onSubmit: async (values, { resetForm }) => {
          console.log(values);
          resetForm();
    
          const res = await fetch('http://localhost:5000/user/add', {
            method : 'POST',
            body : JSON.stringify(values),
            headers : {
              'Content-Type' : 'application/json'
            }
          });
    
          console.log(res.status);
          if(res.status === 200){
            Swal.fire({
              icon : 'success',
              title : 'Registered Successfully',
              text : 'Login to Continue'
            })
            navigate('/login');
          }else{
            Swal.fire({
              icon : 'error',
              title : 'Error',
              text : 'Something went wrong!!'
            })
          }
    
          // send values to backend
        },
    
        validationSchema: SignupSchema
      });

  return (
    <div className='signupbody'>
      <div className="card signupcard">
        <div className="card-body">
          <h1 className='text-center p-4'>Create Account</h1>
          <form className=' signupform' onSubmit={signupForm.handleSubmit}>
            <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{signupForm.errors.username}</span>
            <input id='username' onChange={signupForm.handleChange} value={signupForm.values.username} className='signupinput form-control' type="text" placeholder='Username' />

            <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{signupForm.errors.email}</span>
            <input id='email' onChange={signupForm.handleChange} value={signupForm.values.email} className='signupinput form-control' type="email" placeholder='Email' />

            <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{signupForm.errors.password}</span>
            <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password} className='signupinput form-control' type="password" placeholder='Password' />

            <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{signupForm.errors.confirm}</span>
            <input id='confirm' onChange={signupForm.handleChange} value={signupForm.values.confirm} className='signupinput form-control' type="password" placeholder='Confirm Password' />

            <button className="btn btn-primary w-50 d-block mx-auto m-3">Signup</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup