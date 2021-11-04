import react,{useState,useEffect} from "react";
import "../../css/Post.css"
import backIcon from "../../images/common/backIcon.png"
import hambugerIcon from "../../images/common/hambugerIcon.png"
import defaultImg from "../../images/common/defaultUserImage.png"

const testData = {
  userName : "파워코더",
  postTime : "11/4 14:30",
  content: "오늘 날씨 좋길래 한강 따릉이타고 갔다왔는데, 진짜 좋더라. 지금이 선선해서 자전거 타기 제일 좋은거 같아. 근데 코딩은 시작하는게 왤케 싫을까? 하면 재밌는데 ㅠㅠ 이제 여기에 스크롤 기능을 구현해놔야겠지? 스크롤 구현하고 아직 버튼에 어떤 이벤트 줘야하는지는 모르니까 일단 여기까지 하자. 이제 게시글 쓰는창은 누가만들까?",
  imgUri: "https://image.shutterstock.com/image-photo/seoul-korea-march-17-2018-600w-1058280173.jpg"
}

const Post = ({props}) => {
  const [data,setData] = useState(testData);
  
  const btnShowCommnet = () => {
    alert("댓글보기 클릭")
  }

  const btnBack = () => {
    alert("뒤로가기 클릭")
  }

  const btnHambuger = () => {
    alert("햄버거 버튼 클릭")
  }


  return(
    <div className="Post">
      <div className="post-container">
        <div className="post-header">
          <img className="backIcon" onClick={btnBack} src={backIcon}></img>
          <img className="hambugerIcon" onClick={btnHambuger} src={hambugerIcon}></img>
        </div>

        <div className="post-postInfo">
          <img className="postInfo-profileImage" src={defaultImg}></img>
          <div className="postInfo-nameDateContainer">
            <div className="postInfo-username">{data.userName}</div>
            <div className="postInfo-date">{data.postTime}</div>
          </div>
          
        </div>
        <div className="post-content">
          <div className="content-text">{data.content}</div>
          <div className="content-imageContainer">
            <img className="content-image" src={data.imgUri}></img>
          </div>
        </div>
        <div className="btnShowComment" onClick={btnShowCommnet}>댓 글 보 기</div>
      </div>
    </div>
  )
    
}


export default Post;