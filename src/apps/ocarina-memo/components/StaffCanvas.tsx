import { useEffect, useRef } from 'react';

export type Note = 'A' | 'up' | 'down' | 'left' | 'right';

type Props = {
  notes: Note[];
}

const notePositions: Record<Note, number> = {
  'up': 0,     // 一番上
  'left': 1,   // 2番目
  'right': 2,  // 3番目
  'down': 3,   // 4番目
  'A': 4,      // 一番下
};

const StaffCanvas = ({ notes }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 背景を黒で塗りつぶし
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 4本線の譜表を描画
    const staffTop = 40;
    const lineSpacing = 20;
    const staffLines = 4;

    ctx.strokeStyle = '#FF8C00';  // オレンジ色
    ctx.lineWidth = 4;

    for (let i = 0; i < staffLines; i++) {
      const y = staffTop + i * lineSpacing;
      ctx.beginPath();
      ctx.moveTo(20, y);
      ctx.lineTo(canvas.width - 20, y);
      ctx.stroke();
    }

    // 音符を描画
    const noteRadius = 16;
    const noteStartX = 60;
    const noteSpacing = 50;

    notes.forEach((note, index) => {
      const x = noteStartX + index * noteSpacing;
      const position = notePositions[note];
      const y = staffTop + position * (lineSpacing / 1.5) + (lineSpacing / 2);

      if (note === 'A') {
        // Aボタン: 青背景に白文字
        ctx.fillStyle = '#4169E1';  // 青
        ctx.beginPath();
        ctx.arc(x, y, noteRadius, 0, Math.PI * 2);
        ctx.fill();

        // 白文字で "A" を描画
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('A', x, y);
      } else {
        // 矢印ボタン: 黄色背景に黒三角形
        ctx.fillStyle = '#FFD700';  // 黄色
        ctx.beginPath();
        ctx.arc(x, y, noteRadius, 0, Math.PI * 2);
        ctx.fill();

        // 黒い正三角形を描画
        const triangleSize = 12;
        ctx.fillStyle = '#000';
        ctx.beginPath();

        switch (note) {
          case 'up':
            // 上向き三角形
            ctx.moveTo(x, y - triangleSize);
            ctx.lineTo(x - triangleSize * 0.866, y + triangleSize * 0.5);
            ctx.lineTo(x + triangleSize * 0.866, y + triangleSize * 0.5);
            break;
          case 'down':
            // 下向き三角形
            ctx.moveTo(x, y + triangleSize);
            ctx.lineTo(x - triangleSize * 0.866, y - triangleSize * 0.5);
            ctx.lineTo(x + triangleSize * 0.866, y - triangleSize * 0.5);
            break;
          case 'left':
            // 左向き三角形
            ctx.moveTo(x - triangleSize, y);
            ctx.lineTo(x + triangleSize * 0.5, y - triangleSize * 0.866);
            ctx.lineTo(x + triangleSize * 0.5, y + triangleSize * 0.866);
            break;
          case 'right':
            // 右向き三角形
            ctx.moveTo(x + triangleSize, y);
            ctx.lineTo(x - triangleSize * 0.5, y - triangleSize * 0.866);
            ctx.lineTo(x - triangleSize * 0.5, y + triangleSize * 0.866);
            break;
        }

        ctx.closePath();
        ctx.fill();
      }
    });

  }, [notes]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={140}
      style={{
        borderRadius: '4px',
        backgroundColor: '#222',
      }}
    />
  );
};

export default StaffCanvas;
