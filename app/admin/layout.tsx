import React from 'react';
import AdminSidebar from './AdminSidebar';
interface AdminDashBordlayoutProps
{
    children : React.ReactNode;
}
const AdminDashBordlayout = ({children} : AdminDashBordlayoutProps) => 
{
  return (
    <div className="overflow-height flex items-start justify-between overflow-hidden">
        <div className='overflow-height w-15 lg:w-1/5 bg-purple-600 text-white p-1
        lg:p-5 '>
            <AdminSidebar />
        </div>
        
        <div className='overflow-height w-full lg:w-4/5 overflow-y-scroll'>
            {children}
        </div>
    </div>
  );
};
export default AdminDashBordlayout;
