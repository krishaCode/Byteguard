import React from 'react'
import Image from 'next/image'
import style from './pCard.module.css'

/**
 * PCard - presentational project/news card
 * Props: { title, date, author, summary, imgSrc, link }
 */
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
				<a href={link} target="_blank" rel="noopener noreferrer" className={style.readMore}>Read More</a>
			</div>
		</article>
	)
}