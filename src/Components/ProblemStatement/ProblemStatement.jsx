import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, TextField } from "@mui/material";
import { css } from "@emotion/react";

const tableStyle = css`
  max-width: 90%;
  margin: auto;
  margin-top: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const paginationStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const searchStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 100%;
  margin-bottom: 20rem;
`;

const data = [
  { SlNo: 1, Organization: "Godrej Appliances",Title: "Innovating for Sustainability: Driving Smart Resource Conservation (Energy & Water) in Home Appliances (Refrigerators, Air Conditioners, Washing Machines and Desert Air Coolers)", Caterogy: "Hardware", PsNo: "SIH1524", SubmittedIdeas: "219", theme: "Smart Resource Conservation", },
  { SlNo: 2, Organization: "Godrej Appliances",Title: "Innovating for Sustainability: Driving Smart Resource Conservation (Energy & Water) in Home Appliances (Refrigerators, Air Conditioners, Washing Machines and Desert Air Coolers)", Caterogy: "Hardware", PsNo: "SIH1524", SubmittedIdeas: "219", theme: "Smart Resource Conservation", },
  { SlNo: 3, Organization: "Godrej Appliances",Title: "Innovating for Sustainability: Driving Smart Resource Conservation (Energy & Water) in Home Appliances (Refrigerators, Air Conditioners, Washing Machines and Desert Air Coolers)", Caterogy: "Hardware", PsNo: "SIH1524", SubmittedIdeas: "219", theme: "Smart Resource Conservation", },
  { SlNo: 4, Organization: "Godrej Appliances",Title: "Innovating for Sustainability: Driving Smart Resource Conservation (Energy & Water) in Home Appliances (Refrigerators, Air Conditioners, Washing Machines and Desert Air Coolers)", Caterogy: "Hardware", PsNo: "SIH1524", SubmittedIdeas: "219", theme: "Smart Resource Conservation", },
  { SlNo: 5, Organization: "Godrej Appliances",Title: "Innovating for Sustainability: Driving Smart Resource Conservation (Energy & Water) in Home Appliances (Refrigerators, Air Conditioners, Washing Machines and Desert Air Coolers)", Caterogy: "Hardware", PsNo: "SIH1524", SubmittedIdeas: "219", theme: "Smart Resource Conservation", },
  { SlNo: 6, Organization: "Godrej Appliances",Title: "Innovating for Sustainability: Driving Smart Resource Conservation (Energy & Water) in Home Appliances (Refrigerators, Air Conditioners, Washing Machines and Desert Air Coolers)", Caterogy: "Hardware", PsNo: "SIH1524", SubmittedIdeas: "219", theme: "Smart Resource Conservation", },
  { SlNo: 7, Organization: "Godrej Appliances",Title: "Innovating for Sustainability: Driving Smart Resource Conservation (Energy & Water) in Home Appliances (Refrigerators, Air Conditioners, Washing Machines and Desert Air Coolers)", Caterogy: "Hardware", PsNo: "SIH1524", SubmittedIdeas: "219", theme: "Smart Resource Conservation", },
  { SlNo: 8, Organization: "Godrej Appliances",Title: "Innovating for Sustainability: Driving Smart Resource Conservation (Energy & Water) in Home Appliances (Refrigerators, Air Conditioners, Washing Machines and Desert Air Coolers)", Caterogy: "Hardware", PsNo: "SIH1524", SubmittedIdeas: "219", theme: "Smart Resource Conservation", },
 
];

const rowsPerPage = 3;

const ProblemStatement = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleChange = (event, value) => {
    setPage(value);
  };

  const filteredData = data.filter(row =>
    row.PsNo.toLowerCase().includes(search.toLowerCase()) ||
    row.Organization.toLowerCase().includes(search.toLowerCase()) 
  );

  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const pageCount = Math.ceil(filteredData.length / rowsPerPage);

  return (
        <>
         <img
            src="/Images/Ps.png"
            alt="SIH 2024"
            style={{ width: "100%", height: "auto", marginBottom: "20px" }}
          />
          <div style={{maxWidth: "80%", margin: "auto", fontFamily: "Arial, sans-serif"}}>
          <div style={{maxWidth: "100%",display: "flex", justifyContent: "flex-end", marginBottom:"30px"}}>
          <TextField
            css={searchStyle}
            label="Search"
            variant="outlined"
            size="small"
            onChange={(e) => setSearch(e.target.value)}
          />
          </div>
          
          <TableContainer component={Paper} css={tableStyle}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Organization</TableCell>
                  <TableCell>Problem Statement Title</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>PS Number</TableCell>
                  <TableCell>Submitted Ideas Count</TableCell>
                  <TableCell>Theme</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell>{(page - 1) * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{row.Organization}</TableCell>
                    <TableCell>{row.Title}</TableCell>
                    <TableCell>{row.Caterogy}</TableCell>
                    <TableCell>{row.PsNo}</TableCell>
                    <TableCell>{row.SubmittedIdeas}</TableCell>
                    <TableCell>{row.theme}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{maxWidth: "100%",display: "flex", justifyContent: "flex-end", marginBottom:"30px",marginTop:"30px"}}>
          <Pagination count={pageCount} page={page} onChange={handleChange} css={paginationStyle} />
          </div>
          </div>
        </>
      );
}

export default ProblemStatement