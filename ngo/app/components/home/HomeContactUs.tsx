"use client";
import Image from "next/image";
import Button from "../button/Button";
import { COLORS } from "@/app/constant/Constant";
import Input from "../input/Input";
import { useState } from "react";
import TextAreaInput from "../input/TextAreaInput";
import Wrapper from "../container-wrapper/ContainerWrapper";

export default function HomeContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleChange = (
    type: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (type === "firstName") {
      setFirstName(event.target.value);
      setError("");
    } else if (type === "lastName") {
      setLastName(event.target.value);
      setError("");
    } else if (type === "email") {
      setEmail(event.target.value);
      setError("");
    } else if (type === "message") {
      setMessage(event.target.value);
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;

    if (!firstName) {
      setError("Firstname is required");
      isValid = false;
      return;
    } else if (!lastName) {
      setError("LastName is required");
      isValid = false;
      return;
    } else if (!email) {
      setError("Email is required");
      isValid = false;
      return;
    } else if (!message) {
      setError("Message is required");
      isValid = false;
      return;
    }

    if (isValid) {
      setLoader(true);
      const newMessage = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      };

      try {
        // const response = await fetch("http://localhost:5000/api/v1/contact/", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(newMessage),
        // });

        // const result = await response.json();

        // if (!response.ok) {
        //   throw new Error(result.message);
        // }
        setIsSuccess(true);
        setSuccessMessage(
          "Message sent successfully! \nWe will get back to your shortly",
        );

        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        console.log(error);
        alert("Failed to send message.");
      } finally {
        setLoader(false);
      }
    }
  };

  return (
    <div className="w-full bg-white">
      <Wrapper>
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-8 py-16 bg-[#FCFCFC]">
          <div className="flex flex-col w-full gap-8 px-4 md:px-8">
            <h2
              className={`text-xl text-blue-500 font-bold ${COLORS.textColor}`}
            >
              GET IN TOUCH
            </h2>

            <h1 className="text-3xl font-bold text-black">
              Have a Question? {`We'd`} Love to Hear From You.
            </h1>

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  inputType="text"
                  placeHolder="Firstname"
                  value={firstName}
                  onChange={(event) => handleChange("firstName", event)}
                />
                <Input
                  inputType="text"
                  placeHolder="Lastname"
                  value={lastName}
                  onChange={(event) => handleChange("lastName", event)}
                />
              </div>
              <Input
                inputType="email"
                placeHolder="Email"
                value={email}
                onChange={(event) => handleChange("email", event)}
              />
              <TextAreaInput
                placeHolder="Message"
                value={message}
                onChange={(event) => handleChange("message", event)}
              />
              {error && <p className="text-red-500">{error}</p>}
              {isSuccess && <p className="text-green-500">{successMessage}</p>}
              <div>
                <Button text="Send message" onClick={() => {}} />
              </div>
            </form>
          </div>

          <div className="flex flex-col w-full">
            <div className={`flex  white w-full h-100 bg-blue-500`}>
              <Image
                src={"/images/house.JPG"}
                alt=""
                width={600}
                height={150}
                className="-ml-2 mt-2"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
