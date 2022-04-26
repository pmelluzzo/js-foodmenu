function createMenuHTML(food){
    return `
      <div class="col-3">
        <div class="card">
          <img src="${food.img}" class="card-img-top" alt="">
          <div class="card-body">
            <h3>${food.name}</h3>
            <p class="card-text">${food.des}</p>
            <a href="#" class="btn btn-primary">View Nutrional Facts</a>
          </div>
        </div>
      </div>
    `;
};

document.getElementById('menu-list').innerHTML = menuItems.map(food => createMenuHTML(food)).join('');
