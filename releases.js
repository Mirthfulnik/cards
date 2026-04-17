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
          yandex:  null,
          vk:      null,
          zvuk:    null,
          kion:    null,
          spotify: null,
          apple:   null,
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
          yandex:  null,
          vk:      null,
          zvuk:    null,
          kion:    null,
          spotify: null,
          apple:   null,
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
          yandex:  null,
          vk:      null,
          zvuk:    null,
          kion:    null,
          spotify: null,
          apple:   null,
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
          yandex:  null,
          vk:      null,
          zvuk:    null,
          kion:    null,
          spotify: null,
          apple:   null,
        }
      },
      {
        id: 'zh_kraini_sneg',
        index: 4,
        artist: 'Женя Трофимов',
        title: 'Крайний снег',
        cards: 24,
        cover: 'assets/levels/zh_kraini_sneg/cover.jpg',
        video: 'assets/levels/zh_kraini_sneg/video.mp4',
        links: {
          yandex:  null,
          vk:      null,
          zvuk:    null,
          kion:    null,
          spotify: null,
          apple:   null,
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
          yandex:  null,
          vk:      null,
          zvuk:    null,
          kion:    null,
          spotify: null,
          apple:   null,
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
          yandex:  null,
          vk:      null,
          zvuk:    null,
          kion:    null,
          spotify: null,
          apple:   null,
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
          yandex:  null,
          vk:      null,
          zvuk:    null,
          kion:    null,
          spotify: null,
          apple:   null,
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
