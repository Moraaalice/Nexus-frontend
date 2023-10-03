'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{
    confirmPassword?: string;
  }>({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = {} as {
      confirmPassword?: string;
    };

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      setSuccessMessage(null);
    } else {
      setSuccessMessage("You have been successfully registered.");
    }

    setErrors(newErrors);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePasswordConfirmation = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      <div className="mt-10 flex justify-center items-center">
        <div className="bg-white p-9 mb-20 rounded shadow-md">
          <img
            className="w-50 h-20 top-0 items-center mt-0 ml-20 justify-center"
            src="./niu.png"
            alt="Logo"
          />
          <br />
          <form className="max-w-md">
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full mb-4 p-3 border rounded"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mb-4 p-3 border rounded"
              required
            />
            <div className="mb-4 flex justify-center">
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full mb-4 p-3 border rounded"
                required
              />
            </div>
            <div className="mb-4 flex justify-center">
              <input
                type="text"
                id="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full mb-4 p-3 border rounded"
                required
              />
            </div>
            <div className="mb-4 flex relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 pr-10 border rounded"
                required
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                onClick={handleTogglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className="text-gray-400 hover:text-gray-600"
                />
              </span>
            </div>
            <div className="relative mb-4">
              <input
                className="w-full p-3 pr-10 border rounded"
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                onClick={handleTogglePasswordConfirmation}
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEye : faEyeSlash}
                  className="text-gray-400 hover:text-gray-600"
                />
              </span>
            </div>
          </form>

          {errors.confirmPassword && (
            <p
              className={`text-xs ${
                errors.confirmPassword ? "text-red-500" : "text-green-500"
              }`}
            >
              {errors.confirmPassword}
            </p>
          )}

          {successMessage && (
            <p className="text-green-500 text-xs">{successMessage}</p>
          )}

          <p className="text-center">
            Already a member?{" "}
            <Link className="text-blue-500" href="/login">
              Login
            </Link>
          </p>
          <br />
          <button
            className="w-1/2 bg-blue-800 flex justify-center text-white p-3 rounded-full hover:bg-blue-700 text-xl font-bold mx-auto"
            type="submit"
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;

