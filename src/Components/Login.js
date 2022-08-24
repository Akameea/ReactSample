import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = ()=>{
    const [login,setLogin] = useState(false);

    const navigate = useNavigate();

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        // console.log("username", username)
        // console.log("password", password)

        const url = '/api/admin/login?name=' + username + '&pass=' + password
        axios.get(url)
            .then(res => {
                console.log(res.data.token)
                console.log('登录成功');
                sessionStorage.setItem("token", res.data.token)
                setLogin(true);
            })
            .catch(err=>{
                console.log(err.response)
                console.log('用户名或密码错误');
            })
    }

    useEffect(()=>{
        if(login) {
            console.log('登录成功,正在跳转界面')
            navigate('/home')
        } else {
            console.log('等待用户登录')
        }
    })

    return (
        <div>
            <h1>登录</h1>
            <form>
                <input ref={usernameRef} type='text' placeholder='username'/><br/>
                <input ref={passwordRef} type='password' placeholder='password'/><br/>
                <button onClick={handleSubmit} type='submit'>登录</button>
            </form>
        </div>
    );
}

export default Login;