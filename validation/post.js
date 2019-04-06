// import validator from 'validate-image-url'
const Validator = require('validator');
const isEmpty = require('./is-empty');
const isImageUrl = require('is-image-url');
//Check if URL is valid image
 
// const promise = validator({url: data.image, timeout: 10000})
//   .then(({image, url}) => {
//     console.log('Image URL is valid.', 'URL:', url, 'image:', image)
//   })
//   .catch((err) => {
//     errors.image = 'Must be a valid image URL.';
//   })

// If image field is empty
module.exports = function validatePostInput(data) {
 let errors = {};

     data.text = !isEmpty(data.text) ? data.text : '';
     data.image = !isEmpty(data.image) ? data.image : '';

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = 'Post must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  if (!isImageUrl(data.image)) {
    errors.image = 'Image URL is invalid';
  }

    return {
    errors,
    isValid: isEmpty(errors)
  };
};



  // found at: https://www.npmjs.com/package/validate-image-url