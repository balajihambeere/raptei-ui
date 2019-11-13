$(function () {

    const tutorials = [
        {
            id: 101,
            title: "Angular Tutorial Angular Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/1.jpg",
            subTitle: "Learn Angular"
        },
        {
            id: 101,
            title: "React Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/2.jpg"
        },
        {
            id: 101,
            title: "Expressjs Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/3.jpg"
        },
        {
            id: 101,
            title: "Nodejs Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/4.jpg"
        },
        {
            id: 101,
            title: "JavaScript Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/5.jpg"
        },
        {
            id: 101,
            title: "ES6 Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/6.jpg"
        },
        {
            id: 101,
            title: "TypeScript Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/7.jpg"
        },
        {
            id: 101,
            title: "BootStrap Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/8.jpg"
        },
        {
            id: 101,
            title: "MongoDB Tutorial",
            author: "Balaji Hambeere",
            imageUrl: "../../images/demopic/9.jpg"
        }
    ];

    function updateTutorials(tutorials) {
        $.each(tutorials, function (index, item) {
            $('#tutorialListSection').append(`${dynamicCard(item)}`);
        });
    }

    function dynamicNavItem(item) {
        const template = `<li class="nav-item">
                            <a class="nav-link" href="#">${item.title}</a>
                         </li>`;
        return template;
    }

    function dynamicCard(item) {
        const template = `<div class="col-sm-12 col-md-6 col-lg-3 mb-3 card-deck">
    <div class="card">
        <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
        </div>
        <div class="card-footer">
              <a href="#" class="card-link">EDIT TOPIC</a>
        </div>
    </div>`;
        return template;
    }
    updateTutorials(tutorials);

});