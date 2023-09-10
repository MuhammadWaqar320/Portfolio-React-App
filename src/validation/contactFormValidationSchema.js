import * as Yup from "yup";
export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(80, "Name must not exceed 80 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .min(3, "Message must be at least 3 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});
