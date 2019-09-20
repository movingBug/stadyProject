import React, { Component } from 'react';
import style from "./index.scss" 
import { Checkbox, Button,Switch,Form} from 'antd';
function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
@Form.create({ name: "index" })

class index extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.wrap}>
                <div className={style.top}>
                    <p>重点关注学生考试成绩统计图</p>
                </div>
                <div className={style.cont}>
                      <div className={style.btn}>
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
                        
                </div>
                <div className={style.checked}>
                         <Switch defaultChecked onChange={onChange} style={{position:"absolute x:20 y:20"}} />柱形图/线图
                </div> 
               
                <div >
                    
                </div>
            </div>
        );
    }
}

export default index;