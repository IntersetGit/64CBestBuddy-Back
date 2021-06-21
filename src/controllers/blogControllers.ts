import { Request, Response, NextFunction } from "express";
import messages from '../messages'
import config from '../config'
import { result, decodeToken } from '../util';
import { ManageBlogInterface } from "../interface/blogInterface";
import { createBlogService, updateBlogService } from "../service/blog";

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
        const model: ManageBlogInterface = req.body;


        result(res, model.id, 201)
    } catch (error) {
        next(error);
    }
}

export default {
    manageBlog
}