import React, { useEffect, useState } from "react";
import "../../pages/loginSignup/memberRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../slices/sessionSlice";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import HeaderDashboard from "../common/header/HeaderDashboard";
import axios from "axios";

export default function EnroleRegister2({ setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated } = useSelector((state) => state.sessionSlice);
  const [error, setError] = useState("");
  // const { referedByMemberId } = useParams();
  const [image2, setImage2] = useState("");

  const [user, setUser] = useState({
    memberName: "",
    email: "",
    address: "",
    contactNumber: "",
    password: "",
    reEnterPassword: "",
    referedByMemberId: "",
    accountNumber: "",
    ifscCode: "",
    acHolderName: "",
    acHolderRelationship: "",
    advance: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("memberName", user.memberName);
    myForm.set("email", user.email);
    myForm.set("address", user.address);
    myForm.set("contactNumber", user.contactNumber);
    myForm.set("password", user.password);
    myForm.set("referedByMemberId", user.referedByMemberId);
    myForm.set("accountNumber", user.accountNumber);
    myForm.set("ifscCode", user.ifscCode);
    myForm.set("acHolderName", user.acHolderName);
    myForm.set("acHolderRelationship", user.acHolderRelationship);
    myForm.set("image", image2);
    myForm.append("advance", user.advance);

    if (user.password !== "" && user.password === user.reEnterPassword) {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/api/session/register",
        data: myForm,
      };

      await axios
        .request(config)
        .then(({ data }) => {
          setUser({
            memberName: "",
            email: "",
            address: "",
            contactNumber: "",
            password: "",
            reEnterPassword: "",
            referedByMemberId: "",
            accountNumber: "",
            ifscCode: "",
            acHolderName: "",
            acHolderRelationship: "",
            advance: false,
          });
          setOpen(false);
          alert("User Registered !!!");
        })
        .catch((err) => {
          console.log(err);
          if (err.message === "Request failed with status code 401") {
            alert("Reference Limit reached for the Referral code !!!");
          }
        });
    } else {
      if (user.password === "") {
        alert("Please enter password");
      } else if (user.password !== user.reEnterPassword) {
        alert("Password and Re-entered Password does not match");
      }
    }
  };

  const updateHeroImagesChange = (e) => {
    setImage2(e.target.files[0]);
  };

  const handleCheck = (e) => {
    let newUser = { ...user };

    newUser.advance = !newUser.advance;

    setUser(newUser);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="memberRegister">
      <div className="register w-1/2 h-96 ml-24">
        <form onSubmit={handleRegister}>
          <h2 id="parent-modal-title">Enter User Details</h2>

          <input type="text" required={true} name="memberName" value={user.memberName} placeholder="Enter Name" onChange={handleChange}></input>
          <input type="text" required={true} name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}></input>
          <input type="text" required={true} name="address" value={user.address} placeholder="Enter Address" onChange={handleChange}></input>
          <input
            type="number"
            required={true}
            name="contactNumber"
            value={user.contactNumber}
            placeholder="Enter Contact Number"
            onChange={handleChange}
          ></input>
          <input
            type="number"
            required={true}
            name="accountNumber"
            value={user.accountNumber}
            placeholder="Enter Bank Account No"
            onChange={handleChange}
          ></input>
          <input type="text" required={true} name="ifscCode" value={user.ifscCode} placeholder="Enter Bank IFSC Code" onChange={handleChange}></input>
          <input
            type="text"
            required={true}
            name="acHolderName"
            value={user.acHolderName}
            placeholder="Enter Account Holder Name"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            required={true}
            name="acHolderRelationship"
            value={user.acHolderRelationship}
            placeholder="Enter Account Holder Relationship"
            onChange={handleChange}
          ></input>
          <input type="text" name="referedByMemberId" value={user.referedByMemberId} placeholder="Enter Referal Id" onChange={handleChange}></input>
          <input type="password" required={true} name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
          <input
            type="password"
            required={true}
            name="reEnterPassword"
            value={user.reEnterPassword}
            placeholder="Re-enter Password"
            onChange={handleChange}
          ></input>
          {console.log(user.advance)}
          <div style={{ display: "flex", width: "100%" }}>
            <span style={{ margin: "10px 10px", fontWeight: "600", fontSize: "18px", color: "#525252" }}>Full-Joining</span>
            <input type="checkbox" checked={!user.advance} onChange={(e) => handleCheck(e)}></input>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <span style={{ margin: "10px 10px", fontWeight: "600", fontSize: "18px", color: "#525252" }}>Advance Booking</span>
            <input type="checkbox" checked={user.advance} onChange={(e) => handleCheck(e)}></input>
          </div>

          <span style={{ fontWeight: "600" }}>Upload Picture</span>

          <input type="file" onChange={updateHeroImagesChange}></input>
          {error ? <span style={{ color: "red" }}>{error}</span> : null}

          <button className="p-2 pl-24 pr-24 clicabledivRegsiter bg-blue-500 h-10 rounded-md text-white  text-xl ">Register</button>
        </form>
        {/* <div>OR</div>
        <Link to="/login">
          <button className="p-2 pl-36 pr-28 clicablediv bg-blue-500 h-10 rounded-md text-white  text-xl ">Login</button>
        </Link> */}
      </div>
    </div>
  );
}
