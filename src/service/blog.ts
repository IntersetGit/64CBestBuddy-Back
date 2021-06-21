import { initModels, dat_blog } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { v4 as uuid4 } from 'uuid';
import { ManageBlogInterface } from "../interface/blogInterface";

initModels(sequelize);


export const updateBlogService = async (model: ManageBlogInterface, transaction: any = undefined) => {
    await dat_blog.update({
        category_id: model.category_id,
        blog_title: model.blog_title,
        blog_detail: model.blog_detail,
        path_img: model.path_img,
        update_by: model.user_id,
        update_date: new Date()
    }, { where: { id: model.id, }, transaction });
    return model.id
}

export const createBlogService = async (model: ManageBlogInterface, transaction: any = undefined) => {
    const id = uuid4();
    await dat_blog.create({
        id,
        category_id: model.category_id,
        blog_title: model.blog_title,
        blog_detail: model.blog_detail,
        path_img: model.path_img,
        blog_count: 0,
        status: model.status,
        isuse: 1,
        created_by: model.user_id,
        created_date: new Date()
    }, { transaction })
    return id;
}


export default {
    createBlogService,
}