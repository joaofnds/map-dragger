<template>
	<div>
		<img id='map' draggable='false' src="./assets/map.jpg" alt="Vuejs Logo">
	</div>
</template>

<script>

function boundaryCalculator(map) {
	let top = innerHeight - map.height()
	let left = innerWidth - map.width()
	return [top, 0, 0, left]

}

jQuery(function($) {
	const $map = $('#map')

	const constrainTo = boundaryCalculator($map)
	console.log(constrainTo)

	$map.pep({
		constrainTo
	}); 
});

export default {
	name: 'dragger',
}
</script>

<style>
	html, body {
		overflow: hidden;
	}
</style>
