import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useParams } from 'react-router';
import StoreRecipes from './StoreRecipes';
const style = {
    color: "rgb(219, 30, 40)",
    background: " rgb(255 100 113 / 15%)",
    borderRadius: "10px"
}
const RecipeDetails = () => {
    const { id } = useParams()
    const recipe = StoreRecipes.list.find(r => Number(id) === r.id)

    return (
        <Card sx={{ maxWidth: 500, margin: 'auto', mt: 5, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h4" component="div" gutterBottom style={style}>
                    {recipe?.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {recipe?.description}
                </Typography>
                <Typography variant="h6" sx={style}>רכיבים:</Typography>
                <List>
                    {recipe?.ingredients.map((ingredient, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={ingredient} />
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h6" sx={style}>אופן הכנה:</Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mt: 1 }}>
                    {recipe?.instructions}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default RecipeDetails;
