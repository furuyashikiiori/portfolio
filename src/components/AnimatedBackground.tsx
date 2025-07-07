import React, { ReactNode } from "react";

type AnimatedBackgroundProps = {
  children: ReactNode;
  variant?: "hero" | "section";
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
  variant = "section",
}) => {
  return (
    <div
      className={
        variant === "hero"
          ? "bg-gradient-to-b from-cyan-50 to-white"
          : "bg-gray-50"
      }
    >
      {children}
    </div>
  );
};

export default AnimatedBackground;
