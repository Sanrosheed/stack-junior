// src/components/MediaList.js
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function UploadedCourses({ refresh }) {
  const [media, setMedia] = useState([]);

  const fetchMedia = async () => {
    const q = query(collection(db, "media"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    const items = snap.docs.map((doc) => doc.data());
    setMedia(items);
  };

  useEffect(() => {
    fetchMedia();
  }, [refresh]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {media.map((item, i) =>
        item.type === "image" ? (
          <img
            key={i}
            src={item.url}
            alt="uploaded"
            className="w-full h-64 object-cover rounded-xl shadow"
          />
        ) : (
          <video
            key={i}
            src={item.url}
            controls
            className="w-full h-64 rounded-xl shadow"
          />
        )
      )}
    </div>
  );
}
