function accessControl() {
    let isPaid = document.getElementById("isPaid").value === "true";
    let plan = document.getElementById("plan").value;

    let accessLevel = "limited";

    if (isPaid == false) {
        accessLevel = "blocked";
    } else if (plan == "premium") {
        accessLevel = "full";
    } else if (plan == "basic") {
        accessLevel = "limited";
    }

    document.getElementById("result").textContent =
        "Access level: " + accessLevel;
}