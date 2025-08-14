import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    helpType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen py-14 flex flex-col items-center justify-center bg-custom-lightblue">
      <h2 className="text-center text-xl lg:text-3xl font-bold mb-6">
        Do you require assistance?
      </h2>
      <div className="bg-white py-8 px-6 lg:py-10 lg:px-16 rounded-2xl shadow-lg w-80 lg:w-full max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Full Name & Email */}
          <div className="flex flex-col sm:flex-row gap-8">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="flex-1 rounded-full px-8 py-4 bg-custom-lightblue focus:outline-none placeholder:font-bold placeholder:text-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail Address"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 rounded-full px-8 py-4 bg-custom-lightblue focus:outline-none placeholder:font-bold placeholder:text-gray-500"
            />
          </div>

          {/* Dropdown */}
          <select
            name="helpType"
            value={formData.helpType}
            onChange={handleChange}
            className="w-full rounded-full px-8 py-4 bg-custom-lightblue focus:outline-none font-bold text-gray-500"
          >
            <option value="">What can we help you with ?</option>
            <option value="support">Customer Support</option>
            <option value="feedback">Feedback</option>
            <option value="technical">Technical Issue</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Type message here..."
            value={formData.message}
            onChange={handleChange}
            rows={8}
            className="w-full rounded-3xl px-8 py-8 bg-custom-lightblue focus:outline-none placeholder:font-bold placeholder:text-gray-500"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-md bg-[#00A17F] text-white rounded-full py-5 text-xl font-semibold hover:bg-[#049965] transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
