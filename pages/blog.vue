<page>
alias: ['/posts']
</page>

<script setup>
	import { getPosts } from '@/composables/posts'
	import Card from '@/components/Card.vue'

	let posts = $(getPosts())
</script>

<template>
	<div>
		<Showcase :heading="$site.title" :text="$site.description" />
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
