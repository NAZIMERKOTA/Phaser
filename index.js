import gameData from "./data.js";
import Level from "./level.js";

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

// Değişkenlerimi bütün fonksiyonlarda kullanabilmek için burda tanımladım
const position =[];  
const matrix = gameData.matrix;
// Bizim girdiğimiz kelimeyi harflerine ayırdım
const word = gameData.firstWord.split("");
let game = new Phaser.Game(config);
function preload()
 {
    this.load.image("tile", "assets/tile.png");
    this.load.image("bg", "assets/bg.jpg");
    //oyun açıldığında çalışması için Find() fonksiyonunu burda çağırıyorum
    Find();

}

function create() 
{
    new Level(this);
    
}

// Burda 2 adet Find() fonksiyonu bulunmakta 1. olanı ilk yazdım çalışıyor ama bir kaç hatası var kelimenin sadece son harfini bile bulsa
// onu listeden çıkarıyordu. Bende o yüzden aşağıda Find() fonksiyonunu tekrardan daha doğru şekilde çalışması için baştan yazdım

 /*function Find() 
{
  for(let a = 0 ; a<gameData.matrix.length;a++)
  {
    matrix[a] = matrix[a].split("");
  }
  
  for (let i = 0; i < matrix.length; i++)
  {
    for (let j = 0; j < matrix[i].length; j++) 
    {
      for (let k=0; k < word.length;k++)
      {
        if (matrix[i][j] == word[k])
        {
            if (j < matrix[i].length-1 && (matrix[i][j+1] == word[k+1] || matrix[i][j+1] == word[k-1]))
            {
              position.push({ i: i , j: j }); 
            }
            else if (j>0 && (matrix[i][j-1] == word[k+1] || matrix[i][j-1] == word[k-1]))
            {
              position.push({ i: i , j: j });
            } 
            else if (i>0 && (matrix[i-1][j] == word[k+1] || matrix[i-1][j] == word[k-1]))
            {
              position.push({ i: i , j: j });
            }
            else if (i < matrix.length-1 && (matrix[i+1][j] == word[k+1] || matrix[i+1][j] == word[k-1]))
            {
              position.push({ i: i , j: j });
            }
        }

        if( i === matrix.length-1 && j == matrix.length-1)
        {
            founded();
        }
      }
    }
  }
}*/


function Find() 
{
  //İlk başta bütün kelimeleri harflerine ayırdım
  for(let a = 0 ; a<gameData.matrix.length;a++)
  {
    matrix[a] = matrix[a].split("");
  }
  
  //Tek tek matrixin bütün hücrelerini dolaşıyorum
  
  for (let i = 0; i < matrix.length; i++)
  {
    for (let j = 0; j < matrix[i].length; j++) 
    {
      if (matrix[i][j] == word[0])//Herhangi bir hücrede Kelimenin ilk harfini bulursam if'in içine giriyorum
      {
        //Burada teker teker o hücrenin bütün komşularını kontrol ettiriyorum eğer komşulardan biri bizim kelimemizin 2. harfi ile aynıysa if'in içine girip 
        //firstFounded fonksiyonunu çalıştıyor o fonksiyonlarda da aynı şeyi yapıyor kelimenin 5. harfine kadar sürekli komşularını kontrol edip devam ediyor
          if (j < matrix[i].length-1 && matrix[i][j+1] == word[1] )
          {
            position.push({ i: i , j: j }); 
            firstFounded(i,j);
          }
          else if (j>0 && matrix[i][j-1] == word[1] )
          {
            position.push({ i: i , j: j });
            firstFounded(i,j);
          } 
          else if (i>0 && matrix[i-1][j] == word[1])
          {
            position.push({ i: i , j: j });
            firstFounded(i,j);
          }
          else if (i < matrix.length-1 && matrix[i+1][j] == word[1] )
          {
            position.push({ i: i , j: j });
            firstFounded(i,j);
          }
      }
    }
  }
}

function firstFounded(i,j)
{ 
  
    if (j < matrix[i].length-1 && matrix[i][j+1] == word[1] )
    {
      position.push({ i: i , j: j+1 }); 
      secondFounded(i,j+1);
    }
    else if (j>0 && matrix[i][j-1] == word[1] )
    {
      position.push({ i: i , j: j-1 });
      secondFounded(i,j-1);
    } 
    else if (i>0 && matrix[i-1][j] == word[1])
    {
      position.push({ i: i-1 , j: j });
      secondFounded(i-1,j);
    }
    else if (i < matrix.length-1 && matrix[i+1][j] == word[1] )
    {
      position.push({ i: i+1 , j: j });
      secondFounded(i+1,j);
    }
    
}

function secondFounded(i,j)
{
  if (j < matrix[i].length-1 && matrix[i][j+1] == word[2] )
  {
    position.push({ i: i , j: j+1 }); 
    thirdFounded(i,j+1);
  }
  else if (j>0 && matrix[i][j-1] == word[2] )
  {
    position.push({ i: i , j: j-1 });
    thirdFounded(i,j-1);
  } 
  else if (i>0 && matrix[i-1][j] == word[2])
  {
    position.push({ i: i-1 , j: j });
    thirdFounded(i-1,j);
  }
  else if (i < matrix.length-1 && matrix[i+1][j] == word[2] )
  {
    position.push({ i: i+1 , j: j });
    thirdFounded(i+1,j);
  }

  if(word.length==2)
  {
    founded();
  }

}

function thirdFounded(i,j)
{
  if (j < matrix[i].length-1 && matrix[i][j+1] == word[3] )
  {
    position.push({ i: i , j: j+1 }); 
    fourthFounded(i,j+1);
  }
  else if (j>0 && matrix[i][j-1] == word[3] )
  {
    position.push({ i: i , j: j-1 });
    fourthFounded(i,j-1);
  } 
  else if (i>0 && matrix[i-1][j] == word[3])
  {
    position.push({ i: i-1 , j: j });
    fourthFounded(i-1,j);
  }
  else if (i < matrix.length-1 && matrix[i+1][j] == word[3] )
  {
    position.push({ i: i+1 , j: j });
    fourthFounded(i+1,j);
  }

  if(word.length==3)
  {
    founded();
  }
}

function fourthFounded(i,j)
{
  
  if (j < matrix[i].length-1 && matrix[i][j+1] == word[4] )
  {
    position.push({ i: i , j: j+1 }); 
    founded();
  }
  else if (j>0 && matrix[i][j-1] == word[4] )
  {
    position.push({ i: i , j: j-1 });
    founded();
  } 
  else if (i>0 && matrix[i-1][j] == word[4])
  {
    position.push({ i: i-1 , j: j });
    founded();
  }
  else if (i < matrix.length-1 && matrix[i+1][j] == word[4] )
  {
    position.push({ i: i+1 , j: j });
    founded();
  }

  if(word.length==4)
  {
    founded();
  }
}

//founded fonksiyonu 5 veya 5ten küçük olup bulunan kelimelerin hücrelerini boşaltıyor

function founded()
{
    for (let i = 0; i < position.length; i++)
    {
      let pos = position[i];
      matrix[pos.i][pos.j] = " ";

      if(i == position.length-1)
      {
        getNewData();
      }
    }

    

}

function getNewData() 
{
  for (let i = 0; i < matrix.length; i++)
  {
    for (let j = 0; j < matrix[i].length; j++) 
    {
  
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//Bütün alfabeyi tanıttıktan sonra split komutu ile bunu tek tek ayırıyorum
    let letterIndex = letters.split("");
  

    for (let i = 0; i < matrix.length; i++)
    {
      for (let j = 0; j < matrix[i].length; j++)
      {
        letterIndex.splice(letterIndex.indexOf(matrix[i][j]), 1);//Bizim hücrelerimizde bulunan harfleri bularak letterIndex dizisinden o harfleri çıkartır
      }
    }

    let randomIndex = Math.floor(Math.random() * letterIndex.length);
    let randomLetter = letterIndex[randomIndex];
    if (matrix[i][j] == " ")
    {
      matrix[i][j] = randomLetter;//random harfler seçerek bulduğu boş hücrelere o harfleri yerleştirir
    }
    if( i === matrix.length-1 && j == matrix.length-1)
    {
      sortFunction();
    }
     
    }
  }
  
}

function sortFunction()
{
  let flattened = matrix.flat();//matrix'in alt dizilerini düzleştirip tek bir dizi haline getiriyorum ve flattened değişkeninin içine atıyorum
  flattened.sort();//alfabetik sıraya göre sıralıyorum
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = flattened.shift();//sıralanmış harfleri teker teker hücrelere geri yazıyorum
    }
  }
}
  
  
  
  
  

