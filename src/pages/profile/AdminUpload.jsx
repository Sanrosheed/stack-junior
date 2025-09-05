// src/components/UploadForm.js
import { useState } from "react";
import { db } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function AdminUpload({ onUpload }) {
  // Form states
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [lectures, setLectures] = useState("");
  const [projects, setProjects] = useState("");
  const [description, setDescription] = useState("");

  // File states
  const [coverImage, setCoverImage] = useState(null);
  const [courseFile, setCourseFile] = useState(null);

  const [loading, setLoading] = useState(false);

  // Handle file changes separately
  const handleCoverChange = (e) => setCoverImage(e.target.files[0]);
  const handleCourseFileChange = (e) => setCourseFile(e.target.files[0]);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "testing");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djanngcku/auto/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) throw new Error("Upload to Cloudinary failed");

    const data = await res.json();
    return {
      url: data.secure_url,
      type: data.resource_type,
    };
  };

  const handleUpload = async () => {
    if (!coverImage || !courseFile) {
      alert("Please select both cover image and course material.");
      return;
    }

    setLoading(true);

    try {
      // Upload files
      const coverData = await uploadToCloudinary(coverImage);
      const courseData = await uploadToCloudinary(courseFile);

      // Save metadata in Firestore
      await addDoc(collection(db, "media"), {
        title,
        duration,
        lectures,
        projects,
        description,
        coverImage: coverData.url,
        courseFile: courseData.url,
        courseFileType: courseData.type,
        createdAt: serverTimestamp(),
      });

      // Reset form
      setTitle("");
      setDuration("");
      setLectures("");
      setProjects("");
      setDescription("");
      setCoverImage(null);
      setCourseFile(null);

      if (onUpload) onUpload();
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 my-8 shadow-sm rounded-lg bg-white flex flex-col gap-3">
      {/* Form inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div>
          <label className="text-sm text-gray-700">Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
            className="w-full mt-1 p-3 bg-gray-50 shadow-sm border border-gray-300 rounded-lg text-sm focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm text-gray-700">Course Duration</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter course duration"
            className="w-full mt-1 p-3 bg-gray-50 shadow-sm border border-gray-300 rounded-lg text-sm focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm text-gray-700">Number of Lectures</label>
          <input
            type="number"
            value={lectures}
            onChange={(e) => setLectures(e.target.value)}
            placeholder="Enter number of lectures"
            className="w-full mt-1 p-3 bg-gray-50 shadow-sm border border-gray-300 rounded-lg text-sm focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm text-gray-700">Number of Projects</label>
          <input
            type="number"
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
            placeholder="Enter number of projects"
            className="w-full mt-1 p-3 bg-gray-50 shadow-sm border border-gray-300 rounded-lg text-sm focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm text-gray-700">Course Description</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter course description"
            className="w-full mt-1 p-3 bg-gray-50 shadow-sm border border-gray-300 rounded-lg text-sm focus:outline-none"
          ></textarea>
        </div>
      </div>

      {/* Upload buttons */}
      <div className="flex items-center gap-20 mt-6">
        <div className="flex flex-col">
          <label htmlFor="imageUpload" className="mb-2">
            Upload cover image
          </label>
          <input
            id="imageUpload"
            type="file"
            onChange={handleCoverChange}
            className="file:mr-4 file:rounded-full file:border-0 file:bg-blue-100 file:px-4 file:py-2 file:text-blue-700 hover:file:bg-blue-200"
            accept="image/*"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="fileUpload" className="mb-2">
            Upload course material
          </label>
          <input
            id="fileUpload"
            type="file"
            onChange={handleCourseFileChange}
            className="file:mr-4 file:rounded-full file:border-0 file:bg-blue-100 file:px-4 file:py-2 file:text-blue-700 hover:file:bg-blue-200"
            accept="image/*,video/*,application/pdf"
          />
        </div>
      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-custom-pink text-white mt-6 px-8 py-2 w-44 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
