import { createApp } from 'vue';
import App from './App.vue';
import languages from './lang';
import './assets/sass/main.scss';

const app = createApp(App);

app.mixin({
    data: () => ({
        lang: languages.en
    }),

    methods: {
        /**
         * Locale func
         * @param string - string from locale object
         * @returns Localize string
         */
        __ (string) {
            return this.lang.locales[string];
        }
    }
});

app.mount('#app');
