import paginate from 'express-paginate';
import { Request, Response, NextFunction } from "express";
import messages from '../messages'
import config from '../config'
import { result, decodeToken } from '../util';
import { ManageBlogInterface } from "../interface/blogInterface";
import { createBlogService, getAllDataBlogService, updateBlogService } from "../service/blog";

/** เพิ่มแก้ไข */
export const manageBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decode: any = await decodeToken(req.headers['authorization']);
        const model: ManageBlogInterface = req.body;
        model.user_id = decode.user_id;

        if (model.id) {
            await updateBlogService(model)
        } else {
            model.id = await createBlogService(model)
        }

        result(res, model.id, 201)
    } catch (error) {
        next(error);
    }
}

export const getAllDataBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { status = 1, category } = req.query;
        const limit: any = req.query.limit
        const page: any = req.query.page

        const _res = await getAllDataBlogService({ status, category }, req)
        const itemCount = _res.count;
        const pageCount = Math.ceil(itemCount / limit);

        result(res, {
            result: _res.data,
            pageCount,
            itemCount,
            pages: paginate.getArrayPages(req)(pageCount, pageCount, page),
        })
    } catch (error) {
        next(error);
    }
}

export default {
    manageBlog,
    getAllDataBlog,
}