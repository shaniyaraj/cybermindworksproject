// import React from 'react'

// const IdeaSection = () => {
//   return (
//         <section className="idea-section">
//       <h2 className="idea-title">Have an idea?</h2>
//       <p className="idea-description">
//         Need help in turning your idea into a successful product? <br />
//         Talk to us. We can help you build your product quickly and <br />
//         ensure it can scale infinitely.
//       </p>
//       <button className="idea-button">Get Free Consulting</button>
//     </section>
//   )
// }

// export default IdeaSection


import React from 'react';
import { useNavigate } from 'react-router-dom';

const IdeaSection = () => {
  const navigate = useNavigate();

  const handleConsultingClick = () => {
    navigate('/contact');
  };

  return (
    <section className="idea-section">
      <h2 className="idea-title">Have an idea?</h2>
      <p className="idea-description">
        Need help in turning your idea into a successful product? <br />
        Talk to us. We can help you build your product quickly and <br />
        ensure it can scale infinitely.
      </p>
      <button className="idea-button" onClick={handleConsultingClick}>
        Get Free Consulting
      </button>
    </section>
  );
};

export default IdeaSection;
