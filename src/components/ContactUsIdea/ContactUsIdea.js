import { Input } from "../common/Input/Input";
import React, { useState } from 'react'
import { trackPromise } from 'react-promise-tracker';
import * as fa from "../../constants/persianStrings";
import { Btn } from '../common/Button/Btn';

import './ContactUsIdea.css'
import { sendNewComment } from "../../api/Core/Comment";
import { useEffect } from "react";
import { getItem } from "../../api/storage/storage";
import { getStudentById } from "../../api/Core/Student_Manage";
import { toast } from "react-toastify";

const ContactUsIdea = () => {

    const id = JSON.parse(getItem('id'));
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState();

    useEffect(() => {
        if (id)
          trackPromise(inputFeilder(id));
    }, [])

    const btnHandler = async() => {

        const data={
            postId: '.idea',
            email: email,
            username: name,
            Comment: description
        }

        const result = await sendNewComment(data);
        setDescription('')
        toast.success('نظر شما با موفقیت ثبت شد .')
    }

    const inputFeilder = async (id) => {
        let response = await getStudentById(id);
        if (response.data.result) {
          setEmail(response.data.result.email)
          setName(response.data.result.fullName)
        }
    
    }

    // export const sendNewComment = payload =>
    // api.post(SEND_NEW_COMMENT, {
    //     postId: payload.postId,
    //     email: payload.email,
    //     username: payload.username,
    //     comment: payload.Comment
    // })
  return (
    <div className="ContactUsIdea">
        <p> انتقادات و پیشنهادات </p>
        <p> پیشنهادات و انتقادات خود از بخش‌های مختلف سایت را با ما در میان بگذارید.</p>
        <div className="ContactUsIdeaInput">
          <div className="ContactUsIdeaInputName">
            <Input
              value={name}
              title={fa.TITLE_NAME_USER}
              width="236px"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className="ContactUsIdeaInputEmail">
            <Input
              value={email}
              title="ایمیل کاربر"
              width="236px"
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className="ContactUsIdeaInputMessage">
            <Input
              title={fa.TITLE_DESCRIPT_MESSAGE}
              width="236px"
              multiline={true}
              row={4}
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </div>

          <Btn
            color="goal"
            text={fa.INSERT_MESSAGE}
            margin={"85px 58px 0 auto"}
            elementClass="smallBtn"
            variant="contained"

            onChange={() => {
              trackPromise(btnHandler())
            }}
          />
        </div>
    </div>
  )
}

export {ContactUsIdea};