import Link from 'next/link'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div>
    	<ul className="f-links">
                        <li><Link className='bgc-lnk' href="/archive">archive</Link></li>
                        <li><Link className='bgc-lnk' href="/about">about</Link></li>
                        <li><Link className='bgc-lnk' href="/contact">contact</Link></li>
                  </ul>
                  <ul className="f-links">
                        <li><Link className='bgc-lnk' href="/">newsletter</Link></li>
                        <li><Link className='bgc-lnk' href="/">donate</Link></li>
                  </ul>
          <p className='author-date'>There's not much to write here really. This website does not leave any cookies and your data is not being collected.</p>
          <p className='author-date'>&copy; 2023, glimpse of details, Satyam Ghimire. All rights reserved.</p>

          </div>
      <div><Link href="/">
		     <Image className="d-logo"
                            src={logo}
                            alt="logo of the website"
                            style={{ width: '100%', height: '80px' }}/>
		    </Link>
        <ul className="sc-links">
                        <li><Link href="/archive"><FaFacebook/></Link></li>
                        <li><Link href="/about"><FaTwitter/></Link></li>
                        <li><Link href="/contact"><FaTiktok/></Link></li>
                        <li><Link href="/contact"><FaInstagram/></Link></li></ul>
        </div>
  </div>
  )
}
