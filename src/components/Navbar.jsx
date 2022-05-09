import React from 'react'
import { Box, Button, IconButton, Divider, Paper, styled, Typography, AppBar, Toolbar, Container } from '@mui/material'
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon, Mail as MailIcon, Notifications as NotificationIcon, Store as StoreIcon, AccountCircle as UserAccountIcon, PhoneAndroid as PhoneAndroidIcon } from '@mui/icons-material';
import LogoImage from '../assets/images/logo.png'

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
            {tokpedBranchLink.map((item) => (
              <a style={{
                textDecoration: 'none'
              }} href={item.path}>
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
        <Box
          component='img'
          src={LogoImage}
          sx={{
            height: 32,
          }}
        />
        <Typography
          sx={{
            color: 'text.secondary'
          }}
        >Kategori</Typography>
        <Box
          display='flex'
          sx={{
            border: 1,
            borderColor: 'primary.main',
            borderRadius: 2,
            '&:focus': {
              borderColor: 'primary.main'
            }
          }}
        >
          <Box
            component='input'
            placeholder='Cari barang'
            sx={{
              width: 500,
              backgroundColor: 'transparent',
              px: 1,
              outline: 'none',
              border: 'none',
            }}
          />
          <IconButton
            sx={{
              backgroundColor: 'grey.200',
              borderRadius: 0,
              p: '4px',
              '&:hover': {
                backgroundColor: 'grey.300'
              }
            }}
          >
            <SearchIcon
              sx={{
                fontSize: 20
              }}
            />
          </IconButton>
        </Box>
        <Box
          display='flex'
        >
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton>
            <NotificationIcon />
          </IconButton>
          <IconButton>
            <MailIcon />
          </IconButton>
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

