(function(){

  function isValidMinAge(birthDate, minAge) {
    if (!(birthDate && minAge)) return false;
    if (!(birthDate instanceof Date)) return false;
    if (!(typeof minAge === 'number' || minAge instanceof Number)) return false;
    var tmpDate = new Date(birthDate.getFullYear() + minAge, birthDate.getMonth(), birthDate.getDate()).setMonth(birthDate.getMonth() - 1);
    return (tmpDate <= new Date());
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isValidMinAge;
  } else {
    window.isValidMinAge = isValidMinAge;
  }

})();
