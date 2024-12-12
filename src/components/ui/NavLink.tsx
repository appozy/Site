import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ href, children, mobile }: NavLinkProps) {
  const baseClasses = "transition duration-200";
  const mobileClasses = mobile ? "block py-2 px-4 hover:bg-green-600" : "hover:text-green-200";

  return (
    <a href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </a>
  );
}