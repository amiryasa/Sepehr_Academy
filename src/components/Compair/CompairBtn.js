import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import compairPhoto from "../../assets/images/Compair/compair.png"
import { GeneralContext } from "../../providers/GeneralContext"
import { Tooltips } from "../Tooltive/Tooltips";
import "./Compair.css"

export default function CompairBtn() {
    const { compairCourse } = useContext(GeneralContext);
    const navigator = useNavigate();

    return (
        <div className="compairBtn" onClick={() => {
            if (compairCourse.length === 2) navigator('/compair')
            else toast.warning('باید برای مقایسه حتما 2 دوره انتخاب شود!!')
        }}>
            <div className="numberCompair">{compairCourse.length}</div>
            <Tooltips color={"#00adef"} message={'مقایسه'} >
                <img src={compairPhoto} width={40} style={{ margin: "auto" }} />
            </Tooltips>
        </div>
    )
}