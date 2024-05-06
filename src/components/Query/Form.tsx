// import Image from "next/image";
import {
  MdPersonOutline,
  MdOutlineMailOutline,
  MdPhone,
  MdChatBubbleOutline,
  MdSettings,
  MdGroup,
  MdOutlineTransgender,
} from "react-icons/md";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { formSchema } from "./schema";
import { toast } from "react-hot-toast";
import RangeInput from "./RangeInput";

const FormComponent = () => {
  interface FormValues {
    name: string;
    email: string;
    mobile: string;
    otherInfo: string;
    heartRate: number;
    bloodPressureSys: number;
    bloodPressureDias: number;
    gender: string;
  }
  const initialValues: FormValues = {
    name: "",
    email: "",
    mobile: "",
    otherInfo: "",
    heartRate: 1,
    bloodPressureSys: 1,
    bloodPressureDias: 1,
    gender: "male",
  };
  const onSubmit = async (
    values: FormValues,
    actions: { resetForm: () => void }
  ) => {
    const payload = {
      name: values.name,
      email: values.email,
      gender: values.gender,
      mobile: values.mobile,
      heartRate: values.heartRate,
      otherInfo: values.otherInfo,
    };
    // fetch("/api/nodemailer", {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    // })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       toast.success("Form submitted successfully");
    //       actions.resetForm();
    //     } else {
    //       toast.error("Form submission failed, please try again");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => console.log({ data }));
  };
  return (
    <div className={`relative z-30 flex  w-full items-center justify-center `}>
      <div className="">
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={onSubmit}
        >
          {(props) => {
            // const { errors, values, touched } = props;
            // const progress = (props.values.heartRate / 60) * 100;
            return (
              <Form className="">
                {JSON.stringify(props.values)}
                <div className="">
                  <div className="h-[90px]">
                    <h3 className="font-bold text-lg mb-2 ">
                      Heart Rate:
                      <span className="text-[#0F67FE] ml-2">
                        {props.values.heartRate + 60}
                      </span>
                    </h3>
                    {/* range */}
                    <RangeInput
                      value={props.values.heartRate}
                      name="heartRate"
                      color="#0F67FE"
                    />
                    <div className="mt-1 text-xs text-red-500 ">
                      <ErrorMessage name="heartRate" />
                    </div>
                  </div>
                  <div className="h-[90px]">
                    <h3 className="font-bold text-lg mb-2 ">
                      Blood pressure:
                      <span className="text-[#0F67FE] ml-2">
                        {props.values.bloodPressureSys + 60}
                      </span>
                    </h3>
                    {/* range */}
                    <RangeInput
                      value={props.values.heartRate}
                      color="#FA4D5E"
                      name="bloodPressureSys"
                    />
                    <div className="mt-1 text-xs text-red-500 ">
                      <ErrorMessage name="bloodPressureSys" />
                    </div>
                  </div>
                  <div className="h-[90px]">
                    {/* <h3 className="font-bold text-lg mb-2 ">
                      Heart Rate:
                      <span className="text-[#0F67FE] ml-2">
                        {props.values.heartRate + 60}
                      </span>
                    </h3> */}
                    {/* range */}
                    <RangeInput
                      name="bloodPressureDias"
                      value={props.values.bloodPressureDias}
                      color="#FA4D5E"
                    />
                    <div className="mt-1 text-xs text-red-500 ">
                      <ErrorMessage name="bloodPressureDias" />
                    </div>
                  </div>
                  <div className="h-[90px]">
                    <div
                      className={
                        "flex items-center gap-2 rounded-lg border-[1px]  border-black/20 p-2 "
                      }
                    >
                      <MdPersonOutline className="ml-2 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:left-40" />
                      <Field
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full  px-2 py-2"
                      />
                    </div>
                    <div className="mt-1 text-xs text-red-500 ">
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                  <div className="mb-5 grid h-[160px] grid-rows-2 gap-y-5 md:h-[90px] md:grid-cols-2 md:grid-rows-1 md:gap-2 lg:mb-0">
                    <div className="">
                      <div className="flex items-center gap-2 rounded-lg border-[1px]  border-black/20 p-4">
                        <MdOutlineMailOutline className=" h-[20px] w-[20px] object-contain md:h-[25px] md:w-[25px] 2xl:left-40" />
                        <Field
                          type="email"
                          name="email"
                          placeholder="Work Email"
                          className="block w-full placeholder:text-sm md:placeholder:text-base"
                        />
                      </div>
                      <div className="mt-1 text-xs text-red-500 ">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center gap-2 rounded-lg border-[1px]  border-black/20 p-4">
                        <MdPhone className=" h-[20px] w-[20px] object-contain md:h-[25px] md:w-[25px] 2xl:left-40" />
                        <Field
                          type="tel"
                          name="mobile"
                          placeholder="Phone number"
                          pattern="^[0-9]*$"
                          maxLength={10}
                          minLength={10}
                          className="block w-full placeholder:text-sm md:placeholder:text-base"
                        />
                      </div>
                      <div className="mt-1 text-xs text-red-500">
                        <ErrorMessage name="mobile" />
                      </div>
                    </div>
                  </div>
                  {/* <div className="h-[90px]">
                    <div className="flex gap-2 rounded-lg border-[1px]  border-black/20 p-4 ">
                      <MdSettings className=" h-[20px] w-[20px] object-contain md:h-[25px] md:w-[25px] 2xl:left-40" />
                      <Field
                        as="select"
                        name="requirementType"
                        className="block w-full rounded-lg bg-white text-sm text-black/40 md:text-base"
                      >
                        <option value="" selected disabled hidden>
                          Please select your Crewmate requirements
                        </option>
                        <option value="Frontend Engineer">
                          Frontend Engineer
                        </option>
                        <option value="Backend Engineer">
                          Backend Engineer
                        </option>
                        <option value="Mobile Developer">
                          Mobile Developer
                        </option>
                        <option value="Full stack Engineer">
                          Full stack Engineer
                        </option>
                        <option value="DevOps Engineer">DevOps Engineer</option>
                        <option value="Testing-Manual">Testing-Manual</option>
                        <option value="Testing-Automation">
                          Testing-Automation
                        </option>
                        <option value="Designer">Designer</option>
                      </Field>
                    </div>
                    <div className="mt-1 text-xs text-red-500 ">
                      <ErrorMessage name="requirementType" />
                    </div>
                  </div> */}
                  <div className="h-[90px]">
                    <div className="flex gap-2 rounded-lg border-[1px]  border-black/20 p-4 ">
                      <MdOutlineTransgender className=" h-[20px] w-[20px] object-contain md:h-[25px] md:w-[25px] 2xl:left-40" />
                      <Field
                        component="select"
                        name="gender"
                        className="block w-full rounded-lg bg-white  text-sm text-black/40 md:text-base"
                      >
                        <option value="" selected disabled hidden>
                          Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Field>
                    </div>
                    <div className="mt-1 text-xs text-red-500 ">
                      <ErrorMessage name="gender" />
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-start gap-2 rounded-lg border-[1px]  border-black/20 p-3 2xl:p-4 ">
                      <MdChatBubbleOutline className=" w-[15px ] mt-1 h-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:left-40" />
                      <Field
                        component="textarea"
                        rows={5}
                        cols={40}
                        name="otherInfo"
                        placeholder="Tell us about your hiring requirements."
                        className=" block w-full placeholder:text-sm md:placeholder:text-base"
                        // className='w-full rounded-lg border p-4'
                      />
                    </div>
                  </div>
                  {/* <CustomCheckBox type='checkbox' name='acceptedTC' /> */}
                </div>
                {/* <button
                  type='submit'
                  disabled={props.isSubmitting}
                  className='rounded-large custom-button-new flex border'
                >
                  <span className='relative top-px text-sm font-bold '>
                    Submit
                  </span>
                  <ArrowRightIcon className='ml-2 h-4 w-4' />
                </button> */}
                {/* <div className='py-4'>
                  <CustomButton type='submit' className='w-full'>
                    Submit
                  </CustomButton>
                </div> */}
                <div className=" relative mb-5 mt-8 lg:mt-8 ">
                  <button
                    type="submit"
                    disabled={props.isSubmitting}
                    className="button-gradient group relative  w-full rounded-full px-10 py-3 text-center  transition-all duration-[400ms] hover:md:-translate-y-1"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default FormComponent;
