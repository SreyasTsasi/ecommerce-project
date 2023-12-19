import React, { memo, useContext } from 'react'
import { Toaster } from "react-hot-toast";
import { GlobalContext } from "../context";

function Profile() {
    const {getGlobal: { type }} = useContext(GlobalContext);
  return (
    <div>
        <Toaster position="top-center" />
        <h3>Profile</h3>
        <p> Hi {type}</p>
    </div>
  )
}

export default memo(Profile);