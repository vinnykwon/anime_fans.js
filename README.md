# anime_fans.js
Mobile-API for [Anime.Fans](https://play.google.com/store/apps/details?id=anime.fans) social network a meeting place for anime enthusiasts a platform that allows you to connect with others who share your passion for anime, join or create communities around your favorite shows, and engage with a growing network of fans, [Website](https://anime.fans/)

## Example
```JavaScript
async function main() {
	const { AnimeFans } = require("./anime_fans.js")
	const animeFans = new AnimeFans()
	await animeFans.authGoogle("googleToken")
}

main()
```
