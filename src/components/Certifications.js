import React from 'react';

function Certifications() {
  const certifications = [
    {
      name: 'Certified AWS-cloud practitioner',
      organization: 'Ethnus',
      date: 'Aug 2023 - Dec 2023',
    },
    {
      name: 'Full stack MERN',
      organization: 'Ethnus',
      date: 'Aug 2022 - Nov 2022',
    },
    // Add more certifications as needed
  ];

  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>
            <h3>{certification.name}</h3>
            <p>{certification.organization}</p>
            <p>{`Date of Completion: ${certification.date}`}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;