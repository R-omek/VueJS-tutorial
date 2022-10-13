Vue.createApp({
    data: () => ({
        title: 'I am title',
        myHtml: '<h1>Vue 3 App</h1>',
        person: {
            firstName: 'Roma',
            lastName: 'Hrytz',
            age: 25
        },
        items: [1, 2, 3, 4, 5, 6]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        removeItem(i) {
            this.items.splice(i, 1)
        },
        log(item) {
            console.log(item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')