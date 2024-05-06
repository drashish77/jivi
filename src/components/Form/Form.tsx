// import "react-app-polyfill/ie11";
// import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Range, getTrackBackground } from "react-range";
interface Values {
  heartrate: number;
  firstName: string;
  lastName: string;
  email: string;
}
const sliderMarks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];
export const Basic = () => {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          heartrate: 1,
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <div className="">
            <label htmlFor="heartrate">Heart Rate</label>
            {/* <Field id="heartrate" name="heartrate" placeholder="John" /> */}
            <Field
              name="heartrate"
              min={80}
              max={150}
              step={1}
              defaultValue={16}
              valueLabelDisplay="auto"
              marks={sliderMarks}
              type="range"
              value={values.heartrate}
              //   onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="John" />
          </div>

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
