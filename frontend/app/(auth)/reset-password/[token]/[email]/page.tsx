"use client"
import axios from "axios";
import React, { Fragment, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Head from "next/head";


const authEndpoints = {
  resetPassword: "/sdf"
}

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState();
  const [resetPasswordError, setResetPasswordError] = useState();

  // const { query } = useRouter();
  const query = useParams()
  const router = useRouter();
  const token = query.token;
  const email = query.email;

  const resetPassword = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios({
        method: 'POST',
        url: authEndpoints.resetPassword,
        data: {
          token,
          email,
          password: newPassword,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setResetPasswordSuccess(response.data.msg)
      setLoading(false)
      setTimeout(() => {
        router.push('/')
      }, 4000)
      setResetPasswordError('')
    } catch (error) {
      setLoading(false)
      setResetPasswordError(error.response.data.msg)
      setResetPasswordSuccess(null)
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Reset your password</title>
      </Head>
      <div>
        {email && token ? (
          <div className="auth-wrapper">
            {resetPasswordSuccess ? (
              // <SuccessModal message={resetPasswordSuccess} />
              <p>Success</p>
            ) : (
              null
            )}
            {resetPasswordError ? (
              // <ErrModal message={resetPasswordError} />
              <p>Error</p>
            ) : (
              null
            )}
            <form onSubmit={resetPassword} className="reset-password">
              <h1>Reset Password</h1>
              <p>Please enter your new password</p>
              <div>
                <label htmlFor="password">Password*</label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="enter new pasword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <button
                name="reset-pwd-button"
                className="reset-pwd"
              >
                {!loading ? "Reset" : "Processing..."}
              </button>
            </form>
          </div>
        ) : (
          <p>The page you're trying to get to isn't available</p>
        )}
      </div>
    </Fragment>
  );
};

export default ResetPassword