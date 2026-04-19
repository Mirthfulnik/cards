// playlists.js
// Главный конфиг плейлистов и уровней
// Ссылки на платформы заполни самостоятельно (null = кнопка скрыта)

const PLAYLISTS = [
  {
    id: 'vol_1',
    name: 'Mirazh Vol. 1',
    // Обложка плейлиста — композит из трёх обложек (sa, zt, na)
    // Можно заменить на отдельный файл: 'assets/playlists/vol1/cover.jpg'
    covers: [
      'assets/levels/sa_malboro/cover.jpg',
      'assets/levels/zt_horoshim/cover.jpg',
      'assets/levels/na_lubi_menya_srochno/cover.jpg',
    ],
    levels: [
      {
        id: 'sa_malboro',
        index: 0,
        artist: 'Sayan',
        title: 'Мальборо',
        cards: 4,
        cover: 'assets/levels/sa_malboro/cover.jpg',
        video: 'assets/levels/sa_malboro/video.mp4',
        links: {
          yandex:  'https://music.yandex.ru/album/41489388',
          vk:      'https://vk.com/music/album/-2000307783_27307783_f22ae352cfe204e1a4',
          zvuk:    'https://zvuk.com/release/49810000',
          kion:    'https://music.mts.ru/album/41489388',
          spotify: 'https://open.spotify.com/album/08vglVZPKBCDOKfs8zE4Ob',
          apple:   'https://music.apple.com/ru/album/%D0%BC%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D1%80%D0%BE-single/1891317598?app=music',
        }
      },
      {
        id: 'zt_horoshim',
        index: 1,
        artist: 'Зомб, Turken',
        title: 'Оставайся хорошим',
        cards: 8,
        cover: 'assets/levels/zt_horoshim/cover.jpg',
        video: 'assets/levels/zt_horoshim/video.mp4',
        links: {
          yandex:  'https://music.yandex.ru/album/41362964?utm_source=bandlink&utm_medium=Turken&utm_campaign=Оставайся%20хорошим&utm_term=VM5cz',
          vk:      'https://music.vk.com/link/hU30G',
          zvuk:    'https://zvuk.com/release/49660298',
          kion:    'https://music.mts.ru/album/41362964',
          spotify: 'https://open.spotify.com/album/3qDFiNlCL3n3YT3u3qS06e',
          apple:   'https://music.apple.com/ru/album/1889155081?app=music&mt=1&at=1000lqjf&ct=bq&Is=1&ls=1',
        }
      },
      {
        id: 'ha_o_chem_ti_ne_spish',
        index: 2,
        artist: 'HammAli, Akmal',
        title: 'О чём ты не спишь по ночам',
        cards: 12,
        cover: 'assets/levels/ha_o_chem_ti_ne_spish/cover.jpg',
        video: 'assets/levels/ha_o_chem_ti_ne_spish/video.mp4',
        links: {
          yandex:  'https://music.yandex.ru/album/40004022?utm_source=bandlink&utm_medium=HammAli&utm_campaign=О%20чем%20ты%20не%20спишь%20по%20ночам%3F&utm_term=R11eV',
          vk:      'https://vk.com/music/album/-2000421863_26421863_31e1dc4e36697532d2',
          zvuk:    'https://zvuk.com/release/48158830',
          kion:    'https://music.mts.ru/album/40004022',
          spotify: 'https://open.spotify.com/album/0CS2KNCrIwqk2a3ZA8rDvw',
          apple:   'https://music.apple.com/ru/album/1865119130?app=music&mt=1&at=1000lqjf&ct=bq&Is=1&ls=1',
        }
      },
      {
        id: 'na_lubi_menya_srochno',
        index: 3,
        artist: 'NAVAI',
        title: 'Люби меня срочно',
        cards: 16,
        cover: 'assets/levels/na_lubi_menya_srochno/cover.jpg',
        video: 'assets/levels/na_lubi_menya_srochno/video.mp4',
        links: {
          yandex:  'https://music.yandex.ru/album/40932547?utm_source=bandlink&utm_medium=Navai&utm_campaign=Люби%20меня%20срочно&utm_term=JgxLy',
          vk:      'https://music.vk.com/link/fvbWp',
          zvuk:    'https://zvuk.com/release/49308777',
          kion:    'https://music.mts.ru/album/40932547',
          spotify: 'https://open.spotify.com/album/0qJtDzoTk0KXkqNtlExQVr',
          apple:   'https://music.apple.com/us/album/1882257057?mt=1&at=1000lqjf&ct=bq&app=music',
        }
      },
      {
        id: 'zh_kraini_sneg',
        index: 4,
        artist: 'Женя Трофимов, Комната культуры',
        title: 'Крайний снег',
        cards: 24,
        cover: 'assets/levels/zh_kraini_sneg/cover.jpg',
        video: 'assets/levels/zh_kraini_sneg/video.mp4',
        links: {
          yandex:  'https://music.yandex.ru/album/41307939?utm_source=bandlink&utm_medium=Женя%20Трофимов&utm_campaign=Крайний%20снег&utm_term=AGfaC',
          vk:      'https://music.vk.com/link/2YBmV',
          zvuk:    'https://zvuk.com/release/49592507',
          kion:    'https://music.mts.ru/album/41307939',
          spotify: 'https://open.spotify.com/album/7lQ1aunk2vTofO7R4de9XY',
          apple:   'https://music.apple.com/ru/album/1887838917?app=music&mt=1&at=1000lqjf&ct=bq&Is=1&ls=1',
        }
      },
      {
        id: 'sf_utonu',
        index: 5,
        artist: 'Sula Fray',
        title: 'Утону',
        cards: 36,
        cover: 'assets/levels/sf_utonu/cover.jpg',
        video: 'assets/levels/sf_utonu/video.mp4',
        links: {
          yandex:  'https://music.yandex.ru/album/41168277?utm_source=bandlink&utm_medium=Sula%20Fray&utm_campaign=Утону&utm_term=GqnqV',
          vk:      'https://music.vk.com/link/3atOU',
          zvuk:    'https://zvuk.com/release/49478244',
          kion:    'https://music.mts.ru/album/41168277',
          spotify: 'https://open.spotify.com/album/1mBbK8NYg7UKbGi3z5ZhMQ',
          apple:   'https://music.apple.com/ru/album/1885526261?mt=1&at=1000lqjf&ct=bq&app=music',
        }
      },
      {
        id: 'ma_ti_sluchilas',
        index: 6,
        artist: 'Мартин',
        title: 'Ты случилась',
        cards: 48,
        cover: 'assets/levels/ma_ti_sluchilas/cover.jpg',
        video: 'assets/levels/ma_ti_sluchilas/video.mp4',
        links: {
          yandex:  'https://music.yandex.ru/album/36670964/track/139267288?utm_source=web&utm_medium=copy_link',
          vk:      'https://vk.com/audio-2001036612_140036612',
          zvuk:    'https://zvuk.com/track/144369532',
          kion:    'https://music.mts.ru/track/139267288',
          spotify: 'https://open.spotify.com/track/3YzfygjDrMn4zqwlAqZHof',
          apple:   'https://music.apple.com/kz/song/%D1%82%D1%8B-%D1%81%D0%BB%D1%83%D1%87%D0%B8%D0%BB%D0%B0%D1%81%D1%8C/1814386752',
        }
      },
      {
        id: 'bt_skandalistka',
        index: 7,
        artist: 'Bahh Tee, Turken',
        title: 'Скандалистка',
        cards: 64,
        cover: 'assets/levels/bt_skandalistka/cover.jpg',
        video: 'assets/levels/bt_skandalistka/video.mp4',
        links: {
          yandex:  'https://music.yandex.ru/album/36062384?utm_source=bandlink&utm_medium=Bahh%20Tee%20%26%20Turken&utm_campaign=Скандалистка&utm_term=f9QW9',
          vk:      'https://music.vk.com/link/OD9ra',
          zvuk:    'https://zvuk.com/release/38086657',
          kion:    'https://music.mts.ru/album/36062384',
          spotify: 'https://open.spotify.com/album/75k2xEoF4FLiPpq3xvo5sh',
          apple:   'https://music.apple.com/ru/album/1803618771?app=music&mt=1&at=1000lqjf&ct=bq&Is=1&ls=1',
        }
      },
    ]
  },
  // Следующий плейлист — разблокируется после прохождения Vol. 1
  // {
  //   id: 'vol_2',
  //   name: 'Mirazh Vol. 2',
  //   covers: [...],
  //   levels: [...]
  // },
];
