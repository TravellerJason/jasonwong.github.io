// setting main-img-canvas(if image cannot show)
function background_canvas()
{
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

// function setElementPosition_for_header(p_el_id, s_el_id)
// {
// 	let a = getElementPosition(p_el_id);
// 	let b = document.getElementById(s_el_id);
// 	b.style.position="absolute";
// 	b.style.top = "62px";
// 	b.style.left = a.left - a.width / 2 + "px";
// }
