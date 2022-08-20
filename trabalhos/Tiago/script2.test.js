const emails = require('./emails.json');
const obscureEmail = require('./script2.js')
test('Esconder dados do usuário', ()=>{
    for( item of emails ){
        expect(obscureEmail(item.email)).toBe(obscureEmail(item.email));
    }
}) 