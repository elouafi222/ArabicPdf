import React from 'react';

function PDFViewer({pdfUrl}) {
  return (
    <>
      <iframe
        title="PDF Viewer"
        src={pdfUrl}
       className='pdf'
      />
    </>
  );
}

export default PDFViewer;
