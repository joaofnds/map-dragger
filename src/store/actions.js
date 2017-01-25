export default {
	updateCoordinates ({ commit }, coordinates) {
		let URLData = {
			x: parseInt(coordinates.left) * -1,
			y: parseInt(coordinates.top) * -1
		}
		let URLSearh = `?x=${URLData.x}&y=${URLData.y}`
		history.pushState(null, null, URLSearh)
		commit('CHANGE_COORDINATES', coordinates)
	}
}