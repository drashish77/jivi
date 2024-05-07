import * as yup from "yup";

export const formSchema = yup.object().shape({
  id: yup.string(),
  heartRate: yup.string(),
  bloodPressureSys: yup.string(),
  bloodPressureDias: yup.string(),
  name: yup.string().required("The name is required"),
  dob: yup
    .date()
    .nullable()
    .min(new Date(1900, 0, 1))
    .required("The date is required"),
  gender: yup
    .mixed()
    .oneOf(["male", "female", "other"] as const)
    .defined("Please select a gender."),
});
