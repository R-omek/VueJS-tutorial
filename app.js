const App = {
    data() {
        return {
            title: 'Notes list',
            placeholder: 'Enter note name',
            inputValue: '',
            notes: [
                'note 1',
                'note 2',
            ]
        }
    },
    methods: {
        addNewNotes() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
        },
        toUpperCase(item) {
            return item.toUpperCase()
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if(value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}


Vue.createApp(App).mount('#app')