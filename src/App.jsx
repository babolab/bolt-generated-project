import React from 'react';
    import AudioRecorder from './components/AudioRecorder';
    import TranscriptionUI from './components/TranscriptionUI';
    import EmailDrafting from './components/EmailDrafting';
    import ThemeToggle from './components/ThemeToggle';
    import LanguageToggle from './components/LanguageToggle';

    function App() {
      return (
        <div>
          <h1>Welcome to PlumeVocale</h1>
          <AudioRecorder />
          <TranscriptionUI />
          <EmailDrafting />
          <ThemeToggle />
          <LanguageToggle />
        </div>
      );
    }

    export default App;
