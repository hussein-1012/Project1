import React from 'react';
import Hero from '../Components/home/hero';
import WebHostingPlan from '../Components/home/WebHostingPlan';
import * as Popover from '@radix-ui/react-popover';
import { Theme } from '@radix-ui/themes';

const HomePage = () => 
{
  return (
    <section>
      <Hero /> 
      <h2 className="text-center mt-10 text-3xl font-bold">
        Choose Your Web Hosting Plan</h2> 
     <div className="container m-auto flex justify-center items-center my-7 flex-wrap md:gap-7">
      <WebHostingPlan/>
      <WebHostingPlan/>
      <WebHostingPlan/>      
     </div> 
    </section>
  );
};

export default HomePage;

// If you want to use the MyApp component elsewhere, export it as a named export
