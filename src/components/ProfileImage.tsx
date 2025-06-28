"use client";

import { useState } from "react";

interface ProfileImageProps {
  size?: "small" | "large";
}

export default function ProfileImage({ size = "large" }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  
  const sizeClasses = {
    small: "w-48 h-48",
    large: "w-64 h-64"
  };
  
  const emojiSizes = {
    small: "text-5xl",
    large: "text-6xl"
  };

  return (
    <div className={`${sizeClasses[size]} bg-primary-200 rounded-full mx-auto flex items-center justify-center overflow-hidden`}>
      {!imageError ? (
        <img 
          src="/images/profile.jpg" 
          alt="プロフィール写真" 
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className={`${emojiSizes[size]} text-primary-600`}>👨‍💻</span>
      )}
    </div>
  );
}