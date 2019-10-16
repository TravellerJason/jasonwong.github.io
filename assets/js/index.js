function background_canvas()
{		// setting main-img-canvas(if image cannot show)
	let canvas = document.getElementById("canvas");
	let cxt = canvas.getContext("2d");
	let gradient = cxt.createLinearGradient(0,0,0,canvas.height);
	gradient.addColorStop(0,"#81b5f0");
	gradient.addColorStop(1,"#3af");
	cxt.fillStyle = gradient;
	cxt.fillRect(0,0,400,400);
}

function getElementPosition(el_id)
{
	let el = document.getElementById(el_id);
	el = el.getBoundingClientRect();
	return {
		left: el.left,
		top: el.top,
		width: el.width,
		height: el.height
	}
}

function resize()
{
	let screenWidth = document.body.clientWidth;
	let screenHeight = document.body.clientHeight;
	let heading_img = document.getElementById("home-heading-img")
	let heading_img_height = heading_img.getBoundingClientRect().height;
	let header = document.getElementById("header");
	let big_header_list = document.getElementById("big-header-list");
	let small_header_list = document.getElementById("small-header-list");
	if(screenWidth < screenHeight || screenWidth < 800) {
		header.classList.add("small-screen");
		header.classList.remove("big-screen");

		big_header_list.classList.add("hidden");
		big_header_list.classList.remove("visible");

		small_header_list.classList.add("visible");
		small_header_list.classList.remove("hidden");
	} else {
		header.classList.add("big-screen");
		header.classList.remove("small-screen");

		big_header_list.classList.add("visible");
		big_header_list.classList.remove("hidden");

		small_header_list.classList.add("hidden");
		small_header_list.classList.remove("visible");
	}
	if(screenWidth < 1.4 * screenHeight) {
		heading_img.classList.add("small-screen");
		heading_img.classList.remove("big-screen");
	} else {
		heading_img.classList.add("big-screen");
		heading_img.classList.remove("small-screen");
	}
}



resize();
window.onresize = resize;
