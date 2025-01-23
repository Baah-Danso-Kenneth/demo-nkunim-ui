 import { LuArrowDownRight } from "react-icons/lu";

 import { HiClipboardList, HiCurrencyDollar } from "react-icons/hi";
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
    {name:'terms',href:"/"},
    {name:'dashboard', href:"/dashboard"},
    {name:'profile', href:"/profile"},
    {name:'payment', href:"/payment"}
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
  {description:'Slow filesystem detected. If /home/gee/bread/Hacks/nkunim-stable-coin-ui/.next is a network drive, consider moving it to a local folder. If you have an antivirus enabled, consider excluding your project directory',
    image:"/images/v1.jpg"},

  {description:'Slow filesystem detected. If /home/gee/bread/Hacks/nkunim-stable-coin-ui/.next is a network drive, consider moving it to a local folder. If you have an antivirus enabled, consider excluding your project directory',
    image:"/images/v2.jpg"},

  {description:'Slow filesystem detected. If /home/gee/bread/Hacks/nkunim-stable-coin-ui/.next is a network drive, consider moving it to a local folder. If you have an antivirus enabled, consider excluding your project directory', 
    image:"/images/v3.jpg"},

  {description:'Slow filesystem detected. If /home/gee/bread/Hacks/nkunim-stable-coin-ui/.next is a network drive, consider moving it to a local folder. If you have an antivirus enabled, consider excluding your project directory',
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


const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
