import React, { Component } from 'react';
import style from "./index.scss" 
import {  Button,Switch,Form} from 'antd';
// @Form.create({ name: "index" })

class index extends Component {
    render() {
        return (
            <div className={style.wrap}>
                <div className={style.top}>
                    <p>重点关注学生考试成绩统计图</p>
                </div>
                <div className={style.cont}>

                      选择班级:
                        <Button type="primary" block>
                            1703D
                        </Button>
                        <Button type="primary" style={{background:"#E6F1FC"}}>
                            1704A
                        </Button>
                        <Button type="primary" style={{background:"#E6F1FC"}}>
                            1704A
                        </Button><Button type="primary" style={{background:"#E6F1FC"}}>
                            1704A
                        </Button><Button type="primary" style={{background:"#E6F1FC"}}>
                            1704A
                        </Button><Button type="primary" style={{background:"#E6F1FC"}}>
                            1704A
                        </Button><Button type="primary" style={{background:"#E6F1FC"}}>
                            1704A
                        </Button><Button type="primary" style={{background:"#E6F1FC"}}>
                            1704A
                        </Button><Button type="primary" style={{background:"#E6F1FC"}}>
                            1704A
                        </Button><Button type="primary" style={{background:"#E6F1FC"}}>
                            1704A
                        </Button><Button type="primary" style={{background:"#E6F1FC"}}>
                            1704A
                        </Button><Button type="primary" style={{background:"#E6F1FC"}}>
                            1704A
                        </Button>
                        
                </div>
                {/* <div className={style.checked}>
                         <Switch defaultChecked onChange={onChange} style={{position:"absolute x:20 y:20"}} />柱形图/线图
                </div>  */}
               
                <div >
                    
                </div>
            </div>
        );
    }
}
// function onChange(checked) {
//     console.log(`switch to ${checked}`);
//   }

export default index;