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

            <div className="footerContact">
                <p>Bahr.Academy@gmail.com</p>
                <p>0911 123 1234</p>
                <p>Noorgoon Team</p>
            </div>

            <div className="footerSocial">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="footerLocation"> <p> ساری، جاده دریا، بعد از دنیای آرزو، پژوهشگاه سپهر </p> </div>
        </div>
    );
}

export {Footer};