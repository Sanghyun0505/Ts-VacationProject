import { useNavigate } from 'react-router-dom';
import * as S from './style';

export default function Header(){
    const navigate = useNavigate();
    return(
        <S.HeadContainer>
            <S.HeadLogo onClick={()=>navigate('/')}>
                AESPA22
            </S.HeadLogo>
            {
                localStorage.getItem('accessToken') ? (
                    <div>마이 페이지</div>
                )
                :
                <div style={{display:'flex'}}>
                    <S.HeadLogin onClick={()=>navigate('/login')}>로그인</S.HeadLogin>
                    <span>/</span>
                    <S.HeadSignUp onClick={()=>navigate('/signup')}>회원가입</S.HeadSignUp>
                </div>
            }
        </S.HeadContainer>
    );
}