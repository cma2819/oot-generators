import DekuStickPath from '../assets/images/items/stick.png';
import DekuNutPath from '../assets/images/items/nut.png';
import BombPath from '../assets/images/items/bombs.png';
import BombchuPath from '../assets/images/items/bombchu.png';
import BowPath from '../assets/images/items/bow.png';
import FireArrowPath from '../assets/images/items/arrow_fire.png';
import IceArrowPath from '../assets/images/items/arrow_ice.png';
import LightArrowPath from '../assets/images/items/arrow_light.png';
import SlingshotPath from '../assets/images/items/slingshot.png';
import FairyOcarinaPath from '../assets/images/items/ocarina_saria.png';
import OoTPath from '../assets/images/items/ocarina_time.png';
import HookshotPath from '../assets/images/items/hookshot_small.png';
import LongshotPath from '../assets/images/items/hookshot_long.png';
import BoomerangPath from '../assets/images/items/boomerang.png';
import TruthLensPath from '../assets/images/items/lens.png';
import MagicBeansPath from '../assets/images/items/bean.png';
import HammerPath from '../assets/images/items/hammer.png';
import DinsFirePath from '../assets/images/items/magic_din.png';
import FaroreWindPath from '../assets/images/items/magic_farore.png';
import NayruLovePath from '../assets/images/items/magic_nayru.png';
import EmptyBottlePath from '../assets/images/items/bottle.png';
import BagsBottlePath from '../assets/images/items/bottle_bugs.png';
import FishBottlePath from '../assets/images/items/bottle_fish.png';
import FairyBottlePath from '../assets/images/items/bottle_fairy.png';
import MilkBottlePath from '../assets/images/items/bottle_milk.png';
import PoeBottlePath from '../assets/images/items/bottle_poe.png';
import BigPoeBottlePath from '../assets/images/items/bottle_poe_big.png';
import BlueFireBottlePath from '../assets/images/items/bottle_blue_fire.png';
import RedPotionPath from '../assets/images/items/bottle_potion_red.png';
import GreenPotionPath from '../assets/images/items/bottle_potion_green.png';
import BluePotionPath from '../assets/images/items/bottle_potion_blue.png';
import RutoLetterPath from '../assets/images/items/zora_letter.png';

import EggPath from '../assets/images/items/egg.png';
import CuccoPath from '../assets/images/items/cucco.png';
import ZeldaLetterPath from '../assets/images/items/zelda_letter.png';
import KeatonMaskPath from '../assets/images/items/mask_keaton.png';
import SkullMaskPath from '../assets/images/items/mask_skull.png';
import SpookyMaskPath from '../assets/images/items/mask_spooky.png';
import BunnyMaskPath from '../assets/images/items/mask_bunny.png';
import TruthMaskPath from '../assets/images/items/mask_truth.png';
import GoronMaskPath from '../assets/images/items/mask_goron.png';
import ZoraMaskPath from '../assets/images/items/mask_zora.png';
import GerudoMaskPath from '../assets/images/items/mask_gerudo.png';

import CojiroPath from '../assets/images/items/cojiro.png';
import OddPotionPath from '../assets/images/items/medicine.png';
import OddMushroomPath from '../assets/images/items/mushroom.png';
import SawPath from '../assets/images/items/saw.png';
import BrokenSwordPath from '../assets/images/items/broken_sword.png';
import FrogPath from '../assets/images/items/frog.png';
import PrescriptionPath from '../assets/images/items/prescription.png';
import EyeDropsPath from '../assets/images/items/eyedrops.png';

export type Item = {
    name: string;
    path: string;
}

export type Slot = {
    items: [Item, ... Item[]];
}

export const Items = {
    DekuStick: {
        name: 'deku-stick',
        path: DekuStickPath,
    },
    DekuNut: {
        name: 'deku-nut',
        path: DekuNutPath,
    },
    Bomb: {
        name: 'bomb',
        path: BombPath,
    },
    Bombchu: {
        name: 'bombchu',
        path: BombchuPath,
    },
    Bow: {
        name: 'bow',
        path: BowPath,
    },
    FireArrow: {
        name: 'fire-arrow',
        path: FireArrowPath,
    },
    IceArrow: {
        name: 'ice-arrow',
        path: IceArrowPath,
    },
    LightArrow: {
        name: 'light-arrow',
        path: LightArrowPath,
    },
    Slingshot: {
        name: 'slingshot',
        path: SlingshotPath,
    },
    FairyOcarina: {
        name: 'fairy-ocarina',
        path: FairyOcarinaPath,
    },
    OcarinaOfTime: {
        name: 'ocarina-of-time',
        path: OoTPath,
    },
    Hookshot: {
        name: 'hookshot',
        path: HookshotPath,
    },
    Longshot: {
        name: 'longshot',
        path: LongshotPath,
    },
    Boomerang: {
        name: 'boomerang',
        path: BoomerangPath,
    },
    TruthLens: {
        name: 'truth-lens',
        path: TruthLensPath,
    },
    MagicBeans: {
        name: 'magic-beans',
        path: MagicBeansPath,
    },
    Hammer: {
        name: 'hammer',
        path: HammerPath,
    },
    DinsFire: {
        name: 'dins-fire',
        path: DinsFirePath,
    },
    FroreWind: {
        name: 'farore-wind',
        path: FaroreWindPath,
    },
    NayruLove: {
        name: 'nayru-love',
        path: NayruLovePath,
    },
    Bottle: {
        name: 'bottle',
        path: EmptyBottlePath,
    },
    Bags: {
        name: 'bags',
        path: BagsBottlePath,
    },
    Fish: {
        name: 'fish',
        path: FishBottlePath,
    },
    Fairy: {
        name: 'fairy',
        path: FairyBottlePath,
    },
    Milk: {
        name: 'milk',
        path: MilkBottlePath,
    },
    Poe: {
        name: 'poe',
        path: PoeBottlePath,
    },
    BigPoe: {
        name: 'big-poe',
        path: BigPoeBottlePath,
    },
    BlueFire: {
        name: 'blue-fire',
        path: BlueFireBottlePath,
    },
    RedPotion: {
        name: 'red-potion',
        path: RedPotionPath,
    },
    GreenPotion: {
        name: 'green-potion',
        path: GreenPotionPath,
    },
    BluePotion: {
        name: 'blue-potion',
        path: BluePotionPath,
    },
    RutosLetter: {
        name: 'rutos-letter',
        path: RutoLetterPath,
    },
    WeirdEgg: {
        name: 'weird-egg',
        path: EggPath,
    },
    Cucco: {
        name: 'chicken',
        path: CuccoPath,
    },
    ZeldasLetter: {
        name: 'zeldas-letter',
        path: ZeldaLetterPath,
    },
    KeatonMask: {
        name: 'keaton-mask',
        path: KeatonMaskPath,
    },
    SkullMask: {
        name: 'skull-mask',
        path: SkullMaskPath,
    },
    SpookyMask: {
        name: 'spooky-mask',
        path: SpookyMaskPath,
    },
    BunnyMask: {
        name: 'bunny-mask',
        path: BunnyMaskPath,
    },
    TruthMask: {
        name: 'truth-mask',
        path: TruthMaskPath,
    },
    GoronMask: {
        name: 'goron-mask',
        path: GoronMaskPath,
    },
    ZoraMask: {
        name: 'zora-mask',
        path: ZoraMaskPath,
    },
    GerudoMask: {
        name: 'gerudo-mask',
        path: GerudoMaskPath,
    },
    PocketEgg: {
        name: 'pocket-egg',
        path: EggPath,
    },
    PocketCucco: {
        name: 'pocket-cucco',
        path: CuccoPath,
    },
    Cojiro: {
        name: 'cojiro',
        path: CojiroPath,
    },
    OddMushroom: {
        name: 'odd-mushroom',
        path: OddMushroomPath,
    },
    OddPotion: {
        name: 'odd-potion',
        path: OddPotionPath,
    },
    Saw: {
        name: 'saw',
        path: SawPath,
    },
    BrokenGoronSword: {
        name: 'broken-goron-sword',
        path: BrokenSwordPath,
    },
    Frog: {
        name: 'frog',
        path: FrogPath,
    },
    Prescription: {
        name: 'prescription',
        path: PrescriptionPath,
    },
    EyeDrops: {
        name: 'eye-drops',
        path: EyeDropsPath,
    },
} as const;

type Store = {
    items: {
        left: Item,
        down: Item,
        right: Item,
    }
}

const storageKey = "oot-item-gen"

export const saveToLocal = (store: Store): void => {
    localStorage.setItem(storageKey, JSON.stringify(store));
}

export const fetchFromLocal = (): Store | null => {
    try {
        const value = localStorage.getItem(storageKey);
        if (!value) {
            return null;
        }
        return JSON.parse(value);
    } catch (e) {
        console.error(e);
        return null;
    }
}