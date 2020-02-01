$(document).ready(() => {
  $("#movie-list").css({ display: "none" });

  $("#movie-header").click(() =>
    $("#movie-list").animate({ height: "toggle" }, "slow")
  );
});
