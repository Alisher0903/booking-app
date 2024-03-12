import AboutFinder from './components/about-finder';
import BookingMenu from './components/booking-menu';
import Cards from './components/cards';
import FilterMenu from './components/filter-menu';
import FirstSection from './components/firstSection';
import Footer from './components/footer';
import { hotel1, hotel2, hotel3, hotel4, hotel5, hotel6 } from "../../../assets/landing-img";

const Restuarant = () => {
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
                    className='mr-0'
                    leftText='Nearest facilities list'
                    rightText=''
                    button=''
                />
            </div>
            <div className="w-[98%] mx-auto mt-6 border-2 border-gray-300 rounded-md">
                <div className="w-[85%] mx-auto my-12">
                    <FilterMenu activeClassRestaurants='text-[#F46A06]' />
                </div>
                <div className="max-w-[1350px] mx-auto my-16 flex justify-start items-start flex-wrap">
                    <div className="p-7 w-1/3">
                        <Cards
                            image={hotel1}
                            name={'Galaxy Hotel'}
                        />
                    </div>
                    <div className="p-7 w-1/3">
                        <Cards
                            image={hotel2}
                            name={'Classic Hotel'}
                        />
                    </div>
                    <div className="p-7 w-1/3">
                        <Cards
                            image={hotel3}
                            name={'Mille colline hotel'}
                        />
                    </div>
                    <div className="p-7 w-1/3">
                        <Cards
                            image={hotel4}
                            name={'M-Hotel'}
                        />
                    </div>
                    <div className="p-7 w-1/3">
                        <Cards
                            image={hotel5}
                            name={'Heaven-Hotel'}
                        />
                    </div>
                    <div className="p-7 w-1/3">
                        <Cards
                            image={hotel6}
                            name={'Marriot-Hotel'}
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-[1350px] mx-auto mt-20 pb-24 border-b-2 border-gray-400">
                <AboutFinder
                    title='About HFfinder'
                    text='This is the system that links the tourists and hospitality facilities owners. this is done in such way that people can view the nearby their location Hospitality facilitites and be able to access their services aswell as pay on the system.'
                />
            </div>
            <Footer />
        </div>
    )
}

export default Restuarant