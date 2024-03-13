import { Link } from "react-router-dom"
import { detailsBg, cofeDetails } from "../../../assets/landing-img"
import DetailsInfo from "./components/details/details-info"
import Services from "./components/details/services";
import './styles.css';
import DetailsFilterMenu from "./components/details/details-filter-menu";
import Cards from "./components/details/cards";

const Details = () => {
  const goBack = () => window.history.back();

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
      <div className="max-w-[1350px] mx-auto my-16 flex justify-start items-start flex-wrap">
        {/* {mainData ?
          mainData.map(item => (
            <div className="p-7 w-1/3">
              <Cards
                key={item.id}
                image={item.img}
                name={item.name}
              />
            </div>
          )) : ( */}
            <div className="p-7 w-1/3">
              <Cards
                image={cofeDetails}
                name={'Not Found'}
                countName={'count'}
                btn1={'btn'}
                btn2={'btn2'}
              />
            </div>
          {/* )} */}
      </div>
    </div>
  )
}

export default Details