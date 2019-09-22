/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-20 17:10:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-22 20:06:49
 */
import React, { Component } from 'react';
import styles from './index.scss';
import { connect } from 'dva';

export class AddPerformance extends Component {
    state = {
        date: '2019-09-22'
    }
    handleClick = () => {
        this.props.dispatch({ type: 'example/changeShow' });
    }
    render() {
        const { date } = this.state;
        return (
            <div className={styles.mask}>
                <div className={styles.operbox}>
                    <span className={styles.close} onClick={this.handleClick}>x</span>
                    <h2 className={styles.titles}>编辑内容</h2>
                    <div className={styles.iptsbox}>
                        <p className={styles.inputbox}>理论<input type='type' placeholder='0-100之间的数字' /></p>
                        <p className={styles.inputbox}>技能<input type='type' placeholder='0-100之间的数字' /></p>
                        <div className={styles.btns}><input type='button' value='日考' /><input type='button' value='周考' /></div>
                        <p className={styles.jiejue}><span>分析解决方案</span><textarea name="" id="" cols="40" rows="4"></textarea></p>
                        <div className={styles.opers}>
                            <input type='button' value='取消' className={styles.qx} />
                            <input type='button' className={styles.qr} value='确认' /></div>
                    </div>
                    <div className={styles.btnsbox}>
                    </div>
                </div>
            </div>
        );
    }
}
const getState = state => {
    return state;
}

export default connect(getState)(AddPerformance);
