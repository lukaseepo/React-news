import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss';
import Search from '../../components/search/Search';
import { Link } from 'react-router-dom';


const Home = () => {
    const [news, updateNews] = useState([]);
    const [value, setValue] = useState('driver');
    const [size, setSize] = useState(20);
    const [loading, setLoading] = useState(true);
    const abortCont = new AbortController();

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${value}&pageSize=${size}&from=2021-11-28&sortBy=popularity&apiKey=216c18825d25471ba3398032a49f06af`, { signal: abortCont.signal })
        .then((res) => {
            updateNews(res.data.articles);
            setLoading(false);
        }).catch((err) => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }else{
                console.log(err.message);
            }
        });
        
        return () => abortCont.abort();
    }, [size, value]) 

    console.log(news);


    window.onscroll = function() {
        if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight) {
            console.log('down');
            setSize(size + 20);
        }
    }

    
    
    return (
        <section className='home-section'>
            <div className='container'>
                <div className="home-items">
                    <Search onChange={setValue}/>
                    {news.length === 0 ? <h3 className='no-article'>There is no articles to show</h3> : <h3>Scroll to load more articles</h3>}
                    {loading === true && 
                    <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                    </svg>}
                    <div className="items">
                        {news.map((e, i) => (
                            <div key={i} className='item'>
                                <h4>Title: {e.title}</h4>
                                <h4>Contenet: {e.content} <Link to={`articles/${value}/${i}`}>Read More</Link></h4>
                                <h4>Date: {e.publishedAt}</h4>
                                <div className='img' style={e.urlToImage === null ? 'rendering' : {backgroundImage: `url(${e.urlToImage})`}}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Home
