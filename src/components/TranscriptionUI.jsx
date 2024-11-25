import React, { useState } from 'react';

    function TranscriptionUI() {
      const [transcription, setTranscription] = useState('');

      const handleTranscriptionChange = (event) => {
        setTranscription(event.target.value);
      };

      return (
        <div>
          <h2>Transcription</h2>
          <textarea
            value={transcription}
            onChange={handleTranscriptionChange}
            placeholder="Transcribed text will appear here..."
            rows="10"
            cols="50"
          />
        </div>
      );
    }

    export default TranscriptionUI;
nUI;
  </boltAction