// Code your solutions in this file
function writeCards(names, eventCeleb){
    const msgs = [];
    for (let i =0; i < names.length; i++){
        msgs.push(`Thank you, ${names[i]}, for the wonderful ${eventCeleb} gift!`)
    }
    return msgs
}

function countDown(num){

    let i = 0;

    while (i<num+1){
        console.log(i)
        i++;
    }

}

countDown(3)