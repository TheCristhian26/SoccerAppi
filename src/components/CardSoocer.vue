<template>
    <ion-card color="dark">
      <ion-card-content v-for="Soccer in Soccers">
        <ion-card-title class="text-center">{{ Soccer.title }}</ion-card-title>
        <p class="text-center">{{ Soccer.competition }}</p>
        <p class="text-center">{{ Soccer.matchviewUrl }}</p>
        <p class="text-center">{{ Soccer.date }}</p>
        <ion-img :src="`${BASE_IMG}${Soccer.thumbnail}`" />
        <ion-carsubtitle>  </ion-carsubtitle>
        </ion-card-content>
    </ion-card>
  </template>
  
  <script lang="ts">
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import ServiceSoccer from '@/Services/ServiceSoccer';
    export default {
      components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle 
    },
    data() {
      return {
        Soccers:[{
          title:'',
          competition:'',
          matchviewUrl:'VIDEO_URL',
          date:'',
          thumbnail: '',
        }],
        VIDEO_URL: 'https://www.scorebat.com/embed/matchview/',
        BASE_IMG: 'https://www.scorebat.com/og/m/?token=MTMzMjkxXzE3MDE1ODE0MDlfMjRjMjgwMDkwYjUyODA3M2UzMGVjN2E0MmM4MTM1MDkwYWM3YjQyOA==',
      }
    },
    async created() {
      this.Soccers = await ServiceSoccer.getSoccers()
    }
  
  }
  </script>