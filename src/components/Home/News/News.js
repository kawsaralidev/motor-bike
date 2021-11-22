import React from 'react';
import New from './New';


const news = [
    {
        name: 'Suzuki New Gixxer Series Available', discription: 'Suzuki Motor Corporation is a Japanese multinational corporation headquartered in Minami-ku, Hamamatsu, Japan. Suzuki manufactures automobiles, four-wheel drive vehicles, motorcycles, all-terrain vehicles, outboard manufactures automobiles, four-wheel drive vehicles, motorcycles, marine engines, wheelchairs and a variety of other small internal combustion engines',
        img: 'https://i.ibb.co/Z8cNDW7/news1.jpg'
    },
    {
        name: 'Suzuki GSX 125 The All Rounder', discription: 'Suzuki Motor Corporation is a Japanese multinational corporation headquartered in Minami-ku, Hamamatsu, manufactures automobiles, four-wheel drive vehicles, motorcycles, Japan. Suzuki manufactures automobiles, four-wheel drive vehicles, motorcycles, all-terrain vehicles, outboard marine engines, wheelchairs and a variety of other small internal combustion engines',
        img: 'https://i.ibb.co/mSt1cdb/news2.jpg'
    },
    {
        name: 'Yamaha R15 New Addition The Street King', discription: 'Suzuki Motor Corporation is a Japanese multinational corporation headquartered in Minami-ku, Hamamatsu, Japan. Suzuki manufactures automobiles, four-wheel drive vehicles, motorcycles, all-terrain vehicles, outboard marine engines, wheelchairs and a variety of other small internal combustion engines',
        img: 'https://i.ibb.co/L9k1Xyb/news3.jpg'
    },
    {
        name: 'Honda CBR Hornet Series Available', discription: 'Honda Motor Corporation is a Japanese multinational corporation headquartered in Minami-ku, Hamamatsu, Japan. Suzuki manufactures automobiles, four-wheel drive vehicles, motorcycles, all-terrain vehicles, outboard marine engines, wheelchairs and a variety of other small internal combustion engines',
        img: 'https://i.ibb.co/y4Q3LLb/news4.jpg'
    },
    {
        name: 'Honda series Are Available', discription: 'Yamaha R15 Motor Corporation is a Japanese multinational corporation headquartered in Minami-ku, Hamamatsu, Japan. Suzuki manufactures automobiles, four-wheel drive vehicles, motorcycles, all-terrain vehicles, outboard marine engines, wheelchairs and a variety of other small internal combustion engines',
        img: 'https://i.ibb.co/XVP4n9z/news5.jpg'
    },
]

const News = () => {

    return (
        <div className="container">
            <h2>Our <span className="text-info ">News</span></h2>
            <div className="row mt-4">
                {
                    news.map(now => <New now={now}></New>)
                }
            </div>
        </div>
    );
};

export default News;