import React from 'react';
import RegisterFormComponent from "./RegisterFormComponent";
import styled from "styled-components";
import {Icon} from "antd";
import { Link } from "react-router-dom";

//CSS Starts
const StyledWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledFormWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 400px;
`;
const StyledH1 = styled.h1`
  text-align: center;
  color: ${props => props.theme.colorPrimary};
  text-shadow: ${props => props.theme.textShadow};
  `;
const StyledIcon = styled(Icon)`
  text-align: center;
  margin: auto;
  font-size: 48px;
  color: ${props => props.theme.colorPrimary};
`;
const SubText = styled.div`
  text-align: center;
`;
//CSS Ends

const RegisterComponent = () => {
    return (
        <StyledWrapper>
            <StyledIcon type="aliwangwang" />
            <StyledH1>Register for ReactChat</StyledH1>
            <StyledFormWrapper>
                <RegisterFormComponent/>
                <SubText>Already registered? <Link to="/login">Login</Link></SubText>
            </StyledFormWrapper>
        </StyledWrapper>
    );
};

export default RegisterComponent;