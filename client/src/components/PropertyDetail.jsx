import { TextField, MenuItem, Grid } from "@mui/material";
import { useContext } from "react";
import { PropertyContext } from "../context";

const PropertyDetail = () => {
  const { formData, setFormData, data, setData, helperProp } =
    useContext(PropertyContext);

  function handleLengthChange(e) {
    if (formData.breath === "") {
      setFormData({ ...formData, breath: 0 });
    }
    setFormData({ ...formData, length: e.target.value });
    setData(parseInt(e.target.value) * formData.breath);
  }

  function calcArea(e) {
    if (formData.length === "") {
      setFormData({ ...formData, length: 0 });
    }
    setFormData({ ...formData, breath: e.target.value });
    setData(parseInt(e.target.value) * formData.length);
  }

  // console.log(formData.totalArea, data);

  return (
    <Grid container>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            required
            label="Length"
            size="small"
            type="number"
            onChange={handleLengthChange}
            value={formData.length}>
            {" "}
            Eg: 1000
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            required
            label="Breadth"
            size="small"
            value={formData.breath}
            type="number"
            onChange={calcArea}>
            {" "}
            Eg: 1000
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            variant="outlined"
            id="total-area"
            helperText={helperProp}
            error= {(helperProp)? true: false}
            size="small"
            type="number"
            value={data}
            inputProps={{ readOnly: true }}
            onChange={e => setFormData(setData(e.target.value))}></TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Area Unit"
            select
            size="small"
            value={formData.areaUnit}
            onChange={e =>
              setFormData({ ...formData, areaUnit: e.target.value })
            }>
            <MenuItem value="sq.m">sq.m</MenuItem>
            <MenuItem value="sq.ft">sq.ft</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            label="Number of BHK"
            select
            size="small"
            value={formData.noOfBHK}
            onChange={e =>
              setFormData({ ...formData, noOfBHK: e.target.value })
            }>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Number of Floor"
            select
            size="small"
            value={formData.noOfFloor}
            onChange={e =>
              setFormData({ ...formData, noOfFloor: e.target.value })
            }>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            label="Attached"
            select
            size="small"
            value={formData.attached}
            onChange={e =>
              setFormData({ ...formData, attached: e.target.value })
            }>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Western"
            select
            size="small"
            value={formData.westernToilet}
            onChange={e =>
              setFormData({ ...formData, westernToilet: e.target.value })
            }>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            label="Furnished"
            select
            size="small"
            value={formData.furnished}
            onChange={e =>
              setFormData({ ...formData, furnished: e.target.value })
            }>
            <MenuItem value="Yes">No</MenuItem>
            <MenuItem value="No">Yes</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Car Parking"
            select
            size="small"
            value={formData.carParking}
            onChange={e =>
              setFormData({ ...formData, carParking: e.target.value })
            }>
            <MenuItem value="Yes">No</MenuItem>
            <MenuItem value="No">Yes</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            label="Lift"
            select
            size="small"
            value={formData.lift}
            onChange={e => setFormData({ ...formData, lift: e.target.value })}>
            <MenuItem value="Yes">No</MenuItem>
            <MenuItem value="No">Yes</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Electricity"
            size="small"
            value={formData.electricity}
            onChange={e =>
              setFormData({ ...formData, electricity: e.target.value })
            }>
            {" "}
            Eg: 3 Phase
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            label="Facing"
            select
            size="small"
            value={formData.facing}
            onChange={e =>
              setFormData({ ...formData, facing: e.target.value })
            }>
            <MenuItem value="North">North</MenuItem>
            <MenuItem value="South">South</MenuItem>
            <MenuItem value="East">East</MenuItem>
            <MenuItem value="West">West</MenuItem>
          </TextField>
        </div>
      </Grid>
    </Grid>
  );
};

export default PropertyDetail;
