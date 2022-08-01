import './footer.css'

const Footer = () => {

    const myClick1 = () => {
        navigator.clipboard.writeText("Bahr.Academy@gmail.com");
    }

    const myClick2 = () => {
        navigator.clipboard.writeText("09111231234");
    }

    return(
        <div className="FooterHolder">

            <ul className="FooterContact">
                <li onClick={myClick1}>Bahr.Academy@gmail.com</li>
                <li onClick={myClick2}>1234 123 0911</li>
                <li>Noorgoon Team</li>
            </ul>

            <ul className="FooterLocation">
                <li>ساری، جاده دریا، بعد از دنیای آرزو، پژوهشگاه سپهر</li>
            </ul>

            <ul className="FooterSocial">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </div>
    );
}

export {Footer};