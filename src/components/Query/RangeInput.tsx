import { Field } from "formik";

interface RangeInputType {
  value: number;
  min: number;
  max: number;
  color: string;
  name: string;
}
const RangeInput = ({ value, color, name, min, max }: RangeInputType) => {
  const progress = (value / 60) * 100;
  return (
    <div className={"flex items-center  gap-2 rounded-lg  p-2 relative"}>
      <Field
        type="range"
        name={name}
        min={0}
        max={60}
        style={{
          background: `linear-gradient(to right, ${color} ${progress}%, #DCE1E8 ${progress}%)`,
        }}
        className={`slider w-full h-2  cursor-pointer appearance-none rounded-sm ${
          color !== "#FA4D5E" ? "sliderBlue" : "sliderRed"
        } [&::-webkit-slider-thumb]:!bg-primary`}
      />
      <span
        style={{ insetInlineStart: `${Math.floor(progress)}%` }}
        className={`text-md font-semibold -z-10 absolute   top-6 `}
      >
        {value + 60}
      </span>
      <span
        style={{ borderColor: color }}
        className={`text-sm -z-10 absolute  start-2 -top-0 border-l-2 border h-2`}
      ></span>
      <span
        style={{ borderColor: progress > 33.33 ? color : "" }}
        className="text-sm -z-10 absolute  start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -top-0 border-l-2 border h-2"
      ></span>
      <span
        style={{ borderColor: progress > 66 ? color : "" }}
        className="text-sm -z-10 absolute  start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -top-0 border-l-2 border h-2"
      ></span>
      <span
        style={{ borderColor: progress > 99 ? color : "" }}
        className="text-sm -z-10 absolute  end-2 -top-0 border-l-2 border h-2"
      ></span>

      <span
        className="text-sm text-gray-500  absolute start-0 -bottom-6"
        style={{ display: progress === 0 ? "none" : "" }}
      >
        {min}
      </span>
      {/* <span className="text-sm text-gray-500  absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
        80
      </span>
      <span className="text-sm text-gray-500  absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
        100
      </span> */}
      <span
        className="text-sm text-gray-500  absolute end-0 -bottom-6"
        style={{ display: progress === 100 ? "none" : "" }}
      >
        {">"} {max}
      </span>
    </div>
  );
};

export default RangeInput;
