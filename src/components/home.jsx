import React, {useState, useEffect} from 'react'
import Carousel from './carousel'
import Expierence from './expierience'
import Footer from './footer'
import HowItWorks from './howItWorks'
import NavBar from './navbar'
import Reviews from './reviews'
import Services from './services'
import WhyChooseUs from './whyChooseUs'
import data from './data'
import Testimonials from './testimonials'
import Loading from './common/loading'
import Counterlap from './counterlap'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState(data)
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    setInterval(()=> {
      setJobs(jobs)
      setLoading(false);
    }, 500)
  }

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <section className='section loading'>
        <Loading/>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value]
    return ( 
    <div>
      <NavBar/>
      <Carousel/>
      <Reviews/>
      <HowItWorks/>
      <WhyChooseUs/>
      <Counterlap/>
      <Services/>
      <Expierence jobs={jobs} value={value} company={company} dates={dates} duties={duties} title={title} setValue={setValue}/>
     <Testimonials/> 
      <Footer/>
    </div>
     );
}
 
export default Home;