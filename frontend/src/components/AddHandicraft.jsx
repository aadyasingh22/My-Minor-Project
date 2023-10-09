import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const AddSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  material: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  category: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  price: Yup.number().required('required')
});

const AddHandicraft = () => {

  const addForm = useFormik({
    initialValues: {
      title: '',
      material: '',
      category: '',
      price: ''
    },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm();

      const res = await fetch('http://localhost:5000/handicraft/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Added Successfully',
          text: 'A new Product is here!'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong!!'
        })
      }

      // send values to backend
    },

    validationSchema: AddSchema
  });

  return (
    <div className="handicraftbody">
      <div className='container'>
        <div className="row">
          <div className="col-md-4 mx-auto d-flex align-items-center">
            <div className="card">
              <div className="card-body">
                <h1>Adding Handicrafts</h1>
                <form onSubmit={addForm.handleSubmit}>
                  <label className='form-label'>Title</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.title}</span>
                  <input id='title' onChange={addForm.handleChange} value={addForm.values.title} className='form-control mb-3' type="text" />
                  <label className='form-label'>Material</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.material}</span>
                  <input id='material' onChange={addForm.handleChange} value={addForm.values.material} className='form-control mb-3' type="text" />
                  <label className='form-label'>Category</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.category}</span>
                  <input id='category' onChange={addForm.handleChange} value={addForm.values.category} className='form-control mb-3' type="text" />
                  <label className='form-label'>Price</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.price}</span>
                  <input id='price' onChange={addForm.handleChange} value={addForm.values.price} className='form-control mb-3' type="text" />

                  <button className="btn btn-primary w-100">Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddHandicraft