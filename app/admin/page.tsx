import React from 'react';
import AddArticleForm from './AddArticleForm';

function AdminPage() 
{ 
  return (
    <div className='fix-height flex items-center justify-center px-5 lg:px-20'>
      <div className='shadow p-4 bg-purple-200 rounded w-full'> 
        <h2 className="text-xl lg:text-2xl text-gray-700 font-semiold md-4 "></h2>
       <AddArticleForm />
      </div>
    </div>
  )
  
};
export default AdminPage;