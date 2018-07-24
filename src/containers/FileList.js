import React from 'react';
import {Table} from "antd";
import moment from "moment/moment";

moment.locale('zh-cn');

const LOCAL_SERVER = "http://localhost:8085/file/list";

export default class FileList extends React.Component {

  constructor(props) {
    super(props);
    this.get = this.get.bind(this);
    this.state = {
      response: {}
    }
  }

  get() {
    return fetch(LOCAL_SERVER)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        this.setState({
          response: res.data
        });
        return res.data
      })
  }

  render() {
    this.get();
    // console.log(this.state);
    let dataSource = this.state.response.result;
    const columns = [{
      title: '文件名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '文件描述',
      dataIndex: 'dsc',
      key: 'dsc'
    }, {
      title: '文件大小',
      dataIndex: 'size',
      key: 'size',
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    }];

    return (
      <Table dataSource={dataSource} columns={columns}/>
    )
  }
}