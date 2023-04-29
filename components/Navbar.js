import Link from "next/link";
import Styles from "./../styles/Navbar.module.css"

const Navbar =()=>{

    return(
        <nav className={Styles.nav}>
            <div className={Styles.container + " container"}>
                <div className={Styles.logo}>Ecommerc</div>
                <ul>
                    <li>
                        <Link className={Styles.link} href="/">Home </Link>
                    </li>
                    <li>
                        <Link className={Styles.link} href="/about"> About</Link>
                    </li>
                    <li>
                        <Link className={Styles.link} href="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
  export default Navbar;