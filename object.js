let user = {
    name: 'Anakin',
    lastname: 'Skywalker'
};

//alterando a propriedade de um objeto
user.name = 'Darth Vader';
console.log(user);
user['real name'] = 'Anakin Skywalker';
console.log('Nome:',user);

//recupera as chaves de um objeto
console.log('propriedades do objeto user:', Object.keys(user));

//recupera os valores das chaves do objeto
console.log('valores do objeto user:', Object.values(user));

//merging de propriedades de objetos
Object.assign(user, {lightsabercolor:'red'});

console.log('Adiciona a propriedade lightsabercolor no ojeto user:',user);
console.log('Retona um novo objeto com merging de dois ou mais objetos', Object.assign({}, user, {order: 'Sith'}));

//previne alterações
const newObjt = { foo: 'bar'};
Object.freeze(newObjt);

//permite alterações de apenas propriedades existentes, não deleta e nem cria novas propriedades, apenas altera
const person = { name: 'Yoda' };
Object.seal(person);

person.name = 'Master Yoda';
delete person.name;
person.age = 900;

console.log('person após alterações:',person);
