function karacsonyigSzamol() {
    const ma = new Date();
    const ev = ma.getFullYear();

    let karacsony = new Date(ev, 11, 25);

    const kulonbseg = karacsony - ma;

    const napok = Math.floor(kulonbseg / (1000 * 60 * 60 * 24));
    const orak = Math.floor((kulonbseg % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const percek = Math.floor((kulonbseg % (1000 * 60 * 60)) / (1000 * 60));
    const masodpercek = Math.floor((kulonbseg % (1000 * 60)) / 1000);

    let szoveg = `${napok} nap ${orak} óra ${percek} perc ${masodpercek} másodperc`;


    document.getElementById("vanmeg").innerHTML = `
        <h2>Karácsonyig van hátra:</h2>
        <div class="countdown">
            <div class="time-unit">
                <span class="number">${napok}</span>
                <span class="label">Nap</span>
            </div>
            <div class="time-unit">
                <span class="number">${orak}</span>
                <span class="label">Óra</span>
            </div>
            <div class="time-unit">
                <span class="number">${percek}</span>
                <span class="label">Perc</span>
            </div>
            <div class="time-unit">
                <span class="number">${masodpercek}</span>
                <span class="label">Másodperc</span>
            </div>
        </div>
    `;
}

setInterval(karacsonyigSzamol, 1000);
karacsonyigSzamol();