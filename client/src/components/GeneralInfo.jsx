import { TextField, MenuItem, Grid, Container, Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { PropertyContext } from "../context";
import { useContext } from "react";

const GeneralInfo = () => {
  const { formData, setFormData, helperProp } = useContext(PropertyContext);

  function handleClick(event) {
    event.target.nextElementSibling.click();
  }

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Container maxWidth={false}>
            <TextField
              label="Name"
              size="small"
              value={formData.name}
              onChange={e =>
                setFormData({ ...formData, name: e.target.value })
              }></TextField>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <div>
            <TextField
              id="mobile-num"
              required
              helperText={helperProp}
              error= {(helperProp)? true: false}
              label="Mobile Number"
              size="small"
              value={formData.mobile}
              onChange={e =>
                setFormData({ ...formData, mobile: e.target.value })
              }>
              Enter Mobile Number
            </TextField>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            style={{ width: "92%", marginLeft: "4%" }}>
            <TextField label="Posted By" select size="small"
                value={formData.postedBy}
                onChange={e => setFormData({...formData, postedBy: e.target.value })
                }>
              <MenuItem value="Owner">Owner</MenuItem>
              <MenuItem value="Tenent">Tenent</MenuItem>
            </TextField>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <TextField
              label="Sale Type"
              select
              size="small"
              value={formData.saleType}
              onChange={e =>
                setFormData({ ...formData, saleType: e.target.value })
              }>
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
            </TextField>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ width: "92%", marginLeft: "4%" }}>
            <TextField
              label="Featured Package"
              select
              size="small"
              value={formData.featuredPackage}
              onChange={e =>
                setFormData({ ...formData, featuredPackage: e.target.value })
              }>
              <MenuItem value="Yes">No</MenuItem>
              <MenuItem value="No">Yes</MenuItem>
            </TextField>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <TextField
              label="PPD Package"
              select
              size="small"
              value={formData.PPDPackage}
              onChange={e =>
                setFormData({ ...formData, PPDPackage: e.target.value })
              }>
              <MenuItem value="Yes">No</MenuItem>
              <MenuItem value="No">Yes</MenuItem>
            </TextField>
          </div>
        </Grid>
      </Grid>
      <div>
      <Button
        sx={{
          padding: 5,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "info.light",
          },
          marginLeft: 2,
        }} onClick={handleClick}>
        <CameraAltIcon style={{ color: "white" }}></CameraAltIcon>
      </Button>
      <input type="file" hidden id="image-upload"/>
      </div>
    </>
  );
};

export default GeneralInfo;
