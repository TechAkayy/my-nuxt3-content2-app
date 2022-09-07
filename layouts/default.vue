<!-- <HelloWorld :msg="$frontmatter.title" />

<div id="nav">
				<router-link to="/">Home</router-link>
				<router-link to="/about">About</router-link>
</div> -->

<template><Header /><slot /><Footer /></template>

<style>
	@import '@/assets/styles/global.css';
</style>
