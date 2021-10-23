export const API = {
  data() {
    return {
      api_key: '',
      base_currency: '',
      converted: 0
    }
  },
  methods: {
    Convert: function (convertTo='USD', amount=1) {
      const convert = async () =>
          await fetch(
              'https://www.amdoren.com/api/currency.php?api_key=${this.api_key}' +
              '&from=${this.base_currency}&to=${convertTo}&amount=${amount}')
              .then(response => response.json())
              .then(json => {
                this.converted = json.amount
              })
      return this.converted
    }
  },
  mounted() {
    this.api_key = this.$store.getters.API
    this.base_currency = this.$store.getters.BASE
  }
}
