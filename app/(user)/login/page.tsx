import React from 'react';
import LoginForm from './LoginForm';
function loginPage() 
{

  return (
    <section className="fix-height container m-auto px-8 flex items-center justify-center">
        <div className='m-auto bg-white rounded-lg p-5 w-full md:w-2/3 '>
          <h1 className='text-3xl font-bold text-gray-800 mb-5'>Log_In</h1>
          <LoginForm />
        </div>
    </section>
  );
};
export default loginPage