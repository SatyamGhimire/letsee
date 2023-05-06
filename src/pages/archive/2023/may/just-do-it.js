import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Sixboxes from '@/components/Sixboxes'
import articles from '@/data/articles'
export default function pagepage(){
    return(<>
    <Head>
        <title>Yes, like you always knew, you need to "just do it"</title>
        <meta name="description" content="Perhaps &quot;Just do it &quot; isn't as bad as we think. Let's see from this perspective and know its worth."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Satyam Ghimire"/>
        <meta property="og:title" content="Yes, like you always knew, you need to &quot;Just do it&quot;"/>
        <meta property="og:description" content="Perhaps &quot;Just do it &quot; isn't as bad as we think. Let's see from this perspective and know its worth."/>
        <meta property="og:type" content="article"/>
        <meta name="twitter:site" content="@glimpseofdetail"/>
        <meta name="twitter:title" content="Yes, like you always knew, you need to &quot;Just do it&quot;"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:description" content="Perhaps &quot;Just do it &quot; isn't as bad as we think. Let's see from this perspective and know its worth."/>
      </Head>
        <div className="upper-main">
            <div className="page-art">
                    <h1 className="art-tle">{articles[1].title}</h1>
                    <h2 className="art-stle">{articles[1].excerpt}</h2>
                    <hr className="art-hr"/>
                    <p className="author-date">By Satyam Ghimire | Date: May 6, 2023</p>
<Image className="img-part"
                            src={articles[1].photo}
                            alt={articles[1].alt}
                            height={1440}
                            width={1920}/>
<span className='author-date'>Photo by: <Link className='und' href="https://unsplash.com/@brett_jordan">Brett Jordan</Link> on <Link className='und' href="https://unsplash.com/photos/_Xwnk1DgTb8">Unsplash</Link></span>
<p className="art-txt">Whenever this happens, I feel like an idiot. With hope, I search for their advice, for the formula of their success. They also seem very eager to give it, and then I hear or read the same boring advice that I've known for ages: just do it, just start.</p>
<p className="art-hlt">Then I search for some better advice and find them, but nothing seems to work. All I do is keep thinking and piling thoughts inside my head. “It's okay, it's inside the brain”, I console myself,  “I can always take it out any moment I want and show it to the world.” But can you name a great painter who painted masterpieces inside their head alone? </p>
<p className="art-txt">We are not telepaths; what’s visible is what matters. Only now I have come to realize that I did everything but never started. I am too afraid to start. Then my mind suggested to me from some corner the same boring advice: just do it. Don't think, just start. </p>
<p className="art-txt">So, in this article, I am defending why “just do it” doesn't deserve the ignorance it gets and why we should apply it as soon as possible. But for that we need to change our perspective, from the asker that is us, to the answer that is them.</p>
<h2 className="art-stle">Why do they say it?</h2>
<p className="art-hlt">They get a chance to be inquired, to feel important, to be listened to by the crowd with such curiosity and eagerness, and out of all fashionable and cool things they could say, they disappoint us by saying things that we already knew.</p>
<p className="art-txt">To fully grasp the reason behind this answer, we have to understand that every person who made it was a beginner at some point. They had the same fear as us. And with all their efforts, dedication, and discipline, they reached the current height of success.</p>
<p className="art-txt">Now, if they had gotten a chance, what do you think they would’ve corrected and improved?</p>
<p className="art-txt">It’s that they had started earlier, that they had lingered less with doubts and fears and mere excuses and just started, taking one small step then another. And by advising us this, they are actually screaming to their younger self to stop fearing and just do it. “Start. Don’t think. You’ve thought enough. Just do it now. Please start.”</p>      
<p className="art-txt">It astounds me when somebody asks some writer or painter or movie director, “If you get a chance, which of your earlier work would you redo and correct?” And the answer is often some version of “none”. Then I ask myself, “Why none? Don’t you want to correct the first or second, the one where you were so naive and not as good as you are now?” This also serves my brain a thought that says that these people were best since the first day, so that’s why they wouldn’t choose to correct anything. This leads me to the conclusion that I need to master my plan and strategy and creative work inside my mind first, before I can take any action to bring it into the physical world. Then I never escape this barrier. It is so wrong. They don’t want to correct their earlier work because the mistakes they made at that time helped them become who they are.</p>
<p className="art-hlt">Let’s also talk about this belief that once a thing is done, it should remain done forever. That you should never go back to it again. Because then that will cost you your imagined reputation, and it will be shameful. So, to potentially prevent this, we should wait till we’re good, till our judgment is better. Till we are sure. Till we become some kind of master. But we don’t realize that the only way to be good is through the only path we are hesitating to walk on. We forget that great arts are made with practice, with repetitions of some form. When you do your first work that's one hundred percent perception of your own work. And if you do more, then you can see in retrospect and improve. You will get better ideas as you go. If you feel like some ideas were not executed properly because you were naive at the starting phase, you can always retake the bits from your earlier work and use it again in a better way. We can always replicate the essence, the soul, the message of the same article again, of the same music, same picture, same video again. Again and again. There is no rule to anything. We just love to complicate things and limit ourselves to prove our imagined narrative. Did you know the only Oscar Martin Scorcese won was by directing “The Departed,” the remake of an already good Korean counterpart? </p>
<p className="art-txt">And then there is this utterly optimistic belief. That your present idea is the best you’ll ever have your entire life. So to work on it, you have to be a master first, otherwise it will be wasted by some weak work. This is so wrong, although it feels so right. Ideas, like dreams, are always, never predictable.</p>
<p className="art-hlt">Five years ago, I had this idea about a book, the thing I believed 100% was a genius. That I will never top this. Somehow, with massive luck, my first idea is and will always be my best, and all others I will create after it will die and live in its shadow. This for me, has utterly, in the most impactful and disastrous way, collapsed.</p>
<p className="art-hlt">Because I thought of the second idea, and I had the same optimism about it. Then it collapsed too—when I thought of the third idea. And it collapsed too. By the fourth time I realized it will collapse again and not even a dust will remain of it. </p>
<p className="art-txt">Because with practice, everything improves. To luck out is an illusion in the creative business. So the best thing to do now is to start my first and complete it. And if in the future I find that I am not satisfied with it, and I think of ways it could be improved, I pick it again and create version two. There are no rules.</p>
<p className="art-txt">The talk is endless, and the sources claiming its importance are infinite. And if we are lucky enough to not kill our dreams, we are going to start someday—maybe one day like we always tell ourselves, and maybe we will be big and people will ask for our advice. And I hope our advice will not actually be a repressed scream targeted to who we are today, waiting too much and full of doubts.</p>
<h2 className="art-stle">So it comes down to a simple question: when are you starting?</h2>
<p className="art-txt">In case you didn’t notice, I have done the same thing with this article. This is one of the first two articles I posted on this website. And the book idea I talked about in the above paragraphs, I never actually worked on it. It’s all inside my brain, but I am going to “just do it” now. I have waited too long. I will post those here on this website. If you are here, thank you so much for reading.</p>
            </div>
            <Sixboxes slug1={articles[1].slug} photo1={articles[1].photo} alt1={articles[1].alt} title1={articles[1].title}
                slug2={articles[0].slug} photo2={articles[0].photo} alt2={articles[0].alt} title2={articles[0].title}
                />
            </div></>
    )
}