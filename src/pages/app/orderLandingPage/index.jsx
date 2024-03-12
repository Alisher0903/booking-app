import BookingMenu from "./components/booking-menu";
import Button from "./components/button";
import Cards from "./components/cards";
import FilterMenu from "./components/filter-menu";
import FirstSection from "./components/firstSection";
import './styles.css';
import { img1, img2, img3, img4, img5, img6 } from "../../../assets/landing-img";
import AboutFinder from "./components/about-finder";
import Footer from "./components/footer";

const OrderLanding = () => {
  return (
    <div className="w-full text-black landing-main">
      <div className="max-w-[1350px] mx-auto">
        <div className="w-full h-screen">
          <FirstSection
            heading={`Online Hospitality facility finder system a right place.`}
            text='In case you want to access the near by hospitality facilities services this is the  right place for you.'
            headingTwo='want nearby facilities on the map? click below'
          />
        </div>
        <BookingMenu
          className='mr-4'
          leftText='Nearest facilities list'
          rightText='need a taxi to destination click here'
          button={<Button name='Book car' />}
        />
      </div>
      <div className="w-[98%] mx-auto mt-6 border-2 border-gray-300 rounded-md">
        <div className="w-[85%] mx-auto my-12">
          <FilterMenu activeClassAll='text-[#F46A06]' />
        </div>
        <div className="max-w-[1350px] mx-auto my-16 flex justify-start items-start flex-wrap">
          <div className="p-7 w-1/3">
            <Cards
              image={img1}
              name={'Galaxy Hotel'}
            />
          </div>
          <div className="p-7 w-1/3">
            <Cards
              image={img2}
              name={'BWOK RESTAURANT'}
            />
          </div>
          <div className="p-7 w-1/3">
            <Cards
              image={img3}
              name={'Mille colline hotel'}
            />
          </div>
          <div className="p-7 w-1/3">
            <Cards
              image={img4}
              name={'Indabo cafe'}
            />
          </div>
          <div className="p-7 w-1/3">
            <Cards
              image={img5}
              name={'Soy asian restaurant'}
            />
          </div>
          <div className="p-7 w-1/3">
            <Cards
              image={img6}
              name={'The hut cafe'}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1350px] mx-auto mt-20 pb-24 border-b-2 border-gray-400">
        <AboutFinder
          title='About HFfinder'
          text='This is the system that links the tourists and hospitality facilities owners. this is done in such way that people can view the nearby their location Hospitality facilitites and be able to access their services aswell as pay on the system. '
        />
      </div>
      <Footer />
    </div>
  )
}

export default OrderLanding;