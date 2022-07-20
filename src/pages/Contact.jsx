import React, { useEffect } from "react";
import Form from "../components/Form";

export default function Contact() {
  useEffect(() => {
    document.title = "FrontEnd Portfolio - Contact";
  }, []);
  return (
    <section className="form-section">
      <Form />
    </section>
  );
}
