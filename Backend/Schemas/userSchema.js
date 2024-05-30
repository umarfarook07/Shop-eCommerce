const z = require('zod');

const signUpSchema = z.object({
    email: z.string().email(),
    username: z.string().max(32).min(3),
    password: z.string().min(8),
});
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});


module.exports = {loginSchema, signUpSchema};