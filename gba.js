$(document).ready(function(){
    $("#gradeButton").click(gradeApplication)

    function gradeApplication(event) {
        event.preventDefault();

        var score = {};

        const userInfo = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            earned: parseFloat($("#pEarned").val()),
            possible: parseFloat($("#pPossible").val())
        }

        score = (parseFloat((userInfo.earned / userInfo.possible) * 100).toFixed(0));

        if (score <= 100 && score >= 90) {
            $("#gradeOutput").text("A");
        } else if (score <= 89 && score >= 80) {
            $("#gradeOutput").text("B");
        } else if (score <= 79 && score >= 70) {
            $("#gradeOutput").text("C");
        } else if (score <= 69 && score >= 60) {
            $("#gradeOutput").text("D");
        } else if (score <= 59 && score >= 0) {
            $("#gradeOutput").text("F");
        } else {
            $("#gradeOutput").text("Invalid amounts entered");
        }

        $("#fNameOutput").text(userInfo.firstName);
        $("#lNameOutput").text(userInfo.lastName);
        $("#percentageOutput").text(score + "%");

    }
});