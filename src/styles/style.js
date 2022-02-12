import styled from "styled-components";
import headerDesk from "../images/bg-header-desktop.svg";
import mobileHeader from "../images/bg-header-mobile.svg"

const _primaryColor = "hsl(180, 29%, 50%)";

const _backgroundColor = "hsl(185, 4%, 98%)";
const _filterTag = "hsl(180, 31%, 95%)";
const _lightDark = "  hsl(180, 8%, 52%)";
const _darkColor = " hsl(180, 14%, 20%)";
const _tagColor = "hsl(180, 29%, 50%)";
export const Header = styled.header`
  background: url(${headerDesk});
  height: 100px;
  
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${_primaryColor};
  margin: 0px;
  padding: 0px;
  @media (max-width: 850px){    
    background: url(${mobileHeader});
    background-color: ${_primaryColor};
    };
    
`;

export const cardsStyle = styled.div`
  margin-top: 20px;
  height: fit-content;
  background-color: white;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 20px ${_darkColor};
  height: 120px;

  @media (max-width: 850px){    
    flex-direction:column;
    height: 200px;
    flex-wrap: wrap;
    }
`;
export const CardIzquierda = styled.div`
  display: flex;
  line-height: 0px;
  align-content: flex-end;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

`;
export const InnerCardIzquierda = styled.div`
  display: flex;
  flex-direction: column;
`;
export const bodyStyled = styled.div`
  background-color: ${_backgroundColor};
  font-family: "Spartan", sans-serif;
  font-size: 15px;
`;

export const containerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerCardDerecha = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
  @media (max-width: 850px){
    border-top: 1px solid black;
    padding-top: 5px;
  }
`;

export const DivInterno = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px;
`;
export const H4 = styled.h4`
  margin: 5px 5px 5px 0px;
`;
export const NombreEmpresa = styled.p`
  color: ${_primaryColor};
  margin-right: 5px;
  font-weight: 700;
`;
export const NewFeature = styled.div`
  border: 8px solid ${_primaryColor};
  color: white;
  padding-top: 0px;
  border-top-width: 12px;
  border-bottom-width: 12px;
  margin-right: 5px;
  border-radius: 20px;
`;
export const Feature = styled.p`
  border: 8px solid ${_darkColor};

  padding-top: 0px;
  border-top-width: 12px;
  border-bottom-width: 12px;

  color: white;
  margin-right: 5px;
  border-radius: 20px;
`;

export const TimeTipeWhere = styled.p`
  color: ${_lightDark};
  margin-right: 5px;
`;

export const Tag = styled.div`
  padding: 3px;
  background-color: ${_filterTag};
  cursor: pointer;
  color: ${_tagColor};
  margin-right: 10px;
  font-weight: 700;
  padding: 10px;
  
`;
