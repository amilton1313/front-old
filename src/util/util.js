export const cpfMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  export const cnpjMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }

  export const cepMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }

  export const cpfFormat = value => {
      let a = value.replace(/\D/g, '')
      let b=a.substring(0,3)
      if (a.length > 3) b = b + '.' + a.substring(3,6)
      if (a.length > 6) b = b + '.' + a.substring(6,9)
      if (a.length > 9) b = b + '-' + a.substring(9,11)
      return b
  }

export const cnpjFormat = value => {
    let a = value.replace(/\D/g, '')
    let b=a.substring(0,2)
    if (a.length > 2) b = b + '.' + a.substring(2,5)
    if (a.length > 5) b = b + '.' + a.substring(5,8)
    if (a.length > 8) b = b + '/' + a.substring(8,12)
    if (a.length > 12) b = b + '-' + a.substring(12,14)
    return b
}

export const clearFormat = value => {
  return value.replace(/\D/g, '')
}

