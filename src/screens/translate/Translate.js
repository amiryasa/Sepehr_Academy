import { useContext } from "react";
import { GeneralContext } from "../../providers/GeneralContext"
export default function Translate() {
    const { language, setLanguage } = useContext(GeneralContext);


    const handleChangeLng = (lng) => {
        // localStorage.setItem("lng", lng);
        setLanguage(lng)
    };
    return (
        <div style={{ marginRight: "50px" }}>
            <button onClick={() => handleChangeLng("en")}>English</button>
            <button onClick={() => handleChangeLng("fa")}>Jp</button>
            <h1>{language}</h1>
        </div>
    )
}