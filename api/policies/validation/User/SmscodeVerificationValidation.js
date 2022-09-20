"use strict";
var form = require('express-form'),
  field = form.field,
  validate = form.validate,
  filter = form.filter;

module.exports = form(
  field('verificationCode'),
  field('phoneNumber'),
  validate('verificationCode')
  .required("", "VERIFICATIONCODE_REQUIRED"),
  validate('phoneNumber')
  .required("", "PHONENUMBER_REQUIRED")
  .minLength(10, "PHONENUMBER_LENGTH_INVALID")
  .maxLength(10, "PHONENUMBER_LENGTH_INVALID")
  .isNumeric("PHONENUMBER_INVALID")
);
