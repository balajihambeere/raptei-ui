$(function () {
    const courses = [
        { id: 101, title: "Learn Angular In depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 102, title: "Learn React in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 103, title: "Learn Expressjs in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 104, title: "Learn Nodejs in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 105, title: "Learn JavaScript in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 106, title: "Learn ES6 in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 106, title: "Learn TypeScript in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 108, title: "Learn BootStrap in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 109, title: "Learn MongoDB in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" },
        { id: 110, title: "Learn Vuejs in depth", author: "Balaji Hambeere", imageUrl: "../images/raptei-logo.png" }
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
        const template = `<div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3 card-deck">
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