function createMenuHTML(food){
    return `
      <div class="col-3">
        <div class="card">
          <img src="${food.img}" class="card-img-top" alt="" data-modal="modal-one">
          <div class="card-body">
            <h3>${food.name}</h3>
            <p class="card-text">${food.des}</p>
            <a data-modal="modal-${food.name}" class="btn btn-primary">View Nutritional Facts</a>
          </div>
          <div class="modal" id="modal-${food.name}">
            <div class="modal-bg modal-exit"></div>
            <div class="modal-container">
              <p class="modal-content">
                ${food.nutrition}
              </p>
              <button class="modal-close modal-exit">X</button>
            </div>
          </div>
        </div>
      </div>
    `;
};

// function nutritionalFacts () {
//
//   return `
//     <div class="modal-bg modal-exit"></div>
//     <div class="modal-container">
//       <p id="modal-content">
//         ${food.nutrition}
//       </p>
//       <button class="modal-close modal-exit">X</button>
//     </div>
//   `;
// };

// document.getElementById('modal-one').innerHTML = menuItems.map(food => nutritionalFacts(food));
document.getElementById('menu-list').innerHTML = menuItems.map(food => createMenuHTML(food)).join('');

const modals = document.querySelectorAll("[data-modal]");

modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});
