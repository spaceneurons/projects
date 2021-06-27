window.onload = (event) => {
    const colors = ["r", "o", "y", "g", "b", "p"];
    const popit = document.getElementById("popit");

    for (let color of colors) {
        const row = document.createElement('div');
        row.className = color;
        for (let i = 0; i < 6; i++) {
            const pop = document.createElement('div');
            pop.className = 'circle ' + color;
            pop.onclick = function() {
                this.classList.toggle("pressed");
            };
            row.appendChild(pop);
        }

        popit.appendChild(row);
    }
};