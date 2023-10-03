'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";
import  Link from "next/link";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";



interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string
  }>({});
  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-gray-200">
      <div className="h-screen  flex flex-col">
       <div className="flex-1 mt-20 flex justify-center items-center">
          <div className="bg-white w-1/4 p-9 mb-20 rounded shadow-md">
          <Image src={"/images/niu.png"} 
           alt='logo'
           width={150}
           height={20}/>
            <p className="justify-center items-center flex">&apos;We are excited to see you again&apos;text.</p>
                <br/>
          <br />
          <form className="max-w-md">
            <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleInputChange}
              className="w-full mb-4 p-3 border rounded"
              required/>
            <div className="mb-4 flex justify-center">
          </div>
            <div className="mb-4 flex relative">
              <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={formData.password} onChange={handleInputChange} className="w-full p-3 pr-10 border rounded"
                required/>
             <span
    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
    onClick={handleTogglePasswordVisibility}>
    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}
      className="text-gray-400 hover:text-gray-600"
    />
  </span>
  <br/>
            </div>
          </form>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
          {errors.password && (<p className="text-red-500 text-xs">{errors.password}</p>
          )}
          <br />
          <p className="text-center">&apos;Dont have an account?&apos;text. <Link className="text-blue-500" href="/register">&apos;Sign Up&apos;text.</Link></p>
           <br/>
            <button
  className="w-1/2 bg-blue-800 flex justify-center text-white p-3 rounded-full hover:bg-blue-700 text-xl font-bold mx-auto"type="submit">&apos;Login&apos;text.</button>
        </div>
      </div>
      <br/>
      <Footer/>
    </div>
    </div>
  );
};
export default Login;

