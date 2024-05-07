interface DataType {
  heartRate: number;
  bloodPressureSys: number;
  bloodPressureDias: number;
  name: string;
  dob: string;
  gender: string;
}
const Model = (data: DataType) => {
  return (
    <div>
      <h4 className="mb-5 text-[#242E49]">
        Please confirm your details to continue.
      </h4>
      <div className="space-y-2 ">
        <div className="">
          <span className="font-semibold">Heart Rate: </span>
          <span className="">{data.heartRate} bpm</span>{" "}
        </div>
        <div className="font-semibold">Blood Pressure: </div>
        <div className="ml-2 font-medium text-sm">
          Systolic: <span className="">{data.bloodPressureSys} mmHg</span>{" "}
        </div>
        <div className="ml-2 font-medium text-sm">
          Diastolic: <span className="">{data.bloodPressureDias} mmHg</span>{" "}
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
  );
};

export default Model;
