function downloadPDF() {

    const element = document.getElementById("resume");

    const options = {
        margin: 0.4,
        filename: "Ronit_Vyas_Resume.pdf",
        image: {
            type: 'jpeg',
            quality: 1
        },
        html2canvas: {
            scale: 2,
            useCORS: true
        },
        jsPDF: {
            unit: 'in',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    html2pdf()
        .set(options)
        .from(element)
        .save();
}