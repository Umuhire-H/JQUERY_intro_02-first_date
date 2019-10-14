var form1 = $('<form ></form>');
var firstname = $('<label>Prénom</label><input type="text" id="firstname">');
var lastname = $('<label>Nom</label><input type="text" id="lastname">');
var phone = $('<label>Téléphone</label><input type="tel" id="phone">');
var email = $('<label>Email</label><input type="email" id="email">');
var btn = $('<input type="submit" id="btn">');

$('body').append(firstname);