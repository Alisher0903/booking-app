import BookingMenu from "./components/booking-menu";
import FirstSection from "./components/firstSection";
import './styles.css';
import AboutFinder from "./components/about-finder";
import Footer from "./components/footer";
import LocationInput from "./components/location-input";

const DeparutreTame = () => {
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
                    leftText='Book a car'
                    rightText='Back to home page'
                    button=''
                    leftLink='/'
                    rightLink='/'
                />
            </div>
            <div className="w-[98%] mx-auto mt-6 border-2 border-gray-300 rounded-md">
                <LocationInput />
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

export default DeparutreTame;