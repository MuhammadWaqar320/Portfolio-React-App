import "./ContactUsComponent.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validationSchema } from "./../validation/contactFormValidationSchema";
import { useFormik } from "formik";

const ContactUsComponent = () => {
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
  const { errors, values, touched, handleSubmit, setFieldValue } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Values are: ", values);
      window.alert("Thanks for contacting us");
    },
  });
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
              value={values.name}
              onChange={(e) => setFieldValue("name", e.target.value)}
              onBlur={(e) => setFieldValue("name", e.target.value)}
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
              value={values.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
              onBlur={(e) => setFieldValue("email", e.target.value)}
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
              value={values.enquiry}
              onChange={(e) => setFieldValue("enquiry", e.target.value)}
                      >
                          
              {typeOfEnquiry.map((i) => (
                <option key={i} className="option">{i}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="input-field"
              value={values.message}
              onChange={(e) => setFieldValue("message", e.target.value)}
              onBlur={(e) => setFieldValue("message", e.target.value)}
            />
            {errors.message && touched.message ? (
              <p className="error-message">{errors.message}</p>
            ) : null}
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-class">
            Submit
          </Button>
        </Form>
      </div>
      <div className="col-sm-3"></div>
    </div>
  );
};

export default ContactUsComponent;
