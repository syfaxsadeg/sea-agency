"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  external?: boolean;
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  external,
  disabled,
}: Props) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer";

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-[#FF6B2C] text-white hover:bg-[#FF8A55] hover:shadow-[0_0_30px_rgba(255,107,44,0.3)] disabled:opacity-60 disabled:cursor-not-allowed",
    secondary:
      "border-2 border-[#FF6B2C] text-[#FF6B2C] hover:bg-[#FF6B2C] hover:text-white disabled:opacity-60 disabled:cursor-not-allowed",
    ghost:
      "text-[#A3A3A3] hover:text-white disabled:opacity-60 disabled:cursor-not-allowed",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: !disabled ? { scale: 1.03 } : {},
    whileTap: !disabled ? { scale: 0.97 } : {},
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a className={classes} {...motionProps}>
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
