import React from 'react'
import {useFormik} from 'formik';
  const Formvalidation = () => {
      const formik = useFormik({
          initialValues:{
              name:'',
              email:'',
              password:''
          },
          onSubmit:(values)=>{
              alert("form submitted")
          },
          validate:(values)=>{
              let errors={};
              if(!values.name){
                  errors.name="Name Required"
              }
              if(!values.email){
                errors.email="Email Required"
            }
            if(!values.password){
                errors.password="Password Required"
            }
            return errors;
          }
      })
  return (
    <div className=''>
        <center>
        <form className='ms-5' autoComplete='off' onSubmit={formik.handleSubmit}>
            <label className='h3'>Name</label><br/>
            <input type="text" placeholder="Name" name='name' id='name' value={formik.values.name}  onChange={formik.handleChange}/><br/>
            {formik.errors.name?<div>{formik.errors.name}</div>:null}
            <label className='h3'>Email</label><br/>
            <input type="Email" placeholder="Email" name='email' id='email' value={formik.values.email} onChange={formik.handleChange} /><br/>
            {formik.errors.email?<div>{formik.errors.email}</div>:null}

            <label className='h3'>Password</label><br/>
            <input type="Password" placeholder="Password" name='password' id='password' value={formik.values.password} onChange={formik.handleChange} /><br/>
            {formik.errors.password?<div>{formik.errors.password}</div>:null}

            <button className="btn btn-primary ms-5 m-1" type="submit">Submit</button>
        </form>
        </center>
    </div>
  )
}
export default Formvalidation;