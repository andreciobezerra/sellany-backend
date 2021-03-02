import { Schema } from "express-validator";

const productSchema = {
  name: {
    isLength: { options: [{ min: 3 }], errorMessage: "The name must be at least 3 characters." },
  },

  price: {
    isFloat: { errorMessage: "Invalid price." },
    custom: {
      options: (value: number): boolean => value >= 0,
      errorMessage: "The price must be a positive value.",
    },
  },

  percentual: {
    isFloat: { errorMessage: "Invalid percentual." },
    custom: {
      options: (value: number): boolean => value >= 0,
      errorMessage: "The percentual must be a positive value.",
    },
  },
};

export default productSchema as Schema;
