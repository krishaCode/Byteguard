import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './pCard.module.css'


export default function PCard({
	title = "Untitled",
	date = "",
	author = "",
	summary = "",
	imgSrc = "/about.png",
	link = '#',
}) {
	return (
		<article className={style.newsCard}>
			<div className={style.corner}></div>
			<Image
				src={imgSrc}
				className={style.newsThumb}
				alt={title}
				width={640}
				height={360}
			/>
			<div className={style.newsContent}>
				<div className={style.newsMeta}>
					<span>{date}</span>
					<span>{author}</span>
				</div>
				<h2 className={style.newsTitle}>{title}</h2>
				<p className={style.newsSummary}>{summary}</p>
								{typeof link === 'string' && /^(https?:)?\/\//.test(link) ? (
									<a href={link} target="_blank" rel="noopener noreferrer" className={style.readMore}>Read More</a>
								) : (
									<Link href={link} className={style.readMore}>Read More</Link>
								)}
			</div>
		</article>
	)
}