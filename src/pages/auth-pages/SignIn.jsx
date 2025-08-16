import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "../../assets/images/kid 2.png";
import Logo from "../../assets/images/stackJuniorLogo.png";
import { IoMdEye } from "react-icons/io";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

export default function SignIn() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
      //   to handle errors
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      // eslint-disable-next-line no-unused-vars
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
      });
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <div className="md:flex min-h-screen bg-white">
        {/* Left Side */}
        <div className="md:w-1/2 bg-custom-blue flex flex-col justify-center p-8">
          <img
            src={Logo}
            alt="Stack Junior Logo"
            className="w-40 h-10 md:w-48 md:h-12 md:object-cover"
          />
          <div className="mt-10">
            <img src={Image} alt="Stack Junior Image" className="w-full" />
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col justify-center px-12">
          <div className="w-full max-w-md mx-auto">
            <div className="flex justify-end text-gray-500 text-sm mb-4">
              English ( UK ) <span className="ml-1">▼</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Log Into Your Account
            </h2>

            {/* Social Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                disabled={isSigningIn}
                onClick={(e) => {
                  onGoogleSignIn(e);
                }}
                className="px-4 md:px-0 md:flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
              >
                <FcGoogle className="text-red-500" />
                <span className="text-xs md:text-sm font-medium">
                  Sign in with Google
                </span>
              </button>
              <button className="px-4 md:px-0 md:flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
                <FaFacebook className="text-blue-600" />
                <span className="text-xs md:text-sm font-medium">
                  Sign in with Facebook
                </span>
              </button>
            </div>

            {/* divider */}
            <div className="flex items-center mb-6">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="mx-4 text-gray-400 text-sm">- OR -</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                placeholder="E-mail Address"
                className="border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
              />
              <div className="relative">
                <input
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  placeholder="Password"
                  className="border-b border-gray-300 focus:outline-none py-2 w-full placeholder-gray-400"
                />
                <span className="absolute right-0 top-2 cursor-pointer text-gray-400">
                  <IoMdEye className="w-5 h-5 text-gray-500" />
                </span>
              </div>

              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSigningIn}
                className="mt-4 text-xl bg-custom-pink text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition"
              >
                {isSigningIn ? "Signing In..." : "Sign In"}
              </button>
            </form>

            {/* Login link */}
            <p className="mt-4 text-sm text-gray-500 text-center">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-custom-blue hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// bg-[#b2e0df]
//  <IoMdEyeOff className="w-5 h-5 text-gray-500" />
