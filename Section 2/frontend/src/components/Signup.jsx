import React from 'react'

const Signup = () => {
  return (
    <div className='vh-100 bg-body-secondary'>
      <div className='col-md-4 mx-auto py-5'>
          <div className="card">
            <div className="card-body">
              <h2 className='text-center my-5'>SIGNUP FORM</h2>
              <form>
                <label>Full Name</label>
                <input type="text" className="form-control mb-3" />
                <label>Email</label>
                <input type="text" className="form-control mb-3" />
                <label>Password</label>
                <input type="password" className="form-control mb-3" />

                <button className='btn btn-primary mt-3'>Submit</button>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Signup;