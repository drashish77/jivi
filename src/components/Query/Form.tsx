import { db } from "../../../firebase";
import uuid4 from "uuid4";
import { collection, addDoc } from "firebase/firestore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formSchema } from "./schema";

import RangeInput from "./RangeInput";
import { toast } from "react-toastify";
import { useState } from "react";
import Model from "../Model";

const FormComponent = () => {
  const [showModal, setShowModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };
  var id = uuid4();
  interface FormValues {
    name: string;
    dob: string;
    heartRate: number;
    bloodPressureSys: number;
    bloodPressureDias: number;
    gender: string;
    id: string;
  }
  const initialValues: FormValues = {
    name: "",
    dob: "",
    heartRate: 80,
    bloodPressureSys: 140,
    bloodPressureDias: 75,
    gender: "",
    id: "",
  };
  const onSubmit = async (
    values: FormValues,
    actions: { resetForm: () => void }
  ) => {
    const payload = {
      id: id,
      heartRate: values.heartRate,
      bloodPressureSys: values.bloodPressureSys,
      bloodPressureDias: values.bloodPressureDias,
      name: values.name,
      dob: values.dob,
      gender: values.gender,
    };

    try {
      const docRef = await addDoc(collection(db, "userData"), {
        ...payload,
      });
      toast("Form Submitted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setShowModal(false);
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
    // console.log({ docRef });
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
    <div className={`relative   `}>
      <div className={`relative z-30 w-full md:w-2/3 lg:w-1/3 mx-auto  `}>
        <div className="">
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={onSubmit}
          >
            {(props) => {
              const { errors, values, touched } = props;
              console.log("first", errors);

              return (
                <Form className="">
                  <div className="">{JSON.stringify(props.values)}</div>
                  <div className="">
                    <div className="mt-10">
                      <h3 className="font-bold text-lg mb-2 ">
                        Heart Rate:
                        <span className="text-[#0F67FE] ml-2">
                          {props.values.heartRate + 60}
                        </span>
                      </h3>
                      <RangeInput
                        value={props.values.heartRate}
                        name="heartRate"
                        color="#0F67FE"
                        min={60}
                        max={120}
                      />
                      <div className="mt-1 text-xs text-red-500 ">
                        <ErrorMessage name="heartRate" />
                      </div>
                    </div>
                    <div className="mt-10">
                      <h3 className="font-bold text-lg mb-2 ">
                        Blood pressure:
                        <span className="text-[#0F67FE] ml-2">
                          {props.values.bloodPressureSys}
                        </span>
                      </h3>
                      <h3 className=" text-md mb-2 ">
                        Systolic:
                        <span className="text-[#0F67FE] ml-2">
                          {props.values.bloodPressureSys}
                        </span>
                      </h3>
                      <RangeInput
                        value={props.values.bloodPressureSys}
                        color="#FA4D5E"
                        name="bloodPressureSys"
                        min={120}
                        max={150}
                      />
                      <div className="mt-1 text-xs text-red-500 ">
                        <ErrorMessage name="bloodPressureSys" />
                      </div>
                    </div>
                    <div className="mt-10">
                      <h3 className=" text-md mb-2 mt-8">
                        Diastolic:
                        <span className="text-[#0F67FE] ml-2">
                          {props.values.bloodPressureDias}
                        </span>
                      </h3>
                      <RangeInput
                        name="bloodPressureDias"
                        value={props.values.bloodPressureDias}
                        color="#FA4D5E"
                        min={60}
                        max={80}
                      />
                      <div className="mt-1 text-xs text-red-500 ">
                        <ErrorMessage name="bloodPressureDias" />
                      </div>
                    </div>
                    <div className="mt-10 relative">
                      <label
                        htmlFor="name"
                        className="text-sm font-extrabold text-[#242E49]"
                      >
                        Name <span className="text-[#DA1E2E] font-bold">*</span>{" "}
                      </label>
                      <div
                        className={
                          "flex items-center gap-2 rounded-lg border-[1px]  border-black/20 p-2 mt-2"
                        }
                      >
                        <img
                          src="/user.svg"
                          alt=""
                          className="ml-2 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:left-40"
                        />

                        <Field
                          type="text"
                          name="name"
                          placeholder="Please enter your name"
                          className="w-full  px-2 py-2 focus:outline-none"
                        />
                      </div>
                      <div className="absolute mt-1 text-xs text-red-500 ">
                        <ErrorMessage name="name" />
                      </div>
                    </div>
                    <div className="mt-8 relative">
                      <label
                        htmlFor="dob"
                        className="text-sm font-extrabold text-[#242E49]"
                      >
                        Date of Birth
                        <span className="text-[#DA1E2E] font-bold"> *</span>
                      </label>{" "}
                      <div className="flex items-center gap-2 rounded-lg border-[1px]  border-black/20 p-4 mt-2">
                        <img
                          src="/calender.svg"
                          alt=""
                          className="mr-2 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:left-40"
                        />

                        <Field
                          type="date"
                          name="dob"
                          placeholder="Date of birth"
                          className="block w-full placeholder:text-sm md:placeholder:text-base focus:outline-none"
                        />
                      </div>
                      <div className="absolute mt-1 text-xs text-red-500 ">
                        <ErrorMessage name="dob" />
                      </div>
                    </div>

                    <div className="mt-8 relative">
                      <label
                        htmlFor="gender"
                        className="text-sm font-extrabold text-[#242E49]"
                      >
                        Gender
                        <span className="text-[#DA1E2E] font-bold"> *</span>
                      </label>
                      <div className="flex gap-2 rounded-lg border-[1px]  border-black/20 p-4 mt-2">
                        <img
                          src="/gender.svg"
                          alt=""
                          className="mr-2 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:left-40"
                        />

                        <Field
                          component="select"
                          name="gender"
                          className=" block focus:outline-none w-full rounded-lg bg-white  text-sm text-black/40 md:text-base"
                        >
                          <option value="" label="Select a color">
                            Select a gender{" "}
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Field>
                      </div>
                      <div className="absolute mt-1 text-xs text-red-500 ">
                        <ErrorMessage name="gender" />
                      </div>
                    </div>
                  </div>

                  <div className=" relative mb-5 mt-8 lg:mt-8 ">
                    {/* <button
                      disabled={!errors}
                      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => !errors && setShowModal(true)}
                    >
                      Edit
                    </button> */}
                    <button
                      type="submit"
                      // type="button"
                      disabled={!props.errors}
                      className="button-gradient group relativ bg-blue-700 text-white w-full rounded-xl px-10 py-5 text-center  transition-all duration-[400ms] hover:md:-translate-y-1 text-base"
                    >
                      Next
                    </button>
                    {/* <button
                      type="submit"
                      disabled={props.isSubmitting}
                      className="button-gradient group relativ bg-blue-700 text-white w-full rounded-xl px-10 py-5 text-center  transition-all duration-[400ms] hover:md:-translate-y-1 text-base"
                    >
                      Next
                    </button> */}
                  </div>
                  {showModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                              <Model {...values} />
                              {/* <h3 className="text-xl font-semibold">
                                Please confirm your details to continue.
                              </h3> */}
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            {/* <div className="relative p-6 flex-auto">
                              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                I always felt like I could do anything. That’s
                                the main thing people are controlled by!
                                Thoughts- their perception of themselves!
                                They're slowed down by their perception of
                                themselves. If you're taught you can’t do
                                anything, you won’t do anything. I was taught I
                                could do everything.
                              </p>
                            </div> */}
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button
                                // className="bg-[#DCE1E8]/90 text-white active:bg-[#DCE1E8] font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                className="bg-[#DCE1E8]/90 w-1/2 text-white active:bg-[#DCE1E8] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Edit
                              </button>
                              {/* <button
                                className="bg-[#0F67FE]/90 w-1/2 text-white active:bg-[#0F67FE] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                                disabled={props.isSubmitting}
                                onClick={() => setShowModal(false)}
                              >
                                Submit
                              </button> */}
                              <button
                                type="submit"
                                disabled={props.isSubmitting}
                                // onClick={() =>
                                //   setTimeout(function () {
                                //     setShowModal(false);
                                //   }, 2000)
                                // }
                                className="button-gradient group relativ bg-blue-700 text-white w-full rounded-xl px-10 py-5 text-center  transition-all duration-[400ms] hover:md:-translate-y-1 text-base"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
