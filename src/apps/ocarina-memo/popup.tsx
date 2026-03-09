import { useState, useEffect } from 'react';
import StaffCanvas, { Note } from './components/StaffCanvas';
import { Box } from '@mui/material';

function OcarinaPopup() {
  const [notes, setNotes] = useState<Note[]>([]);

  // bodyのマージンを削除
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    // LocalStorageから初期ノートを読み込み
    const loadNotes = () => {
      const stored = localStorage.getItem('ocarina-notes');
      if (stored) {
        try {
          const parsedNotes = JSON.parse(stored);
          setNotes(parsedNotes);
        } catch (e) {
          console.error('Failed to parse notes:', e);
        }
      }
    };

    loadNotes();

    // LocalStorageの変更を監視
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'ocarina-notes' && e.newValue) {
        try {
          const parsedNotes = JSON.parse(e.newValue);
          setNotes(parsedNotes);
        } catch (err) {
          console.error('Failed to parse notes:', err);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // ポーリングで更新を確認（同じウィンドウからの変更には storage イベントが発火しないため）
    const interval = setInterval(() => {
      loadNotes();
    }, 100);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#222',
      }}
    >
      <StaffCanvas notes={notes} />
    </Box>
  );
}

export default OcarinaPopup;
