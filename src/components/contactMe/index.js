import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

import Label from "../label";
import Animate from "../animate";
import * as styles from "./contactMe.module.css";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <section className={`${styles.contactMe}`}>
      <div className="container">
        <Animate>
          <h2>Contact</h2>
        </Animate>

        <Animate>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputContainer}>
              <Label htmlFor="name" label="Name:" value={watch("name")}>
                <input
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Don't forget your name",
                    },
                  })}
                />
              </Label>
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
            </div>
            <div className={styles.inputContainer}>
              <Label htmlFor="email" label="Email:" value={watch("email")}>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Don't forget your email",
                    },
                    validate: (value) => {
                      return (
                        isEmail(value) || "This doesn't look like an email"
                      );
                    },
                  })}
                />
              </Label>
              {errors.email && (
                <span className="errorMessage">{errors.email.message}</span>
              )}
            </div>
            <div className={styles.inputContainer}>
              <Label
                htmlFor="subject"
                label="Subject:"
                value={watch("subject")}
              >
                <input id="subject" {...register("subject")} />
              </Label>
            </div>
            <div className={styles.inputContainer}>
              <Label
                htmlFor="message"
                label="Message:"
                value={watch("message")}
              >
                <textarea
                  id="message"
                  maxLength="1000"
                  {...register("message")}
                />
              </Label>
              {errors.message && (
                <span className="errorMessage">{errors.message.message}</span>
              )}
            </div>
            <button type="submit" className="btn btn-secondary">
              Send
            </button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default ContactMe;
