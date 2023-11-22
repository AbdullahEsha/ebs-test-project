import Image from 'next/image'

const Home = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const credential = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    if (credential.email === '') {
     alert('Check your email.')
    } else if (credential.password === "") {
       alert('Check your password.')
    } else {
      fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credential),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert(`Successful with token ${data.token}`)
          } else {
            alert('Sorry!')
          }
        })
        .catch((err) => {
          console.log("err", err);
          alert('something went wrong')
        })
    }
  }

  return (
    <main className='pt-6 px-16'>
      <Image src="/images/ebs-logo.png" height={42} width={80} className='max-w-[80px] h-auto' />
      <form onSubmit={handleSubmit} >
      <div className='h-[90vh] flex flex-col justify-center items-center'>
        <div className='max-w-[450px] flex flex-col items-center gap-5'>
          <h4 className='font-semibold'>Sign In</h4>
          <p className='text-gray-500'>Welcome back, you’ve been missed!</p>
          <div className='flex items-center justify-center gap-5'>
            <button className='flex items-center justify-center gap-2 bg-slate-200 py-2 px-4 rounded-md'>
              <Image src="/images/google-icon.png" height={20} width={20} className='w-5 h-auto'/>
              <p className='text-gray-400 text-sm'>Sign In with Google</p>
            </button>
            <button className='flex items-center justify-center gap-2 bg-slate-200 py-2 px-4 rounded-md'>
              <Image src="/images/apple-icon.png" height={20} width={20} className='w-5 h-auto'/>
              <p className='text-gray-400 text-sm'>Sign In with Apple ID</p>
            </button>
          </div>
          <div className='flex items-center w-full gap-3'>
            <div className='border border-t-2 w-full'/><label className='text-gray-400'>OR</label><div className='border border-t-2 w-full'/>
          </div>
          
          <div className='w-full'>
            <div className='flex items-center gap-3 w-full border border-gray-400 p-3 rounded-xl shadow-md'>
              <Image src="/images/at-icon.png" height={20} width={20} className='' />
              <input type='email' name='email' placeholder='Your Eamil' className='w-full focus:outline-none' />
            </div>
            <p className='text-red-400 text-sm mt-2'>Please enter a valid email address.</p>
          </div>
          <div className='flex items-center gap-3 w-full border border-gray-400 p-3 rounded-xl shadow-md'>
            <Image src="/images/lock-icon.png" height={20} width={20} className='' />
            <input type='password' name='password' placeholder='Password' className='w-full focus:outline-none' />
          </div>
          <div className="flex items-start w-full">
            <input id="disabled-checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Remember Me</label>
          </div>
          <button type='submit' className='w-full py-3 bg-blue-600 rounded-xl shadow-md text-white hover:bg-blue-500'>Sign In</button>
        </div>
      </div>
      </form>
    </main>
  )
}

export default Home
