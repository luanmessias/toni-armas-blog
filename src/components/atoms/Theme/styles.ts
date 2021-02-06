import { ThemePropTypes } from '@proptypes/ThemePropTypes'

export const defaultTheme: ThemePropTypes = {
  colorOrangeLight: '#ff7b29',
  colorOrangeMedium: '#FF6000',
  colorOrangeDark: '#ac4200',
  LAsideWidth: '320px',
  RAsideWidth: '60px'
}

export const darkTheme: ThemePropTypes = {
  bgBody: '#383838',
  bgDark: '#272727',
  bgLight: '#383838',
  bgReverse: '#F8F8F8',
  borderColor: '#515151',
  txtColorBase: '#E8E8E8',
  txtColorDark: '#646464',
  txtColorMid: '#E8E8E8',
  txtColorLight: '#FFF',
  bgMobMenu: '#000',
  ...defaultTheme
}

export const lightTheme: ThemePropTypes = {
  bgBody: '#FFF',
  bgDark: '#E7E7E7',
  bgLight: '#F8F8F8',
  bgReverse: '#272727',
  borderColor: '#A6A6A6',
  txtColorBase: '#272727',
  txtColorDark: '#272727',
  txtColorMid: '#383838',
  txtColorLight: '#FFF',
  bgMobMenu: '#E7E7E7',
  ...defaultTheme
}
