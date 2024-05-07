import { db } from "../../../firebase";
import uuid4 from "uuid4";
import { collection, addDoc } from "firebase/firestore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formSchema } from "./schema";
import RangeInput from "./RangeInput";
import { toast } from "react-toastify";
import { useState } from "react";
import Model from "../Model";
import { FormValues } from "../../../utlis/Types";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  let navigate = useNavigate();
  var id = uuid4();

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
    values: FormValues
    // actions: { resetForm: () => void }
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
    setData(payload);
    setShowModal(true);
  };
  const finalSubmitHandler = async () => {
    try {
      const docRef = await addDoc(collection(db, "userData"), {
        ...data,
      });

      if (docRef.id) {
        toast.success("Form Submitted!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/thanks");
        setShowModal(false);
      }
    } catch (error) {
      toast.error("Form submission failed, please try again!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
  };
  return (
    <div className={`relative   `}>
      <div className={`relative z-30 w-11/12 md:w-2/3 lg:w-1/3 mx-auto  `}>
        <h2 className="pt-5 pb-3 border-b ">Details</h2>
        <div className="">
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            validateOnChange={true}
            onSubmit={onSubmit}
          >
            {(props) => {
              // const { errors, values, touched } = props;
              const { values } = props;

              return (
                <Form className="">
                  {/* <div className="">{JSON.stringify(props.values)}</div> */}
                  <div className="">
                    <div className="mt-10">
                      <h3 className="font-bold text-lg mb-2 ">
                        Heart Rate:
                        <span className="text-[#0F67FE] ml-2">
                          {props.values.heartRate}
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
                          <option value="" label="Select a Gender">
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
                    <button
                      className="button-gradient group relativ bg-blue-700 text-white w-full rounded-xl px-10 py-5 text-center  transition-all duration-[400ms] hover:md:-translate-y-1 text-base"
                      type="submit"
                    >
                      Next
                    </button>
                  </div>
                  {showModal ? (
                    <Model
                      data={values}
                      isSubmitting={props.isSubmitting}
                      setShowModal={setShowModal}
                      finalSubmitHandler={finalSubmitHandler}
                    />
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
