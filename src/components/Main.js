import React from 'react'
import '../styles/main.css'
import Footer from './Footer'

class Main extends React.Component{
  render(){
    return (<main>
      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>좀비를 불에 화장시키면 일어나는 대참사 | 결말 포함</h4>
            <h5>B급 리뷰</h5>
          </div>
          <div className="movie__video">
            <iframe src="https://www.youtube.com/embed/13TpBCEEzd8?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>가장 황당한 축구장 TOP 10</h4>
            <h5>불양TV</h5>
          </div>
          <div className="movie__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/di105HNpQec?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
          </div>
        </div>
      </section>
      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>야통이 운동시키기</h4>
            <h5>haha ha</h5>
          </div>
          <div className="movie__video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Cfjaj4MnOkE?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </main>)
  }
}

export default Main