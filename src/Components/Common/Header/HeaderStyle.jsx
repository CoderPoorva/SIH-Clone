import styled from "@emotion/styled";
import { color1 } from "../../../GlobalConfig/GlobalConfig";



export const NavigationBar =styled.div`
display:flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  height: 70px;
`;

export const Navbar=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  
`;

export const Logo = styled.div`
  height: 50px;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between text and icon */
  background-color: white;
  color: #444444;
  border: 1px solid ${color1};
  border-radius: 25px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.408);

  &:hover {
    background: linear-gradient(90deg, #0e008a, #00a2ff);
    color: white;
  }
  `