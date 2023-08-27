import React, { useEffect, useState } from "react";
import "../../pages/loginSignup/memberRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../slices/sessionSlice";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import HeaderDashboard from "../common/header/HeaderDashboard";

export default function EnroleRegister({ setOpen, advance }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated, error } = useSelector((state) => state.sessionSlice);
  // const { referedByMemberId } = useParams();
  const [image2, setImage2] = useState("");
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
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
    myForm.append("advance", advance);

    if (user.password !== "" && user.password === user.reEnterPassword) {
      dispatch(register({ myForm }));
      if (!error || error === "") {
        setOpen(false);
      }
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

  return loading ? (
    <Loader />
  ) : (
    <div className="memberRegister">
      <div className="register w-1/2 h-96 ml-24" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h3>Contact Us to Enroll !!</h3>
        <span style={{ margin: "20px 0px", fontWeight: "600", fontSize: "20px" }}>
          Email:
          <a href="mailto:support@aimtimebusiness.com" target="_top">
            support@aimtimebusiness.com
          </a>
        </span>
        <span style={{ fontWeight: "600", fontSize: "20px" }}>
          Contact No:
          <a href="tel:7858006672">7858006672</a>
        </span>
      </div>
    </div>
  );
}
