import "./Comments.css";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import { Input } from "../common/Input/Input";
import { Btn } from "../common/Button/Btn";
import AvatarCostomize from "../common/avatar";

import like from "../../assets/images/comment/like.png";
import dislike from "../../assets/images/comment/dislike.png";
import reply from "../../assets/images/comment/reply.png";
import stop from "../../assets/images/comment/no-stopping.png";
import * as fa from "../../constants/persianStrings";

const Comments = (props) => {

  return (
    <div className="comments">
      <p> {fa.TITLE_COMMENTS} </p>
      <div className="addNewComment">
        <Card>
          <span>{fa.INSERT_COMMENT}</span>
          <div className="TextComment">
            <Input title={fa.TITLE_TEXT_COMMENT} multiline={true} row={2} />
          </div>
          <Btn text={fa.INSERT_COMMENT} color="info" variant="contained" />
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
                </Card>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export { Comments };
