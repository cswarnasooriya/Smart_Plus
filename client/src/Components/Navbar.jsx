import { FaLaptop } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { UpdateFollower } from "react-mouse-follower";
import {motion} from 'framer-motion';

const NavbarMenu = [
    {
        id:1,
        title:"Home",
        link:"/",
    },

    {
        id:2,
        title:"Categories",
        link:"/categories",
    },

    {
        id:3,
        title:"Blog",
        link:"/blog",
    },

    {
        id:4,
        title:"About",
        link:"/about",
    },

    {
        id:5,
        title:"Contact",
        link:"/contact",
    },
]

const Navbar = () => {
  return (
    <>
        <div className="bg-brandDark text-white py-8 font-varela">
            <motion.nav 
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex container justify-between">
        {/* logo section */}
                <div>
                    <a href="#" className="text-2xl font-bold uppercase">
                        Smart <span className="font-extralight text-white/70">Plus</span>
                    </a>
                </div>

        {/* menu section     */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6">
                        {NavbarMenu.map((item) => (
                            <li key={item.id}>
                                <UpdateFollower
                                mouseOptions={{
                                    backgroundColor:"white",
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    mixBlendMode:"difference",
                                    scale: 5,
                                }}
                                >
                                     <a href={item.link} className="inline-block text-sm py-2 px-3 uppercase"> {item.title} </a>

                                </UpdateFollower>
                            </li>
                        ))}

                        <UpdateFollower
                                mouseOptions={{
                                    backgroundColor:"white",
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    mixBlendMode:"difference",
                                    scale: 5,
                                }}
                                >
                                     <button className="text-xl ps-14">
                                        <FaLaptop />
                                    </button>

                                </UpdateFollower>
                        
                    </ul>
                </div>

        {/* mobile section */}
                <div className="md:hidden">
                    <IoMenu className="text-4xl" />
                </div>
            
             </motion.nav>
        </div>
    </>
    
  )
}

export default Navbar
