declare var html2pdf: any;

// Handle form submission and display resume
document.getElementById('resumeForm')?.addEventListener("submit", function (event: Event) {
    event.preventDefault();

    // Get input elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;

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
    } else {
        console.error("One or more input elements not found.");
    }
});

// Handle PDF download
document.getElementById('downloadPDF')?.addEventListener('click', function () {
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
    } else {
        console.error("Resume content not found.");
    }
});
