import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from 'config/firebase-config';

export default function SignUp(){
    const navigate = useNavigate();
    const [id,SetId] = useState<string>('');
    const [pw1,SetPw1] = useState<string>('');
    const [pw2,SetPw2] = useState<string>('');

    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === 'mail') SetId(e.target.value);
        else if(e.target.name === 'pw1') SetPw1(e.target.value);
        else SetPw2(e.target.value);
    },[]);

    const register = () => {
        if((id!=='' && pw1!=='' &&pw2!=='') &&(pw1===pw2)){
            try {
                const user = createUserWithEmailAndPassword(
                    auth,
                    id,
                    pw1
                );
                console.log(user);
            } catch (error:any) {
                console.log(error.message);
            }
        }
        else window.alert('제대로 입력해주세요!');
    };


    return(
        <S.SignupContainer>
            <style>{"body{background-color:#eeeeee}"}</style>
            <S.SignupForm>
                <S.SignupTitle><span style={{color:'#5E75EB'}}>A</span>e<span style={{color:'#5E75EB'}}>S</span>p<span style={{color:'#5E75EB'}}>A</span></S.SignupTitle>

                <S.SignupInputContainer>
                    <div>
                        <S.SignupIdInput
                            type='email'
                            placeholder='test@gmail.com'
                            value={id}
                            onChange={onChange}
                            name='mail'/>
                    </div>

                    <div>
                        <S.SignupPwInput1
                            type='password'
                            placeholder='비밀번호'
                            value={pw1}
                            onChange={onChange}
                            name='pw1'/>
                    </div>

                    <div>
                        <S.SignupPwInput2
                            type='password'
                            placeholder='비밀번호 확인'
                            value={pw2}
                            onChange={onChange}
                            name='pw2'/>
                    </div>

                    <div style={{marginTop:'30px'}}>
                        <S.SingupBtn onClick={register}>회원가입</S.SingupBtn>
                    </div>
                    
                    <div>
                        <span>계정이 있으신가요? </span>
                        <span style={{cursor:'pointer'}} onClick={()=>navigate('/login')}> | 로그인 |</span>
                    </div>
                </S.SignupInputContainer>
            </S.SignupForm>
        </S.SignupContainer>
    );
}