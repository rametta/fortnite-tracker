import Vue from 'vue'

Vue.filter('percent', (val, decs) => (val * 100).toFixed(decs || 1))

Vue.filter('toFix', (val, decs) => {
  if (!val) {
    return ''
  }
  return parseFloat(val).toFixed(decs || 1)
})

Vue.filter('number', (val) =>
  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
)
