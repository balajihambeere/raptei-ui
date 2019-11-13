$(function () {

    const tutorials = [
        {
            id: 101,
            title: "Bootstrap-Navbar",
        },
        {
            id: 102,
            title: "Bootstrap-Dropdown",
        },
        {
            id: 103,
            title: "Bootstrap-Carousel",
        },
        {
            id: 104,
            title: "Bootstrap-Cards",
        },
        {
            id: 105,
            title: "Bootstrap-Jumbotron",
        },
        {
            id: 106,
            title: "Bootstrap-Collapse",
        },
        {
            id: 107,
            title: "Bootstrap-Grid System",
        },
        {
            id: 108,
            title: "Bootstrap-Pagination",
        },
        {
            id: 109,
            title: "Bootstrap-Navs",
        },
        {
            id: 110,
            title: "Bootstrap-Modal",
        },
    ];

    function updateTutorials(tutorials) {
        $.each(tutorials, function (index, item) {
            console.log(dynamicCard(item))
            $('#tutorialsNavSidebar').append(`${dynamicNavItem(item)}`);
        });
    }

    function dynamicNavItem(item) {
        const template = `<li class="nav-item">
                            <a class="nav-link" href="#">${item.title}</a>
                         </li>`;
        return template;
    }

    function dynamicCard(item) {
        const template = `<div class="col-sm-12 col-md-6 col-lg-4 mb-3">
    <div class="card">
        <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text"><small class="text-muted">Author, ${item.author}</small></p>
        </div>
    </div>`;
        return template;
    }
    updateTutorials(tutorials);


    const courses = [
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
    ];

    function updateCourses(courses) {
        $.each(courses, function (index, item) {
            console.log(dynamicCard(item))
            $('#coursesSection').append(`${dynamicCard(item)}`);
        });
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
                <p class="card-text"><small class="text-muted">updatedOn, ${item.updatedOn}</small></p>
              </div>
        </div>`;
        return template;
    }
    updateCourses(courses);
});