import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import articles from '@/data/articles'
import Sixboxes from '@/components/Sixboxes'
import Twoboxes from '@/components/Twoboxes'

export default function Home() {
  return (
    <>
      <Head>
        <title>glimpse of details</title>
        <meta name="description" content="gathering hints of meaning to live, writing about moments when life nods at us and comfort us, makes our life bearable" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Satyam Ghimire"/>
        <meta property="og:title" content="glimpse of details"/>
        <meta property="og:description" content="gathering hints of meaning to live, writing about moments when life nods at us and comfort us, makes our life bearable"/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:site" content="@glimpseofdetail"/>
        <meta name="twitter:title" content="glimpse of details"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:description" content="gathering hints of meaning to live, writing about moments when life nods at us and comfort us, makes our life bearable"/>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div className="upper-main">
        <div className="article first">
                    <Link href={articles[0].slug}><h1 className="link-und">{articles[0].title}</h1></Link>
                    <h2 className="art-stle">{articles[0].excerpt}</h2>
                    <hr className="art-hr"/>
                    <p className="author-date">By Satyam Ghimire | Date: May 6, 2023</p>
                        <Image className="img-art"
                            src={articles[0].photo}
                            alt={articles[0].alt}
                            height={1000}
                            width={1000}/>
                        <p className="art-txt">I was crossing the road, and he was behind me. Some fifteen steps between us. Out of nowhere, a car skidded towards us—the driver rotating the wheel furiously as the car lost its control.<Link className="cont-read" href=""> ...continue reading...</Link></p>
                        <p className="art-hlt"> I shouldn't be sad because I shouldn't. It's stupid. I didn’t want to care in the first place, I have to remember. Because even if he woke up now, I would still hold on to my disinterest.</p>
                <p className="art-txt"> Because I want better, I want the best, and I have got only this life. He was ugly, and I am not.</p>
                </div> 
                
                <Sixboxes slug1={articles[1].slug} photo1={articles[1].photo} alt1={articles[1].alt} title1={articles[1].title}
                slug2={articles[0].slug} photo2={articles[0].photo} alt2={articles[0].alt} title2={articles[0].title}
                />
                <div className="article second">this box is empty, will be filled soon. only 5 articles are written at present. they are at the top.
                </div>
				<div className="wd-100">
                <div className="bg-blue long-box ">
                empty box, will be filled soon...please read what exists at present
                </div>  

                <div className="bg-green long-box ">
					empty box, will be filled soon...please read what exists at present</div>  
				<div className="mid-box">All the boxes below are empty too. It will be filled soon. Please read what exists at present.</div>
				<div className="bg-green long-box ">
                empty box, will be filled soon...please read what exists at present</div>  

                <div className="bg-blue long-box ">
                empty box, will be filled soon...please read what exists at present</div>
				</div>
      </div>
      <div className="lower-main">
            <Twoboxes/>
    <div className="gd art-n-also">
        <div className="article third">
        empty box, will be filled soon...please read what exists at present</div>
		 <div className="bg-green box-200 sp-3 willbe5">empty box, will be filled soon...please read what exists at present</div>

                <div className="bg-blue box-200 sp-2 willbe4">empty box, will be filled soon...please read what exists at present</div>     
                
                <div className="bg-blue box-200 sp-2 willbe4">empty box, will be filled soon...please read what exists at present</div>                   
                
                <div className="bg-green box-200 sp-3 willbe5">empty box, will be filled soon...please read what exists at present</div> 
		
	</div>
		 <div className="article fourth">
         empty box, will be filled soon...please read what exists at present</div>

        <div className="article fourth">
        empty box, will be filled soon...please read what exists at present</div>
		<div className="gd art-n-also">
        <div className="article third">
        empty box, will be filled soon...please read what exists at present</div>
		 <div className="bg-green box-200 sp-3 willbe5">empty box, will be filled soon...please read what exists at present</div>

                <div className="bg-blue box-200 sp-2 willbe4">empty box, will be filled soon...please read what exists at present</div>     
                
                <div className="bg-blue box-200 sp-2 willbe4">empty box, will be filled soon...please read what exists at present</div>                   
                
                <div className="bg-green box-200 sp-3 willbe5">empty box, will be filled soon...please read what exists at present</div> 
		
	</div>
      </div>
    </>
  )
}
