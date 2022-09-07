<script setup>
	const props = defineProps({
		title: {
			type: String
		},
		body: {
			type: String
		},
		dark: {
			type: Boolean
		}
	})
</script>

<template>
	<div class="card" :class="{ dark: dark }">
		<h3 v-if="title">{{ title }}</h3>
		<p v-if="body">{{ body }}</p>
		<slot />
	</div>
</template>

<style scoped>
	/* Cards */
	.card {
		background: #fff;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
	}
	.dark {
		background: var(--color-primary);
		color: #fff;
	}
</style>
