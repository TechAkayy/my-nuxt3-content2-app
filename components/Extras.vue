<script setup>
	import logos from '~/assets/images/framework-logos.png'
	import logosSmall from '~/assets/images/framework-logos-small.png'
</script>

<template>
	<div class="showcase-img">
		<img class="logos" :src="logos" alt="" />
		<img class="logos-small" :src="logosSmall" alt="" />
	</div>

	<p class="showcase-demo">
		<small>This is a demo website used for the YouTube crash course</small>
	</p>
</template>

<style scoped>
	/* Showcase */

	.showcase-img {
		text-align: center;
	}

	.showcase-img img {
		border-radius: 10px;
		margin: auto;
	}

	.showcase-demo {
		color: #fff;
		text-align: center;
		font-weight: 300;
	}

	.logos-small {
		display: none;
	}

	@media (max-width: 960px) {
		.logos-small {
			display: block;
			margin: auto;
		}
		.logos {
			display: none;
		}
	}
</style>
