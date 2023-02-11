import * as S from './style';
import { useNavigate } from 'react-router-dom';
import google from '.././.././assets/logo/google.png';
import { auth } from '../../config/firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

export default function Login(){
    const navigate = useNavigate();

    const [userData, setUserData] = useState<any>(null);

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        const data = signInWithPopup(auth, provider);
        data // popup을 이용한 signup
        .then((data) => {
            setUserData(data.user); // user data 설정
            console.log(data); // console에 UserCredentialImpl 출력
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return(
        <S.LoginContaienr>
            <style>{"body{background-color:#eeeeee}"}</style>
            <S.LoginForm>
                <S.LoginTitle><span style={{color:'#5E75EB'}}>A</span>e<span style={{color:'#5E75EB'}}>S</span>p<span style={{color:'#5E75EB'}}>A</span></S.LoginTitle>

                <S.LoginInputContainer>
                    <div>
                        <S.LoginIdInput 
                            type="text"
                            placeholder="test@email.com"
                        />
                    </div>

                    <div>
                        <S.LoginPwInput 
                            type="password"
                            placeholder='비밀번호'
                        />
                    </div>

                    <div style={{marginTop:'30px'}}>
                        <S.LoginBtn>로그인</S.LoginBtn>
                    </div>

                    <div style={{cursor:'pointer'}} onClick={()=>navigate('/signin')}>| 회원가입 |</div>

                    <div style={{marginTop:'40px'}}>
                        <S.LoginFromGoolge onClick={handleGoogleLogin}>
                            <S.GoogleImg src={google}/>
                            구글 로그인
                        </S.LoginFromGoolge>
                    </div>
                    {userData
                        ? "당신의 이름은 : " + userData.displayName
                        : "로그인 버튼을 눌러주세요 :)"}
                </S.LoginInputContainer>
            </S.LoginForm>
        </S.LoginContaienr>
    );
}