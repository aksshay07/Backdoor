import Joi from 'joi';

const complexityCheck = (value: string, helpers: object) => {
    // Check for lowercase characters
    if (!/[a-z]/.test(value)) throw new Error()
    // Check for uppercase characters
    if (!/[A-Z]/.test(value)) throw new Error();
    // Check for digits
    if (!/\d/.test(value)) throw new Error();

    return value;
}

const usernameValidation = (value: string, helpers: object) => {
    if (!/^[a-zA-Z]/.test(value)) throw new Error();
}

const loginSchema = Joi.object({
    // The username field must match either email or username format
    username: Joi.alternatives()
        .try(
            // Email validation
            Joi.string()
                .email({
                    // Maybe whitelist domains to ['com', 'ru', 'org', 'dev', 'net', 'in']
                    tlds: { allow: false }
                })
                .required(),

            // Username Validation
            Joi.string()
                .alphanum()
                .min(4)
                .max(50)
                .custom(usernameValidation, 'username validation')
                .required()
                .messages({
                    'any.custom': "Username must start with an uppercase or lowercase letter."
                })
        )
        .required()
        .messages({
            'alternatives.match': "Please enter either a valid email or a valid username."
    }),
    password: Joi.string()
        .min(12)
        .max(64)
        .custom(complexityCheck, 'complexity check')
        .required()
        .label("Password")
        .messages({
            'any.custom':
                "Password must have at least one lowercase character, one uppercase character and one number."
        })
});

export default loginSchema;