
import { createBrowserRouter } from "react-router"
import C1 from "./Components/C1"
import C2 from "./Components/C2"

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <C1 />,
        errorElement: <>main error</>,
        children: [
            {
                path: 'about',
                element: <C2/>,
                children: [{
                    path: 'zipi',
                    element: <>element about zipi</>
                }]
            },
            {
                path: 'hello', element: <>element hello</>
            },
            {
                path: 'Zipi', element: <>element zipi</>
            }
        ]
    }
])

