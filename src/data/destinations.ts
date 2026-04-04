export interface Destination {
  id: string;
  name: string;
  title: string;
  location: string;
  state: string;
  imageUrl: any;
  description: string;
  religion: string;
  people: string;
  placesToVisit: {
    name: string;
    description: string;
  }[];
  tags: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Ladakh',
    title: 'Land of High Passes',
    location: 'Ladakh, India',
    state: 'Ladakh',
    imageUrl: require('../assets/images/Ladakh.png'),
    description:
      'Ladakh is a high-altitude desert region in northern India, known for its dramatic landscapes, Buddhist monasteries, and vibrant culture. Often called "Little Tibet," it offers a unique blend of spiritual heritage and breathtaking natural beauty.',
    religion:
      'Predominantly Tibetan Buddhism and Islam (Shia). The region is famous for its "gompas" (monasteries), which are central to the spiritual life of the people.',
    people:
      'The Ladakhi people are a blend of Mongol and Aryan descent. They are known for their resilience, peaceful coexistence, and rich traditions in language, attire, and festivals.',
    placesToVisit: [
      {
        name: 'Pangong Tso Lake',
        description:
          'A high-altitude saltwater lake famous for its mesmerising, ever-changing shades of blue.',
      },
      {
        name: 'Nubra Valley',
        description:
          'Known for its dramatic landscape, sand dunes, and Bactrian (two-humped) camels.',
      },
      {
        name: 'Thiksey Monastery',
        description:
          'A stunning multi-storied monastery resembling the Potala Palace in Lhasa.',
      },
      {
        name: 'Shanti Stupa',
        description:
          'A white-domed Buddhist monument in Leh offering panoramic views of the mountains.',
      },
    ],
    tags: ['Adventure', 'Spirituality', 'High Altitude', 'Hiking'],
  },
  {
    id: '2',
    name: 'Kerala',
    title: "God's Own Country",
    location: 'Kerala, India',
    state: 'Kerala',
    imageUrl: require('../assets/images/kerala.png'),
    description:
      'Kerala is a tropical paradise on India’s Malabar Coast, famous for its palm-lined beaches, backwaters, and lush greenery. It is a land where tradition meets modernity in a harmonious blend.',
    religion:
      'A diverse fabric of Hinduism, Christianity, and Islam. Kerala is known for its long history of communal harmony and religious syncretism.',
    people:
      'The Malayali people are highly literate and known for their warmth and hospitality. Their culture is reflected in vibrant art forms like Kathakali and the traditional martial art, Kalaripayattu.',
    placesToVisit: [
      {
        name: 'Alleppey Backwaters',
        description:
          'Serene waterways explored via traditional houseboats, offering a glimpse into local life.',
      },
      {
        name: 'Munnar Tea Gardens',
        description:
          'Expansive hills covered in emerald green tea plantations and mist.',
      },
      {
        name: 'Sree Padmanabhaswamy Temple',
        description:
          'One of the world’s richest temples, known for its intricate Dravidian architecture.',
      },
      {
        name: 'Fort Kochi',
        description:
          'A historical hub reflecting colonial influences and famous for its Chinese fishing nets.',
      },
    ],
    tags: ['Nature', 'Family', 'Culture', 'Leisure'],
  },
  {
    id: '3',
    name: 'Varanasi',
    title: 'The Eternal City',
    location: 'Uttar Pradesh, India',
    state: 'Uttar Pradesh',
    imageUrl: require('../assets/images/varanasi.png'),
    description:
      'Varanasi, also known as Kashi or Banaras, is one of the world’s oldest living cities and a spiritual epicenter. It sits on the banks of the holy Ganges river and is a place of profound ritual and philosophy.',
    religion:
      'Predominantly Hinduism, but also home to significant Muslim, Buddhist, and Jain communities. It is considered the religious capital of Hinduism.',
    people:
      'The people of Varanasi (Banarasis) are known for their spiritual devotion and mastery of traditional crafts like silk weaving (Banarasi sarees). The city follows a unique pulse of ancient rituals.',
    placesToVisit: [
      {
        name: 'Dashashwamedh Ghat',
        description:
          'The most vibrant ghat, host to the spectacular daily evening Ganga Aarti ritual.',
      },
      {
        name: 'Kashi Vishwanath Temple',
        description:
          'One of the twelve Jyotirlingas, dedicated to Lord Shiva and central to Hindu faith.',
      },
      {
        name: 'Sarnath',
        description:
          'Where Lord Buddha delivered his first sermon after attaining enlightenment.',
      },
      {
        name: 'Manikarnika Ghat',
        description:
          'The main cremation ghat, serving as a powerful reminder of the cycle of life and death.',
      },
    ],
    tags: ['Spirituality', 'History', 'Family'],
  },
  {
    id: '4',
    name: 'Manali & Kasol',
    title: 'Valleys of the Gods',
    location: 'Himachal, India',
    state: 'Himachal',
    imageUrl: require('../assets/images/kasol.png'),
    description:
      'Himachal Pradesh is home to the stunning Parvati Valley, where Manali and Kasol offer a mix of adventure and tranquility. Surrounded by snow-capped peaks and pine forests, it’s a haven for nature lovers.',
    religion:
      'Primarily Hinduism, with many local village deities (Devatas) having their own unique traditions and temples.',
    people:
      'Himachali people are known for their simplicity and resilience. The local culture is deeply connected to the mountains, reflected in their festivals and traditional attire like the Kullu cap.',
    placesToVisit: [
      {
        name: 'Rohtang Pass',
        description:
          'A high mountain pass offering spectacular views and year-round snow activities.',
      },
      {
        name: 'Hadimba Devi Temple',
        description:
          'An ancient wooden temple set in a cedar forest, dedicated to Hadimba Devi.',
      },
      {
        name: 'Kheerganga Trek',
        description:
          'A popular trek in Parvati Valley leading to natural hot water springs.',
      },
      {
        name: 'Mall Road',
        description:
          'The bustling heart of Manali, perfect for shopping and local delicacies.',
      },
    ],
    tags: ['Adventure', 'Nature', 'Friends', 'Hiking'],
  },
  {
    id: '5',
    name: 'Rishikesh',
    title: 'Yoga Capital of the World',
    location: 'Uttarakhand, India',
    state: 'Uttarakhand',
    imageUrl: require('../assets/images/uttarakhand.png'),
    description:
      'Rishikesh is a spiritual hub nestled in the foothills of the Himalayas along the Ganges. It is world-renowned as a center for yoga and meditation, while also offering high-adrenaline activities like white-water rafting.',
    religion:
      'Deeply Hindu, considered a gateway to the Char Dham pilgrimage. The atmosphere is filled with the sound of temple bells and evening chants.',
    people:
      'Home to many sadhus (monks), yoga practitioners, and locals who have maintained the sanctity of the Ganges for generations. It is a melting pot of global seekers and traditional devotees.',
    placesToVisit: [
      {
        name: 'Laxman Jhula',
        description:
          'An iconic suspension bridge across the Ganges with stunning views.',
      },
      {
        name: 'Triveni Ghat',
        description:
          'The main bathing ghat and site for the grand Maha Aarti every evening.',
      },
      {
        name: 'Parmarth Niketan',
        description:
          'One of the oldest ashrams providing a serene environment for spiritual growth.',
      },
      {
        name: 'Shivpuri',
        description:
          'The starting point for thrilling river rafting adventures.',
      },
    ],
    tags: ['Spirituality', 'Adventure', 'Family'],
  },
  {
    id: '6',
    name: 'Valley of Flowers',
    title: 'A UNESCO World Heritage Site',
    location: 'Uttarakhand, India',
    state: 'Uttarakhand',
    imageUrl: require('../assets/images/valley of flowes.png'),
    description:
      'The Valley of Flowers is a vibrant alpine meadow in the North Chamoli district. It is famous for its meadows of endemic alpine flowers and the variety of flora. It remains covered in snow for most of the year but blooms into a paradise in monsoon.',
    religion:
      'Located near Hemkund Sahib, one of the holiest Sikh shrines. The trek to the valley is often combined with a pilgrimage to the high-altitude lake.',
    people:
      'The region is sparsely populated, mostly by local guides and nomadic herdsmen during the summer months. The locals are deeply protective of the fragile ecosystem.',
    placesToVisit: [
      {
        name: 'Hemkund Sahib',
        description:
          'A revered Sikh pilgrimage site located at an altitude of 4,632 meters.',
      },
      {
        name: 'Ghangaria',
        description:
          'The base camp for treks to Valley of Flowers and Hemkund Sahib.',
      },
      {
        name: 'Pushpawati River',
        description:
          'A gentle mountain stream that flows through the heart of the valley.',
      },
    ],
    tags: ['Hiking', 'Nature', 'Friends', 'Adventure'],
  },
  {
    id: '7',
    name: 'Shimla',
    title: 'The Queen of Hills',
    location: 'Himachal, India',
    state: 'Himachal',
    imageUrl: require('../assets/images/Himachal.png'),
    description:
      'Shimla, the capital of Himachal Pradesh, was once the summer capital of British India. It is famous for its colonial architecture, the bustling Mall Road, and the scenic toy train journey.',
    religion:
      'Predominantly Hindu, with historical churches like Christ Church reflecting its colonial past. Local village deities (Devtas) also play a significant role in the outskirts.',
    people:
      'Shimla has a cosmopolitan mix of locals and migrants. The people are known for their sophisticated yet humble nature, deeply connected to their colonial heritage and hill traditions.',
    placesToVisit: [
      {
        name: 'The Ridge',
        description:
          'A large open space in the heart of the city, perfect for family walks.',
      },
      {
        name: 'Jakhu Temple',
        description:
          'A temple dedicated to Lord Hanuman, located on the highest peak of Shimla.',
      },
      {
        name: 'Kalka-Shimla Railway',
        description:
          'A UNESCO heritage toy train ride through stunning mountain landscapes.',
      },
    ],
    tags: ['Family', 'History', 'Leisure'],
  },
  {
    id: '8',
    name: 'Dharamshala',
    title: 'Home of the Dalai Lama',
    location: 'Himachal, India',
    state: 'Himachal',
    imageUrl: require('../assets/images/dharamshala.png'),
    description:
      'Dharamshala and its upper suburb, McLeod Ganj, are centers of the Tibetan world in exile. Surrounded by cedar forests and the Dhauladhar Range, it offers a blend of spirituality and mountain adventure.',
    religion:
      'A major center for Tibetan Buddhism, home to the Namgyal Monastery. It also has a strong Hindu presence with ancient temples like Bhagsu Nag.',
    people:
      'The population is a unique blend of Himachali locals and the Tibetan diaspora. The presence of the Dalai Lama attracts spiritual seekers from across the globe.',
    placesToVisit: [
      {
        name: 'Namgyal Monastery',
        description: 'The personal monastery of the 14th Dalai Lama.',
      },
      {
        name: 'Triund Hill',
        description:
          'A popular trekking destination offering panoramic views of the Dhauladhar Range.',
      },
      {
        name: 'Bhagsu Waterfall',
        description: 'A scenic waterfall near the ancient Bhagsu Nag temple.',
      },
    ],
    tags: ['Culture', 'Hiking', 'Spirituality', 'Adventure'],
  },
  {
    id: '9',
    name: 'Spiti Valley',
    title: 'The Middle Land',
    location: 'Himachal, India',
    state: 'Himachal',
    imageUrl: require('../assets/images/kinnaur.png'),
    description:
      'Spiti Valley is a high-altitude cold desert, often called "Little Tibet." It is a land of stark beauty, ancient monasteries, and remote villages tucked away in the rugged Himalayas.',
    religion:
      'Deeply rooted in Tibetan Buddhism. The valley is scattered with centuries-old monasteries that are hubs of culture and spirituality.',
    people:
      'The people of Spiti are known for their simple, sustainable lifestyles and immense hospitality. They have a deep connection to their Buddhist heritage and the harsh terrain.',
    placesToVisit: [
      {
        name: 'Key Monastery',
        description:
          'The largest and most iconic monastery in Spiti, perched on a hilltop like a fortress.',
      },
      {
        name: 'Chandratal Lake',
        description:
          'A crescent-shaped lake known for its crystal-clear blue waters and camping under the stars.',
      },
      {
        name: 'Tabo Monastery',
        description:
          'A UNESCO heritage site, known as the "Ajanta of the Himalayas" for its ancient murals.',
      },
      {
        name: 'Hikkim Post Office',
        description:
          'Visit the world’s highest post office and send a postcard from the clouds.',
      },
    ],
    tags: ['Adventure', 'High Altitude', 'Spirituality', 'Hiking'],
  },
  {
    id: '10',
    name: 'Nubra Valley',
    title: 'The Orchard of Ladakh',
    location: 'Ladakh, India',
    state: 'Ladakh',
    imageUrl: require('../assets/images/Ladakh.png'),
    description:
      'Known for its high-altitude sand dunes and Bactrian camels, Nubra Valley offers a unique desert-like landscape amidst snow-capped peaks. It was a key stop on the ancient Silk Road.',
    religion:
      'Predominantly Buddhist, with impressive landmarks like the Diskit Monastery and its giant Maitreya Buddha statue.',
    people:
      'The locals are extremely resilient and maintain a unique traditional lifestyle. Their culture is a beautiful blend of Ladakhi and ancient Silk Road influences.',
    placesToVisit: [
      {
        name: 'Diskit Monastery',
        description:
          'The oldest and largest monastery in Nubra, home to a 32-meter Maitreya Buddha statue.',
      },
      {
        name: 'Hunder Sand Dunes',
        description:
          'A surreal cold desert where you can enjoy rides on double-humped Bactrian camels.',
      },
      {
        name: 'Turtuk Village',
        description:
          'A scenic village recently opened to tourists, known for its Balti culture and apricot orchards.',
      },
    ],
    tags: ['Adventure', 'Nature', 'Friends'],
  },
  {
    id: '11',
    name: 'Pangong Tso',
    title: 'The High-Altitude Oasis',
    location: 'Ladakh, India',
    state: 'Ladakh',
    imageUrl: require('../assets/images/Ladakh.png'),
    description:
      'Pangong Tso is a breathtaking endorheic lake that changes colors from shades of blue to green to grey. It is situated at an altitude of 4,225 meters and straddles the border between India and China.',
    religion:
      'The surrounding region is dotted with small Buddhist shrines and prayer flags, reflecting the spiritual sanctity local people associate with the water.',
    people:
      'The region is sparsely populated by nomadic tribes (Changpas) who herd Pashmina goats. Their lives are a testament to human survival in extreme environments.',
    placesToVisit: [
      {
        name: 'Spangmik Village',
        description:
          'The last village where tourists are allowed, offering stunning views of the lake.',
      },
      {
        name: 'Lukung',
        description:
          'The entry point to the lake with many camping sites and iconic photo spots.',
      },
      {
        name: 'Chang La Pass',
        description:
          'The high mountain pass you cross to reach Pangong, offering panoramic views.',
      },
    ],
    tags: ['Nature', 'High Altitude', 'Adventure'],
  },
];
