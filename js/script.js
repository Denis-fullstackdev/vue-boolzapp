console.log('JS OK');

const app = new Vue(
    {
        el: '#app',

        methods: {

            enterChat(selectedProfile) {
                this.selectedContact = selectedProfile;
            },

            convertTimeHHMM(takeTime) {
                const separateDate = takeTime.split(" ");
                const separateHour = separateDate[1].split(":");
                const convertedTime = separateHour[0] + ":" + separateHour[1];
                return convertedTime;
            },

            getTime() {
                const time = new Date();

                const year = this.fixTimeFormat(time.getFullYear());
                const month = this.fixTimeFormat(time.getMonth() + 1);
                const day = this.fixTimeFormat(time.getDay());
                const hour = this.fixTimeFormat(time.getHours());
                const minute = this.fixTimeFormat(time.getMinutes());
                const second = this.fixTimeFormat(time.getSeconds());

                return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
            },

            fixTimeFormat(timeToFix) {
                return timeToFix < 10 ? '0' + timeToFix : '' + timeToFix;
            },

            addToChat() {
                const imputMessageTrimmed = this.inputChatMessage.trim();

                if (imputMessageTrimmed.length > 0) {

                    this.contacts[this.selectedContact].messages.push(
                        {
                            date: this.getTime(),
                            message: this.inputChatMessage,
                            status: "sent"
                        }
                    );
                    this.inputChatMessage = '';

                    setTimeout(() => {
                        this.contacts[this.selectedContact].messages.push(
                            {
                                date: this.getTime(),
                                message: 'OK',
                                status: "received"
                            }
                        );
                    }, 1000
                    );

                }
            },

            showFilteredList() {
                this.contacts.forEach((contactElement, index) => {
                    contactElement.visible = contactElement.name.toUpperCase().indexOf(this.filterContactList.toUpperCase()) > - 1;
                })
            },

            openContextMenu(singleMessage) {
                if (this.messageToDelete === singleMessage) { this.messageToDelete = -1 }
                else { this.messageToDelete = singleMessage; }
            },

            deleteChatMessage(index) {
                this.contacts[this.selectedContact].messages[index].status = 'removed';
                this.messageToDelete = -1;
            }

        },

        data: {

            messageToDelete: -1,

            filterContactList: "",

            inputChatMessage: "",

            selectedContact: 3,

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    }
);