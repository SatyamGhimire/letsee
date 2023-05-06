import React, { useState} from "react";
import Image from 'next/image'
import Link from 'next/link'
import newsletter from '../../public/Newsletter.webp'
import logo from '../../public/logo.svg'
import { FaBars } from "react-icons/fa";


export default function NavBar() {

  const [isSidebarOn, setIsSidebarOn] = useState(false)
  const handleToggle = () => {
    setIsSidebarOn(!isSidebarOn)
  }
  return (
    <>
      <nav>
          <Link href="/">
		  <Image className="logoo"
                            src={logo}
                            alt="logo of the website"
                            style={{ width: '100%', height: '45px' }}/>
		  </Link>
          <button className="hide-desk" onClick={handleToggle} ><FaBars/></button>
            
      </nav>

      <div className={
        isSidebarOn ? "mov-nav" : "sidebar"}>
          <ul className="home-about">
                        <li><Link className='bgc-lnk' href="/archive">ARCHIVE</Link></li>
                        <li><Link className='bgc-lnk' href="/about">ABOUT</Link></li>
                        <li><Link className='bgc-lnk' href="/contact">CONTACT</Link></li>
                  </ul>
        <div className="sidebar-gd">
        <div className="donate bg-pink">

	      	<Image className=""
                            src={newsletter}
                            alt="newsletter picture"
                            style={{ width: '100%', height: 'auto' }}/>
<p>Newsletter subscription. It doesn't work for now though.</p><input type="box"/>
									<button type ="submit">Sign up</button>
          </div>
        <div className="archive">
          <p>Sort by tags:</p>
          <ul className="sort-tags">
            <li><Link className='tg-lnk' href="/tags/thats-life">thats-life</Link></li>
            <li><Link className='tg-lnk' href="/tags/short-story">short-story</Link></li>
            <li><Link className='tg-lnk' href="/tags/what-if">what-if</Link></li>
            <li><Link className='tg-lnk' href="/tags/naive-maybies">naive-maybies</Link></li>
          </ul>
        </div>
        <div className="bg-blue newsletter"><p className="author-date">Please donate if you like what I write in this website. No pressure though! Where to donate will be revealed soon.</p>
        </div>
        <div className="bg-green youtube">Space for YouTube channel which will exist soon.</div>
        
</div></div>
      </>
  )

}
