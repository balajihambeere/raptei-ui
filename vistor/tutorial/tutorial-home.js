$(function () {

    const tutorials = [
        {
            id: 101,
            title: "Angular Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/1.jpg",
            updatedOn: "1 month ago"
        },
        {
            id: 103,
            title: "React Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/2.jpg",
            updatedOn: "1 month ago"
        },
        {
            id: 104,
            title: "Expressjs Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/3.jpg",
            updatedOn: " 1 month ago"
        },
        {
            id: 105,
            title: "Nodejs Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/4.jpg",
            updatedOn: " 1 month ago"
        },
        {
            id: 106,
            title: "JavaScript Tutorial Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/5.jpg",
            updatedOn: " 1 month ago"
        },
        {
            id: 107,
            title: "ES6 Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/6.jpg",
            updatedOn: " 1 month ago"
        },
        {
            id: 101,
            title: "TypeScript Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/7.jpg",
            updatedOn: " 1 month ago"
        },
        {
            id: 108,
            title: "BootStrap Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/8.jpg",
            updatedOn: " 1 month ago"
        },
        {
            id: 109,
            title: "MongoDB Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/9.jpg",
            updatedOn: " 1 month ago"
        },
        {
            id: 110,
            title: "Vuejs Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/10.jpg",
            updatedOn: " 1 month ago"
        }
    ];

    function updateTutorials(tutorials) {
        $.each(tutorials, function (index, item) {
            console.log(dynamicCard(item))
            $('#tutorialsNavSidebar').append(`${dynamicNavItem(item)}`);
            $('#tutorialsSection').append(`${dynamicCard(item)}`);
        });
    }

    function dynamicNavItem(item) {
        const template = `<li class="nav-item">
                            <a class="nav-link" href="#">${item.title}</a>
                         </li>`;
        return template;
    }

    function dynamicCard(item) {
        const template = `<div class="col-sm-12 col-md-6 col-lg-4 mb-3 card-deck">
    <div class="card">
        <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text"><small class="text-muted">updated ${item.updatedOn}</small></p>
        </div>
    </div>`;
        return template;
    }
    updateTutorials(tutorials);

});