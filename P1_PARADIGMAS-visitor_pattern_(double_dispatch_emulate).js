function Empregado(nome, salario)
{
  this.nome = nome
  this.salario = salario
}
 
Empregado.prototype = {
  getSalario: function()
  {
    return this.salario
  },
  setSalario: function(sal)
  {
    this.salario = sal
  },
  accept: function(visitorFunction)
  {
    visitorFunction(this)
  }
}
const Santiago = new Empregado("Santiago", 10000)
console.log(Santiago.getSalario())
 
function ExtraSalario(emp)
{
  emp.setSalario(emp.getSalario() * 2)
}
 
Santiago.accept(ExtraSalario)
console.log(Santiago.getSalario())