<script setup>
	const tabs = [
		{
			title: 'NPM',
			body: '$ npm create iles@latest'
		},
		{
			title: 'PNPM',
			body: '$ pnpm create iles@latest'
		},
		{
			title: 'YARN',
			body: '$ yarn create iles@latest'
		}
	]
	const currentTab = $ref('NPM')
	const currentTabBody = $computed(
		() => tabs.find((tab) => tab.title === currentTab).body
	)
</script>
<template>
	<!-- Tabs -->
	<div class="tabs">
		<ul class="tabs-header">
			<li
				v-for="(tab, index) in tabs"
				:key="index"
				:class="{ 'default-tab': tab.title === currentTab }"
				@click="currentTab = tab.title"
			>
				{{ tab.title }}
			</li>
		</ul>
		<ul class="tabs-content">
			<li class="tab">
				<code>{{ currentTabBody }}</code>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	/* Tabs */
	.tabs {
		margin-top: 30px;
	}

	.tabs-header {
		display: flex;
		background: #333;
		color: #fff;
		padding: 10px 20px;
	}
	.default-tab {
		color: #a741ff;
		font-weight: 800;
	}

	.tabs-header li {
		margin-right: 20px;
		cursor: pointer;
	}

	.tabs-content {
		font-size: 18px;
		padding: 20px;
		border: 1px solid #333;
		font-weight: bold;
		background: #f4f4f4;
	}
</style>
