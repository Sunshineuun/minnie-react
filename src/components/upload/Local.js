import React from 'react';
import {Upload, Icon, message} from 'antd';

const Dragger = Upload.Dragger;
const LOCAL_SERVER = "http://localhost:8085/importData/importFile";

const props = {
  name: 'file',
  listType: 'picture',
  multiple: true,
  action: LOCAL_SERVER,
  data: {"test": "test"},
  onChange({file, fileList, event}) {
    const status = file.status;
    // 服务器段传回来的响应结果
    let success = false;

    if (status !== 'uploading') {
      console.log(file, fileList);
      success = file.response.success;
    }else{
      if(fileList.length > 3){
        fileList.splice(0, 3);
      }
    }

    if (status === 'done' && success) {
      message.success(`${file.name} 文件上传成功.`);
    } else if ((status === 'error' || status === 'done')
      && success === false) {
      message.error(`${file.name} 文件上传失败, ${file.response.msg}.`);
    }
  },
};

export default class Local extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox"/>
          </p>
          <p className="ant-upload-text">点击或拖拽上传</p>
          <p className="ant-upload-hint">本地文件服务</p>
        </Dragger>
      </div>
    );
  }

}