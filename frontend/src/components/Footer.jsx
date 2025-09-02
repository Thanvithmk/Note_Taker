import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0 left-0 w-full">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by
          Thanvith
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
