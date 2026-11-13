const jokes=[
"U nás je káva taká dobrá, že aj kávovar si pýta voľno.","Wi-Fi heslo vám prezradíme. Rodinné recepty až po dezerte.","Vitajte! Topánky nechajte pri dverách, starosti tiež.","Na gauči sa sedí pohodlne. Vstáva sa až po káve.","U nás sa kalórie z návštevy nerátajú.","Kto nájde ovládač, vyhráva právo vybrať film.","Dnes ste hosť. Zajtra už možno viete, kde máme lyžičky.","Ak počujete ticho, niekto práve dojedá posledný koláč.","Dvere sú otvorené. Chladnička tiež, po dohode so svetlom.","U nás má každý názor. Najmä na to, čo si dá na tanier.","Káva je čierna, humor občas tiež.","Vankúše sú dekorácia. Ale veľmi pohodlná.","Ak sa stratíte, choďte za vôňou jedla.","Na návšteve sa neponáhľa. Dezert ešte nevie, že odchádzate.","Domáce pravidlo číslo sedem: pravidlá sa pri koláči prehodnocujú.","Ak vám chutí, recept je tajný. Ale ešte si naberte.","Vitajte v našom hoteli. Recepcia je v kuchyni.","Zlé správy dnes nemáme. Dobré sa podávajú s kávou.","U nás sa Wi-Fi pripája rýchlejšie než rodina k stolu.","Pohovka má pamäť. Vie, kto si na nej zdriemol.","Ak neviete, čo povedať, povedzte: ešte kúsok si dám.","Dnes sa upratovalo. Prosíme, užívajte si tento historický okamih.","Najkratšia cesta k srdcu vedie cez našu chladničku.","Kto sa smeje naposledy, pravdepodobne dojedol dezert.","Návšteva bez kávy je len veľmi krátke stretnutie.","U nás sa počíta každý hosť. Najmä pri objednávaní pizze.","Ak niečo hľadáte, skúste sa opýtať. Alebo pozrieť do chladničky.","Dobrý hosť vie, kde sedieť. Skvelý prinesie koláč.","Dnes je ideálny deň na ničnerobenie. Práve ste prišli.","Odchod dobrovoľný. Zvyšný koláč presvedčivý."
];
const $ = selector => document.querySelector(selector);
let previousJoke = -1;

$('#surprise').addEventListener('click', () => {
  let nextJoke = Math.floor(Math.random() * jokes.length);
  if (jokes.length > 1 && nextJoke === previousJoke) {
    nextJoke = (nextJoke + 1 + Math.floor(Math.random() * (jokes.length - 1))) % jokes.length;
  }
  previousJoke = nextJoke;
  $('#joke').textContent = jokes[nextJoke];
});

document.querySelectorAll('[data-feeling]').forEach(button => {
  button.addEventListener('click', () => {
    $('#feeling-response').textContent = 'Ďakujeme krásne! Teší nás, že sa u nás cítite dobre.';
  });
});
