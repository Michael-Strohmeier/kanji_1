let kanjiTable = [['一', '一', 'one', 'いち'], ['下', '一', 'below', 'した'], ['上', '一', 'up', 'うえ'], ['七', '一', 'seven', 'なな'], ['三', '一', 'three', 'さん'], ['中', '丨', 'middle', 'ちゅう'], ['九', '乙', 'nine', 'きゅう'], ['二', '二', 'two', 'に'], ['五', '二', 'five', 'ご'], ['人', '人', 'person', 'ひと'], ['休', '人', 'rest', 'やす'], ['先', '儿', 'previous', 'せん'], ['入', '入', 'enter', 'い'], ['八', '八', 'eight', 'はち'], ['六', '八', 'six', 'ろく'], ['出', '凵', 'exit', 'で'], ['力', '力', 'power', 'ちから'], ['千', '十', 'thousand', 'せん'], ['十', '十', 'ten', 'じゅう'], ['右', '口', 'right (direction)', 'みぎ'], ['名', '口', 'name', 'な'], ['口', '口', 'mouth', 'くち'], ['円', '囗', 'round; yen', 'えん'], ['四', '囗', 'four', 'よん'], ['土', '土', 'soil', 'つち'], ['夕', '夕', 'evening', 'ゆう'], ['大', '大', 'large', 'おお'], ['天', '大', 'heaven', 'てん'], ['女', '女', 'woman', 'おんな'], ['字', '子', 'letter', 'じ'], ['子', '子', 'child', 'こ'], ['学', '子', 'study', 'がく'], ['小', '小', 'small', 'しよう'], ['山', '山', 'mountain', 'やま'], ['川', '巛', 'river', 'かわ'], ['左', '工', 'left (direction)', 'ひだり'], ['年', '干', 'year', 'とし'], ['手', '手', 'hand', 'て'], ['文', '文', 'writing', 'ぶん'], ['日', '日', 'day', 'にち'], ['早', '日', 'early', 'はや'], ['月', '月', 'month', 'つき'], ['本', '木', 'book', 'ほん'], ['村', '木', 'village', 'むら'], ['森', '木', 'forest', 'もり'], ['木', '木', 'tree', 'き'], ['林', '木', 'woods', 'はやし'], ['校', '木', 'school', 'こう'], ['正', '止', 'correct', 'せい'], ['気', '气', 'feeling', 'き'], ['水', '水', 'water', 'みず'], ['火', '火', 'fire', 'ひ'], ['犬', '犬', 'dog', 'いぬ'], ['玉', '玉', 'ball', 'たま'], ['王', '玉', 'king', 'おう'], ['生', '生', 'life', 'せい'], ['男', '田', 'male', 'おとこ'], ['町', '田', 'town', 'まち'], ['田', '田', 'rice paddy', 'た'], ['百', '白', 'hundred', 'ひゃく'], ['白', '白', 'white', 'しろ'], ['目', '目', 'eye', 'め'], ['石', '石', 'stone', 'いし'], ['空', '穴', 'sky', 'そら'], ['立', '立', 'stand up', 'たつ'], ['竹', '竹', 'bamboo', 'たけ'], ['糸', '糸', 'thread', 'いと'], ['耳', '耳', 'ear', 'みみ'], ['花', '艸', 'flower', 'はな'], ['草', '艸', 'grass', 'くさ'], ['虫', '虫', 'insect', 'むし'], ['見', '見', 'see', 'み'], ['貝', '貝', 'shellfish', 'かい'], ['赤', '赤', 'red', 'あか'], ['足', '足', 'foot', 'あし'], ['車', '車', 'car', 'くるま'], ['金', '金', 'gold', 'きん'], ['雨', '雨', 'rain', 'あめ'], ['青', '靑', 'blue', 'あお'], ['音', '音', 'sound', 'おと']];

var img;
let img_urls = ['https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif',
 'https://media.giphy.com/media/hcBF3UzP6wcG6cfAFx/giphy-downsized.gif',
 'https://media.giphy.com/media/3o7TKHVU0xsgGDCyPu/giphy.gif',
 'https://media.giphy.com/media/l0ExiSoCkhCfSm94k/giphy.gif',
 'https://media.giphy.com/media/l0EwYkyU1JCExVquc/giphy.gif',
 'https://media.giphy.com/media/HmosMaexDR4DVmEC3b/giphy.gif',
 'https://media.giphy.com/media/26gsjCWitFy3euTeM/giphy.gif',
 'https://media.giphy.com/media/26gsqQxPQXHBiBEUU/giphy.gif',
 'https://media.giphy.com/media/l0ExvMqtnw7aTzPCE/giphy.gif',
 'https://media.giphy.com/media/dz3mBUhzVQts3y2BG3/giphy.gif',
 'https://media.giphy.com/media/RIBCm631deYjxmhMnC/giphy.gif',
 'https://media.giphy.com/media/xULW8sA1lMRYtucMIU/giphy.gif',
 'https://media.giphy.com/media/eXg8Ij7JgnyDu/giphy-downsized.gif',
 'https://media.giphy.com/media/26gsasKHkeH0VP8d2/giphy.gif',
 'https://media.giphy.com/media/l0Ex9pftnvPgw0nPa/giphy.gif',
 'https://media.giphy.com/media/l1J9D0t6AfjUfC6Vq/giphy-downsized.gif',
 'https://media.giphy.com/media/D7z8JfNANqahW/giphy.gif',
 'https://media.giphy.com/media/1yN6EAyr1STwYZqlIj/giphy.gif',
 'https://media.giphy.com/media/1ylep2sQb2HSwxLY9z/giphy.gif',
 'https://media.giphy.com/media/iJQ7azCayrSVaEsuL1/giphy.gif',
 'https://media.giphy.com/media/9PqOegBqgBnMHvERV3/giphy.gif',
 'https://media.giphy.com/media/3oz8xTH1CTDenuxmE0/giphy.gif',
 'https://media.giphy.com/media/xT1R9N7Zl42wCalgPK/giphy.gif',
 'https://media.giphy.com/media/d1E1szXDsHUs3WvK/giphy.gif',
 'https://media.giphy.com/media/jVFgWDtkY5v2M/giphy-downsized.gif',
 'https://media.giphy.com/media/l0HU7Cs5D0Gbo7G3S/giphy.gif',
 'https://media.giphy.com/media/j3POomBxMU6ZCFlMyr/giphy.gif',
 'https://media.giphy.com/media/hqNj8nQ2M7ot6WFYdi/giphy.gif',
 'https://media.giphy.com/media/VbDm4pTuIEQAviEBQX/giphy.gif',
 'https://media.giphy.com/media/l3vQZT84QqVUKUWE8/giphy.gif',
 'https://media.giphy.com/media/MalWoHV2tglme9FFcP/giphy.gif',
 'https://media.giphy.com/media/VIKOfvqJHcVDrdVivT/giphy.gif',
 'https://media.giphy.com/media/SSiM5xrzaIY6HwYegh/giphy.gif',
 'https://media.giphy.com/media/igtAsLNyBCoNc6VTkU/giphy.gif',
 'https://media.giphy.com/media/zuj3kcjbGj9qE/giphy.gif',
 'https://media.giphy.com/media/j2NCxLbKeAbWfaGzZf/giphy.gif',
 'https://media.giphy.com/media/v7pVugvJQTeuNwzVzz/giphy.gif',
 'https://media.giphy.com/media/l0Iy5sT49jQnO6Xv2/giphy.gif',
 'https://media.giphy.com/media/LoNQv53ySBrTJFRel7/giphy.gif',
 'https://media.giphy.com/media/jsfD7EcIe1AkHTQOqD/giphy.gif',
 'https://media.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy-downsized.gif',
 'https://media.giphy.com/media/H8mFOgIyWfFpWmJl9U/giphy.gif',
 'https://media.giphy.com/media/LYBMuRwH3JkhdmLbGE/giphy.gif',
 'https://media.giphy.com/media/3orifgldsOjXpQeUG4/giphy-downsized.gif',
 'https://media.giphy.com/media/xT9IgKLFbZyZYLKi1W/giphy-downsized.gif',
 'https://media.giphy.com/media/U4pVKsbLusWjos3jhN/giphy.gif',
 'https://media.giphy.com/media/eJe5lesepknKb4rrsR/giphy.gif',
 'https://media.giphy.com/media/LNVS7w1fxlCvu/giphy.gif',
 'https://media.giphy.com/media/9Ix2RHP3bXLneayNA3/giphy.gif',
 'https://media.giphy.com/media/qtxx0bJXSJ4sdBpQ4J/giphy.gif',
 'https://media.giphy.com/media/46hpy8xB3MiHfruixn/giphy-downsized.gif',
 'https://media.giphy.com/media/d3ML8uo39Q8jxwEE/giphy.gif',
 'https://media.giphy.com/media/H2fAFoVclDGt4rsskg/giphy.gif',
 'https://media.giphy.com/media/4Zs0CLPh5Jw0VXd6r5/giphy.gif',
 'https://media.giphy.com/media/eoN5fHRfV4sSI/giphy-downsized.gif',
 'https://media.giphy.com/media/LPrn5nvrGscSkrkjBT/giphy.gif',
 'https://media.giphy.com/media/QB4yAWUr8evtqUVQxy/giphy.gif',
 'https://media.giphy.com/media/ke4N0jWTM3l0uwiVZP/giphy.gif',
 'https://media.giphy.com/media/ky96FVJnYBdQpMpy5i/giphy-downsized.gif',
 'https://media.giphy.com/media/jRY9wvk15PQJZ4DdpC/giphy.gif',
 'https://media.giphy.com/media/kRy1lenQeBvA7pwspA/giphy.gif',
 'https://media.giphy.com/media/1etqSgz6RDE7TU7XQI/giphy.gif',
 'https://media.giphy.com/media/8UlnX1ChUuUmU1dr0E/giphy.gif',
 'https://media.giphy.com/media/PIh4laWJlz9bq/giphy.gif',
 'https://media.giphy.com/media/XHgbubVduWvFenB30a/giphy-downsized.gif',
 'https://media.giphy.com/media/RLHvg9N4Pp4uXaj37m/giphy.gif',
 'https://media.giphy.com/media/dwKXURvTPSJaQvRBQP/giphy.gif',
 'https://media.giphy.com/media/ZfVcP4XO8i8qlSriv3/giphy.gif',
 'https://media.giphy.com/media/2wgWvXFyK1zmMm8NTe/giphy.gif',
 'https://media.giphy.com/media/A5YU1X1wG3vdm/giphy.gif',
 'https://media.giphy.com/media/tcc8Z78VZSbHYLcAkG/giphy-downsized.gif',
 'https://media.giphy.com/media/cXQd3YcBZQ868tiG40/giphy.gif',
 'https://media.giphy.com/media/l4FGjjpumEDXgnVXG/giphy.gif',
 'https://media.giphy.com/media/fxePVgm33Ezseqmj5F/giphy.gif',
 'https://media.giphy.com/media/SYKl0mPbFdXYBrFBcG/giphy.gif',
 'https://media.giphy.com/media/fWwJqtqsHku4vNHIGQ/giphy.gif',
 'https://media.giphy.com/media/hUABECLfwGq5jgMyeE/giphy.gif',
 'https://media.giphy.com/media/Mgq7EMQUrhcvC/giphy-downsized.gif',
 'https://media.giphy.com/media/f3GHaOBcPztJp5lUFu/giphy.gif',
 'https://media.giphy.com/media/VJewakQt3ocZXSZ03F/giphy.gif'];

function preload() {
  img = createImg(img_urls[0], "img");
}

function mousePressed() {
  kanjiCard.update();
  img.attribute("src", img_urls[kanjiCard.getNumber()]);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  kanjiCard = new KanjiCard(windowWidth / 2, windowHeight / 2);
  
  img.attribute("src", img_urls[kanjiCard.getNumber()]);
  img.size(200, 200);
  img.position(windowWidth / 2 - 100 - 130, windowHeight / 2 - 100);
}

function draw() {
  background(240, 235, 220, 255);
  
  
  kanjiCard.draw();
}

class KanjiCard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    
    this.n = 0;
    
    this.textSize = 100;
    
    this.kanji = "";
    this.radical = "";
    this.meaning = "";
    this.hiragana = "";
    
    this.setup();
  }
  
  setup() {
    this.update();
  }
  
  update() {
    this.n = Math.floor(Math.random() * kanjiTable.length);
    
    this.kanji = kanjiTable[this.n][0];
    this.radical = kanjiTable[this.n][1];
    this.meaning = kanjiTable[this.n][2];
    this.hiragana = kanjiTable[this.n][3];
  }
  
  getNumber() {
    return this.n;
  }
  
  draw() {
    push();
    translate(130, 0);

    textAlign(CENTER, CENTER);
    
    textSize(this.textSize / 2.4);
    fill(221, 172, 82, 225);
    text(this.hiragana, this.x, this.y - this.textSize);
    
    textSize(this.textSize);
    fill(216, 77, 106);
    text(this.kanji, this.x, this.y);
    
    textSize(this.textSize / 2.4);
    fill(216, 77, 106, 225);
    text(this.meaning, this.x, this.y + this.textSize);
    
    pop();
  }
}
