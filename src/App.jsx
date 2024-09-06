import Header from "./Components/Header";
import HeaderTitle from "./Components/HeaderTitle";
import Banner from "./Pages/Banner";
import BannerBottomImg from "./Pages/BannerBottomImg";
import Service from "./Pages/Service";
import Testimonial from "./Pages/Testimonial";
import Workflows from "./Pages/Workflows";

const App = () =>{
  return(
    <section>
      <HeaderTitle/>
      <Header/>
      <Banner/>
      <BannerBottomImg/>
      <Service/>
      <Workflows/>
      <Testimonial/>
    </section>
  )
}

export default App;