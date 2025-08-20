"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "../components/Model";
import SigninForm from "../components/SignInForm";
import SignupForm from "../components/SignUpForm";

export default function Home() {
  const [isSigninOpen, setSigninOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">


      {/* Hero Section */}
      <div className="flex flex-1 items-center justify-between   gap-12 px-12 bg-[#748DAE]">
        {/* Left Section */}
        <div className="flex flex-col items-start max-w-lg">
          <h1 className="text-5xl font-bold mb-4 text-white">
            From Consultation to Care — All in One Place
          </h1>
          <p className="text-2xl mb-6 text-white">
            Your health, connected with technology
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setSignupOpen(true)}
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200"
            >
              Go to Signup
            </button>
            <button
              onClick={() => setSigninOpen(true)}
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200"
            >
              Go to Signin
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:block">
          <Image
            src="/1.jpg"
            alt="MediConnect illustration"
            width={700}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Popups */}
      <Modal isOpen={isSigninOpen} onClose={() => setSigninOpen(false)}>
        <SigninForm />
      </Modal>

      <Modal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)}>
        <SignupForm />
      </Modal>
    </div>
  );
}
