import React from 'react';
import '../globals.css';
import * as Popover from '@radix-ui/react-popover';
import * as Switch from '@radix-ui/react-switch';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Tooltip from '@radix-ui/react-tooltip';
import { InfoCircledIcon } from '@radix-ui/react-icons'; // Import the icon
import { Theme } from '@radix-ui/themes';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Link from 'next/link';
import * as Toast from '@radix-ui/react-toast';

const AboutPage = () => {
  return (
    <section className="fix-height container m-auto">
<div className="flex justify-end">
          <Theme radius="full">
            <div className="flex items-center pt-0">
              <input type="text" placeholder="Type…"
                className="border p-2 rounded-l-md text-black" style={{ width: '90%' }}/>
              <button className="bg-blue-500 text-black px-4 py-2 rounded-r-md">
                Search</button>
             </div>
         </Theme>
       </div>

      <h1 className="text-3xl font-bold text-blue-600 p-5">About This Page</h1>
      <p className="px-5 text-gray-300 text-xl pb-10">
        The best Web hosting solution for your online access
      </p>

      <div className="flex justify-center pt-10">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button className="bg-red-500 text-black px-4 py-2 rounded-md shadow-md hover:bg-red-600">
              Say Hello
            </button>
          </Popover.Trigger>
    <Popover.Content className="bg-white border border-gray-200 text-black p-4 rounded-lg shadow-lg w-80 flex items-center justify-center">
              <p className="text-center text-xl font-bold">Hello User</p>
          </Popover.Content>


        </Popover.Root>
      </div>

    <div className="flex justify-center pt-20 pb-20"> 
      <AspectRatio ratio={16 / 8}>
        <img
          src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
          alt="A house in a forest"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: 'var(--radius-2)',
          }}
        />
      </AspectRatio>
    </div>
    
  
      <div style={{ padding: '1rem', maxWidth: '400px',margin: '0 auto',backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',borderRadius: '0.375rem'}}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          
          <div style={{ display: 'flex',flexDirection: 'column',gap: '0.5rem'}}>
            <label htmlFor="feedback" style={{ fontWeight: 'bold', fontSize: '1.25rem' }}> Feedback</label>
            <textarea id="feedback" placeholder="Write your feedback…" style={{
                border: '1px solid #d1d5db',padding: '0.5rem',
                borderRadius: '0.375rem',color: 'black',width: '100%',boxSizing: 'border-box'}}/>
          </div>

          <div style={{ display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
            <label
              style={{display: 'flex',alignItems: 'center',gap: '0.5rem'}}>

              <span style={{ color: '#4b5563' }}>Attach screenshot?</span>
              <Switch.Root defaultChecked>
                <Switch.Thumb />
              </Switch.Root>
            </label>
          </div>
          
          <div style={{ display: 'grid',gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
            <button
              style={{
                backgroundColor: '#e5e7eb',
                color: 'black',
                padding: '0.5rem',
                borderRadius: '0.375rem'
              }}> Back </button>
            
            <button
              style={{
                backgroundColor:'blue',
                color: 'white',
                padding: '0.5rem',
                borderRadius: '0.375rem'
              }}> Send </button>
          </div>
        </div>
      </div>

    </section>
  );
};
export default AboutPage;