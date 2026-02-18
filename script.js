let selectedMood = "";

function chooseMood(mood) {
    selectedMood = mood;
    document.getElementById("prosModal").classList.remove("hidden");
}

function showCons() {
    document.getElementById("prosModal").classList.add("hidden");
    document.getElementById("consModal").classList.remove("hidden");
}

function decide() {

    const prosText = document.getElementById("pros").value;
    const consText = document.getElementById("cons").value;

    const prosCount = prosText.split("\n").filter(x => x.trim()).length;
    const consCount = consText.split("\n").filter(x => x.trim()).length;

    const moodBias = {
        excited: "positive",
        bored: "neutral",
        confused: "neutral",
        sad: "caution",
        frustrated: "protect"
    };

    const bias = moodBias[selectedMood];
    let decision = "";

    if (bias === "positive") {
        decision = prosCount >= consCount
            ? "Go for it 🌸 Text him."
            : "Maybe chill first bestie.";
    }
    else if (bias === "caution") {
        decision = prosCount > consCount
            ? "Careful… heart protection mode."
            : "Respectfully? Abort mission 🚩";
    }
    else if (bias === "protect") {
        decision = "Pause. Protect your peace first.";
    }
    else {
        decision = "Neutral vibes — your call honestly.";
    }

    document.getElementById("consModal").classList.add("hidden");
    document.getElementById("resultModal").classList.remove("hidden");
    document.getElementById("result").textContent = decision;
}
