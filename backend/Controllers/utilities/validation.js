const Joi = require('joi');

exports.registerSchema = Joi.object({
    userName : Joi.string().required(),
    emailId: Joi.string().email().required(),
    // mobile: Joi.string().pattern(/^\+?[0-9]{8,15}$/).required().messages({
    //     'string.pattern.base': 'Mobile number must be a valid format.'
    // }),
    password: Joi.string()
        .min(8)
        .pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)
        .required()
        .messages({
            'string.pattern.base': 'Password must contain at least one uppercase letter and one special character.',
            'string.min': 'Password must be at least 8 characters long.'
        }),
    role: Joi.any(),
    emailVerification: Joi.boolean(),
    gender: Joi.any(),
    status: Joi.string().required()
    // userCode: Joi.required()
});

exports.loginSchema = Joi.object({
    emailId: Joi.string().email().required(),
    password: Joi.string().required(),
});

exports.taskSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().required(),
    isDeleted: Joi.string(),
    priority: Joi.string(),
    type: Joi.string()
});

exports.commentSchema = Joi.object({
    text: Joi.string().required(),
});

exports.moduleSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    code: Joi.number(),
    isDeleted: Joi.boolean()
});

exports.rolesAndPermissionSchema = Joi.object({
    name: Joi.string().required(),
    permissions: Joi.array().required(),
    isDeleted: Joi.string()
});

exports.roleSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    code : Joi.number().required()
});