import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJ-_xr2OadzNELliH0qGjw6j1wmK6t2TLaA&usqp=CAU"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const resObject = {
  type: "restaurant",
  data: {
    type: "F",
    id: "74453",
    name: "Domino's Pizza",
    uuid: "87727dbd-7f2b-4857-9763-359624165845",
    city: "21",
    area: "Athwa",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    cuisines: ["Pizzas"],
    tags: [],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 45,
    minDeliveryTime: 45,
    maxDeliveryTime: 45,
    slaString: "45 MINS",
    lastMileTravel: 0,
    slugs: {
      restaurant: "dominos-pizza-majura-nondh-test_surat",
      city: "surat",
    },
    cityState: "21",
    address:
      "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
    locality: "Bhatar Road",
    parentId: 2456,
    unserviceable: false,
    veg: true,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "FREE DELIVERY",
      shortDescriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "",
      shortDescriptionList: [
        {
          meta: "Free Delivery",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "2.1 kms",
    hasSurge: false,
    sla: {
      restaurantId: "74453",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      lastMileTravel: 0,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: false,
    avgRating: "4.0",
    totalRatings: 1000,
    new: false,
  },
  subtype: "basic",
}

const Card = (props) => {
  
  const {data} = props.resData;
  //console.log(data)
  return (
    <div className="card">
      <img alt="card-image" className="card-image" src="https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_740,h_493,al_c,lg_1,q_85,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" />
    <div className="card-details">
    <h3>{data.name}</h3>
    <h4>Delicious  {data.cuisines}</h4>
    <h4>{data.avgRating}</h4>
    <h4>{data.deliveryTime} minutes</h4>
    </div>
    
    </div>
  )
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Card resData = {resObject} />
      </div>
    </div>
  )
}
const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
