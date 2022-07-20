import React from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaWhatsappSquare,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ErrorMessage } from "@hookform/error-message";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const netlify = useNetlifyForm({
    name: "react-hook-form",
    action: "/thanks",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      console.log("Successfully sent form data to Netlify Server");
    },
  });

  const onSubmit = (data) => netlify.handleSubmit(null, data);

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

  return (
    <div className="form-container">
      <NetlifyFormProvider {...netlify} className="form-container">
        <NetlifyFormComponent
          className="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Honeypot />
          {netlify.success && (
            <p sx={{ variant: "alerts.success", p: 3 }}>
              Thanks for contacting us!
            </p>
          )}
          {netlify.error && (
            <p sx={{ variant: "alerts.muted", p: 3 }}>
              Sorry, we could not reach servers. Because it only works on
              Netlify,
            </p>
          )}
          <h1 className="form-heading">Get in touch</h1>
          <div className="input-container">
            <label
              className="form-icon"
              htmlFor="name"
              sx={{ variant: "forms.label" }}
            >
              <FaUserAlt />
            </label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              {...register("Full Name", {
                required: "Full Name is required",
                maxLength: 80,
              })}
              sx={{
                variant: "forms.input",
              }}
            />
            {/* <ErrorMessage errors={errors} name="Full Name" as="p" /> */}

            <ErrorMessage
              errors={errors}
              name="Full Name"
              render={({ message }) => <p>{message}</p>}
            />
            {/* <ErrorMessage errors={errors} name="Full Name" as="p" /> */}
            {/* {errors.email && (
              <div className="error-msg" sx={{ variant: 'text.error' }}>{errors.email.message}</div>
            )} */}
          </div>

          <div className="input-container">
            <label
              className="form-icon"
              htmlFor="email"
              sx={{ variant: "forms.label" }}
            >
              <FaEnvelope />
            </label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              {...register("Email", {
                required: "Email is required",
                pattern: EMAIL_REGEX,
              })}
              sx={{
                variant: "forms.input",
              }}
            />
            {/* <ErrorMessage errors={errors} name="Email" as="p" /> */}

            <ErrorMessage
              errors={errors}
              name="Email"
              render={({ message }) => <p>{message}</p>}
            />
            {/* {errors.email && (
              <div className="error-msg" sx={{ variant: 'text.error' }}>{errors.email.message}</div>
            )} */}
          </div>
          <div className="input-container">
            <label
              className="form-icon"
              htmlFor="message"
              sx={{ variant: "forms.label" }}
            >
              <FaCommentDots />
            </label>
            <textarea
              rows="10"
              className="input"
              name="message"
              id="message"
              placeholder="Message"
              {...register("Message", {
                required: "Please enter your concern",
              })}
              sx={{
                variant: "forms.input",
              }}
            />
            {/* <ErrorMessage errors={errors} name="Message" as="p" /> */}

            <ErrorMessage
              errors={errors}
              name="Message"
              render={({ message }) => <p>{message}</p>}
            />
            {/* {errors.email && (
              <div className="error-msg" sx={{ variant: 'text.error' }}>{errors.email.message}</div>
            )} */}
          </div>
          <div sx={{ pt: 3 }} className="btn-container">
            {/* <button onClick={() => console.log(errors)}>242</button> */}
            <button
              type="submit"
              className="send-btn"
              sx={{ variant: "buttons.success" }}
            >
              <FaPaperPlane className="send-icon" />
              Send
            </button>
          </div>
        </NetlifyFormComponent>
      </NetlifyFormProvider>
      <div className="additional-info">
        <h2>You can also contact me on</h2>
        <div className="info">
          <p className="info-container">
            <SiGmail className="info-icon" />
            maaz.ahmed786242@gmail.com
          </p>
          <p className="info-container">
            <FaWhatsappSquare className="info-icon" />
            (+92) 312 2362907
          </p>
          <a
            href="https://www.facebook.com/mmaaz.ahmed.5030/"
            className="info-container"
          >
            <FaFacebook className="info-icon" />
            <p>Facebook</p>
          </a>
          <a href="https://github.com/Drago78624" className="info-container">
            <FaGithub className="info-icon" />
            <p>Github</p>
          </a>
        </div>
      </div>
    </div>
  );
}
