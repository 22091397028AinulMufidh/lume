import Header from '../Components/Header.jsx'
import Hero from '../Components/Hero.jsx'
import Mid from '../Components/Mid.jsx'
import Review from '../Components/Review.jsx'
import Footer from '../Components/Footer.jsx'
import Stats from '../Components/Stats.jsx'

function Home() {
    return (
        <>
        <Header/>
        <Stats/>
        <Hero/>
        <Mid/>
        <Review/>
        <Footer/>
        </>
    )
}

export default Home