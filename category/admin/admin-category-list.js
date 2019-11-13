$(function () {

    const tutorials = [
        {
            id: 101,
            tag: "angular",
            createdBy: "admin",
            bgColor: "#DC0232",
            imageUrl: "../../content/images/demopic/1.jpg",
        },
        {
            id: 102,
            tag: "bootstrap",
            createdBy: "admin",
            bgColor: "#563d7c",
            imageUrl: "../../content/images/demopic/2.jpg"
        },
        {
            id: 103,
            tag: "ecmascript",
            createdBy: "admin",
            bgColor: "#FAD11F",
            imageUrl: "../../content/images/demopic/3.jpg"
        },
        {
            id: 104,
            tag: "nodejs",
            createdBy: "admin",
            bgColor: "#76AE63",
            imageUrl: "../../content/images/demopic/4.jpg"
        },
        {
            id: 105,
            tag: "typescript",
            createdBy: "admin",
            bgColor: "#294E80",
            imageUrl: "../../content/images/demopic/5.jpg"
        },
        {
            id: 106,
            tag: "expressjs",
            createdBy: "admin",
            bgColor: "#eee",
            imageUrl: "../../content/images/demopic/6.jpg"
        },
        {
            id: 107,
            tag: "javascript",
            createdBy: "admin",
            bgColor: "#eee",
            imageUrl: "../../content/images/demopic/7.jpg"
        },
        {
            id: 108,
            tag: "react",
            createdBy: "admin",
            bgColor: "#61dafb",
            imageUrl: "../../content/images/demopic/8.jpg"
        },
        {
            id: 109,
            tag: "redux",
            createdBy: "admin",
            bgColor: "#764abc",
            imageUrl: "../../content/images/demopic/9.jpg"
        }
    ];

    function updateTutorials(tutorials) {
        $.each(tutorials, function (index, item) {
            $('#categoryListSection').append(`${dynamicCard(item)}`);
        });
    }

    function dynamicCard(item) {
        const template = `<div class="col-sm-12 col-md-6 col-lg-3 mb-3 card-deck">
    <div class="card">
         <div class="card-img-top text-wrap d-flex justify-content-center align-items-center text-capitalize"
                                style="background-color: ${item.bgColor}">
                                <div class="display-4">${item.tag}</div>
         </div>
        <div class="card-body">
            <h5 class="card-title">${item.tag}</h5>
            <small class="text-muted">Created By, ${item.createdBy}</small>
        </div>
        <div class="card-footer">
              <a href="./admin-category-add.html" class="card-link">EDIT CATEGORY</a>
        </div>
    </div>`;
        return template;
    }
    updateTutorials(tutorials);

});