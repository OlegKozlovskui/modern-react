import React from 'react';
import { Field, FieldAttributes, Form, Formik, useField } from 'formik';
import { TextField, Button, Checkbox, Radio, FormControlLabel } from '@material-ui/core';
import * as yup from 'yup';

type MyRadioProps = { label: string } & FieldAttributes<{}>;

const validationSchema = yup.object({
  firstName: yup.string().required().max(10),
});

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);

  return (
    <FormControlLabel {...field} control={<Radio />} label={label} />
  )
};

const MyTextField: React.FC<FieldAttributes<{}>> = (props) => {
  const [field, meta] = useField<{}>(props);
  const errorText= meta.error && meta.touched ? meta.error : '';

  return (
    <TextField {...field} helperText={errorText} error={!!errorText} />
  )
};

const FormikComponent: React.FC = () => {

  return (
    <div>
      <Formik
        initialValues={{
          firstName: 'bob',
          lastName: 'Alice',
          isTall: false,
          cookies: [],
          yogurt: '',
          pets: [{ type: 'cat', name: 'Dino' }]
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log(data);
        setSubmitting(false);
      }}>
        {({ values, isSubmitting, errors }) => (
          <Form>
            <div>
              <MyTextField
                name="firstName"
                type="input"
              />
            </div>
            <div>
              <Field
                name="lastName"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Field
                name="isTall"
                type="checkbox"
                as={Checkbox}
              />
            </div>
            <div>
              Cookies:
              <Field
                name="cookies"
                type="checkbox"
                value="Snickers"
                as={Checkbox}
              />
              <Field
                name="cookies"
                type="checkbox"
                value="Mars"
                as={Checkbox}
              />
            </div>
            <div>
              Yogurt:
              <MyRadio
                name="yogurt"
                type="radio"
                value="peach"
                label="Peach"
              />
              <MyRadio
                name="yogurt"
                type="radio"
                value="apple"
                label="Apple"
              />
            </div>
            <div>
              <Button disabled={isSubmitting} type="submit">Submit</Button>
            </div>
            <pre>
              {JSON.stringify(values, null, 2)}
            </pre>
            <pre>
              {JSON.stringify(errors, null, 2)}
            </pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponent;
