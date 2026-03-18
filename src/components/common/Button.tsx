import React, { useState } from "react";
import { Link } from "react-router-dom";
import configThemes from "../../config/theme";

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  to,
  onClick,
  children,
  className = "",
  disabled = false,
  type = "button",
  variant = "primary",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const btnTheme = configThemes.home.button;

  // --- Dynamic Styling Logic ---
  const getDynamicStyle = (): React.CSSProperties => {
    if (variant === "primary") {
      return {
        backgroundColor: isHovered ? btnTheme.hover : btnTheme.bg,
        color: btnTheme.text,
      };
    }
    // Outline style logic
    return {
      borderColor: btnTheme.bg,
      color: isHovered ? "#ffffff" : btnTheme.bg,
      backgroundColor: isHovered ? btnTheme.bg : "transparent",
    };
  };

  const baseClasses = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 cursor-pointer";
  const variantClasses = variant === "primary" ? "shadow-lg px-3 hover:shadow-xl active:scale-[0.97]" : "border px-8 py-3.5 active:scale-[0.97]";
  const disabledClasses = "opacity-50 cursor-not-allowed pointer-events-none";

  const finalClasses = `${baseClasses} ${variantClasses} ${disabled ? disabledClasses : ""} ${className}`.trim();

  // Rendering logic (exact same as your original)
  const content = (
    <span onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-full flex items-center justify-center">
      {children}
    </span>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={finalClasses} style={getDynamicStyle()}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={finalClasses} style={getDynamicStyle()}>
      {content}
    </button>
  );
};

export default Button;