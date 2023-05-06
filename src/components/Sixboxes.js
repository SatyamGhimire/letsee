import Image from 'next/image'
import Link from 'next/link'
export default function Sixboxes(props){
return(
    <>
    <div className="bg-green box-200 three-box"><Link href={props.slug1}>
                    <Image className="img-also height-fix"
                        src={props.photo1}
                        alt={props.alt1}
                        height={90}
                        width={120}/>
                    <h2 className="also-title">{props.title1}</h2></Link></div>

                <div className="bg-blue box-200 half-box"><Link href={props.slug2}>
                    <Image className="img-also height-fix"
                        src={props.photo2}
                        alt={props.alt2}
                        height={90}
                        width={120}/>
                    <h2 className="also-title">{props.title2}</h2></Link></div>     
                
                <div className="bg-blue box-200 half-box"> empty box, will be filled soon...please read what exists at present</div>                   
                
                <div className="bg-green box-200 three-box"> empty box, will be filled soon...please read what exists at present</div>  
				<div className="bg-green box-200 three-box"> empty box, will be filled soon...please read what exists at present</div>

                <div className="bg-blue box-200 half-box">empty box, will be filled soon...please read what exists at present</div> 
    </>
)
}