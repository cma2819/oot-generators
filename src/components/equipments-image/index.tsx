import { styled } from '@mui/material';
import { useEffect, useRef } from 'react'

const CButtonCanvas = styled('canvas')`
`

type Props = {
    left: string | null;
    down: string | null;
    right: string | null;
    onButtonClick: onButtonClickHandler;
}

type onButtonClickHandler = (button: 'left' | 'down' | 'right') => unknown;

const EquipmentsImage = ({ left, down, right, onButtonClick }: Props) => {
    const gap = 8;
    const r = 32;

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const leftImage = new Image();
    const downImage = new Image();
    const rightImage = new Image();

    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = 'rgb(168, 168, 0)'
        const cButtonConditions = ['left', 'down', 'right'] as const;
        cButtonConditions.forEach((pos, index) => {
            const x = r + gap + (((r * 2) + gap) * index);
            const y = (pos === 'down' ? (gap + r) : gap) + r;

            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.fill();
        });

        if (left) {
            leftImage.onload = () => {
                ctx.drawImage(leftImage, gap, gap, r * 2, r * 2);
            }
            leftImage.src = left;
        }

        if (down) {
            downImage.onload = () => {
                ctx.drawImage(downImage, (gap * 2) + (r * 2), gap + r, r * 2, r * 2);
            }
            downImage.src = down;
        }

        if (right) {
            rightImage.onload = () => {
                ctx.drawImage(rightImage, (gap * 3) + (r * 2) * 2, gap, r * 2, r * 2);
            }
            rightImage.src = right;
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) {
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        draw(ctx);

    }, [left, down, right])



    return (
        <CButtonCanvas ref={canvasRef} width='216px' height='112x' onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            if (x < (gap + (r * 2)) + (gap / 2)) {
                onButtonClick('left');
                return;
            }
            if (x < (gap + (r * 2) * 2) + (gap / 2)) {
                onButtonClick('down');
                return;
            }
            onButtonClick('right');
        }}></CButtonCanvas>
    )
}

export default EquipmentsImage;