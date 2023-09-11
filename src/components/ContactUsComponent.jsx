import "./ContactUsComponent.css";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validationSchema } from "./../validation/contactFormValidationSchema";
import { useFormik } from "formik";
import useSubmit from "../hooks/useSubmit";

const ContactUsComponent = () => {
  const { isLoading, response, submit } = useSubmit();

  const typeOfEnquiry = [
    "Freelance project proposal",
    "Personal project proposal",
    "Client project proposal",
  ];
  const initialValues = {
    name: "",
    email: "",
    enquiry: "",
    message: "",
  };
  const { errors, handleSubmit, touched, getFieldProps } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      await submit("http://fakeapi/user/,", values);
      actions.resetForm({
        name: "",
        email: "",
        enquiry: "Freelance project proposal",
        message: "",
      });
    },
  });
  useEffect(() => {
    if (response?.message) {
      alert(response?.message);
    }
  }, [response]);
  return (
    <div id="contactSection" className="contact-section row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <Form className="form-class" onSubmit={handleSubmit}>
          <h1 className="heading">Contact me</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              className="input-field"
              {...getFieldProps("name")}
            />
            {errors.name && touched.name ? (
              <p className="error-message">{errors.name}</p>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              className="input-field"
              {...getFieldProps("email")}
            />
            {errors.email && touched.email ? (
              <p className="error-message">{errors.email}</p>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Type of enquiry</Form.Label>
            <Form.Select
              className="input-field"
              aria-label="Default select example"
              {...getFieldProps("enquiry")}
            >
              {typeOfEnquiry.map((i) => (
                <option key={i} className="option">
                  {i}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="input-field"
              {...getFieldProps("message")}
            />
            {errors.message && touched.message ? (
              <p className="error-message">{errors.message}</p>
            ) : null}
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-class">
            <div className="btn-child">
              <div>Submit</div>
              {isLoading ? (
                <div className="spinner-border" role="status"></div>
              ) : null}
            </div>
          </Button>
        </Form>
      </div>
      <div className="col-sm-3"></div>
    </div>
  );
};

export default ContactUsComponent;
