
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
    <nav>
    {/* logo section */}
        <div>
            <a href="#">
                Smart <span>Plus</span>
            </a>
        </div>

    {/* menu section     */}
    <div>
        <ul>
            {NavbarMenu.map((item) => (
                <li key={item.id}>
                    <a href={item.link}> {item.title} </a>
                </li>
            ))}
        </ul>
    </div>
      
    </nav>
  )
}

export default Navbar
