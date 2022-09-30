import React, { useState } from "react";
import {
  makeStyles,
  Card,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate, Link } from "react-router-dom";
import "../css/Style.css";
const url="https://realestate-app-10x.herokuapp.com";
// const url="http://localhost:8080";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "500px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    boxShadow: "5px 5px 10px 5px #bdc3c7",
  },
}));

const Signup = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isVisibility, setVisibility] = useState(false);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  function handleClickShowPassword() {
    setVisibility(!isVisibility);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }).then((data) => data.json());

    if (data.status === "sucess") {
      navigate("/login");
    } else {
      setError(data.message);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#E1F9F4",
        position: "fixed",
      }}
    >
      <div style={{ marginTop: "3%" }}>
        <form className={classes.root} onSubmit={handleSubmit}>
          <Card className={classes.card} variant="outlined">
            <h1 style={{ fontWeight: "bold", textShadow: "#7f8c8d 1px 0 5px" }}>
              Registration Form
            </h1>
            <TextField
              label="Name"
              variant="filled"
              type="name"
              name="name"
              required
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="filled"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
            <TextField
              id="adornment-password"
              label="Password"
              variant="filled"
              type={isVisibility ? "text" : "password"}
              name="password"
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {isVisibility ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="adornment-password"
              label="Confirm Password"
              variant="filled"
              type={isVisibility ? "text" : "password"}
              name="confirmpassword"
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {isVisibility ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div>
              {error && <p className="error_msg">{error}</p>}
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </div>
          </Card>
          <div style={{ alignItem: "center", marginTop: "3%" }}>
            <span>Already have an Account ? </span>
            <Link to="/login" style={{ fontSize: "25px" }}>
              Login here!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
