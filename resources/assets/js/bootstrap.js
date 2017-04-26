window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');
window.Pusher = require('pusher-js');
import Echo from "laravel-echo";

const PUSHER_KEY = 'your-pusher-key';

const NOTIFICATION_TYPES = {
    follow: 'App\\Notifications\\UserFollowed',
    newPost: 'App\\Notifications\\NewPost'
};

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: PUSHER_KEY,
    cluster: 'eu',
    encrypted: true
});