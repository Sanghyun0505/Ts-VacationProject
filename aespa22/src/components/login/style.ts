import styled from "styled-components";

export const LoginContaienr = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
`;

export const LoginForm = styled.form`
    width: 500px;
    height: 600px;
    background-color:white;
    margin: 80px auto;
    border-radius:1rem;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.div`
    text-align: center;
    font-weight: bold;
    font-size:50px;
    line-height:100px;
`;

export const LoginInputContainer = styled.div`
    text-align: center;
    line-height:60px;
    margin: 30px auto;
`;

export const LoginIdInput = styled.input`
    width: 450px;
    height: 50px;
    outline: none;
    font-size: 15px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid gray;
`;

export const LoginPwInput = styled.input`
    width: 450px;
    height: 50px;
    outline: none;
    font-size: 15px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid gray;
`;

export const LoginBtn = styled.button`
    cursor: pointer;
    border-radius:0.5rem;
    width:450px;
    height: 60px;
    outline: none;
    border:none;
    background-color: #5E75EB;
    font-size:15px;
    color:white;
    margin-top:30px;
`;

export const LoginFromGoolge = styled.button`
    cursor: pointer;
    border-radius:0.5rem;
    width:450px;
    height: 60px;
    outline:none;
    border:2px solid black;
    font-size:15px;
    color:white;
    text-align: center;
    padding-right: 50px;
    color:black;
    line-height:30px;
`;

export const GoogleImg = styled.img`
    width: 20px;
    height: 20px;
    float: left;
    margin-left: 20px;
    margin-top:5px;
`;