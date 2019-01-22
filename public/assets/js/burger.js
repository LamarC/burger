$(function() {
  $(".change-devour").on("click", function(event) {
    let id = $(this).data("id");
    let newDevour = $(this).data("newdevour");

    let newDevourState = {
      devoured: newDevour
    };

    //PUT req
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      console.log("changed devoured to", newDevour);
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    let newBurger = {
      burger_name: $("#burger")
        .val()
        .trim(),
      devoured: $("[name=devoured]:checked")
        .val()
        .trim()
    };

    //POST req
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    let id = $(this).data("id");

    //DELETE req
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burger", id);
      location.reload();
    });
  });
});
