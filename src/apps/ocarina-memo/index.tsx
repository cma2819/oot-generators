import { Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState, useEffect } from 'react';
import StaffCanvas, { Note } from './components/StaffCanvas';

const MAX_NOTES = 9;

function OcarinaMemorizer() {
  const [notes, setNotes] = useState<Note[]>([]);

  // notesが変更されたらLocalStorageに保存
  useEffect(() => {
    localStorage.setItem('ocarina-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note: Note) => {
    setNotes(prev => {
      const newNotes = [...prev, note];
      // 最大9個を超えたらFIFOで削除
      if (newNotes.length > MAX_NOTES) {
        return newNotes.slice(1);
      }
      return newNotes;
    });
  };

  const clearNotes = () => {
    setNotes([]);
  };

  const removeLastNote = () => {
    setNotes(prev => prev.slice(0, -1));
  };

  const openPopupWindow = () => {
    // LocalStorageに現在のノートを保存
    localStorage.setItem('ocarina-notes', JSON.stringify(notes));

    // ポップアップウィンドウを開く
    const width = 650;
    const height = 200;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(
      '/ocarina-memo/popup',
      'OcarinaPopup',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes`
    );
  };

  // キーボード入力対応
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;

      // テンキーと通常数字キーの両方に対応
      switch (key) {
        case '8':
        case 'ArrowUp':
          addNote('up');
          event.preventDefault();
          break;
        case '2':
        case 'ArrowDown':
          addNote('down');
          event.preventDefault();
          break;
        case '4':
        case 'ArrowLeft':
          addNote('left');
          event.preventDefault();
          break;
        case '6':
        case 'ArrowRight':
          addNote('right');
          event.preventDefault();
          break;
        case '0':
          addNote('A');
          event.preventDefault();
          break;
        case 'Backspace':
          removeLastNote();
          event.preventDefault();
          break;
        case 'Delete':
          clearNotes();
          event.preventDefault();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Container maxWidth='md' sx={{
      backgroundColor: 'white',
      minHeight: '100vh',
      py: 4,
    }}>
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        <Grid size={12}>
          <Typography variant='h3' sx={{ textAlign: 'center', mb: 2 }}>
            OoT Ocarina Memorizer
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'center', color: 'text.secondary', mb: 2 }}>
            迷いの森のミニゲームやカカシの歌を記憶するためのメモツール
          </Typography>
          <Typography variant='body2' sx={{ textAlign: 'center', color: 'text.secondary', mb: 4 }}>
            キー操作: テンキー 8(↑) 2(↓) 4(←) 6(→) 0(A) / Backspace(一つ戻す) / Delete(全削除)
          </Typography>
        </Grid>

        <Grid size={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <StaffCanvas notes={notes} />
          <Button
            variant='text'
            size='small'
            onClick={openPopupWindow}
            sx={{
              mt: 1,
              minWidth: 'auto',
              fontSize: '1.2rem',
              color: 'text.secondary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            ⤢
          </Button>
        </Grid>

        <Grid size={12}>
          <Typography variant='body2' sx={{ textAlign: 'center', color: 'text.secondary' }}>
            音符数: {notes.length} / {MAX_NOTES}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OcarinaMemorizer;
