import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
// import Contact from "../../pages/contact";
import { Link } from "react-router-dom";



const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
     path: "#services",
    isSection: true,
  },
  {
    id: 3,
    title: "About Us",
    link: "/about",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
   {
     id: 5,
    title: "Contact Us",
    path: "/contact",
   },
];
const Navbar = () => {
  return (
    <nav className="relative z-20 bg-[#FAF9F6]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-4xl text-[#C5A880]  text-400">LÈORA</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            {/* <button className="primary-btn">Sign In</button> */}
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;






// import React from "react";
// import { IoMdMenu } from "react-icons/io";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const NavbarMenu = [
//   { id: 1, title: "Home", path: "/" },
//   { id: 2, title: "Services", path: "#services" },
//   { id: 3, title: "About Us", path: "/about" },
//   { id: 4, title: "Our Team", path: "#team" },
//   { id: 5, title: "Contact Us", path: "/contact" },
// ];

// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 z-50 bg-white border-b border-[#EEEAE5]">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="container h-20 flex justify-between items-center"
//       >
//         {/* Logo */}
//         <div>
//           <h1 className="font-serif text-3xl tracking-wider text-[#1C1C1C]">
//             LÈORA
//           </h1>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:block">
//           <ul className="flex items-center gap-6">
//             {NavbarMenu.map((menu) => (
//               <li key={menu.id}>
//                 <a
//                   href={menu.path}
//                   className="text-xl tracking-wide text-[#6E6E6E] hover:text-[#C5A880] transition-colors duration-300"
//                 >
//                   {menu.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Menu */}
//         <div className="lg:hidden text-[#1C1C1C]">
//           <IoMdMenu className="text-3xl" />
//         </div>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;
