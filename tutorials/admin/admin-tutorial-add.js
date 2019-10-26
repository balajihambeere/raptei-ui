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
            $('#tutorialTopics').append(`${dynamicNavItem(item)}`);
        });
    }

    function dynamicNavItem(item) {
        const template = `<li class="nav-item">
                            <a class="nav-link" href="#">${item.title}</a>
                         </li>`;
        return template;
    }

    function dynamicCard(item) {
        const template = ` <div class="col-lg-12">
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-2">
                    <a href="post.html">
                        <img src="${item.imageUrl}" class="card-img">
                    </a>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title"><a href="post.html">${item.title}</a></h5>
                        <div class="mb-1 text-muted">Nov 12</div>
                    </div>
                </div>
                <div class="col-md-2">EDIT Topic</div>
            </div>
        </div>
    </div>`;
        return template;
    }
    updateTutorials(tutorials);


    const courses = [
        { id: 101, title: "Learn Bootstrap In depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 102, title: "Build Bootstrap realtime application", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 103, title: "Learn Advanced bootstrap", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
    ];

    function updateCourses(courses) {
        $.each(courses, function (index, item) {
            console.log(dynamicCard(item))
            $('#coursesSection').append(`${dynamicCard(item)}`);
        });
    }

    function dynamicCard(item) {
        const template = `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div class="card">
              <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text"><small class="text-muted">Author, ${item.author}</small></p>
              </div>
        </div>`;
        return template;
    }
    updateCourses(courses);
});