//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

function searchImage(url) {
	return new Promise((resolve,reject)=>{
		let image=new Image()
		image.src = url
		image.onload=()=>resolve(image)
		image.onerror=()=>reject(`Failed to load image's URL: ${image.url}`)
	})
}

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
let promises = [searchImage(images[0].url),searchImage(images[1].url),searchImage(images[2].url)]
function downloading() {
	Promise.all(promises).then((allImages)=>{
	output.appendChild(allImages[0])
	output.appendChild(allImages[1])
	output.appendChild(allImages[2])
})
	
}
