import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  background-color: #202020;
  color: white;
  padding: 2rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width:max-content;
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

  .icon {
    font-size: 2.5rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #f39c12;
    }
  }
`;

export const ContactDetails = styled.div`
  div {
    margin: 15px 0;
    font-size: 1rem;
  }
  
  .icons{
    font-size: 1rem;
    margin-right: 10px;
  }
  `;