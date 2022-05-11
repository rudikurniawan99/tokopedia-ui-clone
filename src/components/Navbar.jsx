import React from 'react'
import { Box, Button, IconButton, Divider, Paper, Typography, AppBar, Toolbar } from '@mui/material'
import { ShoppingCart as ShoppingCartIcon, Mail as MailIcon, Notifications as NotificationIcon, Store as StoreIcon, AccountCircle as UserAccountIcon, PhoneAndroid as PhoneAndroidIcon } from '@mui/icons-material';
import LogoImage from '../assets/images/logo.png'
import { Cart, Category, Notification, SearchBar } from './molecules/navItems';

const tokpedBranchLink = [
  {
    title: 'Tentang Tokopedia',
    path: 'tokopedia.com/about'
  },
  {
    title: 'Mitra Tokopedia',
    path: 'tokopedia.com/mitra'
  },
  {
    title: 'Pusat Edukasi Seller',
    path: 'tokopedia.com/edu'
  },
  {
    title: 'Promo',
    path: 'tokopedia.com/promo'
  },
  {
    title: 'Tokopedia Care',
    path: 'tokopedia.com/help'
  },
]

const Navbar = () => {

  return (
    <AppBar
      position='fixed'
    >
      <Paper
        sx={{
          backgroundColor: '#f3f4f5',
          borderRadius: 0,
          px: 3,
          py: 0.5
        }}
      >
        <Box
          display='flex'
          sx={{
            justifyContent: 'space-between'
          }}
        >
          <Box
            display='flex'
          >
            <PhoneAndroidIcon
              sx={{
                fontSize: 16,
                color: 'text.white'
              }}
            />
            <a style={{
              textDecoration: 'none'
            }} href='#'>
              <Typography
                sx={{
                  fontSize: 12,
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >Download Tokopedia App</Typography>
            </a>
          </Box>
          <Box
            display='flex'
            sx={{
              justifyContent: 'space-between'
            }}
          >
            {tokpedBranchLink.map((item, i) => (
              <a
                style={{
                  textDecoration: 'none'
                }}
                href={item.path}
                key={i}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: 'text.secondary',
                    mr: 2,
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >{item.title}</Typography>
              </a>
            ))}
          </Box>
        </Box>
      </Paper>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          backgroundColor: 'background.paper'
        }}
      >
        <a href="/">
          <Box
            component='img'
            src={LogoImage}
            sx={{
              height: 32,
            }}
          />
        </a>
        <Category />
        <SearchBar />
        <Box
          display='flex'
        >
          <Cart />
          <Notification />
          <MenuIconButton icon={(<MailIcon />)} />
          <Divider
            orientation='vertical'
            variant='middle'
            flexItem
          />
          <Button
            startIcon={<StoreIcon />}
            sx={{
              color: 'grey.700'
            }}
          >
            <Typography
              sx={{
                color: 'text.secondary',
                textTransform: 'none'
              }}
            >Toko </Typography>
          </Button>
          <Button
            startIcon={<UserAccountIcon />}
            sx={{
              color: 'grey.700'
            }}
          >
            <Typography
              sx={{
                color: 'text.secondary',
                textTransform: 'none'
              }}
            >Rudi Kurniawan</Typography>
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar

const MenuIconButton = ({ icon, text }) => {
  return (
    <IconButton
      sx={{
        borderRadius: 0
      }}
    >
      {icon}
    </IconButton>
  )
}
