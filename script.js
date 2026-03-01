document.addEventListener('DOMContentLoaded', () => {
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step4 = document.getElementById('step-4');

    const btnYes = document.getElementById('btn-yes');
    const btnForgive = document.getElementById('btn-forgive');
    const btnThink = document.getElementById('btn-think');

    const showStep = (stepToShow) => {
        [step1, step2, step4].forEach(step => {
            if (step) step.style.display = 'none';
        });
        if (stepToShow) stepToShow.style.display = 'block';
    };

    // Step 1 -> Step 2
    btnYes.addEventListener('click', () => showStep(step2));

    btnForgive.addEventListener('click', () => showStep(step4));

    btnThink.addEventListener('click', () => {
        btnThink.style.display = 'none';
    });
});
