const pipelineButton = document.getElementById("pipelineBtn");
const pipelineMessage = document.getElementById("pipelineMessage");

pipelineButton.addEventListener("click", function () {

    pipelineButton.disabled = true;
    pipelineButton.textContent = "⏳ Running...";

    pipelineMessage.textContent = "Pipeline started...";

    setTimeout(function () {
        pipelineMessage.textContent = "✓ Pipeline completed successfully!";
        pipelineButton.textContent = "✓ Pipeline Passed";
        pipelineButton.disabled = false;
    }, 2000);

});