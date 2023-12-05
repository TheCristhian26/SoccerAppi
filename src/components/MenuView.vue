<template>
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>LeaguesRVFAKENDI </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-menu-toggle>
          <ion-button> Premier League </ion-button>
          <br>
          <ion-button> serie A </ion-button>
          <br>
          <ion-button> La League </ion-button>
          <br>
          <ion-button> BundesLeague </ion-button>
          <br>
          <ion-button> League One </ion-button>
        </ion-menu-toggle>
      </ion-content>
    </ion-menu>
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>The best soccer training</ion-title>
        </ion-toolbar>
        
      </ion-header>
      <ion-content class="ion-padding">
        <ion-menu-toggle>
          <ion-button>see leagues</ion-button>
        </ion-menu-toggle>
        <card-soocer/>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
    import { IonButton, IonContent, IonHeader, IonMenu, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import CardSoocer from './CardSoocer.vue';
    import ServiceSoccer from '@/Services/ServiceSoccer';
    export default defineComponent({
      components: {
        IonButton,
        IonContent,
        IonHeader,
        IonMenu,
        IonMenuToggle,
        IonPage,
        IonTitle,
        IonToolbar,
        CardSoocer
      },
    });
  </script>