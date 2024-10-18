import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero_banner from '../../assets/hero_banner.jpg'
import Herotitle from '../../assets/hero_title.png'
import Playicon from '../../assets/play_icon.png'
import Infoicon from '../../assets/info_icon.png'
import Titlecards from '../../Components/TitleCards/Titlecards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={Hero_banner} alt="BackgroundBanner" className='banner-img' />
        <div className="hero-caption">
          <img src={Herotitle} alt="heroTitle" className='caption-img' />
          <p className=''>
            Discovering his ties to a secret ancient order , a young man living in mordern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={Playicon} alt="buttonsimage" />play</button>
            <button className='btn' id='dark-btn'><img src={Infoicon} alt="buttonsimage" />More Info</button>
          </div>
          <Titlecards />
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Blockbuster Movies"} category={"top_rated"} />
        <Titlecards title={"Upcoming "} category={'upcoming'} />
        <Titlecards title={"Only on Netflix"} category={'popular'} />
        <Titlecards title={"Only For You"} category={'now_playing'} />
      </div>
      <Footer />
    </div>
  )
}

export default Home