// Download resume: generates a simple, nicely formatted text file
    document.getElementById('downloadResume').addEventListener('click', () => {
      const content = [
        'MD.SAJJAD CHOWDHURY ',
        'Designer • Frontend Developer',
        '',
        'Profile',
        'I craft delightful, accessible, and performant web experiences.',
        '',
        'Skills',
        '- UI/UX Design',
        '- Frontend Development',
        '- Design Systems',
        '',
        'Experience',
        'Company — Role (Year–Year)',
        '• Key achievement one',
        '• Key achievement two',
        '',
        'Contact',
        'Email: sajjadchowdhury@gmail.com',
        'Website: https://yourdomain.com'
      ].join('\n');
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'YourName-Resume.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });



    