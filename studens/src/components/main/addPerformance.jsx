/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-20 17:10:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-22 20:22:10
 */
import React, { Component } from 'react';
import styles from './index.scss';

export class AddPerformance extends Component {
    state = {
        date: '2019-09-22'
    }
    TimeChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    render() {
        const { date } = this.state;
        return (
            <div className={styles.mask}>
                <div className={styles.addexamDelog}>
                    <h2>新添成绩--XX同学</h2>
                    <p>
                        <input type='date' onChange={this.TimeChange} value={date} />
                        <input type='button' value='昨天' /></p>
                    <p>
                        技能
                        <input type='date' onChange={this.TimeChange} placeholder='数字' />
                    </p>
                    <p>
                        理论
                        <input type='date' onChange={this.TimeChange} placeholder='0-100数字' />
                    </p>
                    

                </div>
            </div>
        );
    }
}

export default AddPerformance;
