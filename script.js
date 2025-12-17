function karacsonyigSzamol() {
    // A mai dátum
    const ma = new Date();
    const ev = ma.getFullYear();

    // A jelenlegi év karácsonya (december 25.)
    let karacsony = new Date(ev, 11, 25); // 11 = december (0-tól számozva)

    // Ha már elmúlt idén a karácsony, akkor a következő év karácsonyát számoljuk
    if (ma > karacsony) {
        karacsony = new Date(ev + 1, 11, 25);
    }

    // A különbség miliszekundumban
    const kulonbseg = karacsony - ma;

    // Átalakítás napokra, órákra, percekre, másodpercekre
    const napok = Math.floor(kulonbseg / (1000 * 60 * 60 * 24));
    const orak = Math.floor((kulonbseg % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const percek = Math.floor((kulonbseg % (1000 * 60 * 60)) / (1000 * 60));
    const masodpercek = Math.floor((kulonbseg % (1000 * 60)) / 1000);

    // Formázott kiírás
    let szoveg = `${napok} nap ${orak} óra ${percek} perc ${masodpercek} másodperc`;

    // Ha karácsony van ma
    if (napok === 0 && orak === 0 && percek === 0 && masodpercek < 10) {
        szoveg = "BOLDOG KARÁCSONYT! 🎄🎅";
    }

    // Frissítjük a weboldalon
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

// Indítjuk a visszaszámlálót és frissítjük másodpercenként
setInterval(karacsonyigSzamol, 1000);
karacsonyigSzamol(); // Azonnali indítás