import './DetailNews.css';

const DetailNews = ({ detailsNews }) => {
    return (
        <div className='descriptionNews'>
            <p>توضیحات مقاله</p>
            <div>
                <header>{detailsNews.title} چیست؟</header>
                <span>{detailsNews.text}</span>
            </div>
            <div>
                <header>بازار کار{detailsNews.title}</header>
                <span>{detailsNews.text}</span>
            </div>
            <div>
                <header>{detailsNews.title}</header>
                <span>{detailsNews.text}</span>
            </div>
        </div>
    );
}

export { DetailNews }