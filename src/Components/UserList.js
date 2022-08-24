import React, {Component} from 'react';
import 'isomorphic-fetch';//fetch需要用node安装，没有的可以去下载一下
import {Button} from 'react-bootstrap';
import {Link, Navigate} from "react-router-dom";
import axios from "axios";


export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : []
        }
    }
    componentWillMount(){
        this.getData();
    }
    getData(){
        let token = sessionStorage.getItem("token")
        const config = {
            headers:{
                token: token,
            }
        };
        axios.get('/api/admin/listUser', config)
            .then(res => {
                console.log(res)
                this.setState({users : res.data})
            })
            .catch(err=>{
                this.setState({login : true})
                console.log(err.response)
                console.log('未授权，请登录');
            })
    }
    render() {
        let users = this.state.users
        if(this.state.login){
            return (
                <Navigate to="/"/>
            )
        }
        return (
            <div>

                <table className='table'>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>用户名</th>
                        <th>账号</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(({id, name, account}) =>
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{account}</td>
                            <td><Button onClick = {() => {
                                this.setState({users});
                            }}>配置</Button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
            </div>
        );
    }
}