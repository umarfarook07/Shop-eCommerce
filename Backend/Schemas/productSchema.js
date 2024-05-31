const z = require('zod');

const imageSchema = z.string().url().refine((url) => {
    return /\.(jpeg|jpg|gif|png)$/.test(url);
}, {
    message: "Invalid image URL"
});

const priceSchema = z.number().positive("Price must be a positive number");

const productSchema = z.object({
    image: imageSchema,
    name: z.string(),
    description: z.string().max(8, "Description must be 8 characters or less"),
    price: priceSchema
});

module.exports =  productSchema;
