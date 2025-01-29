 import { LuArrowDownRight } from "react-icons/lu";
 import { HiClipboardList} from "react-icons/hi";
 import { HiUser } from "react-icons/hi";
 import { HiOutlineCurrencyDollar } from "react-icons/hi";
 import { HiOutlineDesktopComputer } from "react-icons/hi";
 import { HiReceiptRefund } from "react-icons/hi";


 export const sociaLinks=[
   {name:'discord', icon: <LuArrowDownRight className='h-6'/>,href:'#'},
   {name:'twitter', icon:<LuArrowDownRight className='h-6'/>,href:'#'},
   {name:'linkedIn', icon:<LuArrowDownRight className='h-6'/>, href:'#'},
   {name:'Instagram', icon:<LuArrowDownRight className='h-6'/>, href:'#'}
 ]

 
export const navLinks=[
    {name:'dashboard', href:"/dashboard"},
    {name:'profile', href:"/profile"},
    {name:'payment', href:"/payment"},
]

export const footerLinks=[
  {name:'terms',href:"/"},
  {name:'dashboard', href:"/dashboard"},
  {name:'profile', href:"/profile"},
  {name:'payment', href:"/payment"},
  {name:'terms',href:"/aa"},
  {name:'dashboard', href:"/cc"},
  {name:'profile', href:"/pe"},
  {name:'payment', href:"/pt"}
]

export const exploreSection=[
  {description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque expedita nam in repudiandae, quibusdam debitis iure dicta molestiae dolor quaerat.',
    image:"/images/v1.jpg"},

  {description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque expedita nam in repudiandae, quibusdam debitis iure dicta molestiae dolor quaerat.',
    image:"/images/v2.jpg"},

  {description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque expedita nam in repudiandae, quibusdam debitis iure dicta molestiae dolor quaerat.', 
    image:"/images/v3.jpg"},

  {description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque expedita nam in repudiandae, quibusdam debitis iure dicta molestiae dolor quaerat.',
     image:"/images/v4.jpg"}
]


export const teamMembers=[
  {firstName:'Kenneth',role:"frontend developer", connect:"#", image:'/images/ken.jpg', lastName:'danso'},
  {firstName:'Claud', role:"blockchain developer",connect:"#", image:'/images/claud_img.jpg', lastName:'opoku'},
  {firstName:'makafui', role:"ui/ux designer",connect:"#", image:'/images/moto.jpg', lastName:'richman'},
  {firstName:'elsie', role:"project manager",connect:"#", image:'/images/base2_nft.png', lastName:'somuah'},
]

export const sidearContent=[
  {name:'dashboard',href:"/dashboard",icon:<HiOutlineDesktopComputer/>},
  {name:'payment',href:"/payment",icon:<HiOutlineCurrencyDollar/>},
  {name:'history',href:"/history",icon:<HiReceiptRefund/>},
  {name:'profile',href:"/profile",icon:<HiUser/>},
  {name:'documents',href:"/documents",icon:<HiClipboardList/>},
]


export const transactions=[
  {walletAddress:'0FXX0003255555581249999',date:'25 Jan 10:28:14 AM',completed:'Completed',ratings:'-$13000'},
  {walletAddress:'0FXX0003255555581249999',date:'25 Jan 10:28:14 AM',completed:'Completed',ratings:'-$13000'},
  {walletAddress:'0FXX0003255555581249999',date:'25 Jan 10:28:14 AM',completed:'Completed',ratings:'-$13000'},
  {walletAddress:'0FXX0003255555581249999',date:'25 Jan 10:28:14 AM',completed:'Completed',ratings:'-$13000'},
  {walletAddress:'0FXX0003255555581249999',date:'25 Jan 10:28:14 AM',completed:'Completed',ratings:'-$13000'},
  {walletAddress:'0FXX0003255555581249999',date:'25 Jan 10:28:14 AM',completed:'Completed',ratings:'-$13000'},
  {walletAddress:'0FXX0003255555581249999',date:'25 Jan 10:28:14 AM',completed:'Completed',ratings:'-$13000'},
  {walletAddress:'0FXX0003255555581249999',date:'25 Jan 10:28:14 AM',completed:'Completed',ratings:'-$13000'},
  {walletAddress:'0FXX0003255555581249999',date:'25 Jan 10:28:14 AM',completed:'Completed',ratings:'-$13000'},
  {walletAddress:'0FXX0003255555581249999',date:'25 Jan 10:28:14 AM',completed:'Completed',ratings:'-$13000'},
]


export const faqs = [
  {
   question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
   hovered:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
   touched:false
  },
  {
    question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
    hovered:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
    touched:false
   },
   {
    question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
    hovered:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
    touched:false
   },
   {
    question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
    hovered:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
    touched:false
   },
   {
    question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
    hovered:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
    touched:false
   },
   {
    question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
    hovered:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?",
    touched:false
   }
]


export const recommend = [
  { firstName: "Frinquilla",lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg'},
  { firstName: "February",lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg' },
  { firstName: "March",lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg' },
  { firstName: "April",lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg'},
  { firstName: "May", lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg'},
  { firstName: "June",lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg' },
]

// export const historyLogs = [
//   { walletTo: "Frinquilla",lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg'},
//   { walletTo: "February",lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg' },
//   { walletTo: "March",lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg' },
//   { walletTo: "April",lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg'},
//   { walletTo: "May", lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg'},
//   { walletTo: "June",lastName:'Sempe', occupation:'UI/UX Designer', info:"loremhighest solid must be worked and info a", img:'/images/v1.jpg' },
// ]

export const test = [
  {position:'Softwear engineer', company:'google', time:'2025-present', address:'Ohio Oklahoma',work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",href:"#"},
  {position:'Softwear engineer', company:'google', time:'2025-present', address:'Ohio Oklahoma',work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",href:"#"},
  {position:'Softwear engineer', company:'google', time:'2025-present', address:'Ohio Oklahoma',work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",href:"#"},
  {position:'Softwear engineer', company:'google', time:'2025-present', address:'Ohio Oklahoma',work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",href:"#"},
  {position:'Softwear engineer', company:'google', time:'2025-present', address:'Ohio Oklahoma',work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",href:"#"},
  {position:'Softwear engineer', company:'google', time:'2025-present', address:'Ohio Oklahoma',work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",href:"#"},
]