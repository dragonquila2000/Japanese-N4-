<template>
    <div style="text-align: center">
        <div v-if="currentWord">
            <p style="font-size: 25px"><strong>Số từ còn lại: {{ remainWord }} </strong></p>
            <p style="font-size: 25px" v-if="currentWord.kanji"><strong>{{ currentWord.kanji }}</strong></p>
            <input @keyup.enter="focusOnRomanjiInput" v-model="chineseInput" placeholder="Nhập Nghĩa Hán Tự" required class="input" size="50"/>
            <br />
            <input @keyup.enter="focusOnVietnameseInput" v-model="romanjiInput" placeholder="Nhập Romanji" required class="input" size="50" ref="romanjiInput" />
            <br />
            <input @keyup.enter="checkInput" v-model="meaning" placeholder="Nhập nghĩa" required class="input" size="50" ref="vietnameseInput" />
            <p>{{ hint }}</p>
            <br />
            <button @click="checkInput" class="button">Tiếp theo</button>
        </div>
        <div v-else>
            <button @click="startExercise" class="button">Bắt đầu</button>
        </div>
        <div style="color: red; font-size: 20px">{{ error }}</div>
    </div>
    </template>
    
    <script>
    import words_1 from '../Data/Kanji/N5/1.json'
    import words_2 from '../Data/Kanji/N5/2.json'
    import words_3 from '../Data/Kanji/N5/3.json'
    import words_4 from '../Data/Kanji/N5/4.json'
    import words_5 from '../Data/Kanji/N5/5.json'
    import words_6 from '../Data/Kanji/N5/6.json'
    import words_7 from '../Data/Kanji/N5/7.json'
    import words_8 from '../Data/Kanji/N5/8.json'
    export default {
        data() {
            return {
                words: [],
                usedIndices: [],
                currentWordIndex: null,
                currentWord: null,
                chineseInput: '',
                romanjiInput: '',
                meaning: '',
                error: '',
                remainWord: null,
            };
        },
        created() {
            // this.words = words_1;
            this.words = this.words.concat(words_1, words_2, words_3, words_4, words_5, words_6, words_7, words_8)
        },
        methods: {
            focusOnRomanjiInput() {
                if (this.$refs.romanjiInput) {
                    this.$refs.romanjiInput.focus()
                }
            },
            focusOnVietnameseInput() {
                if (this.$refs.vietnameseInput) {
                    this.$refs.vietnameseInput.focus();
                }
            },
            startExercise() {
                this.usedIndices = [];
                this.nextWord();
                this.remainWord = this.words.length
            },
            nextWord() {
                if (this.$refs.chineseInput) {
                    this.$refs.chineseInput.focus();
                }
                if (this.usedIndices.length === this.words.length) {
                    alert('Xuất sắc! Bạn đã biết thêm nhiều từ tiếng Nhật mới');
                    this.usedIndices = [];
                    this.currentWordIndex = null;
                    this.currentWord = null;
                    this.chineseInput = ''
                    this.romanjiInput = '';
                    this.meaning = ''
                    return;
                }
                do {
                    this.currentWordIndex = Math.floor(Math.random() * this.words.length);
                } while (this.usedIndices.includes(this.currentWordIndex));
                this.currentWord = this.words[this.currentWordIndex];
                this.chineseInput = ''
                this.romanjiInput = '';
                this.meaning = ''
                this.usedIndices.push(this.currentWordIndex);
            },
            checkInput() {
                if (this.chineseInput === this.currentWord.chinese && this.romanjiInput === this.currentWord.romanji && this.meaning === this.currentWord.vietnamese) {
                    this.remainWord = this.remainWord - 1
                    this.nextWord();
                    this.error = ''
                } else {
                    this.error = 'Sai'
                }
            },
        },
    };
    </script>
    
    <style scoped>
    .input {
        margin-bottom: 10px;
        height: 30px;
        font-size: 20px
    }
    
    .button {
        width: 200px;
        height: 50px
    }
    </style>
    