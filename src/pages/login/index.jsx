import React from 'react'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div
      style={{
        height: '90vh',
        backgroundImage:
          'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
      }}
      className='flex justify-center items-center'
    >
      <div className='container w-full max-w-md'>
        <form
          onSubmit={handleSubmit}
          className='bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4'
        ></form>
      </div>
    </div>
  )
}

export default Login
