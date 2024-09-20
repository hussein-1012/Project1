'use client';
import React from 'react';

const articlesSkeleton = [1,2,3,4,5,6];
/*const targetLength = 100;

while (articlesSkeleton.length < targetLength) 
{
    articlesSkeleton.push(...articlesSkeleton.slice(0, targetLength - articlesSkeleton.length));
}*/

const ArticlesLoading = () => {
  return (
    <section className="fix-height container m-auto px-5 animate-pulse">
      <div className="my-5 w-full md:w-2/3 m-auto bg-gray-300 h-12 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesSkeleton.map((el, index) => (
            <div key={index} className="p-5 rounded-lg my-1 bg-gray-300 w-full">
              <h3 className="h-6 bg-gray-200 mb-2 rounded"></h3>
              <p className="my-2 bg-gray-300 h-10 rounded"></p>
              <div className="w-full block bg-gray-400 h-8 rounded"></div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default ArticlesLoading;
