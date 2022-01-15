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

const registrationSchema = Joi.object({
    email: Joi.string()
        .email({
            // Maybe whitelist domains to ['com', 'ru', 'org', 'dev', 'net', 'in']
            tlds: { allow: false }
        })
        .label("Email")
        .required(),
    username: Joi.string()
        .alphanum()
        .min(4)
        .max(50)
        .custom(usernameValidation, 'username validation')
        .required()
        .label("Username")
        .messages({
            'any.custom': "Username must start with an uppercase or lowercase letter."
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
        }),
    confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .label("Confirm Password")
        .messages({
            'any.only': 'Passwords do not match'
        })
});

export default registrationSchema;