class AnimeFans {
	constructor() {
		this.api = "https://api.anime.fans"
		this.device = "SM-N9860_Android_android"
		this.headers = {
			"User-Agent": "okhttp/4.9.2"
		}
	}

	async authGoogle(googleToken) {
		const response = await fetch(
			`${this.api}/auth/google`, {
				method: "POST",
				body: JSON.stringify({
					token: googleToken,
					device: this.device
				}),
				headers: this.headers
			})
		const data = await response.json()
		this.accessToken = data.access_token
		this.userId = data.user_id
		this.headers["authorization"] = this.accessToken
		return data
	}

	async register(firstName, lastName, token, gender = 2) {
		this.headers["authorization"] = token
		const response = await fetch(
			`${this.api}/registration`, {
				method: "POST",
				body: JSON.stringify({
					first_name: firstName,
					last_name: lastName,
					sex: gender,
					bday: 0,
					bmonth: 0,
					byear: 0,
					country_id: 0,
					city_id: 0,
					photo_id: 0,
					device: this.device,
					code: ""
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getAccountInfo() {
		const response = await fetch(
			`${this.api}/main/init`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getFeed() {
		const response = await fetch(
			`${this.api}/feed`, {
				method: "POST",
				body: JSON.stringify({
					from: ""
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getPost(postId) {
		const response = await fetch(
			`${this.api}/posts/${postId}`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async commentPost(text, postId) {
		const response = await fetch(
			`${this.api}/posts/new`, {
				method: "POST",
				body: JSON.stringify({
					ownerId: this.userId,
					text: text,
					attachments: [],
					parentId: postId,
					timer: 0,
					groupId: 0,
					skipNotify: false,
					sign: false
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getUser(userId) {
		const response = await fetch(
			`${this.api}/profile/${userId}`, {
				method: "POST",
				body: JSON.stringify({
					showReplies: false
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getUserFollowers(userId) {
		const response = await fetch(
			`${this.api}/followers/${userId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async followUser(userId) {
		const response = await fetch(
			`${this.api}/follow/${userId}/add`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async unfollowUser(userId) {
		const response = await fetch(
			`${this.api}/follow/${userId}/del`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async blockUser(userId) {
		const response = await fetch(
			`${this.api}/blacklist/${userId}/add`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async unblockUser(userId) {
		const response = await fetch(
			`${this.api}/blacklist/${userId}/del`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async getDialogs() {
		const response = await fetch(
			`${this.api}/im`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getDialogHistory(dialogId) {
		const response = await fetch(
			`${this.api}/im/${dialogId}/history`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async deleteDialog(dialogId) {
		const response = await fetch(
			`${this.api}/im/${dialogId}/delete`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async sendMessage(dialogId, text) {
		const response = await fetch(
			`${this.api}/im/${dialogId}/send`, {
				method: "POST",
				body: JSON.stringify({
					text: text,
					attachments: [],
					randomId: -1,
					replyMessageId: 0
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getNotifications() {
		const response = await fetch(
			`${this.api}/notify`, {
				method: "POST",
				body: JSON.stringify({
					type: ""
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getGroup(groupId) {
		const response = await fetch(
			`${this.api}/group/${groupId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async deleteAccount() {
		const response = await fetch(
			`${this.api}/account/delete`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {AnimeFans}
