import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "../../assets/images/kid 2.png";
import Logo from "../../assets/images/stackJuniorLogo.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { useToast } from "../../contexts/toastContext";

export default function SignIn() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { showSuccess, showError } = useToast();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        showSuccess("Signed in successfully");
      } catch (err) {
        showError(
          "Failed to sign in. Please check your credentials.",
          err.message
        );
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        showSuccess("Signed in successfully");
      } catch (err) {
        showError("Google sign-in failed. Try again.", err.message);
        setIsSigningIn(false);
      }
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
                className="px-4 md:px-0 md:flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition cursor-pointer"
              >
                <FcGoogle className="text-red-500" />
                <span className="text-xs md:text-sm font-medium">
                  Sign in with Google
                </span>
              </button>
              <button className="px-4 md:px-0 md:flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
                <FaUserTie className="text-gray-900" />
                <span className="text-xs md:text-sm font-medium">
                  Sign in as admin
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
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  placeholder="Password"
                  className="border-b border-gray-300 focus:outline-none py-2 w-full placeholder-gray-400"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-0 top-2 cursor-pointer text-gray-400"
                >
                  {showPassword ? (
                    <IoMdEye className="w-5 h-5 text-gray-500" />
                  ) : (
                    <IoMdEyeOff className="w-5 h-5 text-gray-500" />
                  )}
                </span>
              </div>

              <button
                type="submit"
                disabled={isSigningIn}
                className="mt-4 text-xl bg-custom-pink text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
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
