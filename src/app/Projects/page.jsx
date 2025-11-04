import React from 'react'
import Image from 'next/image'
import style from './pCard.module.css'

function page() {
	return (
		<div id="newsContainer" className={style.newsContainer}>
			<div className={style.newsCard}>
				<div className={style.corner}></div>
								<Image
									src="/about.png"
									className={style.newsThumb}
									alt="news thumbnail"
									width={640}
									height={360}
								/>
				<div className={style.newsContent}>
					<div className={style.newsMeta}>
						<span>24.02.2024</span>
						<span>Author Name</span>
					</div>
					<h2 className={style.newsTitle}>Here&apos;s Title</h2>
					<p className={style.newsSummary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed egestas sapien...</p>
					<a href="#" target="_blank" className={style.readMore}>Read More</a>
				</div>
			</div>
		</div>
	)
}

export default page