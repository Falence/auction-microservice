const schema = {
  type: 'object',
  properties: {
    body: {
      type: 'string',
      minLength: 1,
      pattern: '\=$' // ends with an = sign
    },
  },
  required: ['body']
};

export default schema;