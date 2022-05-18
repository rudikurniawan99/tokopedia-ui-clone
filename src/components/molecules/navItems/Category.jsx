import { Button, ClickAwayListener, Paper, Popover, Popper, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

const Category = () => {

  const anchorEl = useRef(null)
  const [open, setOpen] = useState(false)
  const toggleHandler = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    <>
      <Button
        // onMouseOver={toggleHandler}
        onClick={toggleHandler}
        ref={anchorEl}
      >
        <Typography
          sx={{
            color: 'text.secondary',
            textTransform: 'none'
          }}
        >
          Kategori
        </Typography>
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <ClickAwayListener
          onClickAway={() => {
            setOpen(false)
          }}
        >
          <Paper
            sx={{
              py: 2,
              px: 3,
            }}
          >
            <Typography>Kategori 1</Typography>
            <Typography>Kategori 1</Typography>
            <Typography>Kategori 1</Typography>
            <Typography>Kategori 1</Typography>
          </Paper>

        </ClickAwayListener>
      </Popover>
    </>
  )
}

export default Category