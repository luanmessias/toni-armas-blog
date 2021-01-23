export interface theme {
  color_orange_light: string
  color_orange_medium: string
  color_orange_dark: string
  l_aside_width: string
  r_aside_width: string
  bg_body: string
  bg_dark: string
  bg_light: string
  border_color: string
  txt_color_base: string
  txt_color_dark: string
  txt_color_mid: string
  txt_color_light: string
}

export const defaultTheme = {
  color_orange_light: '#ff7b29',
  color_orange_medium: '#FF6000',
  color_orange_dark: '#ac4200',
  l_aside_width: '320px',
  r_aside_width: '60px'
}

export const darkTheme = {
  bg_body: '#383838',
  bg_dark: '#272727',
  bg_light: '#383838',
  bg_reverse: '#F8F8F8',
  border_color: '#515151',
  txt_color_base: '#E8E8E8',
  txt_color_dark: '#646464',
  txt_color_mid: '#E8E8E8',
  txt_color_light: '#FFF',
  bg_mobmenu: '#000',
  ...defaultTheme
}

export const lightTheme = {
  bg_body: '#FFF',
  bg_dark: '#E7E7E7',
  bg_light: '#F8F8F8',
  bg_reverse: '#272727',
  border_color: '#A6A6A6',
  txt_color_base: '#272727',
  txt_color_dark: '#272727',
  txt_color_mid: '#383838',
  txt_color_light: '#FFF',
  bg_mobmenu: '#E7E7E7',
  ...defaultTheme
}
