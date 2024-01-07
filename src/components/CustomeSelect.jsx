import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      background: 'var(--colors-ui-base)',
      colors: 'var(--colors-text)',
      borderRadius: 'var(--radi)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px'
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      background: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)'
    })
  }
})`
  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;
  
  & > * {
    box-shadow: var(--shadow);
  }
  
  & input {
    padding-left: 0.25rem;
  }
  
  & * {
    color: var(--colors-text) !important;
  }
  
  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`
