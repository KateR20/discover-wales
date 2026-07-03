function toggleFact(button) {
    const fact = button.nextElementSibling;

    fact.classList.toggle("show");

    if (fact.classList.contains("show")) {
        button.innerHTML = "▲ Hide Fact";
    } else {
        button.innerHTML = "🐉 Fun Fact";
    }
}