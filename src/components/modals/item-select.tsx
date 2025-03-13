import { Box, Button, Modal, ModalProps, Stack, styled } from '@mui/material';
import { Item, Items, Slot } from '../../models/item';
import { useState } from 'react';

type OnItemSelectHandler = (item: Item) => unknown;

type Props = {
    open: boolean;
    onClose: ModalProps['onClose'];
    onSelect: OnItemSelectHandler;
}

const BottleSlot: Readonly<Slot> = {
    items: [
        Items.Bottle,
        Items.Bags,
        Items.Fish,
        Items.Fairy,
        Items.Milk,
        Items.Poe,
        Items.BigPoe,
        Items.BlueFire,
        Items.RedPotion,
        Items.BluePotion,
        Items.GreenPotion,
        Items.RutosLetter,
    ]
}

const ChildTradeSlot: Readonly<Slot> = {
    items: [
        Items.WeirdEgg,
        Items.Cucco,
        Items.ZeldasLetter,
        Items.KeatonMask,
        Items.SkullMask,
        Items.SpookyMask,
        Items.BunnyMask,
        Items.TruthMask,
        Items.GoronMask,
        Items.ZoraMask,
        Items.GerudoMask,
    ]
};

const AdultTradeSlot: Readonly<Slot> = {
    items: [
        Items.PocketEgg,
        Items.PocketCucco,
        Items.Cojiro,
        Items.OddMushroom,
        Items.OddPotion,
        Items.Saw,
        Items.BrokenGoronSword,
        Items.Frog,
        Items.Prescription,
        Items.EyeDrops,
    ]
}

const MenuSlots: Slot[][] = [
    [{ items: [ Items.DekuStick ] }, { items: [ Items.DekuNut ] }, { items: [ Items.Bomb ] }, { items: [ Items.Bow ] }, { items: [ Items.FireArrow ] }, { items: [ Items.DinsFire ] }],
    [{ items: [ Items.Slingshot ] }, { items: [ Items.FairyOcarina, Items.OcarinaOfTime ] }, { items: [ Items.Bombchu ] }, { items: [ Items.Hookshot, Items.Longshot ] }, { items: [ Items.IceArrow ] }, { items: [ Items.FroreWind ] } ],
    [{ items: [ Items.Boomerang ] }, { items: [ Items.TruthLens ] }, { items: [ Items.MagicBeans ] }, { items: [ Items.Hammer ] }, { items: [ Items.LightArrow ] }, { items: [ Items.NayruLove ] },],
    [BottleSlot, BottleSlot, BottleSlot, BottleSlot, AdultTradeSlot, ChildTradeSlot]
]

const SlotImage = styled('img')`
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
`

const SlotButton = ({ slot, onSelect }: { slot: Slot, onSelect: OnItemSelectHandler }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button
                sx={{
                    p: 1,
                    minWidth: 0,
                }}
                onClick={() => {
                    if (slot.items.length < 2) {
                        onSelect(slot.items[0]);
                    } else {
                        setOpenModal(true);
                    }
                }}
            >
                <SlotImage src={slot.items[0].path} />
            </Button>
            {
                slot.items.length > 1 && (
                    <Modal open={openModal}>
                        <Box sx={{
                            background: '#444444',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}>
                            <Stack direction='row'>
                                {
                                    slot.items.map((i, index) => (
                                        <Button
                                            key={index}
                                            sx={{
                                                p: 1,
                                                minWidth: 0,
                                            }}
                                            onClick={() => {
                                                onSelect(i);
                                            }}
                                        >
                                            <SlotImage src={i.path} />
                                        </Button>
                                    ))
                                }
                            </Stack>
                        </Box>
                    </Modal>
                )
            }
        </>
    )
}

const ItemSelectModal = ({ open, onClose, onSelect }: Props) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                background: '#444444',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                {
                    MenuSlots.map(((slots, rIndex) => (
                        <Stack key={`row_${rIndex}`} direction='row'>
                        {
                            slots.map((s, cIndex) => (
                                <SlotButton key={`${rIndex}_${cIndex}`} slot={s} onSelect={(item) => {
                                    onSelect(item);
                                }} />
                            ))
                        }
                        </Stack>
                    )))
                }
            </Box>
        </Modal>
    )
}

export default ItemSelectModal;