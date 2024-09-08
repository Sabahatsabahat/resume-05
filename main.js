"use strict";
var _a, _b;
// Handle form submission and display resume
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get input elements
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const skillsElement = document.getElementById('skills');
    const experienceElement = document.getElementById('experience');
    // Ensure that all input elements exist
    if (nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
        // Create the resume output HTML
        const resumeOutputHTML = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Skills</h3>
            <p>${skills}</p>

            <h3>Work Experience</h3>
            <p>${experience}</p>
        `;
        // Display the generated resume
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutputHTML;
        }
    }
    else {
        console.error("One or more input elements not found.");
    }
});
// Handle PDF download
(_b = document.getElementById('downloadPDF')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        const opt = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(resumeOutputElement).set(opt).save();
    }
    else {
        console.error("Resume content not found.");
    }
});
