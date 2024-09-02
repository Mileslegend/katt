import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { profile2, profile3,profile4,profile5,
         panel,turbine,batteries, member1, member2, member3, member4} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Tours",id:'project'},
    {name:"Clients",id:'testimonial'},
    {name:"FAQ",id:'faq'},
    {name:"Contact",id:'contact'},
];

export const services = [
  {
    name:"Safari Tours",
    image:panel,
    description:`Embark on an unforgettable safari adventure, 
    where breathtaking landscapes meet majestic wildlife. 
    Experience nature up close, create lasting memories, 
    and immerse yourself in the wild like never before. 
    Your journey into the heart of Africa awaits!"`,
  },
  {
    name:"Car Hire",
    image:turbine,
    description:`Discover the thrill of a safari with our 
    seamless car hire services! 
    Explore stunning landscapes and encounter wildlife at your own pace, 
    ensuring an unforgettable adventure tailored just for you. 
    Your wild journey begins here!`,
  },
  {
    name:"Adventures",
    image:batteries,
    description:`Embrace the thrill of adventure! 
    Dive into new experiences, conquer challenges, 
    and explore the unknown. Lifes greatest stories await—let your 
    journey begin and discover the 
    extraordinary in every moment!`,
  },
]

export const teams = [
  {
    name:"Muhumuza Miles",
    title:"Web Master",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"https://www.facebook.com/prince.allan.5243/"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"https://ug.linkedin.com/in/muhumuza-allan-b14bb12a3"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/@mileslegend"},
      {name:"Instagram",icon:<FaInstagram/>,url:"https://www.instagram.com/mileslegend3/"},
    ]
  },
  {
    name:"Katwalo Moses",
    title:"Director",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/@mileslegend"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Kanyunyuzi Juliana",
    title:"Manager",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/@mileslegend"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  // {
  //   name:"Joy Eze",
  //   title:"Technician",
  //   profile:member4,
  //   social:[
  //     {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
  //     {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
  //     {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
  //     {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
  //   ]
  // },
]

export const projects = [
  {
    title:"River tours",
    image:"https://res.cloudinary.com/dedzljzlc/image/upload/v1725278884/WhatsApp_Image_2024-08-30_at_11.46.25_AM_1_svuzou.jpg",
    category:"Water",
    description:`Come aboard for a thrilling river adventure! 
    Feel the rush as we navigate rapids and explore hidden treasures. 
    Join the fun today!`,
  },
  {
    title:"Lake Views",
    image:"https://res.cloudinary.com/dedzljzlc/image/upload/v1725279694/Lake_Malawi__Third_Largest_Lake_On_The_African_Continent_srlixk.jpg",
    category:"Water",
    description:`Behold stunning lake vistas that will take your breath away! Relax and soak in the beauty of nature at its finest. Experience tranquility like never before!`,
  },
  {
    title:"Water bodies sights",
    image:"https://res.cloudinary.com/dedzljzlc/image/upload/v1725280099/26555b13-ee28-427b-8ba9-57515c36b076_bxrxm4.jpg",
    category:"Water",
    description:`Embark on an aquatic journey, where the wonders 
    of water unfold before your eyes! Discover serenity and 
    adventure in the mesmerizing beauty of water landscapes.`,
  },
  {
    title:"Land Experience",
    image:"https://res.cloudinary.com/dedzljzlc/image/upload/v1725280208/download_4_apg8w3.jpg",
    category:"Land",
    description:`Roar with excitement as you witness the untamed 
    beauty of safari sights! Embark on a thrilling journey through 
    the wild and behold nature's 
    wonders in all their glory.`,
  },
  {
    title:"Nature Immersion ",
    image:"https://res.cloudinary.com/dedzljzlc/image/upload/v1725281300/Top_10_Uganda_Gorilla_Tours_from_Kigali_to_Bwindi_or_Mgahinga_xhpkqm.jpg",
    category:"Land",
    description:`Venture into the heart of the forest and immerse yourself in the wild! 
    Experience the thrill of connecting with nature as 
    you explore its hidden treasures and embrace its untamed beauty.`,
  },
  {
    title:"Safari sights",
    image:"https://res.cloudinary.com/dedzljzlc/image/upload/v1725279849/download_1_sdquxl.jpg",
    category:"Hybrid",
    description:`Join a thrilling safari adventure, 
    where the wild lands await your exploration! 
    Witness majestic wildlife up close and feel the 
    pulse of nature's heartbeats.`,
  },
];

export const faq = [
  {
    title:"What should I consider when choosing a tour destination?",
    description:`
       When selecting a tour destination, 
       consider factors such as your interests 
       (e.g., nature, culture, adventure), budget, 
       travel restrictions, climate, and the duration of your trip. 
       Research the local culture, attractions, 
       and activities available to ensure 
       it aligns with your preferences.
    `,
  },
  {
    title:"How do I find the best tour operator?",
    description:`
       To find a reputable tour operator, 
       read online reviews, check their credentials, 
       and compare packages. Look for operators 
       that specialize in your desired destination 
       or type of tour (e.g., adventure, cultural, eco-tourism). 
       Recommendations from friends or travel forums can also be helpful.
    `,
  },
  {
    title:"What is included in the tour package?",
    description:`
      Tour packages can vary widely, 
      so its important to read the details carefully. 
      Typically, packages may include accommodations, 
      meals, transportation, guided tours, 
      and entrance fees to attractions. 
      Clarify what is included and what additional costs may arise.
    `,
  },
  {
    title:"How do I prepare for a group tour?",
    description:`
    Preparation for a group tour involves 
    packing appropriate clothing and gear, 
    being aware of the itinerary, and 
    understanding the group dynamics. 
    Familiarize yourself with the destination, 
    and consider any special requirements 
    (e.g., vaccinations or visas) well in advance.
    `,
  },
  {
    title:"Are group tours suitable for solo travelers?",
    description:`
      Yes, many group tours cater to solo travelers, 
      providing a great opportunity to meet 
      new people and share experiences. 
      Look for tours specifically designed 
      for solo travelers or those that have a 
      friendly, inclusive atmosphere.
    `,
  },
  {
    title:"How can I stay safe while traveling on a tour?",
    description:`
    To ensure your safety while on a tour, 
    stay aware of your surroundings, 
    follow the guide's instructions, 
    and keep your belongings secure. 
    Research the safety of your destination, 
    and consider purchasing travel insurance for added peace of mind.
    `,
  },
  {
    title:" How do I handle currency and payments while traveling?",
    description:`
      Before your trip, research the local 
      currency and exchange rates. Its advisable to have a 
      small amount of cash for tips or small purchases. 
      Credit and debit cards are widely accepted, 
      but inform your bank of your travel plans 
      to avoid any issues with card usage abroad.
    `,
  },
]

export const testimonial = [
  {
    image:profile2,
    name:'Samuel Eze',
    review:`Our experience with this tourism service was exceptional! 
    From the knowledgeable guides to the seamless itinerary, every detail was perfect. 
    We created unforgettable memories and can’t
     wait to book our next adventure with them. Highly recommended!`
  },
  {
    image:profile3,
    name:'Emmanuel Joseph',
    review:`The best tourism experience we've ever had. Friendly staff, 
    great value, and unforgettable memories. 5 stars!`
  },
  {
    image:profile4,
    name:'Gloria Chiwendu',
    review:`What an incredible journey! This tourism service made our trip unforgettable. 
    The personalized attention and expert guidance transformed our vacation 
    into a dream come true. We felt valued every step of the way.
     Highly recommend for anyone seeking adventure!`
  },
  {
    image:profile5,
    name:'Precious Stone',
    review:`Seamless planning, outstanding guides, and incredible experiences. 
    We'll definitely be booking with them again!`
  }

];

export const contacts = [
  {
    name:"Email",
    value:" admin@katsmosafarisuganda.com ",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+256705377573",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"Kampala, Uganda",
    icon:<IoLocationOutline/>,
  },
]

export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Home",id:'header'},
        {name:"About Us",id:'about'},
        {name:"Services",id:'services'},
        {name:"Team",id:'team'},
        {name:"Project",id:'project'},
        {name:"Clients",id:'testimonial'},
        {name:"FAQ",id:'faq'},
        {name:"Contact",id:'contact'},
      ]
    },
    {
        name:"Gallery",
        routes:[
          {name:"Privacy Policy"},
          {name:"Terms and Conditions"},
          {name:"Cookie Policy"},
        ]
      },
]


