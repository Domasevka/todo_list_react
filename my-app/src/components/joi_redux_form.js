import Joi from '@hapi/joi';


export default function createValidator() {
  const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    phone: Joi.string().trim().regex(/^[8]{1}[0-9]{7}$/).required(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    price: Joi.string().alphanum().min(3).max(30).required(),
  });

  return values => {
    //const errors= {};

    const result = Joi.validate(values, schema, { abortEarly: false });
    if (result.error === null) {
      return {};
    }

    const errors = result.error.details.reduce((all, cur) => {
      const allErrors = Object.assign({}, all);
      const path = cur.path[cur.path.length - 1];
      const message = cur.message;
      if (Object.prototype.hasOwnProperty.call(allErrors, path)) {
        allErrors[path] += message;
      } else {
        allErrors[path] = message;
      }
      return allErrors;
    }, {});
    console.log('erors', errors);
    return  errors;
  };
}
