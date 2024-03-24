import Popup from "reactjs-popup";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PopUpInfo = ({ Data, trigger }) => (
  <Popup trigger={trigger} modal nested>
    {(close) => (
      <div className="popUp">
        <button className="close" onClick={close}>
          &times;
        </button>
        <Carousel showArrows={true} className="photoSlide">
          {Data.img.map((photoUrl, index) => (
            <div key={index} className="photoContainer">
              <img src={photoUrl} alt={`Dog ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <div className="popUpInfo">
          <div className="header">{Data.petName}</div>
          <div className="border-t px-4 py-3 ">
            <dl className="sm:divide-y divide-gray-600 mt-4">
              <div
                className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                style={{ borderBottom: "var(--white-text);" }}
              >
                <dt className="text-sm font-medium">ID:</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {Data.id}
                </dd>
              </div>
              <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">Location:</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {Data.location}
                </dd>
              </div>
              <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">Breed:</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {Data.breed}
                </dd>
              </div>

              <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">Gender:</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {Data.gender}
                </dd>
              </div>
              <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">Main color:</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {Data.mainColor}
                </dd>
              </div>
              <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">Size:</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {Data.size}
                </dd>
              </div>
              <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">Age:</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {Data.age}
                </dd>
              </div>
              <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">Desexed:</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {Data.desexed}
                </dd>
              </div>
              <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">Vaccinated:</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                  {Data.vaccinated}
                </dd>
              </div>
            </dl>
          </div>
          <div className="actions">
            <button className="dogCardButton">Adopt</button>
            <button className="dogCardButton">Foster</button>
          </div>
        </div>
      </div>
    )}
  </Popup>
);

export default PopUpInfo;
