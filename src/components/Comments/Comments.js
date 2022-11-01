import "./Comments.css";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import { Input } from "../common/Input/Input";
import { Btn } from "../common/Button/Btn";
import AvatarCostomize from "../common/avatar";

import { useState } from "react";
import { sendNewComment } from "./../../api/Core/Comment";

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

  const handleChange = (event) => {
    setIdea(event.target.value);
  }

  const handleAddId = async() => {

    const id = await JSON.parse(getItem('id'));


    if(id){
      var student = await getStudentById(id);
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
      <div className="showComments">
        {props.comments.map((item) => {
          if (item.idParent) {
            return (
              <div className="replyComment">
                <Card>
                  <div className="avatar">
                    <AvatarCostomize name={item.name} width={66} />
                  </div>
                  <div className="action-textComment">
                    <header>
                      <div className="name-date">
                        <div>{item.name}</div>
                        <Divider orientation="vertical" flexItem />
                        <div>{item.date}</div>
                      </div>
                      <div className="action">
                        <img src={like} width={30} />
                        <img src={dislike} width={30} />
                        <img
                          src={reply}
                          style={{
                            marginBottom: "6px",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                        <img
                          src={stop}
                          style={{
                            marginBottom: "6px",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      </div>
                    </header>
                    <div className="textOfComment">{item.describe}</div>
                  </div>
                </Card>
              </div>
            );
          } else {
            return (
              <div className="firstComment">
                <AvatarCostomize name={item.name} width={66} />
                <Card>
                  <header>
                    <div className="name-date">
                      <div>{item.name}</div>
                      <Divider orientation="vertical" flexItem />
                      <div>{item.date}</div>
                    </div>
                    <div className="action">
                      <img src={like} width={30} />
                      <img src={dislike} width={30} />
                      <img
                        alt={''}
                        src={reply}
                        style={{
                          marginBottom: "6px",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      <img
                        alt={''}
                        src={stop}
                        style={{
                          marginBottom: "6px",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </div>
                  </header>
                  <div className="textOfComment">{item.describe}</div>
                </Card>
              </div>
            );
          }
        })}
      </div>
    </div>
    
    <div className="showCommentsItems">
          <div className="showCommentsItems01">
            <div className="showCommentsItemsHolderName">
              <p className="showCommentsItemsStudentName">amirhossein</p>
            </div>
            <div className="showCommentsItemsHolderComment"> 
              <p className="showCommentsItemsStudentComment"> یکی از رشته‌های مهندسی بوده و ترکیبی از نرم‌افزار و سخت‌افزار است که به توسعه‌ی سیستم‌های کامپیوتری می‌پردازد .</p>
            </div>

            <hr></hr>

            <div className="showCommentsItemsHolderName">
              <p className="showCommentsItemsStudentName">amirhossein</p>
            </div>
            <div className="showCommentsItemsHolderComment"> 
              <p className="showCommentsItemsStudentComment"> یکی از رشته‌های مهندسی بوده و ترکیبی از نرم‌افزار و سخت‌افزار است که به توسعه‌ی سیستم‌های کامپیوتری می‌پردازد .</p>
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
          <div className="showCommentsItems02"></div>
          <div className="showCommentsItems03"></div>
          <div className="showCommentsItems04"></div>
          <div className="showCommentsItems05"></div>
          <div className="showCommentsItems06"></div>
        </div>
    </>
  );
};
export { Comments };
