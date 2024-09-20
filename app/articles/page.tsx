//'use client';
import React from 'react';
import Link from 'next/link';
import * as Dialog from "@radix-ui/react-dialog";
type Article = 
{
  id: number;
  title: string;
  userId: number;
  description: string;
};
const ArticlePage = async () => 
  {
  // delay 10 sec
   await new Promise((resolve) => setTimeout(resolve , 3000));
  
   const response = await fetch('https://jsonplaceholder.typicode.com/posts', 
  {
    next: { revalidate: 10 }
  });

  const articles: Article[] = await response.json();

  if (!response.ok) 
  {
    throw new Error("Failed to fetch articles");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((el) => (
          <div
            key={el.id}
            className="p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-400 transition duration-200 ease-in-out">
            <h1 className="text-2xl font-semibold text-gray-700 mb-3">{el.title}</h1>
            <p className="text-yellow-400 mb-4">{el.description}</p>
            <Link href={`/articles/${el.id}`} className="inline-block bg-purple-600
             text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300 ease-in-out">
              Read More </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ArticlePage;