const data ={
    locations:[],
  get location(){
    return 'This is a test'
  },
  set location(value){ 
    this._location = value.trim()
    this.locations.push(this._location)
  }
}
data.location='           Philadelphia        '
data.location= ' New York  '
console.log(data)