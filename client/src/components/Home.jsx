import SideBar from "./SideBar";
import PageHeader from "./PageHeader";
import {
  makeStyles,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  Tooltip
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import { TextField, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
const url="https://realestate-app-10x.herokuapp.com";
// const url="http://localhost:8080";
const useStyles = makeStyles(theme => ({
  root: {
    border: "none",
    outline: "none",
    padding: "2px",
  },
  tableBody: {
   background: "#fff",
   borderRadius: 25
  },
  tableCell:{
    textAlign:"center",
    borderRadius: 10
  }
}));

const Home = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [userPropertyData, setUserPropertyData] = useState([]);
  const [searchProperty, setSearchProperty] = useState("");

  function handleAddProperty(e) {
    navigate("/addprop");
  }

  useEffect(() => {
    fetch(`${url}/home`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setUserPropertyData(data.map(item => {
          return (
            {...item, daysLeft: Math.ceil(Math.random() * 10), status: "unsold", views: Math.ceil(Math.random() * 10)}
          )
        }));
      });
  }, []);

  function handleStatus(e) {
    const newArr = userPropertyData.map((item, i) => {
      if (parseInt(e.target.name) === i) {
        const updatedItem = {...item, daysLeft: 0, status: "sold"};
        return updatedItem;
      }
      return item;
    })

    console.log(newArr);
    setUserPropertyData(newArr);
  }

  return (
    <div className="home-Container">
      <SideBar />
      <PageHeader />
      <div className="search-Add-Container">
        <div className="search-bar-container">
          <form className={classes.root}>
            <TextField
              sx={{ padding: 3 }}
              id="bare"
              variant="standard"
              placeholder="Search PPD ID"
              InputProps={{
                style: {
                  paddingLeft: 15,
                },
                disableUnderline: true,
                endAdornment: (
                  <IconButton>
                    <SearchOutlined style = {{color: "#6AB4F8"}}/>
                  </IconButton>
                ),
              }}
              onChange={e => {
                setSearchProperty(e.target.value);
              }}
              classes={{
                root: classes.root,
              }}
            />
          </form>
        </div>

        <button
          type="submit"
          className="addPropBtn"
          variant="contained"
          color="success"
          value="+ Add Property"
          onClick={handleAddProperty}>
          + Add Property
        </button>
      </div>
      <div className="property-table-container">
        <TableContainer>
          <Table aria-label="simple table" style={{ borderCollapse: "separate",
              borderSpacing: "0px 10px"}}>
            <TableHead >
              <TableRow >
                <TableCell style={{ color: "#284E91", fontWeight: "600"}}>PPD ID</TableCell>
                <TableCell style={{ color: "#284E91", fontWeight: "600" }}>Image </TableCell>
                <TableCell style={{ color: "#284E91", fontWeight: "600" }}>Property </TableCell>
                <TableCell style={{ color: "#284E91", fontWeight: "600" }}>Contact </TableCell>
                <TableCell style={{ color: "#284E91", fontWeight: "600" }}>Area </TableCell>
                <TableCell style={{ color: "#284E91", fontWeight: "600" }}>Views </TableCell>
                <TableCell style={{ color: "#284E91", fontWeight: "600" }}>Status </TableCell>
                <TableCell style={{ color: "#284E91", fontWeight: "600" }}>Days Left </TableCell>
                <TableCell style={{ color: "#284E91", fontWeight: "600"  }}>Action </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}  >
            {userPropertyData
              .filter((userData) => { 
                let temp;
                const PPDID = "PPD" + userData._id;               
                if (searchProperty === "") {
                   temp =  userData;
                } else if (
                  PPDID.toLowerCase().includes(searchProperty.toLowerCase())
                ) {
                   temp =  userData;
                }
                return temp
              })
              .map((user, i) => {
                const PPDID = "PPD" + user._id.slice(0,6);
                return (
                    <TableRow className={classes.tableCell} key={i}>
                      <TableCell>{PPDID}</TableCell>
                      <TableCell>
                        <img src="./Images/table_img.png" alt="prop_img"></img>
                      </TableCell>
                      <TableCell >{user.propertyType}</TableCell>
                      <TableCell >{user.mobile}</TableCell>
                      <TableCell >{user.totalArea}</TableCell>
                      <TableCell style={{paddingLeft: "2rem"}}>{user.views}</TableCell>
                      <TableCell>
                        <input
                          name = {`${i}`}
                          type="submit"
                          value={user.status}
                          className="soldBtn"
                          onClick={handleStatus}
                        />
                      </TableCell>
                      <TableCell style={{paddingLeft: "2rem"}}>{user.daysLeft}</TableCell>
                      <TableCell>
                      <Tooltip title="Read">
                        <img
                          src="./Images/table_action1_img.png"
                          alt="action1"></img>
                    
                          </Tooltip>
                          <Tooltip title="Write">
                        <img
                          src="./Images/table_action2_img.png"
                          alt="action2"></img>
                          </Tooltip>
                      </TableCell>
                    </TableRow>
                );
              })}
          </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Home;