//Estoy creado las bases de nuestro proyecto
let miFamilia = ['Gloria','Indira','Victor','Luis','Zulay','Yelena','Henry','Yuraima','Fefa'];
console.log(miFamilia);
console.log('Poco a poco mis amigas y amigos');
let miFamiliaEdu = ['Jose','Alicia','Nicolas','Edu'];
console.log(miFamiliaEdu);
for (const familiar of miFamiliaEdu) {
    console.log(familiar);
}
miFamilia.forEach(familiar => {
    console.log(familiar);
});