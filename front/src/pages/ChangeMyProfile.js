import React, { useState, useEffect , useRef} from 'react';
import Footer from '../components/common/Footer';
import backIcon from "../images/common/backIcon.png";
import {useHistory} from "react-router-dom";


const profileImgCSS = {

}
const cameraImgCSS = {

}
const backIconCSS = {
    width: '20px',
    marginBottom: '10px',
    cursor: 'pointer',
    position: 'absolute',
    top: '20px',
    left: '20px',
}
const commentBlock = {
    backgroundColor: '#E8F6FF',
    height: '90vh',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    position: 'relative',
}
export default function ChangeMyProfile(props) {

    const imgInput = useRef();
    const [photoUpload, setPhotoUpload] = useState(false);
    const [imgFormData, setImgFormData] = useState({});
    const [imgBase64, setImgBase64] = useState("");
    const [Imgvalues, setImgValues] = useState({
        img_url: {},
    });
    const uploadFile = async (e) => {
        const { name, files } = e.target;
        setImgValues({ ...Imgvalues, [name]: files[0] });


        let reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result;
            if (base64) {
                setImgBase64(base64.toString());
                setPhotoUpload(true);
            }
        };

        const imgTarget = e.target.files;
        if (imgTarget[0]) {
            reader.readAsDataURL(imgTarget[0]); // buffer에 저장함!!
        }

        const imgFormData = new FormData();
        imgFormData.append('name', myName);
        imgFormData.append("img", files[0]);
        setImgFormData(imgFormData);
    }
    const handleImgDel = () => {
        setPhotoUpload(false);
        setImgBase64("");
        setImgValues({ ...Imgvalues, ["img_url"]: {} });
    };

    const [myName, setMyName] = useState('')
    const saveInfo = async () => {
        let myNameIs = document.getElementById('myname').value;
        setMyName(myNameIs)
    }

    const history = useHistory();

    return (
        <div>
            <div style={commentBlock}>
                <img src={backIcon} style={backIconCSS} onClick={() => history.goBack()}/>
                <div>
                <label htmlFor={"uploadImg"}>
                    {photoUpload ? (
                            <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                                <img src={imgBase64} style={{maxWidth: '120px', margin: '54px 0px 24px'}}/>
                                <button onClick={handleImgDel}>이미지 지우기</button>
                            </div>
                        ) :
                        <div>
                            <div style={profileImgCSS}>이곳을 클릭하여 사진을 변경해주세요</div>
                            <div style={cameraImgCSS}></div>
                        </div>
                    }

                </label>
                <input
                    style={{display: 'none'}}
                    accept="image/*"
                    id="uploadImg"
                    name="img_url"
                    type="file"
                    content_type="multipart/form-data"
                    ref={imgInput}
                    onChange={uploadFile}
                />
                </div>
            </div>
            <Footer />
        </div>
    )
}
