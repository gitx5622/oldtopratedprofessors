import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'shards-react';
import { Upload, message } from 'antd';
import { BsCloudUpload } from 'react-icons/all';

const { Dragger } = Upload;

const UploadFiles = () => {
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);

          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    return ( 
        <div>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon"><br/>
                <BsCloudUpload style={{fontSize:"150px"}} />
                </p>
                <h3 className="ant-upload-text"><strong>Click or drag file to this area to upload</strong></h3>
                <h3>or</h3>
                <Button style={{backgroundColor:"#17c671"}}>Browse Files</Button>
            </Dragger><br/>
            <Link to="/order/createorder">
                <Button type="submit" size="md" className="placeorder-btn order-color" outline theme="info">
                    Upload files
                </Button>
            </Link>
            <br/>
        </div>
     );
};
 
export default UploadFiles;