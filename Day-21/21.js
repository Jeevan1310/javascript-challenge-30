document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', resetCanvas);

    const saveBtn = document.getElementById('saveBtn');
    saveBtn.addEventListener('click', saveCanvas);

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function draw(e) {
        if (!isDrawing) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        context.lineTo(x, y);
        context.stroke();
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }

    function resetCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function saveCanvas() {
        const image = canvas.toDataURL();
        const link = document.createElement('a');
        link.href = image;
        link.download = 'drawing.png';
        link.click();
    }
});
