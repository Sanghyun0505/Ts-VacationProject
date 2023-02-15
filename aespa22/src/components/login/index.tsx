import * as S from './style';
import { useNavigate } from 'react-router-dom';
import google from '.././.././assets/logo/google.png';
import { useCallback, useState } from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from 'config/firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function Login(){
    const navigate = useNavigate();
    const [id,SetId] = useState<string>('');
    const [pw,SetPw] = useState<string>('');
    const [user, setUser] = useState<any>({});
    const [userData, setUserData] = useState<any>(null);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === 'mail') SetId(e.target.value);
        else SetPw(e.target.value);
    },[]);

    const onLogin = () => {
        if(id!=='' && pw!==''){
            try {
                const user = signInWithEmailAndPassword(
                    auth,
                    id,
                    pw
                );
                console.log(user);
                window.alert('로그인 성공!');
            } catch (error:any) {
                window.alert('로그인 실패!');
                console.log(error.message);
            }
        }
    };

    // const onLogin = () => {
    //     if(id!=='' && pw!==''){
    //         SetId('');
    //         SetPw('');
    //         window.alert('로그인 성공!');
    //     }
    //     else window.alert('제대로 입력해주세요!');
    // };

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider) // popup을 이용한 signup
          .then((data) => {
            setUserData(data.user); // user data 설정
            console.log(data) // console로 들어온 데이터 표시
            localStorage.setItem('accessToken',userData.displayName);
            navigate('/');
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
                            type="email"
                            placeholder="test@email.com"
                            name='mail'
                            value={id}
                            onChange={onChange}
                        />
                    </div>

                    <div>
                        <S.LoginPwInput 
                            type="password"
                            placeholder='비밀번호'
                            name='pw'
                            value={pw}
                            onChange={onChange}
                        />
                    </div>

                    <div style={{marginTop:'30px'}}>
                        <S.LoginBtn onClick={onLogin}>로그인</S.LoginBtn>
                        <div>{user?.email}</div>
                    </div>

                    <div>
                        <span>계정이 없으신가요? </span>
                        <span style={{cursor:'pointer'}} onClick={()=>navigate('/signup')}> | 회원가입 |</span>
                    </div>

                    <div style={{marginTop:'10px'}}>
                        <S.LoginFromGoolge onClick={handleGoogleLogin}>
                            <S.GoogleImg src={google}/>
                            구글 로그인
                        </S.LoginFromGoolge>
                    </div>
                </S.LoginInputContainer>
            </S.LoginForm>
        </S.LoginContaienr>
    );
}