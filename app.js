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
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
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
            console.log('doubleCountComputed')
            return this.notes.length * 2
        }
    }
}


Vue.createApp(App).mount('#app')