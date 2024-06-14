const z = require('zod');

const productSchema = z.object({
    productName: z.string(),
    productDescription: z.string(),
    productImageUrl: z.string(),
    productPrice: z.number(),
    productGender: z.string(),
    productCategory: z.string()
});

module.exports =  productSchema;
