// Drag, drop, and sort methods
function dragStart(event) {
  if (event.target.className === "todo__list-item") {
    // store a ref. on the dragged elem
    dragged = event.target;
    console.log(dragged);
    // make it half transparent
    event.target.style.opacity = 0.5;
  } else if (event.target.nodeName === "#text") {
    dragged = event.target.parentNode.parentNode.parentNode;
  }
}

function drop(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  dragged.parentNode.removeChild(dragged);
  if (event.target.className === "todo__list-item") {
    event.target.style.background = "";
    event.target.parentNode.appendChild(dragged);
  } else if (event.target.nodeName === "LABEL") {
    event.target.parentNode.parentNode.parentNode.appendChild(dragged);
  }
}
