import React, { useState } from "react";
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
    reset,
    formState: { errors },
  } = useForm();
  const [{ data, loading }, setState] = useState({
    data: {},
    loading: false,
    error: false,
  });

  const onSubmit = (formData) => {
    setState({ data, error: false, loading: true });

    fetch("https://formspree.io/f/mzbjqvnr", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
      },
    })
      .then((data) => {
        reset();

        setState({
          loading: false,
          error: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          loading: false,
          error,
          data,
        });
      });
  };

  const showForm = (e) => {
    if (e.type === "keydown" && e.keyCode !== 13) return;

    setState({ data: {}, loading: false, error: false });
  };

  return (
    <section className={`${styles.contactMe}`}>
      <div className="container">
        {data.ok ? (
          <Animate>
            <h2>Thank You!</h2>
            <p>
              I'll writte you back in no time, thanks again for taking your time
              to contact me.
            </p>

            <p>
              Wanted to say something else?{" "}
              <span
                role="button"
                tabIndex={0}
                onClick={showForm}
                onKeyDown={showForm}
              >
                Click Here
              </span>
            </p>
          </Animate>
        ) : (
          <>
            <Animate>
              <h2>Contact</h2>
            </Animate>
            <Animate>
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset aria-disabled={loading}>
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
                      <span className="errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className={styles.inputContainer}>
                    <Label
                      htmlFor="email"
                      label="Email:"
                      value={watch("email")}
                    >
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
                              isEmail(value) ||
                              "This doesn't look like an email"
                            );
                          },
                        })}
                      />
                    </Label>
                    {errors.email && (
                      <span className="errorMessage">
                        {errors.email.message}
                      </span>
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
                      <span className="errorMessage">
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                  <button type="submit" className="btn btn-secondary">
                    SEND{loading && "ING"}
                  </button>
                </fieldset>
              </form>
            </Animate>
          </>
        )}
      </div>
    </section>
  );
};

export default ContactMe;
