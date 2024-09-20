import { NextRequest, NextResponse } from "next/server";
import { articles } from '@/utils/data';
import { z } from 'zod';
import { CreateArticleDto } from "../../utils/dtos";  // Keep this import
import { PrismaClient, Article } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * @method GET
 * @route  ~/api/articles.
 * @desc   get all articles
 * @access public 
 */
export function GET(request: NextRequest) {
    return NextResponse.json(articles, { status: 200 });
}

/**
 * @method POST
 * @route  ~/api/articles.
 * @desc   create new article
 * @access public 
 */
export async function POST(request: NextRequest) {
    const body = (await request.json()) as CreateArticleDto;

    const createArticleSchema = z.object({
        title: z.string().min(2).max(200),
        body: z.string().min(10),
        description: z.string().min(10),  // Add description validation
    });

    const validation = createArticleSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
    }

    const newArticle: Article = await prisma.article.create({
        data: {
            title: body.title,
            description: body.description,
        }
    });

    return NextResponse.json(newArticle, { status: 201 });
}
