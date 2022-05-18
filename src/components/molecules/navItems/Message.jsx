import React, { useRef, useState } from 'react'
import { Mail as MailICon } from '@mui/icons-material'
import { Badge, Box, Button, ClickAwayListener, Link, Paper, Popover, styled } from '@mui/material'

const Message = () => {

  const anchorEl = useRef(null)
  const [open, setOpen] = useState(false)
  const changeHanlder = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div>
      <Button
        ref={anchorEl}
        onClick={changeHanlder}
        sx={{
          color: 'text.secondary'
        }}
      >
        <Badge
          badgeContent={3}
          color='error'
        >
          <MailICon />
        </Badge>
      </Button>

      <Popover
        anchorEl={anchorEl.current}
        open={open}
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
              py: 2,
              width: 200
            }}
          >
            <LinkWithStyle title='Chat' />
            <LinkWithStyle title='Diskusi' />
            <LinkWithStyle title='Ulasan' />
            <LinkWithStyle title='Pesan Bantuan' />
            <LinkWithStyle title='Pesan Dikomplain' />
          </Paper>
        </ClickAwayListener>
      </Popover>
    </div>
  )
}

export default Message

const LinkWithStyle = ({ title, path = '/' }) => (
  <Box
    sx={{
      py: 0.5,
      px: 3,
      '&:hover': {
        backgroundColor: 'grey.200'
      }
    }}
  >
    <Link
      href={path}
      sx={{
        textDecoration: 'none',
        color: 'text.secondary',
        fontSize: 12
      }}
    >
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <span>{title}</span>

      </Box>
    </Link>
  </Box>
)