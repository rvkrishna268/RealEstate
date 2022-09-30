import React, {useState, useContext,} from "react";
import '../css/Addprop.css'
import { Container, Typography, Step, Stepper, StepLabel, Button} from '@mui/material'
import BasicInfo from './BasicInfo';
import PropertyDetials from './PropertyDetail';
import GeneralInfo from './GeneralInfo';
import LocationInfo from './LocationInfo';
import { PropertyContext } from "../context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageHeader from "./PageHeader";
import SideBar from "./SideBar";
const url="https://realestate-app-10x.herokuapp.com";
//const url="http://localhost:8080";
const Addprop = () => {
  const { formData, setFormData, data, setHelperProp,setData } =
    useContext(PropertyContext);

  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  function checkPropertyType() {
    let input = document.getElementById("property-type").innerText;
    if (input === "House" || input === "Plot" || input === "Commercial") {
      setHelperProp("");
      setPage(page + 1);
    } else {
      setHelperProp("input Invalid");
    }
  }

    function checkTotalArea() {
        const input = document.getElementById('total-area').value
        if (input === "" || isNaN(input) || input <= 0) {
            setHelperProp("invalid input");
        }
        else {
            setHelperProp("");
            setFormData({...formData, totalArea: data})
            setPage(page + 1)
        }
    }

    function checkMobileNum() {
        const input = document.getElementById('mobile-num').value
        if (input === "" || isNaN(parseInt(input)) || input.length < 10 || input.length > 10) {
            setHelperProp("Invalid Input");
        }
        else {
            setHelperProp("");
            setPage(page + 1);
        }
    }

  function handleNext() {
    if (page === 0) {
      checkPropertyType();
    } else if (page === 1) {
      checkTotalArea();
    } else if (page === 2) {
      checkMobileNum();
    } else if (page === 3) {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      };

      axios
        .post(`${url}/add-prop`, formData, config)
        .then(res => console.log(res));
        setFormData({});
        setData("");
        navigate("/");
    }
  }

    function handlePrev() {
        if (page >= 1) {
            setPage (page - 1);
        }
        if (page === 0) {
            setFormData({});
            setData("");
            navigate('/');
        }
    }

  function PageDisplay() {
    if (page === 0) {
      return <BasicInfo />;
    } else if (page === 1) {
      return <PropertyDetials />;
    } else if (page === 2) {
      return <GeneralInfo />;
    } else {
      return <LocationInfo />;
    }
  }

  return (
    <>
      <SideBar />
      <PageHeader />
      <Container sx={{ marginLeft: 40, marginTop: 3 }}>
        <Typography
          variant="h6"
          component="h1"
          fontFamily="Montserrat, sans-serif"
          fontSize="1.25rem"
          fontWeight="600"
          color="text.secondary"
          p={0}
          lineHeight="2rem">
          ADD NEW PROPERTY
        </Typography>
      </Container>

      <div className="step-container">
        <Stepper
          connector={null}
          sx={{ display: "flex", justifyContent: "space-between" }}
          activeStep={page}>
          <Step className={page === 0 ? "active" : ""}>
            <StepLabel>Basic Info</StepLabel>
          </Step>
          <Step className={page === 1 ? "active" : ""}>
            <StepLabel>Property Info</StepLabel>
          </Step>
          <Step className={page === 2 ? "active" : ""}>
            <StepLabel>General Info</StepLabel>
          </Step>
          <Step className={page === 3 ? "active" : ""}>
            <StepLabel>Locaion Info</StepLabel>
          </Step>
        </Stepper>
      </div>

      <div className="form-container">
        <div className="form-body">{PageDisplay()}</div>
        <div className="form-actions">
          <Button
            variant="contained"
            sx={{
              padding: "10px 60px",
              borderRadius: "3rem",
              marginBottom: 2,
              fontSize: "1rem",
              fontWeight: "38rem",
              background: "#6AB4F8",
              boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)",
            }}
            onClick={handlePrev}>
            {page === 0 ? "Cancel" : "Previous"}
          </Button>
          <Button
            variant="contained"
            sx={{
              marginLeft: "2%",
              padding: "10px 60px",
              borderRadius: "3rem",
              marginBottom: 2,
              fontSize: "1rem",
              fontWeight: "38rem",
              background: "#4C57B6",
              boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)",
            }}
            onClick={handleNext}
            type="submit">
            {page === 3 ? "Add Property" : "Save & Continue"}
          </Button>
        </div>
      </div>
    </>
  );
          };

export default Addprop;
