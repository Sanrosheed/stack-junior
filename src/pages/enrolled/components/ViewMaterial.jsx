export default function ViewMaterial() {
  return (
    <div className="bg-custom-yellow">
      {/* Course material */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-center mt-10">
            You have successfully enrolled for this course!
          </h1>
          <p className="text-center mt-4">
            Thank you for enrolling. You can now access the course materials and
            start learning.
          </p>
        </div>
        <iframe
          className="w-full h-[400px] md:h-[600px] rounded-lg"
          src="https://www.youtube.com/embed/NArVyt8t-z4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
