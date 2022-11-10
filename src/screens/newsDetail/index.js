import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { trackPromise } from "react-promise-tracker";
import { Comments } from "../../components/Comments/Comments"
import { DetailNews } from "../../components/SingleNews/DetailNews/DetailNews"
import { NewsDetailClass } from "../../components/SingleNews/NewsDetailClass/NewsDetailClass"
import { getNewsById } from "../../api/Core/News";

const NewsDetail = () => {
    const { id } = useParams();
    const [detailNews, setDetailNews] = useState()

    const comments = [{
        name: 'mohamad',
        date: '25 اردیبهشت 1401',
        describe: 'توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ',
    },
    {
        name: 'amir',
        date: '25 مهر 1401',
        describe: 'توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ',
        idParent: true
    },
    {
        name: 'jafar',
        date: '25 مهر 1401',
        describe: 'توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ',
        idParent: true
    },
    {
        name: 'amir hosein',
        date: '25 اردیبهشت 1401',
        describe: 'توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ',
    },
    ]

    useEffect(() => {
        trackPromise(getDetailNews(id))
    }, [])

    const getDetailNews = async () => {
        let response = await getNewsById(id);
        if (response.data.result) {
            setDetailNews(response.data.result)
        }
    }

    return (
        <>
            {detailNews && <>
                <NewsDetailClass detailsNews={detailNews} />
                <DetailNews detailsNews={detailNews} />
                <Comments comments={comments} postId={id}/>
            </>}
        </>
    )
}

export { NewsDetail }