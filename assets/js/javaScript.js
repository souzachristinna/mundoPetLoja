
        function myFunction() { 
            var d = new Date();

            var n = d.getDate();        //pega o dia do mês
            var s = d.getDay() +1;      //pega o dia da semana
            var mes = d.getMonth() +1;  //pega o mês
            var ano = d.getFullYear();  //pega o ano

            switch (s) {
                case 0:
                  sn = 'Domingo';
                  break;
                case 1: 
                    sn = 'Segunda-Feira';
                    break;
                case 2:
                    sn = 'Terça-Feira';
                    break;
                case 4:
                    sn = 'Quarta-Feira';
                    break;
                case 5:
                    sn = 'Quinta-Feira';
                    break;
                case 6:
                    sn = 'Sexta-Feira';
                    break;
                case 7:
                    sn = 'Sábado';
                    break;
              }
            document.getElementById("demo1").innerHTML = 'Hoje é ' + sn +'.';
            document.getElementById("demo2").innerHTML = n.toString() + '/' + mes.toString() + '/' + ano.toString() + '.';
            
        }
    
        function myFunction1() {
            var x = Math.floor((Math.random() * 20000) + 1);
            document.getElementById("soma").innerHTML = x;
          }


        function clicar() {
            var qtde = document.getElementById('soma').textContent;
            conta = parseInt(qtde) + 1;
            document.getElementById('soma').innerHTML = conta;
            
            console.log(conta);    
        }