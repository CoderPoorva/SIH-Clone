import React from "react";
import { color1 } from "../../GlobalConfig/GlobalConfig";
import { color2 } from "../../GlobalConfig/GlobalConfig";

const ProjectImplementaion = () => {
  const guidelines = [
    "Hackathons are opportunities to quickly check the feasibility of any novel idea, hence projects developed during Hackathons are usually very crude and absolutely not ready for field implementation or deployment as working solutions. They require considerable work or development before implementation/deployment as reliable, dependable solutions.",
    "Ideally, the duration for development and implementation of SIH winning project should be between 6 months to 1 year. However, the duration could be increased/decreased with the mutual consent of all the involved parties.",
    "Once the Ministry of Education/AICTE shared the contact details of the winning teams with the respective ministry/department, they are requested to directly initiate communication with the winning teams to discuss further development and implementation roadmap of the winning ideas.",
  ];

  const notes=[
    "In case the solution developed by the teams is an assembly of available components, then any conflict arising due to plagiarism, IP, or copyright violations, the individuals of the concerned team will be solely responsible. Hence, the teams have been advised to use verified open-source components only and acknowledge them appropriately. Ministry/department may also get a signed declaration from all the members of the team in this regard to indemnify itself from any legal conflict.",
    "In some cases, the final-year students/participants of the winning team pass out of college and proceed to higher studies or jobs, or some members of the team (due to some personal reasons) may not wish to continue with project development post-SIH, in such scenarios the respective teams have the flexibility to include new members into the team as replacements."
  ];


  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src="/Images/Projectimple.png"
        alt="SIH 2024"
        style={{ width: "100%", height: "auto", marginBottom: "20px" }}
      />

      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color1,
          paddingLeft: "350px",
          paddingRight: "350px",
        }}
      >
        Guidelines for Deployment of Smart India Hackathon (SIH2024) Winning
        Projects
      </h1>
      <p
        style={{
          fontSize: "16px",
          marginBottom: "15px",
          alignItems: "center",
          color: color2,
          lineHeight: "1.5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "250px",
          paddingRight: "250px",
        }}
      >
        The Smart India Hackathon (SIH) is envisioned to promote innovation and
        out-of-the-box thinking among young minds and aims to institutionalize a
        model for harnessing the creativity and technical expertise of millions
        of Indian students for the direct benefit of our nation. Through the
        Smart India Hackathon 2024 (SIH2024), the Ministry of Education’s
        Innovation Cell (MIC) tried to crowdsource solutions for improving
        governance and quality of life and provide young citizens with an
        opportunity to co-create and present innovative solutions to India's
        pressing needs.
      </p>
      <p
        style={{
          fontSize: "16px",
          marginBottom: "15px",
          alignItems: "center",
          color: color2,
          lineHeight: "1.5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "250px",
          paddingRight: "250px",
        }}
      >
        Post SIH, the Ministry of Education is committed to the further
        development, implementation, and deployment of SIH-winning ideas by
        effectively supporting the concerned ministries/departments. Hence, to
        initiate the development and deployment of SIH-winning ideas, the
        concerned Ministry/ Departments (Problem Statement given agency) is
        requested to follow the guidelines indicated below.
      </p>
      <div style={{ marginBottom: "20px" }}>
        {guidelines.map((text, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
              paddingLeft: "250px",
              paddingRight: "250px",
            }}
          >
            <div style={{color:"black",fontSize:"16px", fontWeight:"bold",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>{index + 1}</div>
            <p style={{color:color2}}>{text}</p>
          </div>
        ))}
      </div>
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color2,
          paddingLeft: "350px",
          paddingRight: "350px",
        }}
      >
        Intellectual Property (IP):
      </h1>
      <p
        style={{
          fontSize: "16px",
          marginBottom: "15px",
          alignItems: "center",
          color: color2,
          lineHeight: "1.5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "250px",
          paddingRight: "250px",
        }}
      >
        The Intellectual Property (IP) of the solution resides with the students
        who have developed and deployed the solution post-Hackathon but the
        concerned ministry will have lifetime access to the solution for free.
        This has been done to encourage Startups to be created out of the
        developed solutions while also keeping in mind the interest of the
        involved ministries.
      </p>
      <h2 style={{
          fontSize: "36px",
          marginBottom: "20px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color2,
          paddingLeft: "350px",
          paddingRight: "350px",
        }}>Important Notes:</h2>
       <div style={{ marginBottom: "20px" }}>
        {notes.map((text, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
              paddingLeft: "250px",
              paddingRight: "250px",
            }}
          >
            <div style={{backgroundColor:color2,color:"black",width:"20px",height:"10px",display:"flex",justifyContent:"center",alignItems:"center",marginRight:"10px"}}></div>
            <p style={{color:color2}}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImplementaion;
