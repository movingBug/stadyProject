/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-21 14:19:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-22 20:05:39
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import styles from "./index.scss"
import Mask from './mask';

class StadyModule extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'example/getStudylist' })
    }

    render() {
        const data = [
            {
                date: '11-03-2017',
                grade: '89',
                skii: 'Transfering',
                ret: '对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和',
                isyes: '否',
                opertions: [
                    '编辑', '删除'
                ]
            },
            {
                date: '11-03-2017',
                grade: '89',
                skii: 'Transfering',
                ret: '对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和',
                isyes: '否',
                opertions: [
                    '编辑', '删除'
                ]
            },
            {
                date: '11-03-2017',
                grade: '89',
                skii: 'Transfering',
                ret: '对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和',
                isyes: '否',
                opertions: [
                    '编辑', '删除'
                ]
            },
            {
                date: '11-03-2017',
                grade: '89',
                skii: 'Transfering',
                ret: '对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和',
                isyes: '否',
                opertions: [
                    '编辑', '删除'
                ]
            },
            {
                date: '11-03-2017',
                grade: '89',
                skii: 'Transfering',
                ret: '对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和',
                isyes: '否',
                opertions: [
                    '编辑', '删除'
                ]
            },
        ]
        return (
            <div className={styles.wrap}>
                <header>
                    重点关注学生考试成绩统计图
                </header>
                <main>
                    <div className={styles.topbox}>
                        <ul className={styles.position}>
                            <li>
                                讲师：<span>XXX</span>
                            </li>
                            <li>
                                学生：<span>XXX</span>
                            </li>
                        </ul>
                        <select className={styles.select}>
                            <option value='sss'>快捷选择其他学生</option>
                            <option value='学生yi'>学生yi</option>
                            <option value='学生yi'>学生yi</option>
                            <option value='学生yi'>学生yi</option>
                        </select>
                    </div>
                    <div className={styles.selectChange}>
                        <ul className={styles.title}>
                            <li className={styles.lis}>
                                日期
               <span></span>
                            </li>
                            <li className={styles.lis}>
                                理论
                </li>
                            <li className={styles.lis}>
                                技能
                </li>
                            <li className={styles.lang}>
                                分析和解决
                </li>
                            <li className={styles.lis}>
                                是否周考
                <span></span>
                            </li>
                            <li className={styles.lis}>
                                操作
                </li>
                        </ul>
                        {
                            data.map((item, index) => {
                                return <ul className={styles.toptext} key={index}>
                                    <li className={styles.lis}>
                                        {item.date}
                                    </li>
                                    <li className={styles.lis}>
                                        {item.grade}
                                    </li>
                                    <li className={styles.lis}>
                                        {item.skii}
                                    </li>
                                    <li className={styles.lang}>
                                        {item.ret}
                                    </li>
                                    <li className={styles.lis}>
                                        {item.isyes}
                                    </li>
                                    <li className={styles.lis}>
                                        {item.opertions.map(item => {
                                            return <span onClick={(e) => {
                                                if (e.target.innerHTML === '编辑') {
                                                    this.props.dispatch({ type: 'example/changeShow' });
                                                } else {
                                                    return;
                                                }
                                            }}>{item}</span>
                                        })}
                                    </li>
                                </ul>
                            })
                        }
                    </div>
                </main>
                {
                    this.props.example.isShow ? <Mask /> : null
                }

            </div>
        );
    }
}

const getState = state => {
    return state;
}

export default connect(getState)(StadyModule);