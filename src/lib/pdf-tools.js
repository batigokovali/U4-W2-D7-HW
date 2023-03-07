import PdfPrinter from "pdfmake";

export const getBlogpostPDFReadableStream = blogpost => {
    // Define font files
    const fonts = {
        Courier: {
            normal: "Courier",
            bold: "Courier-Bold",
            italics: "Courier-Oblique",
            bolditalics: "Courier-BoldOblique",
        },
        Helvetica: {
            normal: "Helvetica",
            bold: "Helvetica-Bold",
            italics: "Helvetica-Oblique",
            bolditalics: "Helvetica-BoldOblique",
        },
    }

    const printer = new PdfPrinter(fonts)

    const content = [blogpost.title, blogpost.content, blogpost.id]

    const docDefinition = {
        content: [...content],
        defaultStyle: {
            font: "Helvetica",
        },
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                font: "Courier",
            },
            subheader: {
                fontSize: 15,
                bold: false,
            },
        },
    }

    const pdfReadableStream = printer.createPdfKitDocument(docDefinition)
    pdfReadableStream.end()

    return pdfReadableStream
}