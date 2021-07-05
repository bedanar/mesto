<template>
    <div>
        <ParticipantsItem />
        <ParticipantsItem />
        <ParticipantsItem />
        <ParticipantsItem />
    </div>
</template>
 <script>
 import ParticipantsItem from './ParticipantsItem.vue'
 export default {
     name: 'ParticipantsList',
     components: {
         ParticipantsItem,
     }
 }
 </script>