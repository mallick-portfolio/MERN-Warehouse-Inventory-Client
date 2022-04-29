import React, { useEffect } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import auth from "../../../firebase.init.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";

const Social = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);


  const navigate = useNavigate();
  useEffect(() => {
    if (googleError || githubError || facebookError) {
      toast("Your signup attemp failed. Please try again");
      // navigate("/register");
    }
  }, [facebookError, githubError, googleError, navigate]);
  if (googleLoading || githubLoading || facebookLoading) {
    return <Loading />;
  }
  if (googleUser || githubUser || facebookUser) {
    return (
      <div>
        <p>Registered User: {googleUser.email}</p>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center my-4">
      <button onClick={()=> signInWithFacebook()} type="button" className="facebook-btn">
        <BsFacebook />
      </button>
      <button
        onClick={() => signInWithGithub()}
        type="button"
        className="github-btn"
      >
        <BsGithub />
      </button>
      <button
        onClick={() => signInWithGoogle()}
        type="button"
        className="google-btn"
      >
        <BsGoogle />
      </button>
    </div>
  );
};

export default Social;
