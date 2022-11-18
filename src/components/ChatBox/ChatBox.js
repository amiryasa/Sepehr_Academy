import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Launcher } from 'react-chat-window'
import { trackPromise } from 'react-promise-tracker';
import { toast } from 'react-toastify';
import { getComment, sendNewComment } from '../../api/Core/Comment';
import { getStudentById } from '../../api/Core/Student_Manage';
import { getItem } from '../../api/storage/storage';

import './ChatBox.css';

export const ChatBox = () => {

  var id = JSON.parse(getItem('id'));

  const [allComentIn, setAllComentIn] = useState();
  const [userId, setUserId] = useState();

  const [messageId, setMessageId] = useState();
  const newMessage = useRef();


  var hoooooolder = [];

  const [messageList, setMessageList] = useState(
    [
      {
        author: 'them',
        type: 'text',
        data: {
          text: 'سلام، به چه کمکی احتیاج دارید؟'
        }
      },
    ]
  )

  useEffect(() => {

    if (!(id)) {
      id = Math.floor(Math.random() * 9000000000) + 1000000000;
      id = `${id}guess`

      setUserId(id);
    }
    else {
      id = Math.floor(Math.random() * 9000000000) + 1000000000;
      id = `${id}userr`

      setUserId(id);
    }
  }, [])

  useEffect(() => {
    setInterval(getStudentMessage, 10000);
  })



  const setMessageInChat = async (message, writer) => {

    setMessageList(item => [...item, {
      author: writer,
      type: 'text',
      data: {
        text: message
      }
    }])

    console.log('meggage income', message);

  }






  const getStudentMessage = async () => {
    console.log(newMessage.current, "newMessage.current");
    if (newMessage.current === true) {

      const result01 = await getComment();


      if (result01) {
        var currentResult01 = result01.data.filter((item) => {
          return ((item.postId === `${userId}.chat`));
        })

      }


      if (currentResult01 && currentResult01.length > 0 && currentResult01[0].answer) {
        setMessageList(item => [...item, {
          author: 'them',
          type: 'text',
          data: {
            text: currentResult01[0].answer
          }
        }])
        newMessage.current = false
      }
    }

  }


  const messageHanler = async (message) => {

    setMessageList(item => [...item, message]);

    var commentData = {
      postId: `${userId}.chat`,
      email: "chat@gmail.com",
      username: "chat",
      Comment: message.data.text
    }

    const response = await sendNewComment(commentData);

    newMessage.current = true
  }



  return (
    <div className='chatBoxHolder' style={{ direction: 'ltr' }}>
      <Launcher
        agentProfile={{
          teamName: 'پشتیبانی آکادمی بحر',
          imageUrl: 'https://s6.uupload.ir/files/logo_tua.png'
        }}
        onMessageWasSent={even => messageHanler(even)}
        messageList={messageList}
      />
    </div>)
}





