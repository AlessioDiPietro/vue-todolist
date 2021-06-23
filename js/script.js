// Descrizione: Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

const app = new Vue ({

    el : "#app",
    
    data: {
        newToDo: "",
        toDoList: [
            "Bere una pozione che ti fa rimpicciolire",
            "Mangiare una torta che ti fa ingrandire",
            "parlare con gli animali",
            "Vedere i gatti che evaporano",
            "Esplorare il Paese delle Meraviglie",
            "Uccidere il Ciciarampa!"
        ]
    },
    methods: {
        rimuovi(indice){
            this.toDoList.splice(indice,1);
        },
        aggiungi(){
            this.toDoList.push(this.newToDo);
            this.newToDo = "";
        }
    }



});