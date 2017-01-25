<template>
	<div>
		<img id='map'
			 ref='map'
			 draggable='false'
			 src="./assets/map.jpg"
			 :alt="mapName">
	</div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
	name: 'dragger',

	data() {
		return {
			$map: undefined
		}
	},

	mounted() {
		let URLParams = this.getLocationFromURL();
		if(URLParams) {
			this.updateCoordinates(URLParams)
		}
		this.$map = $('#map')
		this.$map.on('load', () => {
			const constrainTo = this.boundaryCalculator()
			this.$map.pep({
				constrainTo,
				rest: this.onMapRest,
				useCSSTranslation: false
			})
			.css(this.coordinates)
		})
	},

	computed: {
		...mapState({
			mapName: state => state.mapName,
			coordinates: state => state.coordinates
		}),
	},

	watch: {
		coordinates(coord) {
			this.$map.css(coord)
		}
	},

	methods: {

		...mapActions(['updateCoordinates']),

		boundaryCalculator() {
			let top = innerHeight - this.$map.height()
			let left = innerWidth - this.$map.width()
			return [top, 0, 0, left]
		},

		onMapRest(e, pep) {
			let coordinates = {
				top: pep.$el.css('top'),
				left: pep.$el.css('left')
			}
			this.updateCoordinates(coordinates)
		},

		getLocationFromURL () {
			let query = location.href.split('?')[1]
			if (!query) {
				return undefined;
			}

			query = query.split('&')
			let params = {
				left: parseInt(query[0].split('=')[1]) * -1,
				top: parseInt(query[1].split('=')[1]) * -1
			}
			
			return params
		}
	}
}
</script>

<style>
	html, body {
		overflow: hidden;
	}
</style>
