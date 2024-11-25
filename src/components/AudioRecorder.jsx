import React, { useState, useRef } from 'react';

    function AudioRecorder() {
      const [isRecording, setIsRecording] = useState(false);
      const [audioURL, setAudioURL] = useState('');
      const [isPaused, setIsPaused] = useState(false);
      const mediaRecorderRef = useRef(null);

      const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (event) => {
          const audioBlob = new Blob([event.data], { type: 'audio/wav' });
          setAudioURL(URL.createObjectURL(audioBlob));
        };
        mediaRecorderRef.current.start();
        setIsRecording(true);
      };

      const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
      };

      const pauseRecording = () => {
        mediaRecorderRef.current.pause();
        setIsPaused(true);
      };

      const resumeRecording = () => {
        mediaRecorderRef.current.resume();
        setIsPaused(false);
      };

      return (
        <div>
          <button onClick={isRecording ? stopRecording : startRecording}>
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
          {isRecording && (
            <button onClick={isPaused ? resumeRecording : pauseRecording}>
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          )}
          {audioURL && <audio src={audioURL} controls />}
        </div>
      );
    }

    export default AudioRecorder;
