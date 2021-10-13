<template>
  <div
    v-if="message && message.fields"
    class="message-container"
  >
    <h1> “{{ message.fields.messagecontent }}“</h1>
    <div class="message-meta">
      <h2 class="authormessage">{{ message.fields.author }}</h2>
      <h2>{{ timeFormat(message.fields.date) }}</h2>
    </div>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  props: {
    message: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    timeFormat (time) {
      return moment(String(time)).format("DD.MM.YYYY - hh:mm")
    },
  }
}
</script>
