
import { createBrowserRouter } from "react-router"
import AppLayuot from "./Components/AppLayuot"
import RecipesList from "./Components/Recipes/RecipesList"
import RecipeDetails from "./Components/Recipes/RecipeDetails"
import AddRecipe from "./Components/Recipes/AddRecipe"

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayuot />,
        errorElement: <>main error </>,
        children: [
            {
                path: 'recipes',
                element: <RecipesList />,
                children: [{
                    path: ':id',
                    element: <RecipeDetails />
                }]
            },
            {
                path: 'Addrecipe',
                element: <AddRecipe />
            }
        ]
   
    }
])

