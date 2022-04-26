function createMenuHTML(food){
    return `
      <div class="col-3">
        <div class="card">
          <img src="https://place-hold.it/500" class="card-img-top" alt="">
          <div class="card-body">
            <h3>${food.name}</h3>
            <p class="card-text">${food.des}</p>
            <a href="#" class="btn btn-primary">View Nutrional Facts</a>
          </div>
        </div>
      </div>
    `;
};

document.getElementById('menu-list').innerHTML = soupOfDay.map(food => createMenuHTML(food)).join('');
