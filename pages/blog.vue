<script setup>
	import { getPosts } from '~/composables/posts'
	import Card from '~/components/Card.vue'

	let posts = $(getPosts())
	definePageMeta({ alias: ['/posts'] })

	const route = useRoute()
	const title = route.meta.title
	const description = route.meta.description
</script>

<template>
	<div>
		<Showcase :heading="title" :text="description" />
		<PageContent>
			<Card v-for="post in posts" :key="post.href">
				<h2>{{ post.title }}</h2>
				<p>
					<component :is="post" excerpt />
				</p>
				<a :href="post.href" class="btn">Read More</a>
			</Card>
		</PageContent>
	</div>
</template>

<style scoped>
	.name {
		color: green;
		font-weight: bold;
	}
</style>
