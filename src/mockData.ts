import { IAnimeInterface } from "./interface"
import { IHeaderInfo } from "./interface"

export const animeMockData: IAnimeInterface[] = [
  {
    name: "Steins;Gate",
    id: 0,
    link: "https://shikimori.me/uploads/poster/animes/9253/main-0f08548d9e862b381b9567acddd98548.webp",
    rating: { wordMark: "Awesome", value: 9.08, starCount: 4.2 },
    information: {
      type: "TV series",
      episodeAmount: 24,
      episodeDuration: 24,
      status: true,
      year: 2011,
      genre: ["Action", "Psychological", "Fantasy"],
    },
    shortDescription:
      "Steins;Gate is a Japanese anime television series created by the animation studio White Fox based on 5pb. and Nitroplus's 2009 visual novel of the same name. The series aired for 24 episodes, from April to September 2011. It is set in 2010 and follows Rintaro Okabe, who together with his friends accidentally discovers a method of time travel through which they can send text messages to the past, thereby changing the present.",
    longDescription:
      'Steins;Gate is an adaptation of the visual novel of the same name. It is set in 2010 in Akihabara, Tokyo, and follows Rintaro Okabe, a self-proclaimed "mad scientist", who runs the "Future Gadget Laboratory" in an apartment together with his friends Mayuri Shiina and Itaru "Daru" Hashida. While attending a conference about time travel, Okabe finds the dead body of Kurisu Makise, a neuroscience researcher; he sends a text message about it to Daru and later discovers that Kurisu is alive and that the message arrived before he sent it. The laboratory members learn that the cell phone-operated microwave oven they are developing can send text messages back in time; they are joined by Kurisu, and investigate it, sending text messages - referred to as "D-mails" - to the past to change the present. Kurisu eventually creates a device that can send memories through the microwave oven, effectively allowing the user to time travel.',
    author: "Naotaka Hayashi, Kenichi Kawamura",
    mainCharacters:
      'Rintaro Okabe, Kurisu Makise, Mayuri Shiina, Itaru "Daru" Hashida, Suzuha Amane',
    similarAnime: ["Link Click" && "Boku dake ga Inai Machi"],
    studio: "White Fox",
    country: "Japan",
  },

  {
    name: "Violet Evergarden",
    id: 1,
    link: "https://shikimori.me/uploads/poster/animes/33352/main-faadec0597ddf66d5df76ec7be30e3ff.webp",
    rating: { wordMark: "Good", value: 8.67, starCount: 4.0001 },
    information: {
      type: "TV series",
      episodeAmount: 13,
      episodeDuration: 24,
      status: true,
      year: 2018,
      genre: ["Drama" && "Fantasy"],
    },
    shortDescription:
      "The story follows Violet Evergarden, a young ex-soldier whose recent employment at a postal company tasks her with writing letters that can connect people.",
    longDescription:
      "Violet Evergarden, the child soldier turned Auto Memory Doll, writes letters that evoke the words her clients can't. But when a terminally ill boy requests her services for her family, her own feelings about love and loss resurface. Now she must confront her past and the death of the Major.",
    author: "Reiko Yoshida, Taichi Ishidate, Haruka Fujita",
    mainCharacters: "Violet Evergarden, Gilbert Bougainvillea",
    similarAnime: [
      "Vivy: Fluorite Eye's Song" &&
        "Mahoutsukai no Yome" &&
        "Sayonara no Asa ni Yakusoku no Hana wo Kazarou",
    ],
    studio: "Kyoto Animation",
    country: "Japan",
  },
  {
    name: "Jujutsu Kaisen",
    id: 2,
    link: "https://shikimori.me/uploads/poster/animes/40748/main-7c3867239fcb6eab3a3ca57a4cbaae20.webp",
    rating: { wordMark: "Good", value: 8.64, starCount: 4.002 },
    information: {
      type: "TV series",
      episodeAmount: 24,
      episodeDuration: 23,
      status: true,
      year: 2021,
      genre: ["Action" && "Fantasy" && "School" && "Shonen"],
    },

    shortDescription:
      "The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna",
    longDescription:
      "Jujutsu Kaisen is the story of Yuji Itadori, an easygoing high school student who joins the occult club at school. When they accidentally summon grotesque creatures by messing with a cursed object, Itadori fights to save his friends' lives.",
    author: "	Hiroshi Seko, Sunghoo Park",
    mainCharacters:
      "Yuji Itadori, Megumi Fushiguro, Nobara Kugisaki, Satoru Gojo",
    similarAnime: ["Chainsaw Man" && " Bleach" && "Noragami"],
    studio: "MAPPA",
    country: "Japan",
  },
  {
    name: "Shiguang Dailiren",
    id: 3,
    link: "https://shikimori.me/uploads/poster/animes/44074/main-932e83b48b13d3c699fd5daef526f72a.webp",
    rating: { wordMark: "Awesome", value: 8.74, starCount: 4.03 },
    information: {
      type: "ONA",
      episodeAmount: 11,
      episodeDuration: 23,
      status: true,
      year: 2021,
      genre: ["Drama" && "Supernatural"],
    },

    shortDescription:
      "Using superpowers to enter their clients' photos one by one, Cheng Xiaoshi and Lu Guang take their work seriously at Time Photo Studio, a small photography shop set in the backdrop of a modern metropolis. Each job can be full of danger, but nothing is more important than fulfilling every order, no matter the scale…or peril involved!",
    longDescription:
      "Cheng Xiaoshi and Lu Guang run Time Photo Studio and accept requests from clients to relieve them of regrets. Through a photo provided by the client, Cheng Xiaoshi can travel back in time to the moment it was taken and assumes the identity of its photographer, with him absorbing the photographer's memories and emotions in the process. At the same time, Lu Guang has the ability to keep track of the events in time and helps Cheng Xiaoshi relive the experiences of the photographer. The two work under the conditions that they have only 12 hours with one chance to travel in time and find what their client is searching for, while also leaving the events of the past unchanged.",
    author: "Li Haoling",
    mainCharacters: "Cheng Xiaoshi (程小时), Lu Guang (陆光), Qiao Ling (乔苓)",
    similarAnime: [""],
    studio: "Bilibili",
    country: "China",
  },
  {
    name: "Mo Dao Zu Shi",
    id: 4,
    link: "https://shikimori.me/uploads/poster/animes/37208/main-b86c13ac6b0a06f4d4b5d2a91f5508a4.webp",
    rating: { wordMark: "Awesome", value: 8.44, starCount: 4.001 },
    information: {
      type: "TV series",
      episodeAmount: 15,
      episodeDuration: 25,
      status: true,
      year: 2018,
      genre: [
        "Action" &&
          "Adventure" &&
          "Drama" &&
          "Detective" &&
          "Fantasy" &&
          "History",
      ],
    },

    shortDescription:
      "Thirteen years later, Wei Wuxian is reincarnated in the body of a lunatic and reunited with Lan Wangji, a former classmate of his. This marks the beginning of a supernatural mystery that plagues the clans and threatens to disrupt their everyday life.",
    longDescription:
      "Despite his efforts during the Sunshot Campaign to bring down the tyrannical Wen Clan, Wei Wuxian (魏无羡) was feared by the world for the unorthodox cultivation path he created. Thirteen years after he was killed, he is summoned into the body of a man called Mo Xuanyu (莫玄羽), who was rejected by his clan and despised by his family, therefore sacrificing his own body to Wei Wuxian so he would be avenged. It is in the Mo house where Wei Wuxian comes across a dismembered left arm causing death and havoc. His attempts to uncover the mystery of the left arm will guide him to a familiar face from the past with whom he will embark on a journey that will lead them to unravel what lies behind the tragic events that caused the deaths of so many - including Wei Wuxian himself.",
    author: "Liang Sha, Liu Xing, Zhu Ke, Xiong Ke, Ma Chendi",
    mainCharacters: "Wei Ying (魏婴), Lan Zhan (蓝湛) ",
    similarAnime: [
      "Tian Guan Ci Fu" && " Akatsuki no Yona" && "Chuan Shu Zijiu Zhinan",
    ],
    studio: "	Tencent Penguin Pictures, B.C May Pictures",
    country: "China",
  },
  {
    name: "Nezha Zhi Mo Tong Jiang Shi",
    id: 5,
    link: "https://shikimori.me/uploads/poster/animes/40111/main-286f17326a20815c8ad72492f6c3ce83.webp",
    rating: { wordMark: "Not bad", value: 7.58, starCount: 3.98 },
    information: {
      type: "Movie",
      episodeAmount: 1,
      episodeDuration: 170,
      status: true,
      year: 2019,
      genre: ["Action" && "Comedy" && "Drama" && "Fantasy"],
    },

    shortDescription:
      "With no way to remove the cursed effects of the Demon Orb, Ne Zha is raised under the belief that he will become the great demon hunter the Spirit Pearl destined for him to be. ",
    longDescription:
      "A Chaos Pearl, birthed from primordial essences, begins siphoning energies gluttonously. Yuanshi Tianzun dispatches his disciples Taiyi Zhenren and Shen Gongbao to subdue the sentient pearl. Due to its ability to absorb energy, Taiyi and Shen are unable to gain the upper hand. Eventually Tianzun separates the pearl into two opposite components: the Spirit Pearl and the Demon Orb. Tianzun places a heavenly curse upon the Demon Orb: in three years time it will be destroyed by a powerful lightning strike. Tianzun then instructs Taiyi to take the Spirit Pearl to be reincarnated as the third son of Li Jing in the town of Chentangguan, to be named Ne Zha.",
    author: "Yi Qiao, Wei Yunyun, Wei Yunyun, Liu Wenzhang",
    mainCharacters: "Nezha, Ao Bing",
    similarAnime: [
      "Bai She: Yuan Qi" && "Xiyou Ji: Dasheng Guilai" && "Jiang Ziya",
    ],
    studio: "",
    country: "China",
  },
]
export const headerInfoMockData: IHeaderInfo = {
  siteName: "Kanban",
  language: "lang",
  buttonName: "Anime",
  darkMode: false,
}
