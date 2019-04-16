import moment from "moment";

const days = [
  "Today",
  "Tomorrow",
  moment()
    .add(2, "days")
    .format("ddd, MMM D")
];

const times = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM"
];

export const apartments = [
  {
    name: "Silverstone",
    photo: "https://freshome.com/wp-content/uploads/2018/02/studio-intro.jpg",
    city: "San Francisco, CA",
    days,
    times
  },
  {
    name: "Brisa Village",
    photo:
      "https://cdn.vox-cdn.com/thumbor/WYVZlPOvgr4Yxy1dDvDQNb7I1Rg=/0x0:3000x2000/1820x1213/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59543123/290_West_St_3B_14.0.jpg",
    city: "Sacramento, CA",
    days,
    times
  },
  {
    name: "River Lofts",
    photo:
      "https://07f138315bb5e97f9e43-31068357019044cca7c8e84d92de0d99.ssl.cf3.rackcdn.com/1024x768/56587_11491_001.jpg",
    city: "San Jose, CA",
    days,
    times
  },
  {
    name: "Tanglewood",
    photo:
      "https://media.tfehotels.com/media/filer_public_thumbnails/filer_public/02/2c/022c5fa4-de05-4d0f-afc1-6f6c14e2a910/adina-apartment-hotel-auckland-britomart-two-bedroom-premier-apartment-lounge-room-03-v2-2017109-1.jpg__1230x615_q85_crop_subsampling-2_upscale.jpg",
    city: "Downey, CA",
    days,
    times
  },
  {
    name: "University Village",
    photo:
      "https://dynamicmedia.irvinecompany.com/is/image/content/dam/apartments/3-readytopublish/communities/orangecounty/irvine/parkplace/photography/PPIII-INT-MAY2018-LIVRM-A.tif?&wid=1920&qlt=85&crop=0,483,5700,2375&fit=stretch&iccEmbed=1&icc=AdobeRGB&fmt=pjpeg&pscan=auto",
    city: "San Francisco, CA",
    days,
    times
  },
  {
    name: "Stonewood",
    photo:
      "https://static.dezeen.com/uploads/2018/01/shoe-box-apartment-col_8.jpg",
    city: "Davis, CA",
    days,
    times
  },
  {
    name: "Woodbridge",
    photo:
      "https://www.cwsapartments.com/uploads/images/images/original/361609/13.jpg?1533848309",
    city: "Sunnyvale, CA",
    days,
    times
  },
  {
    name: "Pinecrest Apartments",
    photo:
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/651450/CA_Cypress_CasaGrande_5_05_1_PhotoGallerynew.jpg?&quality=85&",
    city: "San Diego, CA",
    days,
    times
  },
  {
    name: "Cambridge House",
    photo:
      "https://www.chisinau-apartments.com/uploads/icons/categories/category-id-/Resized-Budget-Apartment.jpg",
    city: "Los Angeles, CA",
    days,
    times
  },
  {
    name: "West Village",
    photo:
      "https://www.chisinau-apartments.com/uploads/icons/categories/category-id-/Centrally-Located-Rentals.jpg",
    city: "Woodland, CA",
    days,
    times
  },
  {
    name: "The Edge",
    photo:
      "https://www.chisinau-apartments.com/uploads/icons/categories/category-id-/Resized-Luxury-Apartment.jpg",
    city: "Dixon, CA",
    days,
    times
  },
  {
    name: "Oakshade Commons",
    photo:
      "https://www.chisinau-apartments.com/uploads/apartment_images/apartment-id-1/Apartment-2rooms-rent-Chisinau-center1%20(2%20of%201).jpg",
    city: "Vacaville, CA",
    days,
    times
  },
  {
    name: "Broadleaf Apartments",
    photo: "https://freshome.com/wp-content/uploads/2008/03/apartment.jpg",
    city: "Fairfield, CA",
    days,
    times
  },
  {
    name: "Capitol Towers",
    photo:
      "http://cafesilvestreut.com/wp-content/uploads/parser/1-bedroom-apartment-tampa-1.jpg",
    city: "Seattle, WA",
    days,
    times
  },
  {
    name: "Sutter Green",
    photo:
      "https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/180730SoffitInterior.jpg",
    city: "Long Beach, CA",
    days,
    times
  },
  {
    name: "Davenport",
    photo:
      "https://nyppagesix.files.wordpress.com/2018/08/trump-tower.jpeg?quality=90&strip=all&w=1286",
    city: "Davis, CA",
    days,
    times
  },
  {
    name: "Artisan Square Apartments",
    photo: "https://q-xx.bstatic.com/images/hotel/max400/851/85186232.jpg",
    city: "San Jose, CA",
    days,
    times
  },
  {
    name: "Rush River Apartments",
    photo:
      "http://foreshorewaters.com/wp-content/uploads/2017/06/Studio-Apartment.jpg",
    city: "Davis, CA",
    days,
    times
  }
];
