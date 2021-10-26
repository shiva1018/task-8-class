
document.body.innerHTML=`<section class="nice"
</section>`
const arr=(countries)=>{
countries.forEach((country)=>{
    const host=document.querySelector(".nice")
    host.innerHTML +=`
   <img src=${country.flags.png} class="img"/>
    <div class="cool">
    <h1>Name:${country.name.common}</h1>
    <p><b>region:</b><i>${country.region}</i></p>
    <p><b>population:</b><i>${country.population}</i></p>
    <p><b>capital:</b><i>${country.capital}</i></p>
</div>
   `
});
}
fetch("https://restcountries.com/v3.1/all")
.then((country)=>country.json())
.then(arr);



