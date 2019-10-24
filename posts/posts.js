$(function () {

    const featuredPosts = [
        {
            id: 101,
            title: "We're living some strange times",
            tag: "world",
            author: "Balaji Hambeere",
            imageUrl: "../images/demopic/1.jpg",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content."
        },
        {
            id: 101,
            title: "Dreaming of Las Vegas Crazyness",
            tag: "health",
            author: "Balaji Hambeere",
            imageUrl: "../images/demopic/2.jpg",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content."
        },
        {
            id: 101,
            title: "The beauty of this world is in your heart",
            tag: "culture",
            author: "Balaji Hambeere",
            imageUrl: "../images/demopic/3.jpg",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content."
        },
        {
            id: 101,
            title: "San Francisco at its best view in all seasons",
            tag: "Travel",
            author: "Balaji Hambeere",
            imageUrl: "../images/demopic/4.jpg",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content."
        },
    ];

    function updateFeaturedPosts(collection) {
        $.each(collection, function (index, item) {
            $('#postsSection').append(`${dynamicCard(item)}`);
        });
    }

    function dynamicCard(item) {
        const template = ` <div class="col-md-6">
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-5">
                    <a href="post.html">
                        <img src="${item.imageUrl}" class="card-img">
                    </a>
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <strong class="d-inline-block mb-2 badge badge-primary">${item.tag}</strong>
                        <h5 class="card-title"><a href="post.html">${item.title}</a></h5>
                        <div class="mb-1 text-muted">Nov 12</div>
                        <p class="card-text mb-auto">${item.description}</p>
                        <a href="#" class="stretched-link">Continue reading</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        return template;
    }
    updateFeaturedPosts(featuredPosts);
});