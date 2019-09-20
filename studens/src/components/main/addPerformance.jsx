/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-20 17:10:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-20 20:07:27
 */
import React, { Component } from 'react';
import styles from './index.scss';

export class AddPerformance extends Component {
    state = {
        date:'2019-09-22'
    }
    TimeChange = (e) =>{
        this.setState({
            date:e.target.value
        })
    }
    render() {
        const {date} = this.state;
        return (
            <div className={styles.mask}>
                <div className={styles.addexamDelog}>
                    <h2>新添成绩--XX同学</h2>
                    <div><p>
                    <input type='date' onChange={this.TimeChange} value={date}/>
                    </p><input type='button' value='昨天' /></div>

                </div>
            </div>
        );
    }
}

export default AddPerformance;
