/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-19 11:37:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-20 11:17:33
 */
import React, { Component } from 'react';
import styles from './index.scss';
import { connect } from 'dva';

export class LoginRegistry extends Component {

    state = {
        isShow: true,
        count: 0,
        phonenum: '',
        password: '',
        isChecked: false
    }

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                phonenum: e.target.value
            })
        } else {
            this.setState({
                password: e.target.value
            })
        }
    }

    handleClick = (e) => {
        if (e.target.innerHTML === '登入') {
            this.setState({
                isShow: true,
                count: 0
            })
        } else {
            this.setState({
                isShow: false,
                count: 1
            })
        }
    }
    handleLogin = async () => {
        const { phonenum, password, isChecked } = this.state;
        if (phonenum !== '' && password !== '') {
            await this.props.dispatch({ type: 'example/loginTest', payload: { phonenum, password, isChecked } });
            alert(this.props.example.loginmsg);
        }
    }
    handleRegister = () => {
        const { phonenum, password } = this.state;
        if (phonenum !== '' && password !== '') {
            this.props.dispatch({ type: 'example/sendregister', payload: { phonenum, password } });
            alert(this.props.example.registermsg);
        }
    }

    handleCheck = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    render() {
        const { isShow, count, isChecked } = this.state;
        return (
            <div className={styles.wrap}>
                <header>重点学生日周考成绩录用管理系统</header>
                <main>
                    <div className={styles.loginBox}>
                        <div className={styles.h2}>网站工程</div>
                        <ul className={styles.ul}>
                            <li className={styles.login} onClick={this.handleClick} className={count === 0 ? styles.action : null}>登入</li>
                            <li className={styles.register} onClick={this.handleClick} className={count === 1 ? styles.action : null}>註冊</li>
                        </ul>
                        {
                            isShow ? <div className={styles.iptbox}>
                                <p className={styles.p}><input type='text' placeholder='牛牛號/電話' className={styles.ipts}
                                    value={this.state.phonenum} onChange={this.handleChange} /></p>
                                <p className={styles.p}><input type='password' placeholder='輸入密碼' className={styles.ipts}
                                    value={this.state.password} onChange={this.handleChange} /></p>
                                <p className={styles.check}><input type='checkbox' checked={isChecked} onChange={this.handleCheck} />兩周內自動登儒</p>
                                <p className={styles.p}><input type='button' value='登入' className={styles.btn} onClick={this.handleLogin} /></p>
                            </div> : <div className={styles.iptbox}>
                                    <p className={styles.p}><input type='text' placeholder='牛牛號/電話' className={styles.ipts}
                                        value={this.state.phonenum} onChange={this.handleChange} /></p>
                                    <p className={styles.p}><input type='password' placeholder='輸入密碼' className={styles.ipts}
                                        value={this.state.password} onChange={this.handleChange} /></p>
                                    <p className={styles.p}><input type='button' value='註冊' className={styles.btn} onClick={this.handleRegister} /></p>
                                </div>
                        }
                    </div>
                </main>
            </div>
        );
    }
}

const getStore = store => {
    return store;
}

export default connect(getStore)(LoginRegistry)
