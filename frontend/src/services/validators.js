import * as Yup from "yup";

const mailSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 characters.")
    .max(25, "Maximum 25 characters.")
    .required("Required"),
  email: Yup.string().email("Invalid format.").required("Required"),
  message: Yup.string().min(10, "Minimum 10 characters.").required("Required"),
});

export default mailSchema;
