// declaration
var valeur = 'test';
var obj = {
  appelSync: function () {
    return 'reponse synchrone';
  },
  appelAsync: function () {
    return new Promise(function (resolve, reject) {
      if (valeur === 'test') {
        reject('Cas d erreur');
      }
      resolve('cas de Succes')
    });
  },
}
// appel
obj.appelAsync().then(console.log).catch(console.error)

