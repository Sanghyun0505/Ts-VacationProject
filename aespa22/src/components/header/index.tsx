import { useNavigate } from 'react-router-dom';
import * as S from './style';

export default function Header(){
    const navigate = useNavigate();
    return(
        <S.HeadContainer style={{backdropFilter: 'blur(10px)'}}>
            <S.HeadLogo onClick={()=>navigate('/')}>
                AESPA22
            </S.HeadLogo>
            <div style={{display:'flex'}}>
                <S.HeadLogin onClick={()=>navigate('/login')}>로그인</S.HeadLogin>
                <span>/</span>
                <S.HeadSignUp>회원가입</S.HeadSignUp>
            </div>
        </S.HeadContainer>
    );
}