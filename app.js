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
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
        }
    }
}


Vue.createApp(App).mount('#app')