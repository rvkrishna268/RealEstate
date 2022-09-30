import { TextField, MenuItem, Grid, Container } from "@mui/material";
import { PropertyContext } from "../context";
import { useContext } from "react";

const BasicInfo = () => {
  const { formData, setFormData, helperProp } = useContext(PropertyContext);

  return (
    <Grid container>
      <Grid item xs={6}>
        <Container maxWidth={false}>
          <TextField
            id="property-type"
            required
            helperText={helperProp}
            error= {(helperProp)? true: false}
            label="Property Type"
            select
            size="small"
            value={formData.propertyType}
            onChange={e =>
              setFormData({ ...formData, propertyType: e.target.value })
            }>
            <MenuItem value="Plot">Plot</MenuItem>
            <MenuItem value="House">House</MenuItem>
            <MenuItem value="Commercial">Commercial</MenuItem>
          </TextField>
        </Container>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Negotiable"
            select
            size="small"
            value={formData.negotiable}
            onChange={e =>
              setFormData({ ...formData, negotiable: e.target.value })
            }>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            label="Price"
            size="small"
            value={formData.price}
            onChange={e => setFormData({ ...formData, price: e.target.value })}>
            Eg: 1000
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Ownership"
            select
            size="small"
            value={formData.ownership}
            onChange={e =>
              setFormData({ ...formData, ownership: e.target.value })
            }>
            <MenuItem value="Fully-Owned">Fully Owned</MenuItem>
            <MenuItem value="Leased">Leased</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            label="Property Age"
            select
            size="small"
            value={formData.propertyAge}
            onChange={e =>
              setFormData({ ...formData, propertyAge: e.target.value })
            }>
            <MenuItem value="5">0-5 years</MenuItem>
            <MenuItem value="10">5-10 years</MenuItem>
            <MenuItem value="15">10 &gt; years</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Property Approved"
            select
            size="small"
            value={formData.propertyApproved}
            onChange={e =>
              setFormData({ ...formData, propertyApproved: e.target.value })
            }>
            <MenuItem value="Yes">No</MenuItem>
            <MenuItem value="No">Yes</MenuItem>
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            label="Property Description"
            size="small"
            value={formData.propertyDescription}
            onChange={e =>
              setFormData({ ...formData, propertyDescription: e.target.value })
            }>
            Eg: 1000
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Bank Loan"
            select
            size="small"
            value={formData.bankLoan}
            onChange={e =>
              setFormData({ ...formData, bankLoan: e.target.value })
            }>
            <MenuItem value="Yes">No</MenuItem>
            <MenuItem value="No">Yes</MenuItem>
          </TextField>
        </div>
      </Grid>
    </Grid>
  );
};

export default BasicInfo;
