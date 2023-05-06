import Image from 'next/image'
import Link from 'next/link'
import articles from '@/data/articles'
export default function Twoboxes(props){
return(
    <>
    <div className="bg-green box-200 half-box">
            empty box, will be filled soon...please read what exists at present</div>                   
                
            <div className="bg-blue box-200 three-box">
            empty box, will be filled soon...please read what exists at present</div>   </>
)
}