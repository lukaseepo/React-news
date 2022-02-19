import axios from 'axios';
import { useState, useEffect } from 'react';
import './Articles.scss';

const Articles = ({props}) => {
    let [news, updateNews] = useState([]);
    const value = props.match.params.value;
    const i = props.match.params.id;

    console.log(props);
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${value}&from=2021-11-28&sortBy=popularity&apiKey=216c18825d25471ba3398032a49f06af`)
        .then((res) => {
            updateNews(res.data.articles[i]);
        }).catch((err) => {
            console.log(err);
        });
    }, [value, i])

    return (
        <section className='articles-section'>
            <div className="container">
                <div className="article-items">
                    <div className="items">
                        <div className='item'>
                            <h4>Title: {news.title}</h4>
                            <h4>Content: {news.content}</h4>
                            <h4>Date: {news.publishedAt}</h4>
                            <div className='img' style={{backgroundImage: `url(${news.urlToImage})`}}></div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Articles
