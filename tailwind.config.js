const extendSpacing = () => {
  const maxRange = 200
  const maxRangeArray = [...Array(maxRange).keys()].map(i => ++i)
  const spacingResult = maxRangeArray.reduce((previousValue, currentValue) => {
    previousValue[currentValue] = `${currentValue}px`
    return previousValue
  }, {})
  return spacingResult
}

module.exports = {
  future: {},
  purge: [],
  theme: {
    fontFamily: {
      sans: [
        'Yu Gothic',
        'yugothic',
        'ヒラギノ角ゴ ProN W3',
        'Hiragino Kaku Gothic ProN',
        'メイリオ',
        'meiryo',
        'sans-serif',
      ],
      english: [],
    },
    letterSpacing: {
      'tight-3': '-.1em',
      'tight-2': '-.05em',
      'tight-1': '-.025em',
      normal: '0',
      'wide-1': '.025em',
      'wide-2': '.05em',
      'wide-3': '.1em',
      'wide-4': '.15em',
      'wide-5': '.2em',
    },
    extend: {
      spacing: extendSpacing,
      colors: {
        black: '#333',
      },
    },
  },
  variants: {},
  plugins: [],
}
