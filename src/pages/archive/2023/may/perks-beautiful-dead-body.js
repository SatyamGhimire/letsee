import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Sixboxes from '@/components/Sixboxes'
import articles from '@/data/articles'
export default function pagepage(){
    return(<>
    <Head>
    <title>Perks of Being Beautiful: A Dead Body and What Could Have Been</title>
        <meta name="description" content="A reflection of a young, beautiful girl when an ugly boy who loved her dies in an accident."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Satyam Ghimire"/>
        <meta property="og:title" content="Perks of Being Beautiful: A Dead Body and What Could Have Been"/>
        <meta property="og:description" content="A reflection of a young, beautiful girl when an ugly boy who loved her dies in an accident."/>
        <meta property="og:type" content="article"/>
        <meta name="twitter:site" content="@glimpseofdetail"/>
        <meta name="twitter:title" content="Perks of Being Beautiful: A Dead Body and What Could Have Been"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:description" content="A reflection of a young, beautiful girl when an ugly boy who loved her dies in an accident."/>
      </Head>
        <div className="upper-main">
            <div className="page-art">
                    <h1 className="art-tle">{articles[0].title}</h1>
                    <h2 className="art-stle">{articles[0].excerpt}</h2>
                    <hr className="art-hr"/>
                    <p className="author-date">By Satyam Ghimire | Date: May 6, 2023</p>
<p className="art-txt">I was crossing the road, and he was behind me. Some fifteen steps between us. Out of nowhere, a car skidded towards us—the driver rotating the wheel furiously as the car lost its control. Paralyzed with fear, I watched as it went past and stopped with a thud sound. I turned around and saw that it had hit him. He had been pushed to the side of the road, against the wall. His right hand rested at a sixty-degree angle, and his left hand pressed under his body. Blood on his face.</p>
<p className="art-txt">A person rushed from the side of the wall and poked his shoulder, making him face the sky. He lifted his bloodied hand and checked for a pulse, then let it go and looked at the developing crowd. "There's no pulse," he said.</p>              
<p className="art-txt">I took a few steps towards the scene. The crowd was thin and I could see inside it.  His body was calm and liquidy. Lifeless. He wasn't my friend but we studied in the same class. We were returning from the same class, and we always sat some benches apart. Although we never spoke, he loved me. He showed it everywhere. From the way he looked at me to the way he talked whenever he was around me. It was clear, and most importantly, I knew it. I took more steps and joined the crowd, perhaps wanting to touch him, help him. But what was there to help about? I had no courage, so I just stood there and looked at him. Some people started calling ambulances, and some officers arrived at the scene.</p>
<p className="art-hlt">He was gone, and there was no one that might love me the way he did. I never showed any interest in him because, I won't lie, he was ugly. Unattractive. Unpleasant to look at. That was all the fault there was, I guess. No matter how much I wanted to look at his inner beauty or his personality or whatever I should have looked at, I couldn't see anything past his ugly appearance. Maybe I didn't even start looking in the first place because I never went past him or around him. Hideous. Just plain ugly. His eyes were uneven, his nose was weird, he had no facial symmetry, his body was weak, and his hair was a disaster.</p>
<p className="art-txt">I hate being this way, but God should have made him beautiful or just average. Perhaps it's me that God should have made better. Perhaps it's the judgemental society we live in. But I know I am not innocent. The love inside his heart for me was beautiful though. I don't deserve it but that's all I ever needed. All these times, I knowingly ignored his love because it was from him and sought the same love from someone better looking than him. I know I am going to do that again, but I wish I could change. This boy who died was pure and true. This is my fate. I should live with it. But what if I had shown interest? There is no point in thinking that. A boy loved me, and now he is dead.</p>
<Image className="img-part"
                            src={articles[0].photo}
                            alt={articles[0].alt}
                            height={1280}
                            width={1920}/>
<span className='author-date'>Photo by: <Link className='und' href="https://unsplash.com/pt-br/@anthonytran">Anthony Tran</Link> on <Link className='und' href="https://unsplash.com/photos/2F7w4MiVVjo">Unsplash</Link></span>
<p className="art-txt">I shouldn't be sad because I shouldn't. It's stupid. I didn’t want to care in the first place, I have to remember. Because even if he woke up now, I would still hold on to my disinterest. I am not a person who cares about him. I have several options. I can choose from many— and there are many; there have always been. I know it’s bad, but I can’t see past his ugliness. And I don’t even wish I could. I like being this way. His death is not supposed to change me. Nothing is supposed to change me. Because I want better, I want the best, and I have got only this one life. He was ugly, and I am not. But still, even after all these inner fights,  even after so many days, although I don’t want to, in front of my eyes,  I see a dead body and what could have been.
</p>
            </div>
            <Sixboxes slug1={articles[1].slug} photo1={articles[1].photo} alt1={articles[1].alt} title1={articles[1].title}
                slug2={articles[0].slug} photo2={articles[0].photo} alt2={articles[0].alt} title2={articles[0].title}
                /></div></>
    )
}