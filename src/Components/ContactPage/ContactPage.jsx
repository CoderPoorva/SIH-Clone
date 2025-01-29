import {
  Button,
  Container,
  Grid2,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ContactWrappered } from "./Styles/ContactPageStyles";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { color1 } from "../../GlobalConfig/GlobalConfig";

const ContactPage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const handleChange = (event) => setSelectedQuestion(event.target.value);

  return (
    <ContactWrappered style={{paddingBottom: "2rem", width: "100%", height: "100%" }}>
      <Typography
        variant="h4"
        align="center"
        style={{ marginTop: "2rem", marginBottom: "6rem" }}
      >
        Contact Us
      </Typography>
      <Grid2
        container
        direction="row"
        gap={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Grid2
          item
          sx={12}
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/Images/logo.png"
            alt="Contact Us"
            width="350"
            height="200"
            style={{ borderRadius: "10px" }}
          />
        </Grid2>

        <Grid2
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            style={{ marginBottom: "20px" }}
          >
            Ask a Question
          </Typography>
          <Select
            fullWidth
            value={selectedQuestion}
            onChange={handleChange}
            displayEmpty
            style={{ marginBottom: "20px", width: "500px" }}
          >
            <MenuItem value="" disabled>
              Select a Question
            </MenuItem>
            <MenuItem value="query1">Sponsors</MenuItem>
            <MenuItem value="query2">Participate as a team</MenuItem>
            <MenuItem value="query3">Join SIH team</MenuItem>
            <MenuItem value="query4">Host SIH nodal center</MenuItem>
            <MenuItem value="query5">SPOC</MenuItem>
            <MenuItem value="query6">Others</MenuItem>
          </Select>

          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            margin="normal"
            style={{ marginBottom: "16px", backgroundColor: "#efefef", borderRadius:"5px",}}
          />
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            margin="normal"
            style={{ marginBottom: "16px", backgroundColor: "#efefef", borderRadius:"5px",}}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            style={{ marginBottom: "16px", backgroundColor: "#efefef", borderRadius:"5px",}}
          />
          <Button
            variant="contained"
            color="primary"
            width="150px"
            style={{ marginTop: "16px", backgroundColor: color1, borderRadius:"40px"}}
          >
            Send Message
          </Button>
        </Grid2>

        <Grid2 item xs={12} md={4} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
        <Typography variant="h5" style={{ marginBottom: "18px", display:"flex", justifyContent:"center", alignItems:"center" }}>
        <EmailIcon className="icon"/> <a href="" style={{textDecoration:"none", color:"black",fontSize:"20px"}}>sih@aicte-india.org, hackathon@aicte-india.org</a>
        </Typography>
        <Typography variant="h5" style={{ marginBottom: "18px", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <LocalPhoneIcon className="icon" /> <p style={{fontSize:"20px"}}>+91 011-29581239, +91 011-29581240</p>
        </Typography>
        <Typography variant="h5" style={{ marginBottom: "18px", display:"flex", justifyContent:"center", alignItems:"center" }}>
        <TwitterIcon className="icon"/> 
          <a href="" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"black",fontSize:"20px"}}>
            @SIH2024_MIC
          </a>
        </Typography>
        <Typography variant="h5" style={{ marginBottom: "18px", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <InstagramIcon className="icon"/> 
          <a href="" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"black",fontSize:"20px"}}>
            mhrdInnovation
          </a>
        </Typography>
        <Typography variant="h5" style={{ marginBottom: "18px", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <FacebookIcon className="icon"/> 
          <a href="" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"black",fontSize:"20px"}}>
            mhrd.innovationcell
          </a>
        </Typography>
        <Typography variant="h5" style={{ marginBottom: "18px", display:"flex", justifyContent:"center", alignItems:"center", }}>
          <LocationOnIcon className="icon"/><p style={{fontSize:"20px"}}>MOE's Innovation Cell, AICTE, New Delhi</p> 
        </Typography>
      </Grid2>
      </Grid2>
    </ContactWrappered>
  );
};

export default ContactPage;
