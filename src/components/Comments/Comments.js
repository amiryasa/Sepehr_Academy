import "./Comments.css";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import { Input } from "../common/Input/Input";
import { Btn } from "../common/Button/Btn";
import AvatarCostomize from "../common/avatar";

import { useEffect, useState } from "react";
import { getComment, sendNewComment } from "./../../api/Core/Comment";

import like from "../../assets/images/comment/like.png";
import dislike from "../../assets/images/comment/dislike.png";
import reply from "../../assets/images/comment/reply.png";
import stop from "../../assets/images/comment/no-stopping.png";
import * as fa from "../../constants/persianStrings";
import { getItem } from "../../api/storage/storage";
import { getStudentById } from "../../api/Core/Student_Manage";

import good from './../../assets/images/CourseDetails/good.png';
import bad from './../../assets/images/CourseDetails/bad.png';




const Comments = (props) => {
  const [idea, setIdea] = useState();

  const [courseId, setCourseId] = useState();
  const [allComent, setAllComent] = useState();

  const handleChange = (event) => {
    setIdea(event.target.value);
  }

  const handleAddId = async() => {

    const id = await JSON.parse(getItem('id'));


    if(id){
      var student = await getStudentById(id);
      setCourseId(id);
    }

    if(student){

      if(idea.length < 100){
        var commentData={
          postId: props.postId,
          email: student.data.result.email,
          username: student.data.result.fullName,
          Comment: idea
        }
      }

      else{
        alert('تعداد کارکترهای مجاز کمتر از 100 است.')
      }
    }

    if(commentData){
      const response = await sendNewComment(commentData);
    }
  }


  const fixComments = async() => {
    const result = await getComment();

    if(result){
      let currentResult = result.data.filter((item) => {
        return ((item.postId === props.postId)
        && item.verified);
      })
      setAllComent([...currentResult]);
      console.log('currentResult', currentResult);
    }
  }

  useEffect(() => {
    fixComments();
  },[])



  return (
    <>
    <div className="comments">
      <p> {fa.TITLE_COMMENTS} </p>
      <div className="addNewComment">
        <Card>
            <span>{fa.INSERT_COMMENT}</span>
            <div className="TextComment">
              <Input 
              title={fa.TITLE_TEXT_COMMENT} 
              multiline={true} 
              row={2} 
              
              name="message"
              onChange={handleChange}
              />
            </div>
            <Btn text={fa.INSERT_COMMENT} color="info" variant="contained" onChange={handleAddId}/>
        </Card>
      </div>
    </div>

    <div className="showCommentsItems">
    {(allComent) ? allComent.map((item, index) => (

        
          <div className="showCommentsItems01">
            <div className="showCommentsItemsHolderName">
              <p className="showCommentsItemsStudentName">{item.username}</p>
            </div>
            <div className="showCommentsItemsHolderComment"> 
              <p className="showCommentsItemsStudentComment">{item.comment}</p>
            </div>

            <hr></hr>

            <div className="showCommentsItemsHolderName">
              {item.answer ? 
                <p className="showCommentsItemsStudentNameAn" > پاسخ: </p>
              : ''}
            </div>

            <div className="showCommentsItemsHolderComment">
              <p className="showCommentsItemsStudentComment">{item.answer ? item.answer : 'پاسخی ثبت نشده است.'}</p> 
            </div>

            <div className="showCommentsItemsHolderIcon">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="showCommentsItemsHolderMode">
              <img src={good} alt='' style={{width:'30px', position:'absolute', top:'10px', right:'5px'}} />
            </div>

          </div>
        
     )): ''}
     </div>



    

    </>
  );
};
export { Comments };
