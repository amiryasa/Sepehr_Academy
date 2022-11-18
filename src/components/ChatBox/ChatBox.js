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

    if(!(id)){
      id = Math.floor(Math.random() * 9000000000) + 1000000000;
      id = `${id}guess`

      setUserId(id);
    }
    else{
      id = Math.floor(Math.random() * 9000000000) + 1000000000;
      id = `${id}userr`

      setUserId(id);
    }
  },[])


  const setMessageInChat = async(message, writer) => {

    setMessageList(item => [...item, {
      author: writer,
      type: 'text',
      data: {
        text: message
      }
    }])

    console.log('meggage income', message);

  }



  


  const getStudentMessage = async() => {

      const result01 = await getComment();

      if (result01) {
        var currentResult01 = result01.data.filter((item) => {
          return ((item.postId === `${userId}.chat`));
        })
      }

      console.log(currentResult01.answer);

      if(currentResult01.answer){
        setMessageList(item => [...item, {
          author: 'them',
          type: 'text',
          data: {
            text: currentResult01.answer
          }
        }])
      }
         
  }

  // var timer = setInterval(getStudentMessage,10000);

  const messageHanler = async(message) => {

    setMessageList(item => [...item, message]);

    var commentData = {
      postId: `${userId}.chat`,
      email: "chat@gmail.com",
      username: "chat",
      Comment:  message.data.text
    }

    const response = await sendNewComment(commentData);
    
  }

  

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



