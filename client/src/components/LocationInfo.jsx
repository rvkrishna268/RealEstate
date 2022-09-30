import { TextField, Grid, Container } from "@mui/material";
import { PropertyContext } from "../context";
import { useContext } from "react";

const LocationInfo = () => {
  const { formData, setFormData } = useContext(PropertyContext);

  return (
    <Grid container>
      <Grid item xs={6}>
        <Container maxWidth={false}>
          <TextField
            label="Email"
            size="small"
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}>
            {" "}
            Eg: 1000
          </TextField>
        </Container>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="City"
            size="small"
            value={formData.city}
            onChange={e => setFormData({ ...formData, city: e.target.value })}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            label="Area"
            size="small"
            value={formData.area}
            onChange={e => setFormData({ ...formData, area: e.target.value })}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Pincode"
            size="small"
            value={formData.pinCode}
            onChange={e =>
              setFormData({ ...formData, pinCode: e.target.value })
            }
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            label="Address"
            size="small"
            value={formData.address}
            onChange={e =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Landmark"
            size="small"
            value={formData.landmark}
            onChange={e =>
              setFormData({ ...formData, landmark: e.target.value })
            }
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "92%", marginLeft: "4%" }}>
          <TextField
            label="Latitude"
            size="small"
            value={formData.latitude}
            onChange={e =>
              setFormData({ ...formData, latitude: e.target.value })
            }>
            {" "}
            Eg: 1000
          </TextField>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <TextField
            label="Longitude"
            size="small"
            value={formData.longitude}
            onChange={e =>
              setFormData({ ...formData, longitude: e.target.value })
            }
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default LocationInfo;
