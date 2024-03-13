import { Link } from "react-router-dom"
import { detailsBg } from "../../../assets/landing-img"
import DetailsInfo from "./components/details/details-info"
import Services from "./components/details/services";
import './styles.css';
import DetailsFilterMenu from "./components/details/details-filter-menu";

const Details = () => {

  function goBack() {
    window.history.back(); // Tarixdagi sahifaga qaytish
  }

  return (
    <div className="details-main-font">
      {/* first section bg img */}
      <div
        className='bg-cover bg-center w-full h-[75vh] rounded-b-2xl'
        style={{ backgroundImage: `url(${detailsBg})` }}></div>

      <div className='max-w-[1200px] mx-auto relative'>
        <DetailsInfo
          name={`Indabo caffee`}
          title={`Restaurant description`}
          description={`Soy asian table restaurant is a restaurant located in the heart 
          of kimihurura it was b rought by japanese to bring the taste of asian food in africa.`}
        />
      </div>
      <div className="max-w-[1400px] mx-auto mt-96 flex justify-end">
        <Link
          onClick={goBack}
          style={{ textShadow: '2px 2px 4px rgba(244, 106, 6, 0.8)' }}
          className='text-2xl font-semibold tracking-wider text-[#F46A06]'
        >Back to restaurants</Link>
      </div>
      <div className="max-w-[1400px] mx-auto">
        <Services />
      </div>
      <div className="max-w-[1100px] mx-auto mt-16">
        <DetailsFilterMenu />
      </div>
    </div>
  )
}

export default Details