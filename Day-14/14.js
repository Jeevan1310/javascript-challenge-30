document.addEventListener("DOMContentLoaded", function(event) {
    var dragItem = document.getElementById("drag-item");
    var dropTarget = document.getElementById("drop-target");

    dragItem.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    });

    dropTarget.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    dropTarget.addEventListener("drop", function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain");
        var draggedItem = document.getElementById(data);
        dropTarget.appendChild(draggedItem);
        draggedItem.style.margin = "auto";
    });
});
