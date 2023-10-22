"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Tag from "../common/Tag";

const Form = () => {
  const [state, handleSubmit] = useForm("xwkdwdlz");
  if (state.succeeded) {
    return (
      <div className="lg:col-span-2">
        <p>Thank you for your message. We will get back to you shortly.</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:col-span-2">
      <Tag title="Write to us" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-8">
        {/* Name */}
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="custom-form form-input"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          {/* Company */}
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="font-bold">
              Company
            </label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Your Company"
              required
              className="custom-form form-input"
            />
            <ValidationError
              prefix="Company"
              field="company"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="custom-form form-input"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          {/* Position */}
          <div className="flex flex-col gap-2">
            <label htmlFor="position" className="font-bold">
              Position
            </label>
            <select
              name="position"
              id="position"
              defaultValue={"Select"}
              required
              className="custom-form form-select"
            >
              {/* <option value="" disabled>
                Select
              </option> */}
              <option value="Buyer" className="custom-select-option">
                Buyer
              </option>
              <option value="Supplier" className="custom-select-option">
                Supplier
              </option>
              <option value="Job Seeker" className="custom-select-option">
                Job Seeker
              </option>
              <option value="Other" className="custom-select-option">
                Other
              </option>
            </select>
          </div>
        </div>
        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            className="custom-form form-textarea min-h-[112px]"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        {/* Submit Button */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 lg:flex-row">
          <p className="w-auto font-bold lg:w-full">All fields are required.</p>
          <button
            type="submit"
            disabled={state.submitting}
            className="rounded-lg border-2 border-brand-1 bg-brand-1 px-8 py-4 font-bold text-light"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
