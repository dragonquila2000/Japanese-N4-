<template>
<div>
    <div v-if="currentWord">
        <p v-if="currentWord.kanji"><strong>{{ currentWord.kanji }}</strong></p>
        <p><strong>{{ currentWord.japanese }}</strong></p>
        <input v-model="romanjiInput" placeholder="Nhập Romanji" required style="margin-bottom: 10px" />
        <br />
        <input v-model="meaning" placeholder="Nhập nghĩa" required style="margin-bottom: 10px" />
        <br />
        <button @click="checkInput">Tiếp theo</button>
    </div>
    <div v-else>
        <button @click="startExercise">Bắt đầu</button>
    </div>
    <div style="color: red">{{ error }}</div>
</div>
</template>

<script>
import words_26 from '@/26.json';
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
        };
    },
    created() {
        this.words = words_26;
    },
    methods: {
        startExercise() {
            this.usedIndices = [];
            this.nextWord();
        },
        nextWord() {
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
                this.nextWord();
                this.error = ''
            } else {
                this.error = 'Sai'
            }
        },
    },
};
</script>
