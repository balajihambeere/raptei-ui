$(function () {

    const tutorials = [
        {
            id: 101,
            title: "Angular Tutorial",
            tag: "angular",
            bgColor: "#DC0232",
            updatedOn: "1 month ago"
        },
        {
            id: 103,
            title: "React Tutorial",
            updatedOn: "1 month ago",
            tag: "react",
            bgColor: "#61dafb",
        },
        {
            id: 104,
            title: "Expressjs Tutorial",
            updatedOn: " 1 month ago",
            tag: "expressjs",
            bgColor: "#eee",
        },
        {
            id: 105,
            title: "Nodejs Tutorial",
            updatedOn: " 1 month ago",
            tag: "nodejs",
            bgColor: "#76AE63",
        },
        {
            id: 106,
            title: "JavaScript Tutorial",
            tag: "javascript",
            bgColor: "#eee",
            updatedOn: " 1 month ago"
        },
        {
            id: 107,
            title: "ES6 Tutorial",
            updatedOn: " 1 month ago",
            tag: "ecmascript",
            bgColor: "#FAD11F",
        },
        {
            id: 101,
            title: "TypeScript Tutorial",
            updatedOn: " 1 month ago",
            tag: "typescript",
            bgColor: "#294E80",
        },
        {
            id: 108,
            title: "Bootstrap Tutorial",
            updatedOn: " 1 month ago",
            tag: "bootstrap",
            bgColor: "#563d7c",
        },
        {
            id: 109,
            title: "Redux Tutorial",
            updatedOn: " 1 month ago",
            tag: "redux",
            bgColor: "#764abc",
        },
        {
            id: 110,
            title: "Javascript Tutorial",
            updatedOn: " 1 month ago",
            tag: "javascript",
            bgColor: "#eee",
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
       <div class="card-img-top text-wrap d-flex justify-content-center align-items-center text-capitalize"
              style="background-color: ${item.bgColor}">
               <div class="display-4">${item.tag}</div>
    </div>
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text"><small class="text-muted">updated ${item.updatedOn}</small></p>
        </div>
    </div>`;
        return template;
    }
    updateTutorials(tutorials);

});