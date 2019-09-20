/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-20 14:16:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-20 17:02:41
 */
import React, { Component } from 'react';
import styles from './index.scss';
import ReactEcharts from 'echarts-for-react';

export class Main extends Component {
    getOption() {
        let option = {
            title: {
                text: 'xx学生的日周考成绩统计图',
                subtext: '仅供参考',
                x: '70px',
                y: '10px',
                textStyle: {
                    color: 'darkcyan', //标题颜色
                    marginBottom: 20,
                    fontSize: '20',
                }
            },

            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                x: '1270px',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                data: ['技能', '理论'],
                top: '9%',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#62B4BB' //legend颜色
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '3%',
                containLabel: true,
                top: 80,
            },
            xAxis: {
                data: [
                    '08-01',
                    '08-02',
                    '08-03',
                    '08-04',
                    '08-05',
                    '08-06',
                    '08-07',
                    '08-08',
                    '08-09',
                    '08-10',
                    '08-11',
                    '08-12',
                    '08-13'
                ]

            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            series: [
                {
                    name: '技能',
                    type: 'line',
                    data: [0, 25, 17, 58, 75, 69, 96, 30, 45, 80, 85, 63, 90],
                    itemStyle: {
                        normal: {
                            color: 'red',  //  给折线添加颜色
                            lineStyle: {
                                type: 'solid'
                            }
                        },

                    }
                },
                {
                    name: '理论',
                    type: 'line',
                    smooth: false,
                    data: [70, 82, 91, 100, 90, 83, 27, 45, 88, 79, 63, 96, 47],
                    itemStyle: {
                        normal: {
                            color: '#4e76b5',//  给折线添加颜色
                            type: 'dotted'
                        }
                    }
                }
            ]
        };
        return option;
    };

    render() {
        return (
            <div className={styles.wrap}>
                <header>
                    重点关注学生考试成绩统计图
            </header>
                <main>
                    <div className={styles.toplist}>
                        <div className={styles.imgbox}>
                            <span>柱状图/线图</span>
                        </div>
                        <ul className={styles.list}>
                            <p className={styles.tab}>
                                切换班级:
             </p>
                            <li>1703C</li>
                            <li>1703E</li>
                            <li>1703E</li>
                            <li className={styles.createbtn}>创建班级</li>
                        </ul>
                    </div>
                    <ul className={styles.addStadys}>
                        <li className={styles.addtext}>添加学生+:</li>
                        <li><input type='text' placeholder='输入姓名' className={styles.inputname} /></li>
                        <li><input type='text' placeholder='末班次数' className={styles.lostclass} /></li>
                        <li><input type='text' placeholder='结对子，帮扶对象' className={styles.help} /></li>
                        <li className={styles.addbtn}><input type='button' value='添加' /></li>
                    </ul>
                    <ReactEcharts
                        option={this.getOption()}
                        style={{ height: '536px', margin: '29px auto' }}
                        className={styles['echarts-for-react']}
                    />
                    <div className={styles.btnbox}>
                        <input className={styles.addPerformance} type='button' value='添加成绩+' />
                        <input className={styles.addsolve} type='button' value='添加分析和解决方案+' />
                        <input className={styles.examineall} type='button' value='查看和编辑该生所有成绩' />
                    </div>
                </main>
            </div>
        );
    }
}

export default Main;
