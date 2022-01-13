class Personagem extends Animacao{
  
    constructor(matriz,imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    
    super(matriz,imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
      
      this.variacaoY = variacaoY;
      this.yBase = height - this.altura - this.variacaoY;
      this.y = this.yBase;
      
      this.velocidadeDoPulo = 0;
      this.gravidade = 5;
      this.contaPulo = 0;
  
  }
  
 
  
  pula(){
    
    if(this.contaPulo < 3){
      this.velocidadeDoPulo = - 30;
      this.contaPulo = this.contaPulo ++;
    }
    
    if(this.y == this.yBase){
       this.contaPulo = 0;
       }
  }

  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yBase){
      this.y = this.yBase;
    }
  
  }
  
  estaColidindo(inimigo){
    noFill()
    rect(this.x, this.y, this.altura, this.largura);
    rect(inimigo.x,inimigo.y,inimigo.altura,inimigo.largura);
    
    const precisao = '.7';
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.altura * precisao,
      inimigo.largura * precisao
      );
    
    return colisao;
  }
}