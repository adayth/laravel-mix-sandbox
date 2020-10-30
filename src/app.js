import 'bootstrap';
import Vue from 'vue';
import Notification  from './components/Notification.vue';

new Vue({
    el: '#app',
    template: '<Notification/>',
    components: {
        Notification,
    }
});