let preco = Number(prompt('qual o preço?: '))
 let p_desconto = preco - (preco/100 * 10)
 let p_parcelas = preco/3
 
 alert('à vista com 10% de desconto: ' + p_desconto + 'R$.' + '  |  Parcelado em 3x: ' + p_parcelas + 'R$')