import React, { useEffect, useRef } from "react";

const Download = () => {
  const linkRef = useRef(null);

  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.click(); // পেজে ঢুকলেই auto-click হবে
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <a
        ref={linkRef}
        href="/public/apk/MEDIFAST HC.apk"   // public/apk ফোল্ডারে রাখবে
        download="MEDIFAST-HC.apk"   // ডাউনলোড নাম কন্ট্রোল করার জন্য
        className="bg-white text-green-600 px-4 py-2 rounded shadow font-semibold"
      >
        Download APK
      </a>
      <p className="ml-4 text-gray-600">ডাউনলোড শুরু হচ্ছে...</p>
    </div>
  );
};

export default Download;
