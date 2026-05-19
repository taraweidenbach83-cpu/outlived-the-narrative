import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFExportOptions {
  filename: string;
  title: string;
  scale?: number;
  quality?: number;
}

export async function exportElementToPDF(
  element: HTMLElement,
  options: PDFExportOptions
): Promise<void> {
  const {
    filename,
    title,
    scale = 2,
    quality = 'high',
  } = options;

  try {
    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale,
      backgroundColor: '#0f0a15',
      allowTaint: true,
      useCORS: true,
    });

    // Calculate PDF dimensions
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pageHeight = 297; // A4 height in mm

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    let heightLeft = imgHeight;
    let position = 0;

    // Add title page
    pdf.setFont('Poppins', 'bold');
    pdf.setFontSize(24);
    pdf.setTextColor(0, 217, 255);
    pdf.text(title, 20, 40);

    pdf.setFont('Inter', 'normal');
    pdf.setFontSize(11);
    pdf.setTextColor(200, 200, 200);
    pdf.text(
      `Generated on ${new Date().toLocaleDateString()}`,
      20,
      280
    );

    // Add content
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(filename);
  } catch (error) {
    console.error('Failed to export PDF:', error);
    throw new Error('Failed to generate PDF');
  }
}

export async function exportWorkbookToPDF(
  workbookTitle: string,
  sections: Array<{ title: string; elementId: string }>
): Promise<void> {
  try {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Title page
    pdf.setFont('Poppins', 'bold');
    pdf.setFontSize(28);
    pdf.setTextColor(0, 217, 255);
    pdf.text(workbookTitle, 20, 60);

    pdf.setFont('Playfair Display', 'normal');
    pdf.setFontSize(16);
    pdf.setTextColor(179, 102, 255);
    pdf.text('Outlived the Narrative', 20, 100);

    pdf.setFont('Inter', 'normal');
    pdf.setFontSize(11);
    pdf.setTextColor(200, 200, 200);
    pdf.text(
      `A resource for families navigating rare disease diagnosis\nGenerated on ${new Date().toLocaleDateString()}`,
      20,
      250
    );

    // Add each section
    for (const section of sections) {
      const element = document.getElementById(section.elementId);
      if (element) {
        pdf.addPage();
        const canvas = await html2canvas(element, {
          scale: 2,
          backgroundColor: '#0f0a15',
          allowTaint: true,
          useCORS: true,
        });

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      }
    }

    pdf.save(`${workbookTitle.toLowerCase().replace(/\s+/g, '-')}.pdf`);
  } catch (error) {
    console.error('Failed to export workbook to PDF:', error);
    throw new Error('Failed to export workbook');
  }
}
