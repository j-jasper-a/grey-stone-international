"use client";

import { useState } from "react";
import Button from "../common/Button";
import Tag from "../common/Tag";

const Openings = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 sm:gap-8">
      <Tag title="Openings" />
      <div className="flex h-full flex-col justify-between gap-4 sm:gap-8">
        <p>
          Thank you for your interest in joining our team at Grey Stone
          International. We are always on the lookout for talented individuals
          like you to join us in the future. Please click the button below to
          view our current job openings, and feel free to submit your
          application for any positions that match your skills and career goals.
          We appreciate your proactive approach to exploring opportunities with
          us.
        </p>
        <div className="rounded-lg">
          <p className={`${isOpen ? "text-dark" : "text-transparent"}`}>
            There are currently no job openings. You can, however, still drop
            your CV in your inbox for future openings.
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row">
          <Button text="View Job Openings" onClick={() => setIsOpen(!isOpen)} />
          <Button text="Learn More" href="/#contact" />
        </div>
      </div>
    </div>
  );
};

export default Openings;
