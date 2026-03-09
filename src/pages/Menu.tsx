import { Container, Typography, Card, CardContent, CardActionArea, Stack } from '@mui/material';

type AppInfo = {
  id: string;
  title: string;
  description: string;
  path: string;
}

const apps: AppInfo[] = [
  {
    id: 'item-equip-generator',
    title: 'OoT Item Equip Generator',
    description: 'ゼルダの伝説 時のオカリナのアイテム装備画面を生成します',
    path: '/item-equip-generator',
  },
  {
    id: 'ocarina-memo',
    title: 'OoT Ocarina Memorizer',
    description: '迷いの森のミニゲームやカカシの歌を記憶するためのメモツール',
    path: '/ocarina-memo',
  },
];

function Menu() {
  return (
    <Container maxWidth='md' sx={{
      backgroundColor: 'white',
      minHeight: '100vh',
      py: 4,
    }}>
      <Typography variant='h2' sx={{ mb: 4, textAlign: 'center' }}>
        OoT Generators
      </Typography>
      <Stack spacing={2}>
        {apps.map((app) => (
          <Card key={app.id}>
            <CardActionArea onClick={() => window.location.href = app.path}>
              <CardContent>
                <Typography variant='h5' component='div' gutterBottom>
                  {app.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {app.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default Menu;
