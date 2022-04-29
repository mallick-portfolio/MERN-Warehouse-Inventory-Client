import React from "react";
import { BsFacebook, BsGithub,BsGoogle } from "react-icons/bs";

const Social = () => {
  return (
    <div className="flex items-center justify-center my-4">
      <button type="button" className="facebook-btn">
        <BsFacebook />
      </button>
      <button type="button" className="github-btn">
        <BsGithub />
      </button>
      <button type="button" className="google-btn">
        <BsGoogle />
      </button>
    </div>
  );
};

export default Social;
