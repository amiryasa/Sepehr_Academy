import React, { useState } from 'react'
import { useEffect } from 'react';
import {Launcher} from 'react-chat-window'
import { trackPromise } from 'react-promise-tracker';
import { toast } from 'react-toastify';
import { getComment, sendNewComment } from '../../api/Core/Comment';
import { getStudentById } from '../../api/Core/Student_Manage';
import { getItem } from '../../api/storage/storage';

import './ChatBox.css';

const ChatBox = () => {

  var id = JSON.parse(getItem('id'));

  const [allComentIn, setAllComentIn] = useState();
  const [userId, setUserId] = useState();


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

  var hoooooolder = [];

  const setMessageInChat = (message,writer,index) => {

    if(!(hoooooolder.includes(index))){

        hoooooolder.push(index);

        setMessageList(item => [...item, {
        author: writer,
        type: 'text',
        data: {
          text: message
        }
     }])
    }


  }




  useEffect(() => {
    trackPromise(getStudentMessage());
  },[])


  const getStudentMessage = async() => {

    if(!(id)){
      id = Math.floor(Math.random() * 9000000000) + 1000000000;
      id = `${id}guess`

      setUserId(id);
    }

    if (id) {
      setMessageList([
        {
          author: 'them',
          type: 'text',
          data: {
            text: 'سلام، به چه کمکی احتیاج دارید؟'
          }
        },
      ])
      const result01 = await getComment();

      if (result01) {
        var currentResult01 = result01.data.filter((item) => {
          return ((item.postId === `${id}.chat`));
        })
      console.log('01', result01);
      }


      if(currentResult01){
        currentResult01.forEach((item, index) => {
          setMessageInChat(item.comment,'me',`${index}Q`)

          if(item.answer){
            setMessageInChat(item.answer,'them',`${index}A`)
          }
        })

        console.log('02', currentResult01);
      }
      
    }
  }

  const messageHanler = async(message) => {

    if(id.slice(-5) === 'guess'){

        var myStudent = {
          email: 'guess@gmail.com',
          username: 'guess',
        }
      }
    else{
      var student = await getStudentById(id);
        var myStudent = {
          email: student.data.result.email,
          username: student.data.result.fullName,
        }
    }

    

    setMessageList(item => [...item, message])

    if(message.data.text){
      var newMessage = {
      postId: `${id}.chat`,
      email: myStudent.email,
      username: myStudent.username,
      Comment: message.data.text
      }
    }

    if(newMessage){
      const result = await sendNewComment(newMessage);
    }
    
  }


  console.log('first00000', id);

    return (
    <div className='chatBoxHolder' style={{direction: 'ltr'}}>
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

export {ChatBox};





















// import React, {Component} from 'react'
// import {Launcher} from 'react-chat-window'

// class ChatBox extends Component {

//   constructor() {
//     super();
//     this.state = {
//       messageList: [
//         {
//           author: 'them',
//           type: 'text',
//           data: {
//             text: 'سلام به اکادمی کد نویسی بحر خوش آمدید، به چه کمکی نیاز دارید؟'
//           }
//         },
        
//       ]

//     };

//     console.log('object', this.state);
//   }

//   _onMessageWasSent(message) {
//     this.setState({
//       messageList: [...this.state.messageList, message]
//     })

    
//   }

//   _sendMessage(text) {
//     if (text.length > 0) {
//       this.setState({
//         messageList: [...this.state.messageList, {
//           author: 'them',
//           type: 'text',
//           data: { text }
//         }]
//       })
//     }
//   }

//   render() {
//     return (<div style={{direction: 'ltr'}}>
//       <Launcher
//         agentProfile={{
//           teamName: 'react-chat-window',
//           imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
//         }}
//         onMessageWasSent={this._onMessageWasSent.bind(this)}
//         messageList={this.state.messageList}
//       />
//     </div>)
//   }
// }

// export {ChatBox}



