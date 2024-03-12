import BookingMenu from "./components/booking-menu";
import Button from "./components/button";
import Cards from "./components/cards";
import FilterMenu from "./components/filter-menu";
import FirstSection from "./components/firstSection";
import './styles.css';
import image from '../../../assets/hotel-page/landing-bg.png';

const OrderLanding = () => {
  return (
    <div className="w-full text-black landing-main">
      <div className="max-w-[1350px] mx-auto">
        <div className="w-full h-screen">
          <FirstSection />
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
              image={image}
              name={'Galaxy Hotel'}
            />
          </div>
          <div className="p-7 w-1/3">
            <Cards
              image={image}
              name={'Galaxy Hotel'}
            />
          </div>
          <div className="p-7 w-1/3">
            <Cards
              image={image}
              name={'Galaxy Hotel'}
            />
          </div>
          <div className="p-7 w-1/3">
            <Cards
              image={image}
              name={'Galaxy Hotel'}
            />
          </div>
          <div className="p-7 w-1/3">
            <Cards
              image={image}
              name={'Galaxy Hotel'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderLanding;