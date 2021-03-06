import React from 'react';
import LoginFormComponent from "./LoginFormComponent";
import styled from "styled-components";
import {Icon} from "antd";
import {Link} from "react-router-dom";

//CSS Starts
const StyledWrapper = styled.div`
  margin: 20px 15px;
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

const LoginComponent = () => {
    return (
        <StyledWrapper>
            <StyledIcon type="aliwangwang"/>
            <StyledH1>Login into ReactChat</StyledH1>
            <StyledFormWrapper>
                <LoginFormComponent/>
                <SubText><Link to="/register">Create</Link> new account</SubText>
            </StyledFormWrapper>
        </StyledWrapper>
    );
};

export default LoginComponent;