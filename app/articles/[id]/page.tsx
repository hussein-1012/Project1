import { Article } from "@/utils/types";
interface SingleArticlePageProps 
{
  params: { id: string };
}

const SingleArticlePage = async ({ params }: SingleArticlePageProps) =>
{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (!response.ok) 
  {
    throw new Error("Failed to fetch article");
  }
  const article: Article = await response.json();
  return (
    <section className='flex-height container m-auto w-full px-5 pt-8 md:w-3/4'>
      <div className='bg-white p-7 rounded-lg'>
        <h1 className='text-3xl font-bold text-blue-800 mb-2'>
          {article.title}
        </h1>
        <div className='text-3xl  text-gray-700 mb-2 underline'>4/8/2024</div>
        <p className='text-2xl text-gray-900 mb-2'>{article.body}</p>
      </div>
    </section>
  );
};
export default SingleArticlePage;
