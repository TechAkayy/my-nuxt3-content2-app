// import { getAssetURL } from '~/logic/assets'
// import { formatRelativeTime } from '@utils/format-relative-time'
import { useDirectus } from '@/composables/useDirectus'

// export interface Author {
// 	first_name: string
// 	last_name: string
// 	avatar: string
// }

// export interface Article {
// 	id: number
// 	author: Author
// 	body: string
// 	cover_image: string
// 	excerpt: string
// 	publish_date: string
// 	status: string
// 	title: string
// 	url: string
// }

export async function useArticles(query) {
	const directus = await useDirectus()
	const { data } = await directus.items('articles').readMany({
		fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
		...query
	})
	return data ? data.map(formatArticle) : []
}

export function formatArticle(article) {
	return {
		...article,
		author: formatAuthor(article.author),
		cover_image: getAssetURL(article.cover_image),
		publish_date: article.publish_date, //formatRelativeTime(new Date(article.publish_date)),
		url: `/articles/${article.id}`
	}
}

function formatAuthor(author) {
	return {
		...author,
		avatar: getAssetURL(author.avatar)
	}
}

function getAssetURL(id) {
	if (!id) return ''
	return `${import.meta.env.VITE_DIRECTUS_URL}/assets/${id}`
}
