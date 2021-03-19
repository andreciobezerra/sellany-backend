import * as yup from "yup";

const clientSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "The name must be at least 3 characters.")
    .required("The name is required."),

  cpf: yup.string().length(11, "The CPF must be 11 characters.").required("The CPF is required."),
});

export default clientSchema;
