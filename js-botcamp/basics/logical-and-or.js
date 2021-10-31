let temp = 65
if(temp >=60 && temp<=90)
{
    console.log('It is pretty nice out')
}
if(temp <=0 || temp >=120)
{
    console.log('Do not go outside')
}
let GuestOneVegan = true
let GuestTwoVegan = false
if(GuestOneVegan && GuestTwoVegan )
{
    console.log('Offer up Vegan Dishes')
}
else if(GuestOneVegan  || GuestTwoVegan )
{
    console.log('make sure to offer up some vegan options')
}
else
{
    console.log('Offer anything on the menu')
}