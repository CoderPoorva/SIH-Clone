import { Add, Remove } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Button, Grid2, Typography } from '@mui/material';
import React, { useState } from 'react'
import {color1} from '../../GlobalConfig/GlobalConfig'

const Faqs = () => {

  const faqs = [
    { question: "Q. 1. What is the Smart India Hackathon?", answer: "Smart India Hackathon is an initiative by the Government of India aimed at addressing pressing problems faced by government departments and private organizations through innovative solutions developed by students." },
    { question: "Q. 2. When did the Smart India Hackathon start?", answer: "Smart India Hackathon started in 2017 with only a software chapter. In 2018 the hardware chapter was introduced. Four successful editions have been completed namely SIH2017, SIH 2018, SIH 2019, SIH 2022, SIH 2023. Due to COVID-19 SIH2020 was cancelled. Now Smart India Hackathon is at its 7th edition." },
    { question: "Q. 3. Who can submit problem statements in this hackathon?", answer: "Problem statements can be submitted by different central government ministries, departments, state government ministries/ departments, PSUs, private bodies & NGOs." },
    { question: "Q. 4. Can an individual in India, such as someone working in a private company, pose a challenge or submit a problem statement? What are the financial implications?", answer: "No individual is allowed to pose challenges otherwise. However, if an individual is registered as a proprietor firm then he may submit problem statements in the name of his firm; What are the financial implications? An amount of Rs 1.95 Lakh for Software and Rs. 3 Lakh for Hardware per problem statement shall be given by the organisation posing the challenges. In addition to this amount, registration fee of Rs 25000 /- per company is applicable. Registration fee is only applicable for private companies, PSU, MSME, NGO etc. There is no registration fee for government departments/ministries/attached offices of ministries." },
    { question: "Q. 5. Can University or Institute Submit PS Under SIH 2024?", answer: "No, University/institutes cannot submit PS under SIH 2024. However, they can nominate students from their institute to participate in this hackathon or nominate themselves as nodal centers to organize and support in this hackathon." }
  ];

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div style={{ maxWidth: "100%", display: "flex",flexDirection:"column",justifyContent:"center",alignItems:"center",  padding: "2rem", backgroundColor: "#ededed44", }}>
     <Grid2 container alignItems="flex-start" justifyContent="flex-start" sx={{ marginBottom: "3rem" }}>
        <Typography variant="h4" color={color1}>General FAQs</Typography>
        <Button variant="contained"  style={{backgroundColor:color1, borderRadius:"50px", marginLeft:"40rem"}}>Register Now</Button>
      </Grid2>
     
      {faqs.map((faq, index) => (
        <Accordion key={index} expanded={expanded === index} onChange={handleChange(index)} style={{marginBottom: "10px", width:"70%"}}>
          <AccordionSummary expandIcon={expanded === index ? <Remove /> : <Add />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

export default Faqs