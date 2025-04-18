import { useState } from 'react';

import { Box,TextField,Button,styled,Typography}from '@mui/material';

const Component = styled(Box)`
width: 400px;
margin:auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Image =styled('img')({

    width:100,
    margin:'auto',
    display:'flex',
    padding: '50px 0 0'


});

const Wrapper = styled(Box)`
padding: 25px 35px ;
display: flex;
flex: 1;
flex-direction:column;
& > div, &>button, &>p {
    margin-top: 20px
}
`;
const LoginButton=styled(Button)`
text-transform: none;
background: #FB641B;
height: 48px;
border-reduis: 2px;

`;
const SignupButton = styled(Button)`
text-transform: none;
background: #fff;
height: 48px;
color: #2874f0;
border-reduis: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);

`;
const text= styled(Typography)`
color: #878787;
font-size: 16px;

`
const signupInitialv={
    name: '',
    username:'',
    password:''
}



const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] =  useState('signupInitialv');

    const toggleSignup = () =>{
      account === 'signup'? toggleAccount('login') :toggleAccount('signup');
    }
    const onInputChange=(e) =>{
        setSignup({...signup,[e.target.name]:e.target.value});




    }

    return(
       <Component>
        <Box>
        <Image src={imageURL} alt='Login'/>
        {
        account ==='login'?

        < Wrapper>
            <TextField variant="standard" label="Enter Username"/>
            <TextField variant="standard" label="Enter Password"/>
            < LoginButton variant="contained">Login</ LoginButton>
            <Typography style={{textAlign: 'center'}}>OR</Typography>
            <SignupButton onClick={() => toggleSignup()}> Create an  account </SignupButton>
            </ Wrapper>
        :
            < Wrapper>
            <TextField variant="standard" onchange={(e)=> onInputChange(e)}  name='name' label="Enter Name"/>
            <TextField variant="standard" onchange={(e)=> onInputChange(e)}  name='username'label="Enter Username"/>
            <TextField variant="standard"onchange={(e)=> onInputChange(e)} name='password' label="Enter Password"/>

            <SignupButton SignupButton>Signup</SignupButton>
            <Typography style={{textAlign: 'center'}}>OR</Typography>
            <LoginButton  variant="contained" onClick={() => toggleSignup()}> Already have an account</LoginButton>
            </ Wrapper>

        }
        </Box>
       </Component>
    )
        
    
}
export default Login;