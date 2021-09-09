const oppskriftposjoner = 16
let antal_porsjoner = 1

const egg = 5;
const sukker = 150;
const kveitmjol = 150;
const bakepulver = 1;

// fyll i blautkaka
const kremflote = 3;
const melis = 2;
const mjolk = 1;
const jordbersyltetoy = 8;
const grovhakedeValnottkjerner = 50;
const Banan = 1;
const jordber = 2;

const porsjoner_kake = [egg, sukker, kveitmjol, bakepulver, kremflote, melis, mjolk, jordbersyltetoy, grovhakedeValnottkjerner, Banan, jordber];
const unit = ['egg','gram sukker','gram mjøl','ts bakepulver','pk kremfløte','ss melis','dl mjølk','ss jordbærsyltetøy','gram Valnøttkjerner','bananer ','pk jordbær']

const roundoff  = [1,0,0,0,0,0,0,0,0,0,0]

console.log('Her er mengde ingredienser du trenger for ' + antal_porsjoner + ' porsjoner:');

for (let i = 0; i < porsjoner_kake.length; i++) {
  let mengde = (porsjoner_kake[i] * antal_porsjoner / oppskriftposjoner);
  if (roundoff[i] == 1) {
    mengde = Math.round(mengde + 0.5);
  };
  console.log(mengde + ' ' + unit[i]);
};
