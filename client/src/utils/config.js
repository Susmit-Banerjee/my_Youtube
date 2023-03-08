export const OFFSET_LIVE_CHAT = 50;

const API_KEY = "AIzaSyC5EszJGoV5NOVEnQnqvV2CZaBU-nMNWKI";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=" + API_KEY+"&regionCode=";

  export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const VIDEO_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+API_KEY+"&id=";


export const SUGGESTIONS_API = "https://youtube-v3-alternative.p.rapidapi.com/related?id=";






// ? ******************************** COMMENTS DATA *********************************************
/**
 * ? **** How comment data looks like?  ****
 */
export const commentsData = [
  {
    name: "Susmit Banerjee",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore dicta eveniet ratione. Eveniet, non? Quod odio corrupti quidem aliquid fugiat.",
    likes: "1.6k",
    replies: [],
  },
  {
    name: "Susmit Banerjee",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus laboriosam error?",
    likes: "626",
    replies: [
      {
        name: "Susmit Banerjee",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor debitis iure, sint consequuntur, fuga minima nisi beatae animi quos ad omnis fugiat ducimus eligendi.",
        likes: "66",
        replies: [],
      },
      {
        name: "Susmit Banerjee",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
        likes: "150",
        replies: [
          {
            name: "Susmit Banerjee",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
            likes: "100",
            replies: [],
          },
          {
            name: "Susmit Banerjee",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
            likes: "650",
            replies: [
              {
                name: "Susmit Banerjee",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
                likes: "40",
                replies: [],
              },
              {
                name: "Susmit Banerjee",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
                likes: "10",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Susmit Banerjee",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
        likes: "80",
        replies: [
          {
            name: "Susmit Banerjee",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
            likes: "10",
            replies: [],
          },
          {
            name: "Susmit Banerjee",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
            likes: "12",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Susmit Banerjee",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem libero praesentium. Recusandae, ipsum blanditiis? Saepe ipsum magnam sapiente expedita alias voluptatum esse hic laudantium! Rerum adipisci, fugit fugiat labore consequuntur nihil praesentium architecto illo dolores doloremque ad ex omnis! Vel ratione cumque ducimus aut ut enim esse alias blanditiis, autem, dolorem adipisci, ad possimus asperiores atque delectus. Aperiam vel maiores libero nostrum rem quis eaque expedita voluptate numquam ducimus illo, reprehenderit quo et iusto ut optio laborum molestias corporis, obcaecati quasi ullam voluptates magni doloremque. Error, repellat sapiente placeat expedita maiores, tempore dolore molestias beatae culpa dicta asperiores aspernatur!",
    likes: "66",
    replies: [
      {
        name: "Susmit Banerjee",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
        likes: "20",
        replies: [],
      },
      {
        name: "Susmit Banerjee",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
        likes: "10",
        replies: [],
      },
      {
        name: "Susmit Banerjee",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
        likes: "34",
        replies: [
          {
            name: "Susmit Banerjee",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
            likes: "12",
            replies: [],
          },
          {
            name: "Susmit Banerjee",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
            likes: "10",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Susmit Banerjee",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit natus similique illo, ab ipsam sint, itaque sit soluta sed cumque possimus assumenda. Itaque nemo, iusto doloremque exercitationem non eum, ullam laborum perferendis commodi est praesentium.",
    likes: "3.2k",
    replies: [
      {
        name: "Susmit Banerjee",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea earum magnam cumque cupiditate est aliquid sequi nemo incidunt, libero veritatis facilis perspiciatis! Ea earum saepe vel non eum ipsum temporibus!",
        likes: "50",
        replies: [],
      },
      {
        name: "Susmit Banerjee",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere facilis vitae illo, rerum voluptatum reprehenderit iste! Voluptatem repellat delectus laboriosam repellendus optio iusto a, ipsum excepturi.",
        likes: "720",
        replies: [
          {
            name: "Susmit Banerjee",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id culpa corporis ab nobis asperiores obcaecati quasi, enim libero veritatis sapiente unde ullam placeat repellendus aperiam quod perspiciatis iusto porro provident aliquid voluptatum.",
            likes: "224",
            replies: [
              {
                name: "Susmit Banerjee",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id culpa corporis ab nobis asperiores obcaecati quasi, enim libero veritatis sapiente unde ullam placeat repellendus aperiam quod perspiciatis iusto porro provident aliquid voluptatum.",
                likes: "180",
                replies: [],
              },
              {
                name: "Susmit Banerjee",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id culpa corporis ab nobis asperiores obcaecati quasi, enim libero veritatis sapiente unde ullam placeat repellendus aperiam quod perspiciatis iusto porro provident aliquid voluptatum.",
                likes: "126",
                replies: [
                  {
                    name: "Susmit Banerjee",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, sed. Corrupti deserunt expedita, molestias odit minus molestiae animi repudiandae, necessitatibus ipsa placeat, corporis cumque autem magnam eos rem quos excepturi inventore quae facilis hic aliquam ad! Cupiditate, necessitatibus saepe. Odit repellendus labore dolore, eligendi nemo mollitia rem ea sint delectus?",
                    likes: "40",
                    replies: [],
                  },
                  {
                    name: "Susmit Banerjee",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id culpa corporis ab nobis asperiores obcaecati quasi, enim libero veritatis sapiente unde ullam placeat repellendus aperiam quod perspiciatis iusto porro provident aliquid voluptatum.",
                    likes: "88",
                    replies: [
                      {
                        name: "Susmit Banerjee",
                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id culpa corporis ab nobis asperiores obcaecati quasi, enim libero veritatis sapiente unde ullam placeat repellendus aperiam quod perspiciatis iusto porro provident aliquid voluptatum.",
                        likes: "42",
                        replies: [],
                      },
                      {
                        name: "Susmit Banerjee",
                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
                        likes: "26",
                        replies: [],
                      },
                      {
                        name: "Susmit Banerjee",
                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
                        likes: "10",
                        replies: [],
                      },
                      {
                        name: "Susmit Banerjee",
                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
                        likes: "16",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Susmit Banerjee",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eos accusantium maiores id expedita dolore, optio sed, similique provident consequatur odit dolorem est, alias voluptatem odio! Consequatur quidem recusandae blanditiis eum iure. Ad facilis molestiae eius doloribus asperiores temporibus explicabo fugit eligendi consequatur vitae, nisi, cum non aliquid natus eum?",
    likes: "42",
    replies: [],
  },
  {
    name: "Susmit Banerjee",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
    likes: "38",
    replies: [],
  },
  {
    name: "Susmit Banerjee",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis provident illo, sunt dolor commodi dignissimos officiis molestias odit consectetur impedit vitae nihil explicabo numquam esse? Quis quae deserunt hic! Ab aliquid deleniti quibusdam. Possimus autem quae sed. Voluptate illo ducimus modi tenetur! Officiis quae omnis iste atque, veritatis porro distinctio.",
    likes: "56",
    replies: [],
  },
  {
    name: "Susmit Banerjee",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem libero praesentium. Recusandae, ipsum blanditiis? Saepe ipsum magnam sapiente expedita alias voluptatum esse hic laudantium! Rerum adipisci, fugit fugiat labore consequuntur nihil praesentium architecto illo dolores doloremque ad ex omnis! Vel ratione cumque ducimus aut ut enim esse alias blanditiis, autem, dolorem adipisci, ad possimus asperiores atque delectus. Aperiam vel maiores libero nostrum rem quis eaque expedita voluptate numquam ducimus illo, reprehenderit quo et iusto ut optio laborum molestias corporis, obcaecati quasi ullam voluptates magni doloremque. Error, repellat sapiente placeat expedita maiores, tempore dolore molestias beatae culpa dicta asperiores aspernatur!",
    likes: "1.2k",
    replies: [
      {
        name: "Susmit Banerjee",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
        likes: "20",
        replies: [],
      },
      {
        name: "Susmit Banerjee",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
        likes: "10",
        replies: [],
      },
      {
        name: "Susmit Banerjee",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
        likes: "34",
        replies: [
          {
            name: "Susmit Banerjee",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
            likes: "12",
            replies: [],
          },
          {
            name: "Susmit Banerjee",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione?",
            likes: "10",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Susmit Banerjee",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis provident illo, sunt dolor commodi dignissimos officiis molestias odit consectetur impedit vitae nihil explicabo numquam esse? Quis quae deserunt hic! Ab aliquid deleniti quibusdam. Possimus autem quae sed. Voluptate illo ducimus modi tenetur! Officiis quae omnis iste atque, veritatis porro distinctio.",
    likes: "8",
    replies: [],
  },
];

