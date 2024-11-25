import React, { useState } from 'react';

    function EmailDrafting() {
      const [subject, setSubject] = useState('');
      const [body, setBody] = useState('');

      const handleSubjectChange = (event) => {
        setSubject(event.target.value);
      };

      const handleBodyChange = (event) => {
        setBody(event.target.value);
      };

      return (
        <div>
          <h2>Email Drafting</h2>
          <input
            type="text"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Subject"
          />
          <textarea
            value={body}
            onChange={handleBodyChange}
            placeholder="Email body..."
            rows="10"
            cols="50"
          />
        </div>
      );
    }

    export default EmailDrafting;
ing;
  </boltAction