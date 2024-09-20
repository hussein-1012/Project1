import { NextRequest, NextResponse } from "next/server";
import { articles } from '@/utils/data'; // Ensure this matches the structure of your data

/**
 * @method GET
 * @route  ~/api/articles/:id
 * @desc   Get Single Article By Id 
 * @access public 
 */
export function GET(request: NextRequest) {
  try {
    // Extract the article ID from the request URL
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 });
    }

    // Convert id to a number (if necessary) and find the article
    const articleId = parseInt(id);
    const article = articles.find((el) => el.id === articleId);

    if (!article) {
      return NextResponse.json({ error: `Article with ID ${id} not found` }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch (error) {
    // Catch any unexpected errors
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
