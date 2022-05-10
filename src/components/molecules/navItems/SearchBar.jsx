import React from 'react'
import { Search as SearchIcon } from '@mui/icons-material'

const SearchBar = () => {
  return (
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
  )
}

export default SearchBar