import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  // const [errors, setErrors] = useState({});

  const onChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
      
    });
    console.log('change done',name)
  };

  const onSubmit = async  (e)  => {
		e.preventDefault()

    console.log(values)

		const response = await fetch('http://localhost:5000/api/register', {
      
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			values
			}),
		})

		const data = await response.json()
        console.log(data, 'values here')
		if (data.status === 'ok') {
      console.log(data, 'values here2')
			// history.push('/login')
		}
	}


  // const onSubmit = e => {
  //   e.preventDefault();
  //   console.log('change done')
  //   // setErrors(validation(values))

  // };

  return (
    <div className='container-fluid py-4'>
    <div className="row my-5">
      <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={onSubmit}>
          <h1 className='text-center'>
            Sign up
          </h1>
          <div className='form-group'>
            <label className='input-labels'>Name</label>
            <input
              className='form-control'
              type='text'
              name='name'
              placeholder='Enter your name'
              value={values.name}
              onChange={onChange}
            />
            <p className="text-danger">
              {/* {errors.name && <span>{errors.name}</span>} */}
            </p>
          </div>
          <div className='form-group'>
            <label className='input-labels'>Email</label>
            <input
              className='form-control'
              type='email'
              name='email'
              placeholder='Enter your Email'
              value={values.email}
              onChange={onChange}
            />
            <p className="text-danger">
              {/* {errors.email && <span>{errors.email}</span>} */}
            </p>
          </div>
          <div className='form-group'>
            <label className='input-labels'>Password</label>
            <input
              className='form-control'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={onChange}
            />
            <p className="text-danger">
              {/* {errors.password && <span>{errors.password}</span>} */}
            </p>
          </div>
          <div className='form-group'>
            <label className='input-labels'>Password</label>
            <input
              className='form-control'
              type='password'
              name='password2'
              placeholder='Enter your password again'
              value={values.password2}
              onChange={onChange}
            />
            <p className="text-danger">
              {/* {errors.password2 && <span>{errors.password2}</span>} */}
            </p>
          </div>
          <button className='btn btn-block btn-lg bg-transparent border border-dark' type='submit'>
            Sign up
          </button>



        </form>
      </div>
    </div>
  </div>
  );
}

export default App;
