<template>
    <div style="text-align: center">
        <div v-if="currentWord">
            <p style="font-size: 25px"><strong>Số từ còn lại: {{ remainWord }} </strong></p>
            <p style="font-size: 25px" v-if="currentWord.kanji"><strong>{{ currentWord.kanji }}</strong></p>
            <p style="font-size: 25px"><strong>{{ currentWord.japanese }}</strong></p>
            <input @keyup.enter="focusOnVietnameseInput" v-model="romanjiInput" placeholder="Nhập Romanji" required
                class="input" size="50" ref="romanjiInput" trim />
            <br />
            <input @keyup.enter="checkInput" v-model="meaning" placeholder="Nhập nghĩa" required class="input" size="50"
                ref="vietnameseInput" trim />
            <p>{{ hint }}</p>
            <br />
            <button @click="checkInput" class="button">Tiếp theo</button>
            <button @click="giveHint" class="button" style="margin-left: 5px">Gợi ý</button>
        </div>
        <div v-else>
            <button @click="startExercise" class="button">Bắt đầu</button>
        </div>
        <div style="color: red; font-size: 20px">{{ error }}</div>
    </div>
</template>

<script>

// import words_26 from '../Data/N4/26.json';
// import words_27 from '../Data/N4/27.json';
// import words_28 from '../Data/N4/28.json';
// import words_29 from '../Data/N4/29.json';
// import words_30 from '../Data/N4/30.json';
// import words_31 from '../Data/N4/31.json';
// import words_32 from '../Data/N4/32.json';
// import words_33 from '../Data/N4/33.json';
// import words_34 from '../Data/N4/34.json';
// import words_35 from '../Data/N4/35.json';
 import words_36 from '../Data/N4/36.json';

export default {
    data() {
        return {
            words: [],
            usedIndices: [],
            currentWordIndex: null,
            currentWord: null,
            romanjiInput: '',
            meaning: '',
            error: '',
            remainWord: null,
            hint: '',
            
        };
    },
    created() {
        this.words = words_36 //Ktra từ vựng 1 bài
        // this.words = this.words.concat(words_26, words_27, words_28, words_29, words_30) //Ktra từ vựng nhiều bài
    },
    methods: {
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
            if (this.$refs.romanjiInput) {
                this.$refs.romanjiInput.focus();
            }
            if (this.usedIndices.length === this.words.length) {
                alert('Xuất sắc! Bạn đã biết thêm nhiều từ tiếng Nhật mới');
                this.usedIndices = [];
                this.currentWordIndex = null;
                this.currentWord = null;
                this.romanjiInput = '';
                this.meaning = ''
                return;
            }
            do {
                this.currentWordIndex = Math.floor(Math.random() * this.words.length);
            } while (this.usedIndices.includes(this.currentWordIndex));
            this.currentWord = this.words[this.currentWordIndex];
            this.romanjiInput = '';
            this.meaning = ''
            this.usedIndices.push(this.currentWordIndex);
        },
        checkInput() {
            if (this.romanjiInput === this.currentWord.romanji && this.meaning === this.currentWord.vietnamese) {
                this.remainWord = this.remainWord - 1
                this.nextWord();
                this.error = ''
                this.hint = ''
            } else {
                this.error = 'Sai'
            }
        },
        giveHint() {
            this.hint = this.currentWord.vietnamese
        }
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
