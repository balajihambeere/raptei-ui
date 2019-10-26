$(function () {

    const tutorials = [
        {
            id: 101,
            tag: "angular",
            createdBy: "admin",
            imageUrl: "../../images/demopic/1.jpg",
        },
        {
            id: 102,
            tag: "react",
            createdBy: "admin",
            imageUrl: "../../images/demopic/2.jpg"
        },
        {
            id: 103,
            tag: "expressjs",
            createdBy: "admin",
            imageUrl: "../../images/demopic/3.jpg"
        },
        {
            id: 104,
            tag: "nodejs",
            createdBy: "admin",
            imageUrl: "../../images/demopic/4.jpg"
        },
        {
            id: 105,
            tag: "typescript",
            createdBy: "admin",
            imageUrl: "../../images/demopic/5.jpg"
        },
        {
            id: 106,
            tag: "ES6",
            createdBy: "admin",
            imageUrl: "../../images/demopic/6.jpg"
        },
        {
            id: 107,
            tag: "javascript",
            createdBy: "admin",
            imageUrl: "../../images/demopic/7.jpg"
        },
        {
            id: 108,
            tag: "bootStrap",
            createdBy: "admin",
            imageUrl: "../../images/demopic/8.jpg"
        },
        {
            id: 109,
            tag: "mongodb",
            createdBy: "admin",
            imageUrl: "../../images/demopic/9.jpg"
        }
    ];

    function updateTutorials(tutorials) {
        $.each(tutorials, function (index, item) {
            $('#categoryListSection').append(`${dynamicCard(item)}`);
        });
    }

    function dynamicCard(item) {
        const template = `<div class="col-sm-12 col-md-6 col-lg-4 mb-3 card-deck">
    <div class="card">
        <img src="${item.imageUrl}" class="card-img-top" alt="${item.tag}">
        <div class="card-body">
            <h5 class="card-title">${item.tag}</h5>
            <small class="text-muted">Created By, ${item.createdBy}</small>
        </div>
        <div class="card-footer">
              <a href="#" class="card-link">EDIT CATEGORY</a>
        </div>
    </div>`;
        return template;
    }
    updateTutorials(tutorials);

});