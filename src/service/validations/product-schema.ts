import * as yup from "yup";

const productSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "The name must be at least 3 characters.")
    .required("The name is required."),

  price: yup
    .number()
    .positive("The price must be a positive value.")
    .required("The price is required."),

  percentual: yup
    .number()
    .positive("The percentual must be a positive value.")
    .required("The percentual is required."),
});

export default productSchema;
