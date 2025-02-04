import axios from "axios"
import { makeAutoObservable } from "mobx"
import { RecipeFormData } from "./AddRecipe"

export type RecipeType = {
    id: number,
    title: string,
    description: string,
    authorId: number,
    ingredients: string[],
    instructions: string
}

class StoreRecipes {

    list: RecipeType[] = []
    constructor() {
        makeAutoObservable(this)
        this.loadRecipes();
    }
    async loadRecipes() {
        await this.getRepicesFromServer()
    }

    async getRepicesFromServer() {
        try {
            const res = await axios.get('http://localhost:3000/api/recipes/')
            this.list = res.data
        } catch (e: any) {
            if (e.status === 401 || e.status === 400) {
                alert("the user not found")
            }
            if (e.status == 403)
                alert('problem in connection')
        }
    }

    async addrecipe(dataRecipe: RecipeFormData, userId: number) {
        let res;
        try {
            res = await axios.post('http://localhost:3000/api/recipes', dataRecipe, { headers: { 'user-id': Number(userId) } })
            this.list.push(res.data.recipe)
            alert("המתכון נשלח בהצלחה😂")
        }
        catch (e: any) {
            if (e.status === 401 || e.response === 403 || e.response === 4000)
                alert("User Not found")
            if (e.status == 403)
                alert('problem in connection')
        }
    }
}
export default new StoreRecipes()


