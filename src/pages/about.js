import Sixboxes from "@/components/Sixboxes"
import articles from "@/data/articles"
export default function about(){
    return(
        <div className="upper-main">
        <div className="page-art">
                    <h1 className="art-tle">About</h1>
                    <hr className="art-hr"/>
<p className="art-txt">Hi, my name is Satyam Ghimire. I live in Nepal, and I am 21 years old. In this website I try to give some shape and form to my fragmented thoughts. Here I write about things I noticed and found interesting while consuming things such as movies, books, videos,  songs, paintings—well, the whole world actually. </p>
<p className="art-txt">It’s not that I am strong enough to follow all of my dreams, but I guess I started this website thinking I will always want this. That I will never not want this even in days when I don’t like living or thinking or in days when I am old and dying. I can picture myself always wanting a space of my own where I can write and people can see it. Such a space that will be here even after I am gone. </p>
<p className="art-hlt">I want this website to be something like an aggregate of who I am. A portfolio of my existence.</p>
<p className="art-txt">Also sometimes I  love to code. This website is also coded by me. For the initial source code, I will post the link to the initial source code soon.</p>
<p className="art-txt">You can start by going to the archive page for a systematic display of all things I wrote here. Thank you.</p>
                </div>
                <Sixboxes slug1={articles[1].slug} photo1={articles[1].photo} alt1={articles[1].alt} title1={articles[1].title}
                slug2={articles[0].slug} photo2={articles[0].photo} alt2={articles[0].alt} title2={articles[0].title}
                /></div>
    )
}