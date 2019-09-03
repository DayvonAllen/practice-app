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
      "sentenceTranslation2": "好きじゃないな。イケてなさ過ぎるんだよね。奴に関わってる暇はないわ。",
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
      "sentenceTranslation2": "うん、そのうちキレて退出するな。",
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
      "sentenceTranslation2": "だな。やつらクソ弱かったもんな。",
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
    {
      "id": "36",
      "word": "keep it 100",
      "base": "直訳すると、100を保つ",
      "translation": "100％正直でいる　keep it realと同じ意味になります",
      "exampleSentence": "I've always kept it 100 with you.",
      "exampleSentence2":  "I know, thanks for that.",
      "sentenceTranslation": "俺はいつもお前に100%リアルでいるぜ。",
      "sentenceTranslation2": "わかってるって。ありがとな。",
      "level": "1"
    },
    {
      "id": "37",
      "word": "lit",
      "base": "light の過去形",
      "translation": "酔う、ハイになる、すごく楽しい",
      "exampleSentence": "Did you go to that party last night?",
      "exampleSentence2":  "Yeah, it was lit.",
      "sentenceTranslation": "昨日の夜のパーティーいった？",
      "sentenceTranslation2": "うん、めちゃ楽しかったよ！",
      "level": "1"
    },
    {
      "id": "38",
      "word": "lowkey",
      "base": "控えめな、地味な、目立たない",
      "translation": "ちょっと",
      "exampleSentence": "I'm lowkey hungry right now.",
      "exampleSentence2":  "Let's go eat.",
      "sentenceTranslation": "ちょっとお腹すいてきた。",
      "sentenceTranslation2": "なんか食べよ！",
      "level": "1"
    },
    {
      "id": "39",
      "word": "chipper",
      "base": "　元気な、快活な",
      "translation": "元気な、ご機嫌な",
      "exampleSentence": "You sure are chipper today.",
      "exampleSentence2":  "It's because I just got engaged today.",
      "sentenceTranslation": "今日、ご機嫌じゃん。",
      "sentenceTranslation2": "なぜって今日婚約したとこなんだ。",
      "level": "1"
    },
    {
      "id": "40",
      "word": "thot",
      "base": "",
      "translation": "ビッチ、嫌な女、あばずれ",
      "exampleSentence": "You better stop talking to her. I heard that she's a thot.",
      "exampleSentence2":  "Thanks for telling me.",
      "sentenceTranslation": "あの女と話さない方がいいぜ。アイツくそ女ってきいたぜ。",
      "sentenceTranslation2": "教えてくれてありがと。",
      "level": "5"
    },
    {
      "id": "41",
      "word": "cool minute",
      "base": "",
      "translation": "長い間",
      "exampleSentence": "I haven't been here in a cool minute.",
      "exampleSentence2":  "Same here, I used to come here all the time when I was a kid.",
      "sentenceTranslation": "長い事、ここに来てなかったなあ。",
      "sentenceTranslation2": "俺もだよ。子供の頃は、いつもここに来てたんだよなあ。",
      "level": "1"
    },
    {
      "id": "42",
      "word": "stan",
      "base": "スタン（男の名）",
      "translation": "熱狂的なファン　エミネムの曲、Stanから広まった言葉です",
      "exampleSentence": "She is such a Brad Pitt stan",
      "exampleSentence2":  "I know, he is a God to her.",
      "sentenceTranslation": "彼女、本当ブラピの熱狂的なファンだよ。",
      "sentenceTranslation2": "知ってる、彼女にとってブラピは神だよ。",
      "level": "2"
    },
    {
      "id": "43",
      "word": "turnt up",
      "base": "turned up",
      "translation": "パーティやイベントで盛り上がる、バイブスが上がる、ガチあげ",
      "exampleSentence": "This party is turnt up.",
      "exampleSentence2":  "I'm glad we decided to come.",
      "sentenceTranslation": "このパーティ、盛り上がってる〜。",
      "sentenceTranslation2": "来て良かった〜。",
      "level": "1"
    },
    {
      "id": "44",
      "word": "turnt down",
      "base": "turn down 下げる",
      "translation": "つまらない、面白くない",
      "exampleSentence": "Why are you so turnt down?",
      "exampleSentence2":  "I just don't like events like this.",
      "sentenceTranslation": "なんでそんなつまんなそうなの？",
      "sentenceTranslation2": "こういうイベント好きじゃないだけ。",
      "level": "1"
    },
    {
      "id": "45",
      "word": "busted",
      "base": "逮捕される、壊れた",
      "translation": "醜い、ブサイク",
      "exampleSentence": "She's so busted.",
      "exampleSentence2":  "I know, I wonder how she got a boyfriend?",
      "sentenceTranslation": "彼女相当ブスだな。",
      "sentenceTranslation2": "だよな。どうやって彼氏作ったんだろうな。",
      "level": "3"
    },
    {
      "id": "46",
      "word": "ride",
      "base": "乗る",
      "translation": "車",
      "exampleSentence": "That's a sweet ride.",
      "exampleSentence2":  "Thanks, it was my dream car.",
      "sentenceTranslation": "かっこいい車じゃん！",
      "sentenceTranslation2": "ありがと。この車手に入れるの、俺の夢だったんだ",
      "level": "1"
    },
    {
      "id": "47",
      "word": "wallflower",
      "base": "壁の花",
      "translation": "パーティーなどで、ダンスせずに一人でぽつんとしている人",
      "exampleSentence": "I hate seeing wallflowers at parties.",
      "exampleSentence2":  "I wonder why they even come?",
      "sentenceTranslation": "パーティーでダンスしない奴ら見るの、俺嫌なんだよな。",
      "sentenceTranslation2": "そもそも何で来てるのかな。",
      "level": "1"
    },
    {
      "id": "48",
      "word": "on point",
      "base": "",
      "translation": "とても良い、ばっちり",
      "exampleSentence": "This soup is on point",
      "exampleSentence2":  "I like it too.",
      "sentenceTranslation": "このスープすっげえ美味い。",
      "sentenceTranslation2": "私も好き。",
      "level": "1"
    },
    {
      "id": "49",
      "word": "spit game at",
      "base": "",
      "translation": "女の子に言い寄る、ナンパする（黒人男性の間でよく使われます）",
      "exampleSentence": "Go spit game at that girl over there.",
      "exampleSentence2":  "OK, I'll be right back with her phone number.",
      "sentenceTranslation": "あの女に声かけろよ。",
      "sentenceTranslation2": "オッケ。電話番号ゲットしてすぐ戻ってくるぜ。",
      "level": "1"
    },
    {
      "id": "50",
      "word": "tripping",
      "base": "旅行する、つまずく",
      "translation": "何でも無い事に怒る、オーバー反応、クレイジーな行動",
      "exampleSentence": "My mom is always tripping.",
      "exampleSentence2":  "My mom is the same way too.",
      "sentenceTranslation": "俺の母さん、何でもかんでも怒ってばかりいんだよ。",
      "sentenceTranslation2": "ウチの母ちゃんもだぜ。",
      "level": "2"
    },
    {
      "id": "51",
      "word": "BRB",
      "base": "Be Right Backの略語",
      "translation": "すぐ戻って来る（SNS、テキストメッセージなどで使用されます）",
      "exampleSentence": "I have to go do something, BRB.",
      "exampleSentence2":  "OK.",
      "sentenceTranslation": "用があるから行かなきゃ。すぐ戻って来るよ。",
      "sentenceTranslation2": "了解。",
      "level": "1"
    },
    {
      "id": "52",
      "word": "spot me",
      "base": "",
      "translation": "借りる",
      "exampleSentence": "Can you spot me $20?",
      "exampleSentence2":  "I don't have it right now.",
      "sentenceTranslation": "20ドル貸してくれよ。",
      "sentenceTranslation2": "今持ってねーよ。",
      "level": "2"
    },
    {
      "id": "53",
      "word": "airhead",
      "base": "頭の中が空っぽ",
      "translation": "馬鹿者",
      "exampleSentence": "That girl is such an airhead.",
      "exampleSentence2":  "You shouldn't say such mean things about people.",
      "sentenceTranslation": "あの子、ほんとバカだな。",
      "sentenceTranslation2": "人のことそんなひどく言うもんじゃ無いよ。。",
      "level": "4"
    },
    {
      "id": "54",
      "word": "NVM",
      "base": "NeVer（Never) Mindの略",
      "translation": "気にするな",
      "exampleSentence": "Are you still looking for a computer?",
      "exampleSentence2":  "NVM, I don't need it anymore.",
      "sentenceTranslation": "まだコンピューター探してるの？",
      "sentenceTranslation2": "気にしないで。もういらないの。",
      "level": "1"
    },
    {
      "id": "55",
      "word": "GTG",
      "base": "Got To Go",
      "translation": "行かなくちゃ！（SNS,テキストメッセージなどで使用されます）",
      "exampleSentence": "GTG, my mom is calling me.",
      "exampleSentence2":  "Alright, see you tomorrow.",
      "sentenceTranslation": "もう行くね！お母さんが呼んでるの。",
      "sentenceTranslation2": "わかったわ。また明日ね。",
      "level": "1"
    },
    {
      "id": "56",
      "word": "bucks",
      "base": "雄鹿",
      "translation": "ドル",
      "exampleSentence": "I have 100 bucks left over from the trip.",
      "exampleSentence2":  "Cool, maybe we can go to the mall and spend it.",
      "sentenceTranslation": "旅行行って、100ドル残ってるよ。",
      "sentenceTranslation2": "ナイス、モール行ってその金使おうぜ。",
      "level": "1"
    },
    {
      "id": "57",
      "word": "baby daddy",
      "base": "",
      "translation": "実の父（離婚や子供が出来ても籍を入れない事が多いアメリカでは頻繁に使われます）",
      "exampleSentence": "Who's that guy that just left your apartment?",
      "exampleSentence2":  "That's my baby daddy.",
      "sentenceTranslation": "今、アパートから出て行った男の人、誰？",
      "sentenceTranslation2": "俺の実の親父。",
      "level": "1"
    },
    {
      "id": "58",
      "word": "baby mama",
      "base": "",
      "translation": "産みのお母さん（ちなみに継母はstepmother,継父はstepfather",
      "exampleSentence": "I can't stand my baby mama, she's so annoying.",
      "exampleSentence2":  "Mine is the same.",
      "sentenceTranslation": "産みのお母さんに耐えられない。超ウザイんだよね。",
      "sentenceTranslation2": "私んとこの実母もだよ。",
      "level": "1"
    },
    {
      "id": "59",
      "word": "ride shotgun",
      "base": "",
      "translation": "助手席に乗る",
      "exampleSentence": "Can I ride shotgun?",
      "exampleSentence2":  "Sure.",
      "sentenceTranslation": "助手席座っていい？",
      "sentenceTranslation2": "いいよ。",
      "level": "1"
    },
    {
      "id": "60",
      "word": "sicko",
      "base": "",
      "translation": "病的なヤツ、変人、狂人",
      "exampleSentence": "Look at that sicko eating raw meat.",
      "exampleSentence2":  "That's so disgusting.",
      "sentenceTranslation": "あのド変人見ろよ。生肉食ってるぜ。",
      "sentenceTranslation2": "超キモい。",
      "level": "1"
    },
    {
      "id": "61",
      "word": "take a piss",
      "base": "",
      "translation": "しょんべんする（おしっこするの下品な言い方。男の人が使います）",
      "exampleSentence": "Where's the bathroom, I really have to take a piss.",
      "exampleSentence2":  "I think it's over there.",
      "sentenceTranslation": "便所どこだよ。マジしょんべん漏れそうだぜ。",
      "sentenceTranslation2": "あっちだと思うよ。",
      "level": "3"
    },
    {
      "id": "62",
      "word": "raggedy",
      "base": "",
      "translation": "ぼろぼろの、みすぼらしい",
      "exampleSentence": "Why are all your friends so raggedy?",
      "exampleSentence2":  "Don't be rude.",
      "sentenceTranslation": "何であんたの友達全員あんな汚らしいの？",
      "sentenceTranslation2": "失礼な事言うなよ。",
      "level": "3"
    },
    {
      "id": "63",
      "word": "np",
      "base": "No Problem の略",
      "translation": "問題ない、どういたしまして（SNS,テキストメッセージなどで使用）",
      "exampleSentence": "Thanks for helping me.",
      "exampleSentence2":  "np",
      "sentenceTranslation": "手伝ってくれてありがとね。",
      "sentenceTranslation2": "どいたま。",
      "level": "1"
    },
    {
      "id": "64",
      "word": "legit",
      "base": "legimate 合法の、まっとうな、正当な",
      "translation": "ホンモノ、ガチモン、すごい、素晴らしい",
      "exampleSentence": "This hamburger is legit.",
      "exampleSentence2":  "I agree.",
      "sentenceTranslation": "このハンバーガーバリうま。",
      "sentenceTranslation2": "同感！",
      "level": "1"
    },
    {
      "id": "65",
      "word": "whip",
      "base": "むちで打つ",
      "translation": "車",
      "exampleSentence": "Whose whip is that?",
      "exampleSentence2":  "It's mine.",
      "sentenceTranslation": "あれ誰の車だよ？",
      "sentenceTranslation2": "俺の。",
      "level": "1"
    },
    {
      "id": "66",
      "word": "blasted",
      "base": "blast 突風、爆発",
      "translation": "がっつり入れ墨の入った、全身にタトゥーが入った",
      "exampleSentence": "That guy is blasted.",
      "exampleSentence2":  "His tattoos look really cool.",
      "sentenceTranslation": "あの人、すんごいタトゥー入ってるな。",
      "sentenceTranslation2": "超かっこいいタトゥーじゃん。",
      "level": "1"
    },
    {
      "id": "67",
      "word": "goner",
      "base": "",
      "translation": "死者、見込みのない",
      "exampleSentence": "If my mom sees my grades, I'm a goner.",
      "exampleSentence2":  "I'd be scared too if I were you.",
      "sentenceTranslation": "もしお母さんにこの成績見られたら、殺される。",
      "sentenceTranslation2": "もし私があなただったら、恐ろしいわ。",
      "level": "1"
    },
    {
      "id": "68",
      "word": "good looking out",
      "base": "good looking はルックスの良い、ハンサムな、美人なと言う意味",
      "translation": "ありがとう、感謝",
      "exampleSentence": "I took out the trash for you.",
      "exampleSentence2":  "Good looking out.",
      "sentenceTranslation": "ゴミ捨てといてあげたよ。",
      "sentenceTranslation2": "ありがと！",
      "level": "1"
    },
    {
      "id":"69",
      "word": "scram",
      "base": "原子炉の緊急停止",
      "translation": "どこか行け、うせろ、出てけ",
      "exampleSentence": "Why are you trespassing on my property? Scram!",
      "exampleSentence2":  "Sorry, I'll leave.",
      "sentenceTranslation": "何でお前、俺の私有地に不法侵入してるんだ？出てけよ！",
      "sentenceTranslation2": "すみません。出てくよ。",
      "level": "3"
    },
    {
      "id": "70",
      "word": "hobo",
      "base": "アメリカで19世紀後半から20世紀初頭の不景気時代に、仕事を求めて渡り歩いた貧しい労働者",
      "translation": "浮浪者、ルンペン、ホームレス",
      "exampleSentence": "If you don't start taking life seriously, you'll become a hobo.",
      "exampleSentence2":  "You're right, I will.",
      "sentenceTranslation": "人生を真剣に考えて行かないと、流れ者になっちまうぞ。",
      "sentenceTranslation2": "お前の言う通りだ。真剣に考えるよ。",
      "level": "1"
    },
    {
      "id": "71",
      "word": "beat it",
      "base": "beat 打つ、打ち負かす",
      "translation": "逃げろ、どこか行け",
      "exampleSentence": "Beat it!",
      "exampleSentence2":  "No, I'm not going anywhere.",
      "sentenceTranslation": "逃げろ！",
      "sentenceTranslation2": "いや、俺はどこにも行かないね。",
      "level": "3"
    },
    {
      "id": "72",
      "word": "gold digger",
      "base": "金採掘者",
      "translation": "金目当ての女",
      "exampleSentence": "I can't believe how many girls want to date me now that I'm rich.",
      "exampleSentence2":  "I bet that they are all gold diggers.",
      "sentenceTranslation": "リッチになった今、何人の女が俺とデートしたがってることか。信じられないよ。",
      "sentenceTranslation2": "奴ら、みんな金目当てだろうよ。",
      "level": "1"
    },
    {
      "id": "73",
      "word": "brat",
      "base": "",
      "translation": "（手に負えない、しつけのなってない）ガキ、子ども、ちび",
      "exampleSentence": "My little brother hid my backpack again.",
      "exampleSentence2":  "He's such a brat.",
      "sentenceTranslation": "弟がまた俺のリュック隠したんだよ。",
      "sentenceTranslation2": "あいつほんと悪ガキ。 ",
      "level": "3"
    },
    {
      "id": "74",
      "word": "dirty cop",
      "base": "汚い警察",
      "translation": "汚職警察、裏金を受け取っている警察、権力を利用して法律に違反する警察",
      "exampleSentence": "There are plenty of dirty cops that take bribes from criminals.",
      "exampleSentence2":  "That's a dishonorable thing for a cop to do.",
      "sentenceTranslation": "犯罪者から、賄賂受け取っている腐ったポリ公がうじゃうじゃいるぜ。",
      "sentenceTranslation2": "警官として恥ずべき事をしているわね。",
      "level": "4"
    },
    {
      "id": "75",
      "word": "pig",
      "base": "豚",
      "translation": "警察、サツ、ポリ、ポリ公",
      "exampleSentence": "I heard that the pigs are out today.",
      "exampleSentence2":  "I seen some earlier when I was driving home.",
      "sentenceTranslation": "今日はサツがウロついてるらしいぜ。",
      "sentenceTranslation2": "今朝家まで運転してる時、いくらか見かけたよ。",
      "level": "1"
    },
    {
      "id": "76",
      "word": "pig out",
      "base": "",
      "translation": "どか食い、ガツ食い",
      "exampleSentence": "I haven't eaten all day, I'm about to pig out.",
      "exampleSentence2":  "Don't eat too much or else you're going to get fat.",
      "sentenceTranslation": "今日なんも食べてないんだ、ガッツリ食ってやるぞ。",
      "sentenceTranslation2": "食べ過ぎんなよ、さもないとデブるぞ。",
      "level": "1"
    },
    {
      "id": "77",
      "word": "sell-out",
      "base": "売り切る",
      "translation": "裏切り者、金や人気目的にモラルを無視した行動を取る",
      "exampleSentence": "I can't believe that anyone still watches that guy, he's such a sell out.",
      "exampleSentence2":  "Same here, I used to like watching his show.",
      "sentenceTranslation": "まだみんなあいつのテレビ見てるなんて、信じられない。あんな卑怯者。",
      "sentenceTranslation2": "私もそう思う。昔は彼の番組見てたけど。",
      "level": "1"
    },
    {
      "id": "78",
      "word": "hook up",
      "base": "ホックで留める、つなぐ",
      "translation": "セックスする",
      "exampleSentence": "Did you hook up with Jennifer last night?",
      "exampleSentence2":  "No, we just went to see a movie.",
      "sentenceTranslation": "昨日の夜、ジェニファーとやったのかよ？",
      "sentenceTranslation2": "いや、映画見に行っただけ。",
      "level": "3"
    },
    {
      "id": "79",
      "word": "make out",
      "base": "作り上げる、うまくやる",
      "translation": "激しくキスをする（ちなみに make love はセックス）",
      "exampleSentence": "My mom caught me making out with my girlfriend in my room last night.",
      "exampleSentence2":  "Did she get mad at you?",
      "sentenceTranslation": "昨日の夜、俺の部屋で彼女とディープキスしてんの母ちゃんに見られちまったよ。",
      "sentenceTranslation2": "お母さん怒ってた？",
      "level": "2"
    },
    {
      "id": "80",
      "word": "piss off",
      "base": "",
      "translation": "キレる、ムカつく、カンカンに怒らせる",
      "exampleSentence": "You're really starting to piss me off.",
      "exampleSentence2":  "I don't if you are mad.",
      "sentenceTranslation": "お前マジで俺をキレさせにかかってんぜ。",
      "sentenceTranslation2": "僕はキレないよ。君が怒っても。",
      "level": "3"
    },
    {
      "id": "81",
      "word": "douchebag",
      "base": "女性のノズル付き膣洗浄器の洗浄液を入れる容器",
      "translation": "嫌な男、本当にムカつく男",
      "exampleSentence": "James wouldn't give me a ride home because I didn't want to hook up with him",
      "exampleSentence2":  "He's such a douchebag.",
      "sentenceTranslation": "ジェームスが車乗せてってくれるわけないって。私あいつとやらなかったもん。",
      "sentenceTranslation2": "あいつマジサイテー。",
      "level": "5"
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
