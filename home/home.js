$(function () {

    const tutorials = [
        { id: 101, title: "Angular Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 101, title: "React Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 101, title: "Expressjs Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 101, title: "Nodejs Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "JavaScript Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "ES6 Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "TypeScript Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "BootStrap Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "MongoDB Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "Vuejs Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" }
    ];

    function updateTutorials(tutorials) {

        // clear the existing list
        // $('#tutorialsSection').remove();

        $.each(tutorials, function (index, item) {
            console.log(dynamicCard(item))
            $('#tutorialsSection').append(`${dynamicCard(item)}`);
        });
    }

    function dynamicCard(item) {
        const template = `<div class="col-sm-12 col-md-6 col-lg-3 mb-3">
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
        { id: 101, title: "Learn Angular In depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 101, title: "Learn React in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 101, title: "Learn Expressjs in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 101, title: "Learn Nodejs in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "JavaScript Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "ES6 Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "TypeScript Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "BootStrap Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "MongoDB Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        // { id: 101, title: "Vuejs Tutorial", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" }
    ];

    function updateCourses(courses) {

        // clear the existing list
        // $('#tutorialsSection').remove();

        $.each(courses, function (index, item) {
            console.log(dynamicCard(item))
            $('#coursesSection').append(`${dynamicCard(item)}`);
        });
    }

    function dynamicCard(item) {
        const template = `<div class="col-sm-12 col-md-6 col-lg-3 col-xl-3">
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