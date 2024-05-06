import * as yup from "yup";

export const formSchema = yup.object().shape({
  heartRate: yup.string(),
  SysBP: yup.string(),
  DiBP: yup.string(),
  name: yup.string().required("The name is required"),
  dob: yup.date(),
  field: yup.mixed().oneOf(["male", "female"]),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("The email is required"),
  mobile: yup.string().required("The mobile number is required"),
  otherInfo: yup.string(),
});
