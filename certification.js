// Start Certification Exam
document.getElementById('start-certification').addEventListener('click', () => {
    const confirmStart = confirm(
      'The certification exam includes multiple-choice questions on investments, corporate finance, and other financial topics. Are you ready to begin?'
    );
  
    if (confirmStart) {
      alert('Redirecting to the certification exam...');
      // Placeholder for redirect to the exam page or exam modal
      window.location.href = 'exam.html'; // Adjust to actual exam page when ready
    } else {
      alert('Take your time and start when you feel ready.');
    }
  });
  
  // Logging for topics covered
  const topics = [
    'Basics of Investing',
    'Time Value of Money (TVM)',
    'Discounted Cash Flow (DCF)',
    'Corporate Finance Fundamentals',
    'Risk Management and Portfolio Theory',
  ];
  
  console.log('Certification Topics:', topics);
  