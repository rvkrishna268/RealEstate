import "../css/PageHeader.css";
import Button from "@material-ui/core/Button";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
const PageHeader = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    window.location.href = "/login";
  };
  const id = localStorage.getItem("id").slice(-8);
  return (
    <div className="header-main">
      <div className="header-Container">
        <div className="header-userID-container">
          <p>USER ID : {id}</p>
        </div>
        <div className="header-userName-container">
          <span className="header-userName-img">
            <img src="./Images/userName_img.png" alt="userNameImg"></img>
          </span>
          <span>{localStorage.getItem("name").toUpperCase()}</span>
          <span>
            <Button
              onClick={handleLogout}
              color="primary"
              size="large"
              endIcon={<ExitToAppRoundedIcon />}
            >
              Logout
            </Button>
          </span>
        </div>
      </div>
      <hr className="breakpoint"></hr>
    </div>
  );
};

export default PageHeader;
