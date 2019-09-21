import React, { Component } from 'react';
import style from "./index.scss"
import { Table,Modal, Input,Select,Button} from 'antd';
const { Option } = Select;
const { confirm } = Modal;

//import axios from "axios"

const columns = [
      { title: "序号", dataIndex: "序号", key: "序号" },
      { title: '日期', dataIndex: '日期', key: '日期' },
      { title: '理论', dataIndex: '理论', key: '理论' },
      { title: '技能', dataIndex: '技能', key: '技能' },
      { title: '分析和解决', dataIndex: '分析和解决', key: '分析和解决' },
      { title: '是否周考', dataIndex: '是否周考', key: '是否周考' },
      { title: '操作', dataIndex: '操作', key: '操作' ,
        render: (text, row) => {
          return <div>
            <Button onClick={() => this.modal('edit', row)} >编辑</Button>
            <Button onClick={showConfirm}>删除</Button>
          </div>
        }
      }
        
];
  
const data = [
        {
            key: 0,
            序号: 1,
            日期: '2018-12-24 ',
            理论: '89',
            技能: 'Success',
            分析和解决: '对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看到割发代的风格和减肥风格',
            是否周考: "否",
            操作:["编辑","删除"]  ,
            
        },
        {
            key: 2,
            序号:2,
            日期: '2019-2-24 ',
            理论: '90',
            技能: 'Transting',
            分析和解决: '对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看到割发代的风格和减肥风格',
            是否周考: "否",
            操作:["编辑","删除"]   
        },
        {
            key: 3,
            序号: 3,
            理论: '98',
            技能: 'Success',
            分析和解决: '对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看到割发代的风格和减肥风格',
            是否周考: "否",
            操作:["编辑","删除"],   
            日期: '2019-4-12 ',
        },{
            key: 4,
            序号: 4,
            日期: '2019-9-18 ',
            理论: '88',
            技能: 'Transting',
            分析和解决: '对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看到割发代的风格和减肥风格',
            是否周考: "否",
            操作:["编辑","删除"]   
        }
];
 
class index extends Component {
    render() {
        return (
            <div className={style.wrap}>
                <div className={style.top}>
                    <p>xx学生日周考试成绩统计表</p>
                </div>
                <div className={style.studenttable}>
                    <div className={style.stutitle}>
                        <span>讲师:<Input placeholder="XXX" /></span>
                        <span>学生:<Input placeholder="XXX" /></span>           
                        <Select defaultValue="快捷选择其他学生" onChange={handleChange}>
                            <Option value="">学生3</Option>
                            <Option value="">学生2</Option>
                            <Option value="">学生3</Option>
                            <Option value="">学生4</Option>
                            <Option value="">学生1</Option>
                            <Option value="">学生2</Option>
                            <Option value="">学生4</Option>
                            <Option value="">学生3</Option>
                            <Option value="">学生2</Option>
                        </Select>                   
                    </div>
                    <div className={style.stulist} >
                      
                        <Table columns={columns} dataSource={data} pagination={false} />
                    </div>
                </div>
            </div>
        )
    }
}

function handleChange(value) {
  console.log(`selected ${value}`)
}
  
function showConfirm() {
  confirm({
    title: '',
    content: '你确定删除吗?',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {
    }
  });
}
export default index;