<script setup>
	const props = defineProps({
		heading: {
			type: String,
			// required: true,
			default: 'Welcome To The Iles Crash Course!'
		},
		text: {
			type: String,
			// required: true,
			default: `Build super fast HTML-first websites using your favorite JavaScript frameworks`
		}
	})
</script>

<template>
	<section class="showcase">
		<div class="showcase-text">
			<h1>{{ heading }}</h1>
			<p>{{ text }}</p>
		</div>
		<slot />
	</section>
</template>

<style scoped>
	/* Showcase */
	.showcase {
		height: auto;
		background-color: var(--color-secondary);
		background-image: linear-gradient(
			to bottom,
			var(--color-primary),
			rgb(15 23 42 / 0)
		);
		padding: 30px;
	}

	.showcase-blog {
		min-height: 300px;
	}

	.showcase-text {
		max-width: 500px;
		color: #fff;
		text-align: center;
		margin: 50px auto;
	}

	.showcase h1 {
		font-size: 50px;
		color: #fff;
		margin-bottom: 20px;
	}

	.showcase p {
		font-size: 24px;
		margin-bottom: 20px;
	}
</style>
