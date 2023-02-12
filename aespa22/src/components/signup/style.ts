import styled from "styled-components";

export const SignupContainer = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
`;

export const SignupForm = styled.form`
    width: 500px;
    height: 600px;
    background-color:white;
    margin: 80px auto;
    border-radius:1rem;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const SignupTitle = styled.div`
    text-align: center;
    font-weight: bold;
    font-size:50px;
    line-height:100px;
`;

export const SignupInputContainer = styled.div`
    text-align: center;
    line-height:60px;
    margin: 30px auto;
`;

export const SignupIdInput = styled.input`
    width: 450px;
    height: 50px;
    outline: none;
    font-size: 15px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid gray;
`;

export const SignupPwInput1 = styled.input`
    width: 450px;
    height: 50px;
    outline: none;
    font-size: 15px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid gray;
`;

export const SignupPwInput2 = styled.input`
    width: 450px;
    height: 50px;
    outline: none;
    font-size: 15px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid gray;
`;

export const SingupBtn = styled.button`
    cursor: pointer;
    border-radius:0.5rem;
    width:450px;
    height: 60px;
    outline: none;
    border:none;
    background-color: #5E75EB;
    font-size:15px;
    color:white;
    margin-top:50px;
`;