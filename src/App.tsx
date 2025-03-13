import EquipmentsImage from './components/equipments-image'
import ItemSelectModal from './components/modals/item-select';
import { useEffect, useState } from 'react';
import { fetchFromLocal, Item, Items, saveToLocal } from './models/item';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

function App() {

  const [left, setLeft] = useState<Item>();
  const [down, setDown] = useState<Item>();
  const [right, setRight] = useState<Item>();
  const [editItem, setEditItem] = useState<'left'|'down'|'right'|null>(null);

  useEffect(() => {
    const store = fetchFromLocal();

    setLeft(store?.items.left ?? Items.DekuStick);
    setDown(store?.items.down ?? Items.Hookshot);
    setRight(store?.items.right ?? Items.LightArrow);
  }, []);

  const loaded = (left && down && right);

  return (
    <Container maxWidth='md' sx={{
      backgroundColor: 'white',
    }}>
      <Grid container sx={{
        justifyContent: 'center',
      }}>
        <Typography variant='h2'>
          OoT Item Equip Generator
        </Typography>
        <Grid>
          {
            loaded && (
              <EquipmentsImage
                left={left.path}
                down={down.path}
                right={right.path}
                onButtonClick={(b) => {
                  setEditItem(b);
                }}
              />
            )
          }
        </Grid>
      </Grid>
        {
          loaded && (
            <ItemSelectModal
              open={Boolean(editItem)}
              onClose={() => { setEditItem(null) }}
              onSelect={(item) => {
                switch (editItem) {
                  case 'left':
                    setLeft(item);
                    saveToLocal({
                      items: {
                        left: item,
                        down,
                        right,
                      }
                    })
                    break;
                  case 'down':
                    setDown(item);
                    saveToLocal({
                      items: {
                        left,
                        down: item,
                        right,
                      }
                    })
                    break;
                  case 'right':
                    setRight(item);
                    saveToLocal({
                      items: {
                        left,
                        down,
                        right: item,
                      }
                    })
                    break;
                }
                setEditItem(null);
              }}
            />
          )
        }
    </Container>
  )
}

export default App
