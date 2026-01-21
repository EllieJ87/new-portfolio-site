'use client';
import React from "react";
import { useRouter } from "next/navigation";

const BackButton = ({ fallback = '/'}) => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  }

  return (
    <button
      onClick={handleBack}
      className="back-btn"
    >
      ← Back      
    </button>
  )
}

export default BackButton
