import axios from 'axios';
import { useState, useEffect } from 'react';
import './Category.scss';

const Category = () => {
    const [news, updateNews] = useState([]);
    const [country, setCountry] = useState('ca');
    const [category, setCategory] = useState('business');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=216c18825d25471ba3398032a49f06af`)
        .then((res) => {
            updateNews(res.data.articles);
            setLoading(false);
        }).catch((err) => {
            console.log(err.message);
        });
    }, [category, country]) 

    return (
        <section className='category-section'>
            <div className="container">
                <div className="category-items">
                    <div className="options">
                        <div className="option-item">
                            <h4>Choose Category:</h4>
                            <select onChange={(e) => setCategory(e.target.value)}>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="general">General</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                        <div onChange={(e) => setCountry(e.target.value)} className="option-item">
                            <h4>Choose Country:</h4>
                            <select>
                                <option value="ca">Ca</option>
                                <option value="ar">Ar</option>
                                <option value="at">At</option>
                                <option value="au">Au</option>
                                <option value="be">Be</option>
                                <option value="bg">Bg</option>
                                <option value="br">Br</option>
                                <option value="ae">Ae</option>
                            </select>
                        </div>
                    </div>
                    {loading === true && 
                    <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                    </svg>}
                    <div className="items">
                        {news.map((e,i) => (
                            <div key={i} className='item'>
                                <h4>Title: {e.title}</h4>
                                <h4>Content: {e.content}</h4>
                                <h4>Date: {e.publishedAt}</h4>
                                <div className='img' style={{backgroundImage: `url(${e.urlToImage})`}}></div>
                            </div>
                        ))}
                    </div>
                </div>   
            </div>
        </section>
    )
}

export default Category
