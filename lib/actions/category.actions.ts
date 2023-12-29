"use serve"

import { CreateCategoryParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabse } from "../database"
import Category from "../database/models/category.model"

export const createCategory = async ({ categoryName } :CreateCategoryParams) => {
    try {
        await connectToDatabse();

        const newCategory = await Category.create({ name: categoryName })
        return JSON.parse(JSON.stringify(newCategory));
    } catch (error) {
      handleError  
    }
}

export const getAllCategories = async () => {
    try {
        await connectToDatabse();

        const Categories = await Category.find();

        return JSON.parse(JSON.stringify(Categories));
    } catch (error) {
      handleError  
    }
}