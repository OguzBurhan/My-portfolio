import React, { useEffect } from 'react';

function VideoModal({ isOpen, onClose, videoUrl }) {
  useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) {
        onClose();
      }
    }
    document.addEventListener('keydown', keyListener);
    return () => document.removeEventListener('keydown', keyListener);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', 
      top: 0, 
      left: 3, 
      right: 0, 
      bottom: 3, 
      backgroundColor: 'rgba(0, 0, 0, 0.7)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{ position: 'relative', padding: 20, backgroundColor: 'white', borderRadius: '5px' }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', right: 10, top: 10, cursor: 'pointer' }}>Close</button>
        <video src={videoUrl} controls style={{ width: '100%', maxHeight: '90vh' }} />
      </div>
    </div>
  );
}

export default VideoModal;
