import * as Yup from "yup";
export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(3, "Name must be at least 3 characters")
    .max(80, "Name must not exceed 80 characters"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string()
    .required("Required")
    .min(25, "Message must be at least 25 characters"),
});
