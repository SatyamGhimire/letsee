import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ArticleCard({title, excerpt, photo, alt, slug }) {
  return (
    <div className="card">
      <Link href= {slug} ><h1 className="arc-tle">{title}</h1>
        <Image className="width-fix card-img"
                            src={photo}
                            alt={alt}
                            height={720}
                            width={1080}/></Link>
      <p className='art-txt'>{excerpt}</p>
      <Link className="cont-read" href={slug}> ...continue reading...</Link>
    </div>
  )
}
