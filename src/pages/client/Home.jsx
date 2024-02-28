import React from 'react'
import Welcome from "../../components/client/Home/Welome.jsx"
import Welcome2 from "../../components/client/Home/Welcome2.jsx"
import Discover from '../../components/client/Home/Discover.jsx'
import Cards from '../../components/client/Home/Cards.jsx'
import DiscoverMenu from '../../components/client/Home/DiscoverMenu.jsx'
import Reservation  from '../../components/client/Home/Reservation.jsx'
import Review  from '../../components/client/Home/Review.jsx'
import Video from '../../components/client/Home/Video.jsx'
import News from '../../components/client/Home/News.jsx'
import Sign from '../../components/client/Home/Sign.jsx'







function Home() {
  return (
    <div>
      <Welcome />
      <Welcome2 />
      <Discover />
      <Cards />
      <DiscoverMenu/>
      <Reservation/>
      <Review/>
      <Video/>
      <News/>
      <Sign/>
    </div>
  )
}

export default Home