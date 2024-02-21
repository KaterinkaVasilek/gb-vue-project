import { defineStore } from "pinia";

export const useIndexStore = defineStore("index", {
  state: () => {
    return {
      articles: [
          {
            "id": 0,
            "src": "/img/articles-1.jpg",
            "tag": "Kitchen",
            "mainTitle": "Let’s Get Solution For Building Construction Work",
            "date": "26 December,2022",
            "keywords": "Interior / Home / Decore",
            "text": "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet v ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ",
            "secondaryTitle": "Design sprints are great",
            "descText": "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "benefits": {
              "0": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available.",
              "1": "Contrary to popular belief",
              "2": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
            }
          },
          {
            "id": 1,
            "src": "/img/articles-2.jpg",
            "tag": "Bedroom",
            "mainTitle": "Low Cost Latest Invented Interior Designing Ideas.",
            "date": "26 December,2022",
            "keywords": "Interior / Home / Decore",
            "text": "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet v ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
            "secondaryTitle": "Design sprints are great",
            "descText": "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "benefits": {
              "0": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "1": "Contrary to popular belief.There are many variations",
              "2": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "3": "Contrary to popular belief.There are many variations of passages",
              "4": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
            }
          },
          {
            "id": 2,
            "src": "/img/articles-3.jpg",
            "tag": "Building",
            "mainTitle": "Best For Any Office & Business Interior Solution",
            "date": "22 December,2022",
            "keywords": "Interior / Home / Decore",
            "text": "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet v ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet vipsum dolor sit amet",
            "secondaryTitle": "Design sprints are great",
            "descText": "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "benefits": {
              "0": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "1": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
            }
          },
          {
            "id": 3,
            "src": "/img/articles-4.jpg",
            "tag": "Architecture",
            "mainTitle": "Let’s Get Solution For Building Construction Work",
            "date": "26 December,2022",
            "keywords": "Interior / Home / Decore",
            "text": "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet v ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
            "secondaryTitle": "Design sprints are great",
            "descText": "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "benefits": {
              "0": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "1": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "2": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "3": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "4": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "5": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
            }
          },
          {
            "id": 4,
            "src": "/img/articles-5.jpg",
            "tag": "Kitchen Planning",
            "mainTitle": "Low Cost Latest Invented Interior Designing Ideas.",
            "date": "22 December,2022",
            "keywords": "Interior / Home / Decore",
            "text": "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet v ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet vipsum dolor sit amet",
            "secondaryTitle": "Design sprints are great",
            "descText": "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "benefits": {
              "0": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "1": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "2": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
            }
          },
          {
            "id": 5,
            "src": "/img/articles-6.jpg",
            "tag": "Bathroom",
            "mainTitle": "Best For Any Office & Business Interior Solution",
            "date": "25 December,2022",
            "keywords": "Interior / Home / Decore",
            "text": "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
            "secondaryTitle": "Design sprints are great",
            "descText": "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "benefits": {
              "0": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "1": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "2": "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              "3": "Contrary to popular belief.There are many variations of passages",
              "4": "Contrary to popular belief."
            }
          }
      ],
      projects: [
        {
          "id": 6,
          "category": "Bathroom",
          "path": "/projects/bathroom",
          "categoryProjects": [
            {
              "id": 7,
              "src": "/img/bathroom-1.jpg",
              "name": "Minimal Bathroom",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 100,
                  "src": "/img/bathroom-1.jpg"
                },
                {
                  "id": 101,
                  "src": "/img/bathroom-2.jpg"
                },
                {
                  "id": 102,
                  "src": "/img/bathroom-3.jpg"
                }
              ]
            },
            {
              "id": 8,
              "src": "/img/bathroom-2.jpg",
              "name": "Minimal Bathroom",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 103,
                  "src": "img/bathroom-4.jpg"
                },
                {
                  "id": 104,
                  "src": "img/bathroom-5.jpg"
                },
                {
                  "id": 105,
                  "src": "img/bathroom-1.jpg"
                }
              ]
            },
            {
              "id": 9,
              "src": "/img/bathroom-3.webp",
              "name": "Minimal Bathroom",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 106,
                  "src": "/img/bathroom-3.jpg"
                },
                {
                  "id": 107,
                  "src": "/img/bathroom-5.jpg"
                },
                {
                  "id": 108,
                  "src": "/img/bathroom-2.jpg"
                }
              ]
            },
            {
              "id": 10,
              "src": "/img/bathroom-4.jpeg",
              "name": "Minimal Bathroom",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 109,
                  "src": "/img/bathroom-3.jpg"
                },
                {
                  "id": 110,
                  "src": "/img/bathroom-4.jpg"
                },
                {
                  "id": 111,
                  "src": "/img/bathroom-1.jpg"
                }
              ]
            },
            {
              "id": 11,
              "src": "/img/bathroom-5.jpeg",
              "name": "Minimal Bathroom",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 112,
                  "src": "/img/bathroom-2.jpg"
                },
                {
                  "id": 113,
                  "src": "/img/bathroom-5.jpg"
                },
                {
                  "id": 114,
                  "src": "/img/bathroom-3.jpg"
                }
              ]
            }
          ],
        },
        {
          "id": 12,
          "category": "Bed Room",
          "path": "/projects/bedroom",
          "categoryProjects": [
            {
              "id": 13,
              "src": "/img/bedroom-1.jpg",
              "name": "Minimal Bed Room",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 120,
                  "src": "/img/bedroom-1.jpg"
                },
                {
                  "id": 121,
                  "src": "/img/bedroom-2.jpg"
                },
                {
                  "id": 122,
                  "src": "/img/bedroom-3.jpg"
                }
              ]
            },
            {
              "id": 14,
              "src": "/img/bedroom-2.jpg",
              "name": "Minimal Bed Room",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 130,
                  "src": "/img/bedroom-4.jpg"
                },
                {
                  "id": 131,
                  "src": "/img/bedroom-5.jpg"
                },
                {
                  "id": 132,
                  "src": "/img/bedroom-6.jpg"
                }
              ]
            },
            {
              "id": 15,
              "src": "/img/bedroom-3.jpg",
              "name": "Minimal Bed Room",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 140,
                  "src": "/img/bedroom-7.jpg"
                },
                {
                  "id": 141,
                  "src": "/img/bedroom-8.jpg"
                },
                {
                  "id": 142,
                  "src": "/img/bedroom-1.jpg"
                }
              ]
            },
            {
              "id": 16,
              "src": "/img/bedroom-4.jpg",
              "name": "Minimal Bed Room",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 150,
                  "src": "/img/bedroom-5.jpg"
                },
                {
                  "id": 151,
                  "src": "/img/bedroom-3.jpg"
                },
                {
                  "id": 152,
                  "src": "/img/bedroom-1.jpg"
                }
              ]
            },
            {
              "id": 17,
              "src": "/img/bedroom-5.jpg",
              "name": "Minimal Bed Room",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 160,
                  "src": "/img/bedroom-7.jpg"
                },
                {
                  "id": 161,
                  "src": "/img/bedroom-2.jpg"
                },
                {
                  "id": 162,
                  "src": "/img/bedroom-6.jpg"
                }
              ]
            },
            {
              "id": 16,
              "src": "/img/bedroom-6.jpg",
              "name": "Minimal Bed Room",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 170,
                  "src": "/img/bedroom-4.jpg"
                },
                {
                  "id": 171,
                  "src": "/img/bedroom-1.jpg"
                },
                {
                  "id": 172,
                  "src": "/img/bedroom-8.jpg"
                }
              ]
            },
            {
              "id": 17,
              "src": "/img/bedroom-7.jpg",
              "name": "Minimal Bed Room",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 180,
                  "src": "/img/bedroom-7.jpg"
                },
                {
                  "id": 181,
                  "src": "/img/bedroom-3.jpg"
                },
                {
                  "id": 182,
                  "src": "/img/bedroom-4.jpg"
                }
              ]
            },
            {
              "id": 18,
              "src": "/img/bedroom-8.jpg",
              "name": "Minimal Bed Room",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 190,
                  "src": "/img/bedroom-6.jpg"
                },
                {
                  "id": 191,
                  "src": "/img/bedroom-3.jpg"
                },
                {
                  "id": 192,
                  "src": "/img/bedroom-2.jpg"
                }
              ]
            }
          ],
        },
        {
          "id": 19,
          "category": "Kitchan",
          "path": "/projects/kitchan",
          "categoryProjects": [
            {
              "id": 20,
              "src": "/img/kitchan-1.jpg",
              "name": "Minimal Kitchan",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 1001,
                  "src": "/img/kitchan-1.jpg"
                },
                {
                  "id": 1011,
                  "src": "/img/kitchan-2.jpg"
                },
                {
                  "id": 1021,
                  "src": "/img/kitchan-3.jpg"
                }
              ]
            },
            {
              "id": 21,
              "src": "/img/kitchan-2.jpeg",
              "name": "Minimal Kitchan",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 1002,
                  "src": "/img/kitchan-4.jpg"
                },
                {
                  "id": 1012,
                  "src": "/img/kitchan-5.jpg"
                },
                {
                  "id": 1022,
                  "src": "/img/kitchan-6.jpg"
                }
              ]
            },
            {
              "id": 22,
              "src": "/img/kitchan-3.webp",
              "name": "Minimal Kitchan",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 1003,
                  "src": "/img/kitchan-7.jpg"
                },
                {
                  "id": 1013,
                  "src": "/img/kitchan-1.jpg"
                },
                {
                  "id": 1023,
                  "src": "/img/kitchan-2.jpg"
                }
              ]
            },
            {
              "id": 23,
              "src": "/img/kitchan-4.png",
              "name": "Minimal Kitchan",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 1004,
                  "src": "/img/kitchan-3.jpg"
                },
                {
                  "id": 1014,
                  "src": "/img/kitchan-4.jpg"
                },
                {
                  "id": 1024,
                  "src": "/img/kitchan-5.jpg"
                }
              ]
            },
            {
              "id": 24,
              "src": "/img/kitchan-5.jpeg",
              "name": "Minimal Kitchan",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 100,
                  "src": "/img/kitchan-6.jpg"
                },
                {
                  "id": 1015,
                  "src": "/img/kitchan-7.jpg"
                },
                {
                  "id": 1025,
                  "src": "/img/kitchan-3.jpg"
                }
              ]
            }
          ],
        },
        {
          "id": 27,
          "category": "Living Area",
          "path": "/projects/living",
          "categoryProjects": [
            {
              "id": 28,
              "src": "/img/living-1.jpg",
              "name": "Minimal Living Area",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 1100,
                  "src": "/img/living-1.jpg"
                },
                {
                  "id": 1210,
                  "src": "/img/living-2.jpg"
                },
                {
                  "id": 1220,
                  "src": "/img/living-3.jpg"
                }
              ]
            },
            {
              "id": 29,
              "src": "/img/living-2.webp",
              "name": "Minimal Living Area",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 1101,
                  "src": "/img/living-1.jpg"
                },
                {
                  "id": 1211,
                  "src": "/img/living-2.jpg"
                },
                {
                  "id": 1221,
                  "src": "/img/living-3.jpg"
                }
              ]
            },
            {
              "id": 30,
              "src": "/img/living-3.jpg",
              "name": "Minimal Living Area",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 1102,
                  "src": "/img/living-4.jpg"
                },
                {
                  "id": 1212,
                  "src": "/img/living-5.jpg"
                },
                {
                  "id": 1222,
                  "src": "/img/living-6.jpg"
                }
              ]
            },
            {
              "id": 31,
              "src": "/img/living-4.jpg",
              "name": "Minimal Living Area",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 1103,
                  "src": "/img/living-7.jpg"
                },
                {
                  "id": 1213,
                  "src": "/img/living-8.jpg"
                },
                {
                  "id": 1223,
                  "src": "/img/living-9.jpg"
                }
              ]
            },
            {
              "id": 32,
              "src": "/img/living-5.jpg",
              "name": "Minimal Living Area",
              "tag1": "Decor",
              "tag2": "Architecture",
              "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim similique in sit sunt nemo perspiciatis! Sit, quia modi. Voluptate ullam, aliquam repellat et ad dicta deserunt! A ea dolor velit nam voluptatibus quibusdam. Odit quis obcaecati possimus nisi dolorum numquam, impedit adipisci vero excepturi ullam rerum, officiis ipsam mollitia veniam deleniti recusandae quisquam repellat voluptas tenetur! Qui odio veritatis vero? Libero, facilis eum! Vero natus pariatur facilis minima voluptas. Quos est, quam quod ut nisi commodi, praesentium quis inventore aspernatur ad minima nemo eum magni animi maxime ab sequi, aut veritatis maiores molestiae. Reprehenderit id est saepe, laudantium itaque commodi sint nobis velit sunt impedit ratione architecto dolor expedita dolorem animi voluptates similique dicta temporibus autem mollitia aut quasi placeat? Iusto corrupti obcaecati saepe magni ipsam perferendis voluptate, fugiat earum nihil quo maiores omnis? Earum accusamus repellat delectus mollitia at! Saepe rerum numquam dolorum iusto blanditiis natus non accusamus, provident ipsam aspernatur sit neque recusandae, modi odio eligendi? Natus officiis dolores eveniet aliquid odit quae, pariatur, iure, est culpa deserunt molestiae dolor amet nam repellendus mollitia at blanditiis. Sed, incidunt voluptates illum fugit cumque odio, id porro non, impedit modi quod quisquam tempore dignissimos provident. Nihil earum impedit perferendis porro iure sed recusandae iusto necessitatibus suscipit fugiat, expedita ex numquam, fuga vitae aliquid eaque, sunt libero qui officia aperiam distinctio possimus molestiae repellendus! Perferendis amet aspernatur reiciendis repellat corporis.",
              "gallery": [
                {
                  "id": 1104,
                  "src": "/img/living-1.jpg"
                },
                {
                  "id": 1214,
                  "src": "/img/living-2.jpg"
                },
                {
                  "id": 1224,
                  "src": "/img/living-3.jpg"
                }
              ]
            }
          ],
        }
      ],
      tags: [
        {
          "id": 37,
          "tagName": "Kitchen"
        },
        {
          "id": 38,
          "tagName": "Bedroom"
        },
        {
          "id": 39,
          "tagName": "Building"
        },
        {
          "id": 40,
          "tagName": "Architecture"
        },
        {
          "id": 41,
          "tagName": "Kitchen Planning"
        },
        {
          "id": 42,
          "tagName": "Bathroom"
        }
      ]
    };
  },

  getters: {
    getProjectById: (state) => (projectId) => {
      let currentProject = null;
      for (const category of state.projects) {
        currentProject = category.categoryProjects.find(project => project.id == projectId);
        if (currentProject) {
          return currentProject;
        }
      }
      return null;
    }
  }
});