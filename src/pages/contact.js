import Sixboxes from "@/components/Sixboxes"
import articles from "@/data/articles"
export default function contact(){
    return(
        <div className="upper-main">
        <div className="page-art">
                    <h1 className="art-tle">Contact</h1>
                    <hr className="art-hr"/>
                    
<p className="art-txt">In future, there will be a big box below and you can send me a message that way.</p>
<p className="art-txt">For now, if you want to contact me or have anything to say, </p>
<p className="art-hlt">email me at: maytas12321@gmail.com</p>
<p className="art-hlt">I will try to reply as fast as I can. Thank you for coming here.</p>
                </div>
            
                <Sixboxes slug1={articles[1].slug} photo1={articles[1].photo} alt1={articles[1].alt} title1={articles[1].title}
                slug2={articles[0].slug} photo2={articles[0].photo} alt2={articles[0].alt} title2={articles[0].title}
                />
            </div>
    )
}