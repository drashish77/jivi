import { DataType } from "../../utlis/Types";

const Model = ({
  data,
  setShowModal,
  finalSubmitHandler,
  isSubmitting,
}: {
  data: DataType;
  finalSubmitHandler: Function;
  setShowModal: Function;
  isSubmitting: any;
}) => {
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-10/12 md:w-1/2 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <h2 className="pt-5 pb-3 border-b ml-4">Preview</h2>

            <div className="px-5 pt-5">
              <h4 className="mb-5 text-[#242E49]">
                Please confirm your details to continue.
              </h4>
              <div className="space-y-5 ">
                <div className="">
                  <span className="font-semibold">Heart Rate: </span>
                  <span className="">{data.heartRate} bpm</span>{" "}
                </div>
                <div className="font-semibold">Blood Pressure: </div>
                <div className=" font-medium text-sm">
                  Systolic:{" "}
                  <span className="">{data.bloodPressureSys} mmHg</span>{" "}
                </div>
                <div className=" font-medium text-sm">
                  Diastolic:{" "}
                  <span className="">{data.bloodPressureDias} mmHg</span>{" "}
                </div>
                <div className="">
                  <span className="font-semibold">Name: </span>
                  <span className="">{data.name}</span>{" "}
                </div>
                <div className="">
                  <span className="font-semibold">Date of Birth: </span>
                  <span className="">{data.dob}</span>{" "}
                </div>{" "}
                <div className="">
                  <span className="font-semibold">Gender: </span>
                  <span className="capitalize">{data.gender}</span>{" "}
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <button
                className="p-1 ml-auto absolute right-3 top-3 rounded-full bg-red-500 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="flex justify-center items-center bg-transparent text-white mb-1 h-6 w-7 text-xl  outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>

            <div className="flex items-center justify-end p-6 gap-2 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="button-gradient group relativ bg-[#DCE1E8] text-white w-full rounded-xl px-10 py-5 text-center  transition-all duration-[400ms] font-bold hover:md:-translate-y-1 text-base"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Edit
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => finalSubmitHandler()}
                className="button-gradient group relativ bg-blue-700 text-white w-full rounded-xl px-10 py-5 text-center  transition-all duration-[400ms] font-bold hover:md:-translate-y-1 text-base"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Model;
