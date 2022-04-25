// Paul said it doesn't matter so here is a comment block
function createMenuHTML(food){
  return `<div class="col">
    <div class="card" style="width: 18rem;">
      <img src="https://place-hold.it/500" class="card-img-top" alt="">
      <div class="card-body">
        <h3>${soupOfDay[0].name}</h3>
        <p class="card-text">${soupOfDay[0].des}</p>
        <a href="#" class="btn btn-primary">View Nutrional Facts</a>
      </div>
    </div>
  </div>`
};

document.getElementById('test').innerHTML = soupOfDay.map(food => createMenuHTML(food)).join('');
