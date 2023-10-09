import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';

const Login = () => {

    const loginForm = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        onSubmit: async (values) => {
          console.log(values);
    
          const res = await fetch('http://localhost:5000/user/authenticate', {
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
              title : 'Login Success'
            })
    
            const data = await res.json();
            console.log(data);
    
            sessionStorage.setItem( 'user', JSON.stringify(data) );
    
          }else if(res.status === 400){
            Swal.fire({
              icon : 'error',
              title : 'Login Failed',
              text : 'Email or Password is invalid!!'
            })
          }else{
            Swal.fire({
              icon : 'error',
              title : 'Error',
              text : 'Something went wrong!'
            })
          }
    
        }
      });

  return (
    <div className='loginbody'>
      <div className="card logincard">
        <div className="card-body">
          <h1 className='text-center p-4 fw-bold' style={{ color: 'crimson' }}>Client Login</h1>
          <form action="" className='text-center loginform' onSubmit={loginForm.handleSubmit}>
            <input id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='logininput' type="email" placeholder='Email' />
            <input id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='logininput' type="password" placeholder='Password' />
            
            <button className="btn btn-primary w-100 d-block mx-auto m-3">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login