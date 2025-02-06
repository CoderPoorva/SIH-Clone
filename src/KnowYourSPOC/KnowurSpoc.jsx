import React, { useState } from "react";
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
  { id: 1, name: "Indian Institute of Technology, Patna", code: "U-0064", type: "Institute of National Importance", spoc: "Samrat Mondal", district: "Patna", state: "Bihar" },
  { id: 2, name: "Indian Institute of Technology", code: "U-0205", type: "Institute of National Importance", spoc: "Saurabh Srivastava", district: "Dhanbad", state: "Jharkhand" },
  { id: 3, name: "Indian Institute of Technology, Palakkad", code: "U-0878", type: "Institute of National Importance", spoc: "Jacob Chandapillai", district: "Palakkad", state: "Kerala" },
  { id: 4, name: "National Institute of Technology Sikkim", code: "U-0614", type: "Institute of National Importance", spoc: "Dr. Md. Sarfaraj Alam Ansari", district: "South District (Namchi)", state: "Sikkim" },
  { id: 5, name: "National Institute of Technology, Raipur", code: "U-0092", type: "Institute of National Importance", spoc: "Pavan Kumar Mishra", district: "Raipur", state: "Chhattisgarh" },
  { id: 6, name: "Indian Institute of Technology, Mumbai", code: "U-0306", type: "Institute of National Importance", spoc: "Sankalp Pratap", district: "Mumbai", state: "Maharashtra" },
  { id: 7, name: "National Institute of Technology Arunachal Pradesh", code: "U-0615", type: "Institute of National Importance", spoc: "Dr. T. D. Das", district: "Papum Pare", state: "Arunachal Pradesh" },
];

const rowsPerPage = 3;

const PaginatedTable = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleChange = (event, value) => {
    setPage(value);
  };

  const filteredData = data.filter(row =>
    row.name.toLowerCase().includes(search.toLowerCase()) ||
    row.code.toLowerCase().includes(search.toLowerCase()) ||
    row.spoc.toLowerCase().includes(search.toLowerCase()) ||
    row.district.toLowerCase().includes(search.toLowerCase()) ||
    row.state.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const pageCount = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <>
     <img
        src="/Images/Spoc.png"
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
              <TableCell>Institute Name</TableCell>
              <TableCell>Aishe / AICTE Code</TableCell>
              <TableCell>Institute Type</TableCell>
              <TableCell>SPOC Name</TableCell>
              <TableCell>District</TableCell>
              <TableCell>State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{(page - 1) * rowsPerPage + index + 1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.spoc}</TableCell>
                <TableCell>{row.district}</TableCell>
                <TableCell>{row.state}</TableCell>
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
};

export default PaginatedTable;
