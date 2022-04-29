import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { BsFacebook, BsGithub,BsGoogle } from "react-icons/bs";
import auth from "../../../firebase.init.js";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loading from "../Loading/Loading.jsx";

const Social = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  useEffect(() => {
    if (googleError) {
      toast("Your signup attemp failed. Please try again");
      navigate("/register");
    }
  }, [googleError, navigate]);
  if (googleLoading) {
    return <Loading />;
  }
  if (googleUser) {
    return (
      <div>
        <p>Registered User: {googleUser.email}</p>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center my-4">
      <button type="button" className="facebook-btn">
        <BsFacebook />
      </button>
      <button type="button" className="github-btn">
        <BsGithub />
      </button>
      <button onClick={()=> signInWithGoogle()} type="button" className="google-btn">
        <BsGoogle />
      </button>
    </div>
  );
};

export default Social;
