import { useEffect, useRef, useState } from "react";
import "./Comments.css";
import Card from "@mui/material/Card";
import { Input } from "../common/Input/Input";
import { Btn } from "../common/Button/Btn";
import { getComment, sendNewComment } from "./../../api/Core/Comment";
import * as fa from "../../constants/persianStrings";
import { getItem } from "../../api/storage/storage";
import { getStudentById } from "../../api/Core/Student_Manage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PopUp from "../common/PopUp/PopUp"
import { trackPromise } from "react-promise-tracker";

import good01 from './../../assets/images/comment/check.png';
import bad01 from './../../assets/images/comment/remove.png';

const Comments = (props) => {
  const [idea, setIdea] = useState();
  const textInput = useRef(null);
  const [courseId, setCourseId] = useState();
  const [openAnswer, setOpenAnswer] = useState(false);

  const [allComent, setAllComent] = useState();
  const id = JSON.parse(getItem('id'));
  const role = getItem('role');

  const navigator = useNavigate();

  const good = ['خوب بود', 'مفید', 'بی نظیر', 'بینظیر', 'بی‌نظیر', 'عالی بود', 'کامل بود', 'خوب', 'عالی', 'کامل', 'جامع', 'خوبی داشت', 'خوبی', 'جامع بود', 'جامعی داشت', 'کاملی داشت', 'مناسب', 'تشکر', 'مفید بود', 'جالب', 'آموزنده' , 'اموزنده'];
  const bad = ['بد بود', 'عالی نبود', 'کامل نبود', 'خوب نبود', 'بد', 'ناقص', 'نبود جامع', 'بدی داشت', 'بد', 'ناقص بود بود', 'جامعی نداشت', 'کاملی نداشت', 'افتضاح', 'مسلط نبود', 'تسلط نداشت', 'تسلط کافی نداشت', 'کمه', 'کافی نیست', 'مفید نبود', 'مفیدی نبود', 'مناسب نبود', 'مناسبی نبود', 'جامع نبود', 'جالب نبود', 'اموزنده نبود', 'آموزنده نبود']

  useEffect(() => {
    trackPromise(fixComments())
  }, [])


  const arrangMode = (message) => {

    let goods = 0;
    let bads = 0;

    good.forEach((item) => {
      if ((message).includes(item)) {
        goods++;
      }
    });


    bad.forEach((item) => {
      if ((message).includes(item)) {
        bads++;
      }
    });


    if (bads > 0) {
      return 0;
    }
    else if (goods > 0) {
      return 1
    }
    else {
      return -1;
    }
  }

  const handleAddId = async () => {

    if (id && role === 'student') {
      var student = await getStudentById(id);
      setCourseId(id);

    }

    if (student) {

      if (idea.length < 100) {
        var commentData = {
          postId: props.postId,
          email: student.data.result.email,
          username: student.data.result.fullName,
          Comment: idea
        }

        textInput.current.value = "";
      }

      else {
        toast.error('تعداد کارکترهای مجاز کمتر از 100 است.')
      }
    }

    if (commentData) {
      const response = await sendNewComment(commentData);
      toast.success('نظر شما با موفقیت ثبت شد .')
    }
  }

  const fixComments = async () => {
    const result = await getComment();

    if (result) {
      var currentResult = result.data.filter((item) => {
        return ((item.postId === props.postId)
          && item.verified);
      })
      setAllComent([...currentResult]);
    }

  }

  const handleReplay = () => {
    console.log('amirhossein');
  }


  return (
    <>


      {id ?
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
                    refInput={textInput}
                    name="message"
                    onChange={(even) => { setIdea(even.target.value) }}
                  />
                </div>
                <Btn text={fa.INSERT_COMMENT} color="info" variant="contained" onChange={() => {
                  trackPromise(handleAddId())
                }} />
              </Card>
            </div>
          </div>
        </>
        :
        <>
          <div className="commentPleaseLogin"> تنها کاربران سایت قادر به ثبت نظر هستند، برای ثبت نظر لازم است تا ثبت‌نام کنید و یا وارد شوید!
            <div className="commentPleaseLoginBtn">
              <Btn
                text={fa.SIGN_UP}
                elementClass="mediumBtnCh2"
                color="info"
                onChange={() => navigator('/register')}
              />
              <hr></hr>
              <Btn
                text={fa.LOGIN}
                elementClass="mediumBtnCh2"
                color="info"
                className="newoskol"
                onChange={() => navigator('/login')}
              />
            </div>
          </div>


        </>
      }



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
              <div onClick={() => { setOpenAnswer(true) }}></div>
              <div></div>
              <div></div>
            </div>

            <div className="showCommentsItemsHolderMode">
              <img src={arrangMode(item.comment) > 0 ? good01 : arrangMode(item.comment) === 0 ? bad01 : ''} alt='' style={{ width: '25px', position: 'absolute', top: '7px', right: '5px' }} />
            </div>

          </div>

        )) : ''}
      </div>
      {openAnswer &&
        <PopUp
          handleClose={() => { setOpenAnswer(false) }}
          open={openAnswer}
          className='replayAdder'
          closeBtn
          handleCloseWithOutSave={() => { setOpenAnswer(false) }}>
          <div className="showReplay" >
            <div className="comments">
              <div className="addNewComment">
                <Card>
                  <span>{'ثبت پاسخ'}</span>
                  <div className="TextComment">
                    <Input
                      title={'متن پاسخ'}
                      multiline={true}
                      row={2}
                      refInput={textInput}
                      name="message"
                    // onChange={handleChange}
                    />
                  </div>
                  <Btn text={'ثبت پاسخ'} color="info" variant="contained" onChange={handleAddId} />
                </Card>
              </div>
            </div>
          </div>
        </PopUp>
      }

    </>
  );
};
export { Comments };

