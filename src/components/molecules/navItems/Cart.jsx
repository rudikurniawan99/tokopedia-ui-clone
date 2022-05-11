import { Button, ClickAwayListener, Paper, Popover, Typography, Box, styled } from '@mui/material'
import React, { useRef, useState } from 'react'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import EmptyCartImage from '../../../assets/images/cart-empty.png'

const Cart = () => {

  const anchorEl = useRef(null)
  const [open, setOpen] = useState(false)
  const toggleHandler = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    <>
      <Button
        ref={anchorEl}
        onClick={toggleHandler}
        sx={{
          color: 'text.secondary'
        }}
      >
        <ShoppingCartIcon />
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl.current}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom'
        }}
      >
        <ClickAwayListener
          onClickAway={() => setOpen(false)}
        >
          <Paper
            sx={{
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <img
                style={{
                  width: '200px'
                }}
                src={EmptyCartImage}
                alt="Empty Cart Image"
              />
            </Box>
            <Box
              sx={{
                textAlign: 'center'
              }}

            >
              <Typography
                sx={{
                  my: 1
                }}
              >Wah keranjang belanjaanmu kosong</Typography>
              <Typography
                variant='subtitle2'
                sx={{
                  color: 'text.secondary',
                  fontSize: 12
                }}
              >Daripada dianggurin, isi saja dengan barang-barang menarik.</Typography>
              <Typography
                variant='subtitle2'
                sx={{
                  color: 'text.secondary',
                  fontSize: 12
                }}
              >Lihat-lihat dulu, siapa tau ada yang kamu suka!</Typography>
            </Box>
          </Paper>
        </ClickAwayListener>
      </Popover>

    </>
  )
}

export default Cart
