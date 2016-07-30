export const Utils = {
	getSearchParam(search){
		let result = {}
		if(search){
			search = search.replace(/(^\?*)/g,"");
			let params = search.split('&')
			for (let item of params) {
				result[item.split('=')[0]] = item.split('=')[1]
			}
		}
		return result
	},
	getHashParameter(key) {
		var params = this.getHashParameters();
		return params[key];
	},
	getHashParameters() {
		var arr = (location.hash || "").replace(/^\#/, '').split("&");
		var params = {};
		for (var i = 0; i < arr.length; i++) {
			var data = arr[i].split("=");
			if (data.length == 2) {
				params[data[0]] = data[1];
			}
		}
		return params;
	},
	setLocalData(key, obj) {
		localStorage.setItem(key, JSON.stringify(obj))
	},
	getLocalData(key) {
		JSON.parse(localStorage.getItem(key))
	},
	removeLocalData(key) {
		localStorage.removeItem(key)
	},
	GetTempLocalData(key) {
		let result = this.getLocalData(key)
		this.removeLocalData(key)
		return result
	}
}