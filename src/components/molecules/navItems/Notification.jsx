import { AppBar, Button, ClickAwayListener, Paper, Popover, Tab, Tabs, Box, Typography, Link } from '@mui/material'
import { Notifications as NotificationIcon, Settings } from '@mui/icons-material'
import { useRef, useState } from 'react'

const Notification = () => {

  const anchorEl = useRef(null)
  const [tabValue, setTabValue] = useState(0)
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
        <NotificationIcon />
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
          onClickAway={() => setOpen(false)}
        >
          <Paper>
            <Box
              component={Paper}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 600
                }}
              >Notification</Typography>
              <Button
                sx={{
                  p: 0,
                  color: 'text.secondary'
                }}
              >
                <Settings />
              </Button>
            </Box>
            <Tabs
              value={tabValue}
              variant='fullWidth'
              onChange={(e, newValue) => {
                setTabValue(newValue)
              }}
            >
              <Tab
                value={0}
                label="Transaksi"
                sx={{
                  textTransform: 'none'
                }}
              />
              <Tab
                value={1}
                label="Update"
                sx={{
                  textTransform: 'none'
                }}
              />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
              panel 1j
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'column',
                  justifyContent: 'center',
                  my: 2
                }}
              >
                <Typography
                  textAlign='center'
                >Belum ada notifikasi</Typography>
                <Button
                  variant='contained'
                  size='small'
                  sx={{
                    textTransform: 'none',
                    width: 'max-content',
                    mx: 'auto',
                    mt: 1,
                  }}
                >
                  Mulai Belanja
                </Button>
              </Box>
            </TabPanel>
            <Box
              component={Paper}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1
              }}
            >
              {/* <Link>Tandai semua dibaca</Link> */}
              {/* <Link>Lihat Selengkapnya</Link> */}
              <Link
                underline='none'
                sx={{
                  fontSize: 12,
                  cursor: 'pointer'
                }}
              >Tandai semua dibaca</Link>
              <Link
                underline='none'
                sx={{
                  fontSize: 12,
                  cursor: 'pointer'
                }}
              >Lihat selengkapnya</Link>
            </Box>
          </Paper>
        </ClickAwayListener>
      </Popover>
    </>
  )
}

export default Notification

const TabPanel = ({ children, value, index, ...rest }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      {...rest}
    >
      {value === index && (
        <Box
          sx={{
            p: 2,
            overflow: 'auto',
            width: 300,
            maxHeight: 400
          }}
        >
          {children}
        </Box>
      )}
    </div>
  )
}