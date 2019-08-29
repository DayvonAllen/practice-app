import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  slang = [
    {
      "id": "1",
      "word": "basic",
      "base": "基礎、基本",
      "translation": "ふつ〜、退屈でイケていない、あまり頭が良くない",
      "exampleSentence": "What do you think about him?",
      "exampleSentence2": "I don't like him, he was too basic for me to waste time on.",
      "sentenceTranslation": "彼の事、どう思う？",
      "sentenceTranslation2": "嫌い、イケてなさ過ぎるんだよね。奴に関わってる暇はないわ。",
      "level": "3"
    },
    {
      "id": "2",
      "word": "thirsty",
      "base": "のどが渇いた",
      "translation": "物凄く欲しがる、切望する、飢えている、必死な",
      "exampleSentence": "I can't believe that she called me 30 times in one hour.",
      "exampleSentence2": "She's so thirsty.",
      "sentenceTranslation": "あの女、１時間に３０回も電話かけてきたんだぜ。信じらんねー。",
      "sentenceTranslation2": "彼女、めちゃ必死だね。",
      "level": "2"
    },
    {
      "id": "3",
      "word": "salty",
      "base": "塩っぱい",
      "translation": "イライラする、ムカつくの意味でオンラインゲームで負けてキレている人をからかう時などによく使われます",
      "exampleSentence": "John's getting destroyed in super smash bros right now",
      "exampleSentence2": "I know, I bet he's going to get salty and leave soon.",
      "sentenceTranslation": "ジョンはスーパースマッシュブラザーズで今ボロ負けし出してるぜ。",
      "sentenceTranslation2": "そうだね。そのうちキレて退出するな。",
      "level": "2"
    },
    {
      "id": "4",
      "word": "triggered",
      "base": "引き金、銃のトリガー",
      "translation": "腹が立つ、怒りの引き金を引かれる",
      "exampleSentence": "Why is Dave yelling at those people?",
      "exampleSentence2": "He got triggered by their conversation",
      "sentenceTranslation": "デーブはなんであの人達に怒鳴ってるの？",
      "sentenceTranslation2": "彼らの会話に腹が立ったみたいだよ。",
      "level": "2"
    },
    {
      "id": "5",
      "word": "broke",
      "base": "breakの過去形",
      "translation": "お金がない",
      "exampleSentence": "I really want to take my girlfriend to the movies, but I’m so broke right now.",
      "exampleSentence2": " You’re always broke.",
      "sentenceTranslation": "彼女を本当に映画に連れて行きたいんだけど、今超金欠なんだよね。",
      "sentenceTranslation2": "あんたいつもお金ないじゃん。",
      "level": "2"
    },
    {
      "id": "6",
      "word": "garbage",
      "base": "生ゴミ",
      "translation": "ゴミくずみたいな低クオリティという意味で悪口で使われます",
      "exampleSentence": "We beat them so easily.",
      "exampleSentence2": "I know. They are so garbage",
      "sentenceTranslation": "本当に楽勝だったぜ。",
      "sentenceTranslation2": "そうだね。やつらクソ弱かったもんな。",
      "level": "4"
    },
    {
      "id": "7",
      "word": "trash",
      "base": "ゴミ、クズ",
      "translation": "破壊する",
      "exampleSentence": "What happened?",
      "exampleSentence2": "Someone broke in and trashed my apartment.",
      "sentenceTranslation": "なにが起こったの？",
      "sentenceTranslation2": "誰かに押し入りされて、俺のアパートがめちゃくちゃにされたんだ。",
      "level": "2"
    },
    {
      "id": "8",
      "word": "cool",
      "base": "涼しい",
      "translation": "かっこいい、すごい",
      "exampleSentence": "I like that guy, he's really cool.",
      "exampleSentence2": "I definitely agree.",
      "sentenceTranslation": "私、あの人好き。彼すごくかっこいい。",
      "sentenceTranslation2": "大賛成。",
      "level": "2"
    },
    {
      "id": "9",
      "word": "nuke it",
      "base": "核爆弾、核兵器、原子力",
      "translation": "レンジでチンする",
      "exampleSentence": "My mom made dinner but it's a little cold, so you should probably nuke it.",
      "exampleSentence2": "Got it!",
      "sentenceTranslation": "お母さんが夕食作ってくれたけど、ちょっと冷たいからレンチンしたほうがいいよ。",
      "sentenceTranslation2": "わかった！",
      "level": "1"
    },
    {
      "id": "10",
      "word": "heartbreaker",
      "base": "heartbreak＝失恋して傷心",
      "translation": "heartbreakerは相手を傷心させる人、魅力的なつれない人、無情な人",
      "exampleSentence": "I broke up with my boyfriend and he started to cry. I feel so bad about it.",
      "exampleSentence2": "Don't feel bad. You're a heartbreaker.",
      "sentenceTranslation": "彼と別れたんだけど、彼泣き出しちゃったんだよね。すごいかわいそうになっちゃった。",
      "sentenceTranslation2": "気にしなくていいよ。あなたは罪作りな女じゃない。",
      "level": "1"
  
    },
    {
      "id": "11",
      "word": "ditzy",
      "base": "頭が変な、頭が弱い",
      "translation": "金髪のどこか抜けているバカっぽい女",
      "exampleSentence": "I can't believe that she got such an easy question wrong.",
      "exampleSentence2": "She's the definition of ditzy.",
      "sentenceTranslation": "あんな簡単な問題を間違えるなんて、あの女信じらんね。",
      "sentenceTranslation2": "バカ女って彼女みたいなのをいうんだな。",
      "level": "3"
    },
    {
      "id": "12",
      "word": "broad",
      "base": "(幅が）広い",
      "translation": "女、あま　女性を軽蔑視した言葉なので言われたら、怒り出す女性もいますので、注意しましょう",
      "exampleSentence": "Look at those two broads over there. They're super hot.",
      "exampleSentence2": "I wonder if they are single?",
      "sentenceTranslation": "あそこにいる２人連れの女見ろよ。すげえセクシー！",
      "sentenceTranslation2": "彼氏いんのかなー。",
      "level": "3"
    },
    {
      "id": "13",
      "word": "ASAP",
      "base": "as soon as possibleの略語",
      "translation": "出来るだけ早く、大至急　インターネット上にも良く使われています",
      "exampleSentence": "You didn't turn in your homework.",
      "exampleSentence2": "I'll turn it in ASAP.",
      "sentenceTranslation": "お前、まだ宿題出してないじゃないか。",
      "sentenceTranslation2": "なる早で提出します！",
      "level": "1"
    },
    {
      "id": "14",
      "word": "dense",
      "base": "濃い、ぎっしり詰まった",
      "translation": "頭が鈍い、まぬけ",
      "exampleSentence": "Wow, you really are dense.",
      "exampleSentence2": "That's so mean.",
      "sentenceTranslation": "わーお前本当頭悪りぃな。",
      "sentenceTranslation2": "意地悪！",
      "level": "4"
    },
    {
      "id": "15",
      "word": "homie",
      "base": "家庭を意味するhomeが語源",
      "translation": "仲間、相棒、気の知れた友達、不良仲間　黒人の間で良く使われます",
      "exampleSentence": "This is my homie Dave.",
      "exampleSentence2": "How long have you guys known each other?",
      "sentenceTranslation": "こいつが俺のダチのデーブだよ。",
      "sentenceTranslation2": "知り合ってどれくらいなの？",
      "level": "1"
    },
    {
      "id": "16",
      "word": "vacay",
      "base": "vacationの短縮形",
      "translation": "休暇、休み　若い女の子が使います",
      "exampleSentence": "I'm going on a vacay in Tokyo this summer.",
      "exampleSentence2": "I hope you have fun.",
      "sentenceTranslation": "今年の夏のバケーションは東京に行く予定なの。",
      "sentenceTranslation2": "楽しんでね！",
      "level": "1"
    },
    {
      "id": "17",
      "word": "savage",
      "base": "激しい、どう猛な",
      "translation": "かっこいい、すごい　ワイルドなイメージなアスリートに良く使われています",
      "exampleSentence": "That play was savage.",
      "exampleSentence2": "I know, it was really cool.",
      "sentenceTranslation": "あのプレイはやばかった！",
      "sentenceTranslation2": "ほんと、めちゃカッコよかった。",
      "level": "1"
    },
    {
      "id": "18",
      "word": "burner",
      "base": "バーナー、火口",
      "translation": "銃",
      "exampleSentence": "I got the burner on me.",
      "exampleSentence2": "You better not get caught with it.",
      "sentenceTranslation": "銃を手に入れたぜ。",
      "sentenceTranslation2": "捕まらないようにした方がいいよ。",
      "level": "5"
    },
    {
      "id": "19",
      "word": "what's up",
      "base": "what is up の短縮形",
      "translation": "何かあった？最近どう？といった意味ですが、オス！といった感じでwhat's upとそのまま返す場合もあります",
      "exampleSentence": "What's up with you?",
      "exampleSentence2": "Nothing much, what about you?",
      "sentenceTranslation": "最近なんかあった？",
      "sentenceTranslation2": "別に何もないよ。お前は？",
      "level": "1"
    },
    {
      "id": "20",
      "word": "savvy",
      "base": "知る、分かる",
      "translation": "理解した、詳しい",
      "exampleSentence": "I don't know how to use my new phone.",
      "exampleSentence2": "My friend can help you, he's very tech savvy.",
      "sentenceTranslation": "新しい携帯の使い方がわからないのよね。",
      "sentenceTranslation2": "俺の友達が助けてあげるよ。彼はとてもハイテクに精通してるんだ。",
      "level": "1"
    },
    {
      "id": "21",
      "word": "stacks",
      "translation": "積み重ねた山",
      "base": "1000ドル　黒人のラッパーの間で良く使われているスラングです",
      "exampleSentence": "I got 10 stacks on me.",
      "exampleSentence2": "I guess that means that dinner's on you.",
      "sentenceTranslation": "俺10000ドル持ってるぜ。",
      "sentenceTranslation2": "じゃ、夕飯はお前のおごりだな。",
      "level": "1"
    },
    {
      "id": "22",
      "word": "racks",
      "base": "棚、ラック",
      "translation": "1000ドル　stacksと全く同じスラングで、これもラッパーが良く使っています",
      "exampleSentence": "I got paid 5 racks for that job.",
      "exampleSentence2": "That's a lot of money.",
      "sentenceTranslation": "あの仕事で5000ドル入ったぜ。",
      "sentenceTranslation2": "そりゃ大金だな。",
      "level": "1"
    },
    {
      "id": "23",
      "word": "RIP",
      "base": "rest in peaceの略",
      "translation": "安らかに眠れ、日本語のご冥福をお祈りしますに近い言葉",
      "exampleSentence": "I can't believe that he's gone.",
      "exampleSentence2": "I know, RIP.",
      "sentenceTranslation": "ヤツが逝っちまったなんて信じられねえよ。",
      "sentenceTranslation2": "ほんとだよ。安らかに眠ってくれ。",
      "level": "2"
    },
    {
      "id": "24",
      "word": "sick",
      "base": "病気",
      "translation": "かっこいい、やべー　coolと同じような感じで使われます",
      "exampleSentence": "That's a sick shirt.",
      "exampleSentence2": "Thanks man.",
      "sentenceTranslation": "そのシャツやべーかっこいいな。",
      "sentenceTranslation2": "サンキュー。",
      "level": "1"
    },
    {
      "id": "25",
      "word": "receipts",
      "base": "領収書、レシート",
      "translation": "証拠、証明",
      "exampleSentence": "I didn't cheat on you.",
      "exampleSentence2": "I got all of the receipts to prove it.",
      "sentenceTranslation": "俺は浮気なんかしてないぞ。",
      "sentenceTranslation2": "証明する証拠、全部揃ってるんだから！",
      "level": "1"
    },
    {
      "id": "26",
      "word": "big mad",
      "base": "大きな怒り",
      "translation": "激怒、超腹が立つ",
      "exampleSentence": "He's big mad that I beat him in basketball",
      "exampleSentence2": "He's always mad about something.",
      "sentenceTranslation": "あいつ、俺にバスケ負けて激怒してるぜ。",
      "sentenceTranslation2": "あいつはいつも何かに腹立ててるな。",
      "level": "2"
    },
    {
      "id": "27",
      "word": "flex",
      "base": "（筋肉を）ほぐす、曲げる",
      "translation": "見せびらかす、自慢する",
      "exampleSentence": "You don't have to flex around us.",
      "exampleSentence2": "I know but buying expensive stuff is a habit now.",
      "sentenceTranslation": "お前、俺らに見せつけてんじゃねえよ。",
      "sentenceTranslation2": "わかってるけど、高い物買うのが趣味なんだよ。",
      "level": "1"
    },
    {
      "id": "28",
      "word": "on fleek",
      "base": "",
      "translation":"完璧、バッチリ　主に女子の間で、化粧や服など褒めるときに使います",
      "exampleSentence": "Her nails are on fleek.",
      "exampleSentence2": "I bet she paid a lot of money for them.",
      "sentenceTranslation": "彼女のネイル、超決まってるわよね。",
      "sentenceTranslation2": "沢山お金かけたに違いないわ。",
      "level": "1"
    },
    {
      "id": "29",
      "word": "TBH",
      "base": "to be honestの略語",
      "translation": "正直に言って、ぶっちゃけ　テキストメッセージやSNSで良く使われます",
      "exampleSentence": "TBH I don't feel like talking right now.",
      "exampleSentence2":  "OK, We can talk later.",
      "sentenceTranslation": "正直、今あんま話したくないんだけど。",
      "sentenceTranslation2": "わかった。また後で話そう。",
      "level": "1"
    },
    {
      "id": "30",
      "word": "clock",
      "base": "時計",
      "translation": "ぶつける、殴る",
      "exampleSentence": "He clocked that guy",
      "exampleSentence2":  "Yeah, it looked like it hurt.",
      "sentenceTranslation": "あいつ、あの男を殴ったぞ。",
      "sentenceTranslation2": "うん、痛そー。",
      "level": "3"
    },
    {
      "id": "31",
      "word": "dying",
      "base": "死にかけている",
      "translation": "めちゃくちゃ、死ぬほど",
      "exampleSentence": "Did you see that new comedy show?",
      "exampleSentence2":  "Yeah, I was dying laughing the whole time.",
      "sentenceTranslation": "あの新しいコメディショー見たかよ",
      "sentenceTranslation2": "ああ、俺ずっと死ぬほど笑ってたぜ。",
      "level": "1"
    },
    {
      "id": "32",
      "word": "OMG",
      "base": "Oh My God,Oh My Gosh,Oh My Goodness の略語",
      "translation": "オーマイガー！シチュエーションは色々ですが、とりあずびっくりした時に使います",
      "exampleSentence": "OMG, he really broke up with her?",
      "exampleSentence2":  "Yeah, I still can't believe it.",
      "sentenceTranslation": "うそっ！彼ホントに彼女と別れたの？",
      "sentenceTranslation2": "そうなんだって。マジ信じらんないよねー。",
      "level": "2"
    },
    {
      "id": "33",
      "word": "bae",
      "base": "baby,babeの短縮語",
      "translation": "ベイビー、愛しい人　彼氏、彼女や夫、妻の間で言い合ったりもします",
      "exampleSentence": "I'm going to the buy my bae a diamond ring.",
      "exampleSentence2":  "She's lucky to have someone like you.",
      "sentenceTranslation": "彼女にダイヤモンドの指輪を買うつもりなんだ。",
      "sentenceTranslation2": "お前みたいな奴を捕まえて、彼女本当にラッキーだよな。",
      "level": "1"
    },
    {
      "id": "34",
      "word": "extra",
      "base": "余分な、必要以上の、追加の",
      "translation": "やり過ぎ、過剰な",
      "exampleSentence": "John is being so extra right now.",
      "exampleSentence2":  "I know, why does he always have to act like that?",
      "sentenceTranslation": "ジョン、今やり過ぎだよな。",
      "sentenceTranslation2": "うん、なんでアイツいつもあんなんなんだろうな。",
      "level": "3"
    },
    {
      "id": "35",
      "word": "GOAT",
      "base": "Greatest of All Timeの略",
      "translation": "至上最高の",
      "exampleSentence": "I can't believe that Tom Brady won six super bowls.",
      "exampleSentence2":  "He's the GOAT.",
      "sentenceTranslation": "トム・ブレイディはスーパーボウルで６回も優勝したなんて信じらんね〜。",
      "sentenceTranslation2": "彼は至上最高！",
      "level": "1"
    },
  ]
  constructor() { }

  showData(){
    return this.slang;
  }
  showWord(id){
    return  { ...this.slang.find(word => {
      return id === word.id
    })}
  }
}
