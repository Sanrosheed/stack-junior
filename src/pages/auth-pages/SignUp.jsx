import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "../../assets/images/kid 2.png";
import Logo from "../../assets/images/stackJuniorLogo.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useAuth } from "../../contexts/authContext";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { Navigate } from "react-router-dom";
import { FaUserCheck, FaUserTie } from "react-icons/fa";
import { useToast } from "../../contexts/toastContext";

export default function SignUp() {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { showSuccess, showError } = useToast();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
        showSuccess("Account created successfully");
      } catch (err) {
        showError("Failed to create account. Try again.", err.message);
        setIsRegistering(false);
      }
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        // eslint-disable-next-line no-unused-vars
        doSignInWithGoogle().catch((err) => {
          setIsRegistering(false);
        });
      } catch (err) {
        showError("Google sign-in failed. Try again.", err.message);
        setIsRegistering(false);
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
              Create Account
            </h2>

            {/* Social Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                disabled={isRegistering}
                onClick={(e) => {
                  onGoogleSignIn(e);
                }}
                className="px-4 md:px-0 md:flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
              >
                <FcGoogle className="text-red-500" />
                <span className="text-xs md:text-sm font-medium">
                  Sign up with Google
                </span>
              </button>
              <button
                onClick={() => setIsAdmin((prev) => !prev)}
                className={`px-4 md:px-0 md:flex-1 flex items-center justify-center gap-2 
    border border-gray-300 rounded-lg py-2 cursor-pointer transition-colors duration-200
    ${
      isAdmin
        ? "bg-green-600 text-white hover:bg-green-700"
        : "bg-white text-gray-900 hover:bg-gray-50"
    }`}
              >
                <FaUserTie
                  className={`${isAdmin ? "text-white" : "text-gray-900"}`}
                />

                <span className="text-xs md:text-sm font-medium">
                  Sign up as admin
                </span>
                {/* <FaUserCheck /> */}
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
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                required
                placeholder="Full Name"
                className="border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
              />
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
                  autoComplete="new-password"
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
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  required
                  placeholder="Confirm Password"
                  className="border-b border-gray-300 focus:outline-none py-2 w-full placeholder-gray-400"
                />
                <span
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-0 top-2 cursor-pointer text-gray-400"
                >
                  {showConfirmPassword ? (
                    <IoMdEye className="w-5 h-5 text-gray-500" />
                  ) : (
                    <IoMdEyeOff className="w-5 h-5 text-gray-500" />
                  )}
                </span>
              </div>

              <button
                type="submit"
                className="mt-4 bg-custom-pink text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition"
              >
                {isRegistering ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            {/* Login link */}
            <p className="mt-4 text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <a href="/sign-in" className="text-custom-blue hover:underline">
                Log in
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
