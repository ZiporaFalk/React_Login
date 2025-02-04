import { useForm, useFieldArray, FieldArrayPath } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box, IconButton, Typography } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import StoreRecipes from "./StoreRecipes";
import { useContext } from "react";
import { TheContextUser } from "../HomePage";

const schema = yup.object().shape({
    title: yup.string().required("שם המתכון הוא שדה חובה").min(3, "לפחות 3 תווים"),
    description: yup.string().required("תיאור הוא שדה חובה").max(100, "מקסימום 100 תווים"),
    ingredients: yup.array().of(yup.string().required("נא להוסיף רכיב"))
        .min(1, "חייב להיות לפחות רכיב אחד"),
    instructions: yup.string().required("אופן ההכנה הוא שדה חובה").min(10, "לפחות 10 תווים"),
});
export interface RecipeFormData {
    title: string;
    description: string;
    ingredients: string[];
    instructions: string;
}
function RecipeForm() {
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<RecipeFormData>({
        resolver: yupResolver(schema),
        defaultValues: { ingredients: [""] },
    });
    const { fields, append, remove } = useFieldArray({ control, name: "ingredients" as FieldArrayPath<RecipeFormData> });
    const { user } = useContext(TheContextUser)
    const onSubmit = async (data: RecipeFormData) => {
        const dataRecipe = {
            title: data.title,
            description: data.description,
            ingredients: data.ingredients,
            instructions: data.instructions
        }
        if (user.Id != null)
            await StoreRecipes.addrecipe(dataRecipe, user.Id)
        reset({ title: "", description: "", ingredients: [""], instructions: "" });
    };
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 500, mx: "auto", p: 3, bgcolor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "rgb(219, 30, 40)" }}>📜 הוסף מתכון</Typography>
            <TextField
                label="שם המתכון"
                fullWidth
                margin="normal"
                {...register("title")}
                error={!!errors.title}
                helperText={errors.title?.message}
            />
            <TextField
                label="תיאור קצר"
                fullWidth
                margin="normal"
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
            />
            <Typography variant="subtitle1" sx={{ color: "rgb(219, 30, 40)" }}>רשימת רכיבים:</Typography>
            {fields.map((item, index) => (
                <Box key={item.id} sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                    <TextField
                        label={`רכיב ${index + 1}`}
                        fullWidth
                        {...register(`ingredients.${index}`)}
                        error={!!errors.ingredients?.[index]}
                        helperText={errors.ingredients?.[index]?.message}
                    />
                    <IconButton onClick={() => remove(index)} sx={{ color: "rgb(219, 30, 40)" }}><RemoveCircleOutline /></IconButton>
                </Box>
            ))}
            <Button onClick={() => append("")} variant="contained" startIcon={<AddCircleOutline />}  sx={{ mt: 2,background: "rgb(219, 30, 40)" }}>הוסף רכיב</Button>
            {errors.ingredients && <Typography sx={{ color: "rgb(219, 30, 40)" }}>{errors.ingredients.message}</Typography>}
            <TextField
                label="אופן הכנה"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                {...register("instructions")}
                error={!!errors.instructions}
                helperText={errors.instructions?.message}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, background: "rgb(219, 30, 40)"}}>📩 שלח מתכון</Button>
        </Box>
    );
}
export default RecipeForm;
