export class TransactionHat {

    // get previous date in YYYY-MM-DD
    get transactionDateTime() {
        const date = new Date()
        const previous = new Date(date.getTime());
        previous.setDate(date.getDate() - 1)
        var transactionDateTime = previous.toISOString().slice(0,10);    
        return transactionDateTime 
        
    }

    // get random store number
    get storeNumber(){
        var store
        return store = Math.floor(1000 + Math.random() * 9000);   
    }

    // get random registration number
    get registerNumber(){
        var register
        return register = Math.floor(1000 + Math.random() * 9000);
    }

    //get random transaction id 
    get transactionNumber() {
        var transaction
        return transaction = Math.floor(1000 + Math.random() * 9000);
    }




    

      


    
    
}