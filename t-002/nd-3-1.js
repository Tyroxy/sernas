
// console.log('Tarpinis ziniu patikrinimas 03');

console.log('============ Namu darbas 3 dalis 2 variantas ===========')


function getRand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  console.log(
    "----1--Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po pridėjimo bitGirls turės 6 elementus)."
  );
  const bitGirls = ["Edita", "Lina", "Brigita", "Deimantė", "Justė"];
  
  bitGirls.unshift("Nauseda");
  console.log(bitGirls);
  
  console.log(
    "--Sukurkite naują masyvą bitCats iš masyvo cats taip kad naujasis masyvas turėtų elementus iš mažų, dviejų narių, masyvų: pirmas narys katinuko vardas, antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba“normalus”.-"
  );
  const cats = ["Murka", "Rainius", "Meilutė", "Bosas", "Dičkis"];
  const bitCats = [];
  
  for (let i = 0; i < cats.length; i++) {
    const katinukas = cats[i];
    let svoris = getRand(0, 1);
    if (svoris === 0) {
      svoris = `storas`;
    } else if (svoris === 1) {
      svoris = `normalus`;
    }
  
    bitCats.push([katinukas, svoris]);
  }
  // bitCats.push(katinukas);
  
  console.log(bitCats);
  
  // ///bitCats masyve suskaičiuokite kie yra storų ir normalių katinukų.
  
  let storiKat = 0;
  let normalusKat = 0;
  
  for (let i = 0; i < bitCats.length; i++) {
    if (bitCats[i][1] === "storas") {
      storiKat++;
    } else {
      normalusKat++;
    }
  }
  console.log(storiKat);
  console.log(normalusKat);
  console.log(`Storu kaciuku yra ${storiKat}, o normaliu ${normalusKat}`);
  //Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą raidę) Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.
  
  bitCats.sort((a, b) => {
    //isrusiuoti pagal antra raide
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });
  console.log(bitCats);
  
  //5. (BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, kurio elementai būtų masyvai iš mergaitės vardo ir katinuko vardo. Nausėdai katinuko neduokit (nes neužteks) ir Nausėdai vietoj katinuko priskirkite stringą “Barsukas”.
  const happyCats = [];
  for (let i = 0; i < bitGirls.length; i++) {
    console.log(bitGirls[i]);
  
    if (bitGirls[i] === "Nauseda") {
      happyCats.push([bitGirls[i], "Barsukas"]);
      console.log(happyCats);
    } else {
      happyCats.push([bitGirls[i], cats[i - 1]]);
    }
  }
  console.log(happyCats);