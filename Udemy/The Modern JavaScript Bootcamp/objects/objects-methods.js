let resturant = {
    name: 'Gad',
    geustCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.geustCapacity - this.guestCount
        return partySize<=seatsLeft

    },
    seatParty: function(partySize){
        if (partySize <=this.geustCapacity ) {
        this.geustCount = this.Count + partySize
        
        }
    },
    removeParty: function(partySize){
        this.geustCount = this.geustCount - partySize
        

    }
}
//seatsParty
//removeParty
resturant.seatParty(72)
console.log(resturant.checkAvailability(4))
resturant.removeParty(5)
console.log(resturant.checkAvailability(4))
