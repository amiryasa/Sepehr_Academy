import { useEffect, useRef, useState } from "react";
import "./CommentsCour.css";
import Card from "@mui/material/Card";
import { Input } from "../common/Input/Input";
import { Btn } from "../common/Button/Btn";
import { answerComment, getComment, sendNewComment } from "./../../api/Core/Comment";
import * as fa from "../../constants/persianStrings";
import { getItem } from "../../api/storage/storage";
import { getStudentById } from "../../api/Core/Student_Manage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PopUp from "../common/PopUp/PopUp"
import { trackPromise } from "react-promise-tracker";

import good01 from './../../assets/images/comment/check.png';
import bad01 from './../../assets/images/comment/remove.png';
import { getEmployeById } from "../../api/Core/Employe_Manage";

const CommentsCour = (props) => {
  const [idea, setIdea] = useState();
  const [question, setQuestion] = useState();

  const [postIdHolder, setPostIdHolder] = useState();

  const [adminAnswers, setAdminAnswers] = useState();
  const textInput = useRef(null);
  const [courseId, setCourseId] = useState();
  const [openAnswer, setOpenAnswer] = useState(false);

  const [activePart, setActivePart] = useState('idea')

  const [allComent, setAllComent] = useState();
  const [allQuestion, setAllQuestion] = useState();
  const id = JSON.parse(getItem('id'));
  const role = getItem('role');

  const navigator = useNavigate();

  const good = ['خوب بود', 'مفید', 'بی نظیر', 'بینظیر', 'بی‌نظیر', 'عالی بود', 'کامل بود', 'خوب', 'عالی', 'کامل', 'جامع', 'خوبی داشت', 'خوبی', 'جامع بود', 'جامعی داشت', 'کاملی داشت', 'مناسب', 'تشکر', 'مفید بود', 'مطلوب', 'توصیه میشود', 'توصیه می‌شود', 'توصیه می شود'];
  const bad = ['بد بود', 'عالی نبود', 'کامل نبود', 'خوب نبود', 'بد', 'ناقص', 'نبود جامع', 'بدی داشت', 'بد', 'ناقص بود بود', 'جامعی نداشت', 'کاملی نداشت', 'افتضاح', 'مسلط نبود', 'تسلط نداشت', 'تسلط کافی نداشت', 'کمه', 'کافی نیست', 'مفید نبود', 'مفیدی نبود', 'مناسب نبود', 'مناسبی نبود', 'جامع نبود']





  useEffect(() => {
    trackPromise(fixComments())
    trackPromise(fixComments01())
  }, [])


  let courseStu = props.student.map((item) => (
    item._id
  ));


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

  //idea

  const handleAddId = async () => {

    if (id) {
      var student = await getStudentById(id);
      setCourseId(id);

    }

    if (student) {

      if (idea.length < 100 && idea.length > 0) {
        var commentData = {
          postId: props.postId,
          email: student.data.result.email,
          username: student.data.result.fullName,
          Comment: idea
        }

        setIdea('');
      }

      else if (idea.length > 100) {
        toast.error('تعداد کارکترهای مجاز کمتر از 100 است.')
      }

      else if (idea.length === 0) {
        toast.error('متن پیام نباید خالی باشد.')
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
        return ((item.postId === props.postId) && item.verified);
      })
      setAllComent([...currentResult]);
    }

  }


  const ideaAnswerHandler = async () => {
    if (postIdHolder && adminAnswers) {
      const result = await answerComment({
        id: postIdHolder,
        answer: adminAnswers
      });

      toast.success('.پاسخ با موفقیت ثبت شد')
    }
  }





  //question

  const handleAddQuestion = async () => {

    if (id) {
      var student01 = await getStudentById(id);
      setCourseId(id);
    }

    if (student01) {

      if (question.length < 100 && question.length > 0) {
        var commentData = {
          postId: `${props.postId}.question`,
          email: student01.data.result.email,
          username: student01.data.result.fullName,
          Comment: question
        }
        if (commentData) {
          const response = await sendNewComment(commentData);
          toast.success('پرسش شما با موفقیت ثبت شد .')
        }

        setQuestion('');

      }

      else if (question.length > 100) {
        toast.error('تعداد کارکترهای مجاز کمتر از 100 است.')
      }

      else if (question.length === 0) {
        toast.error('متن پیام نباید خالی باشد.')
      }


      console.log('x,g', question.length);
    }

  }

  const fixComments01 = async () => {
    const result01 = await getComment();

    if (result01) {
      var currentResult01 = result01.data.filter((item) => {
        return (item.postId === `${props.postId}.question` && item.verified === true);
      })
      setAllQuestion([...currentResult01]);
    }

  }


  const questionAnswerHandler = async () => {

    if (postIdHolder && adminAnswers) {
      const result = await answerComment({
        id: postIdHolder,
        answer: adminAnswers
      });

      setOpenAnswer(false);
      toast.success('.پاسخ با موفقیت ثبت شد')

      fixComments01();
    }
  }


  return (
    <>

      <div className="commentsCour">
        <div className="commentsCourTitleHolder">
          <p onClick={() => setActivePart('idea')} style={activePart === 'idea' ? { borderBottom: '2px solid #043D72', color: '#043D72', cursor: 'default' } : { color: '#a5a9ad', cursor: 'pointer', fontSize: '21px' }}> {fa.TITLE_COMMENTS} </p>
          <p onClick={() => setActivePart('question')} style={activePart === 'question' ? { borderBottom: '2px solid #043D72', color: '#043D72', cursor: 'default' } : { color: '#a5a9ad', cursor: 'pointer', fontSize: '21px' }}> پرسش و پاسخ </p>
        </div>
        {id && courseStu.includes(id) ?
          <>
            <div className="addNewComment">
              <Card>
                <span>{activePart === 'idea' ? fa.INSERT_COMMENT : 'ثبت پرسش'}</span>
                <div className="TextComment">
                  <Input
                    title={activePart === 'idea' ? fa.TITLE_TEXT_COMMENT : 'متن پرسش'}
                    multiline={true}
                    row={2}
                    // refInput={textInput}
                    value={activePart === 'idea' ? idea : question}
                    name="message"
                    onChange={(even) => { activePart === 'idea' ? setIdea(even.target.value) : setQuestion(even.target.value) }}
                  />
                </div>
                <Btn text={activePart === 'idea' ? fa.INSERT_COMMENT : 'ثبت پرسش'} color="info" variant="contained" onChange={() => {
                  if (activePart === 'idea') {
                    trackPromise(handleAddId())
                  }
                  else {
                    trackPromise(handleAddQuestion())
                  }

                }} />
              </Card>
            </div>
          </>
          :
          (id && !(courseStu.includes(id)) && activePart === 'idea') || (role === 'admin') ?

            <>
              <div className="addNewComment">
                <Card>
                  <span>{fa.INSERT_COMMENT}</span>
                  <div className="TextComment">
                    <Input
                      title={fa.TITLE_TEXT_COMMENT}
                      multiline={true}
                      row={2}
                      // refInput={textInput}
                      value={idea}
                      name="message"
                      onChange={(even) => setIdea(even.target.value)}
                    />
                  </div>
                  <Btn text={fa.INSERT_COMMENT} color="info" variant="contained" onChange={() => {
                    trackPromise(handleAddId())
                  }} />
                </Card>
              </div>
            </>
            :
            id && !(courseStu.includes(id)) && activePart === 'question' ?
              <>
                <div className="commentPleaseLogin" style={{ lineHeight: '80px' }}> تنها دانشجویان دوره قادر به ثبت پرسش هستند، برای ثبت پرسش لازم است تا دوره را خریداری نمایید !
                </div>
              </>
              :
              !(courseStu.includes(id)) && activePart === 'idea' ?
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
                :
                !(courseStu.includes(id)) && activePart === 'question' ?
                  <>
                    <div className="commentPleaseLogin" style={{ lineHeight: '80px' }}> تنها دانشجویان دوره قادر به ثبت پرسش هستند، برای ثبت پرسش لازم است تا دوره را خریداری نمایید !
                    </div>
                  </>
                  :
                  <>

                  </>
        }

      </div>



      <div className="showcommentsCourItems">
        {allComent && activePart === 'idea' ? allComent.map((item, index) => (

          <div className="showcommentsCourItems01">
            <div className="showcommentsCourItemsHolderName">
              <p className="showcommentsCourItemsStudentName">{item.username}</p>
            </div>
            <div className="showcommentsCourItemsHolderComment">
              <p className="showcommentsCourItemsStudentComment">{item.comment}</p>
            </div>

            <hr></hr>

            <div className="showcommentsCourItemsHolderName">
              {item.answer ?
                <p className="showcommentsCourItemsStudentNameAn" > پاسخ: </p>
                : ''}
            </div>

            <div className="showcommentsCourItemsHolderComment">
              <p className="showcommentsCourItemsStudentComment">{item.answer ? item.answer : 'پاسخی ثبت نشده است.'}</p>
            </div>

            <div className="showcommentsCourItemsHolderIcon">
              <div></div>
              <div onClick={() => {
                if (role === 'admin' && !(item.answer)) {
                  setOpenAnswer(true);
                  setPostIdHolder(item._id);
                }
                else if (role === 'admin' && item.answer) {
                  toast.warning('برای این کامنت پاسخ ثبت شده است')
                }
                else {
                  toast.warning('این عمل برای کاربری شما غیرفعال است')
                }
              }}></div>
              <div></div>
              <div></div>
            </div>

            <div className="showcommentsCourItemsHolderMode">
              <img src={arrangMode(item.comment) > 0 ? good01 : arrangMode(item.comment) === 0 ? bad01 : ''} alt='' style={{ width: '25px', position: 'absolute', top: '7px', right: '5px' }} />
            </div>

          </div>

        )) : ""}

        {allQuestion && activePart === 'question' ? allQuestion.map((item, index) => (

          <div className="showcommentsCourItems01">
            <div className="showcommentsCourItemsHolderName">
              <p className="showcommentsCourItemsStudentName">{item.username}</p>
            </div>
            <div className="showcommentsCourItemsHolderComment">
              <p className="showcommentsCourItemsStudentComment">{item.comment}</p>
            </div>

            <hr></hr>

            <div className="showcommentsCourItemsHolderName">
              {item.answer ?
                <p className="showcommentsCourItemsStudentNameAn" > پاسخ: </p>
                : ''}
            </div>

            <div className="showcommentsCourItemsHolderComment">
              <p className="showcommentsCourItemsStudentComment">{item.answer ? item.answer : 'پاسخی ثبت نشده است.'}</p>
            </div>

            <div className="showcommentsCourItemsHolderIcon">
              <div></div>
              <div onClick={() => {
                if ((role === 'teacher' || role === 'admin') && !(item.answer)) {
                  setOpenAnswer(true);
                  setPostIdHolder(item._id);
                }
                else if ((role === 'teacher' || role === 'admin') && item.answer) {
                  toast.warning('برای این کامنت پاسخ ثبت شده است.')
                }
                else {
                  toast.warning('این عمل برای کاربری شما غیرفعال است.')
                }
              }}></div>
              <div></div>
              <div></div>
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
            <div className="commentsCour">
              <div className="addNewComment">
                <Card>
                  <span>{'ثبت پاسخ'}</span>
                  <div className="TextComment">
                    <Input
                      title={'متن پاسخ'}
                      multiline={true}
                      row={2}
                      // refInput={textInput}
                      value={adminAnswers}
                      name="message"
                      onChange={(event) => setAdminAnswers(event.target.value)}
                    />
                  </div>
                  <Btn text={'ثبت پاسخ'} color="info" variant="contained" onChange={() => {
                    activePart === 'question' ? trackPromise(questionAnswerHandler()) : trackPromise(ideaAnswerHandler())
                  }} />
                </Card>
              </div>
            </div>
          </div>
        </PopUp>
      }

    </>
  );
};
export { CommentsCour };

