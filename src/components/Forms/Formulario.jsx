import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  fullname: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

export const Formulario = () => {
  return (
    <div className="register-form">
      <Formik
        initialValues={initialValues}
        validationSchema={this.validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({ errors, touched, resetForm }) => (
          <Form>
            <div className="form-group">
              <label>Full Name</label>
              <Field
                name="fullname"
                type="text"
                className={
                  "form-control" +
                  (errors.fullname && touched.fullname ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="fullname"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username"> Username </label>
              <Field
                name="username"
                type="text"
                className={
                  "form-control" +
                  (errors.username && touched.username ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email"> Email </label>
              <Field
                name="email"
                type="email"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password"> Password </label>
              <Field
                name="password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword"> Confirm Password </label>
              <Field
                name="confirmPassword"
                type="password"
                className={
                  "form-control" +
                  (errors.confirmPassword && touched.confirmPassword
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group form-check">
              <Field
                name="acceptTerms"
                type="checkbox"
                className={
                  "form-check-input" +
                  (errors.acceptTerms && touched.acceptTerms
                    ? " is-invalid"
                    : "")
                }
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                I have read and agree to the Terms
              </label>
              <ErrorMessage
                name="acceptTerms"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="btn btn-warning float-right"
              >
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
