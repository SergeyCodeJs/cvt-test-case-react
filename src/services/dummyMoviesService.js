import batman from '../assets/images/movies/batman.png'
import hollywood from '../assets/images/movies/hollywood.png'
import multVKino from '../assets/images/movies/mult-v-kino.png'
import strip from '../assets/images/movies/strip.png'
import terminator from '../assets/images/movies/terminator.png'
import tupoi from '../assets/images/movies/tupoi.png'
import smile from '../assets/images/smiles/genre/smile.png'
import crySmile from '../assets/images/smiles/genre/crySmile.png'
import ufoSmile from '../assets/images/smiles/genre/alien.png'
import ghostSmile from '../assets/images/smiles/genre/ghost.png'
import firstChannel from '../assets/images/channels/first.png'
import twoXtwo from '../assets/images/channels/dvaXdva.png'
import rbk from '../assets/images/channels/rbc.png'
import amedia from '../assets/images/channels/amedia.png'


export default class DummyMoviesService {
    _movies = [
        {
            name: "Мульт в кино. Выпуск №103. Некогда грустить!",
            description: "В новом выпуске ми-ми-мишки изобретут машину сна, а Дракоша Тоша научит завязыва" +
                    "ть шнурки. Также зрители увидят новые серии мультфильмов «Четверо в кубе», «Лео " +
                    "и Тиг» и совершенно новый мультсериал «Снежная королева: Хранители чудес». «МУЛЬ" +
                    "Т в кино. Выпуск 103. Некогда грустить!» — в кинотеатрах с 28 сентября!",
            logoSrc: multVKino,
            genre: "Комедия"
        }, {
            name: "Новый Бэтмен",
            description: "Готэм сити снова в опасности! Новый бэтмен спасет его, или его побьют? Смотрите " +
                    "фильм и вы все узнаете",
            logoSrc: batman,
            genre: "Комедия"
        }, {
            name: "Однажды... в Голливуде",
            description: "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на зака" +
                    "те его 'золотого века'. Известный актер Рик Далтон и его дублер Клифф Бут пытают" +
                    "ся найти свое место в стремительно меняющемся мире киноиндустрии.",
            logoSrc: hollywood,
            genre: "Драма"
        }, {
            name: "Стриптизёрши",
            description: "Танцовщицы элитного стриптиз-клуба, клиенты которого - известные финансисты с Уо" +
                    "лл-Стрит - привыкли к большим заработкам и роскошной жизни. Но после финансового" +
                    " кризиса 2008 года посетителей в клубе заметно поубавилось, и деньги к девушкам " +
                    "уже не текут рекой.",
            logoSrc: strip,
            genre: "Ужасы"
        }, {
            name: "Терминатор",
            description: "Новый боевой робот Т1000 появляется в Америке, и начинает наводить хаос. Но смел" +
                    "ая женщина с ружьем Сара призвана остановить его, чтобы ее будущий сын смог возг" +
                    "лавить сопротивление машинам",
            logoSrc: terminator,
            genre: "Фантастика"
        }, {
            name: "Тупой и еще тупее",
            description: "Два полных придурка Ллойд Крисмас и Харри Данн пытаются нагнать красивую девушку" +
                    " Мэри Суонсон, чтобы вручить ей оставленный ею в аэропорту чемоданчик. Им невдом" +
                    "ек, что Мэри оставила его специально, в качестве выкупа по договоренности с похи" +
                    "тителями ее мужа",
            logoSrc: tupoi,
            genre: "Комедия"
        }
    ]

    _genres = [
        {
            genre: "Комедии",
            smile: smile,
            background: "linear-gradient(127.83deg, #F2C94C 8.44%, #F29A4A 91.36%)"
        }, {
            genre: "Драмы",
            smile: crySmile,
            background: "linear-gradient(127.83deg, #F2994A 8.44%, #EB5757 91.36%)"
        }, {
            genre: "Фантастика",
            smile: ufoSmile,
            background: "linear-gradient(127.83deg, #56CCF2 8.44%, #2F80ED 91.36%)"
        }, {
            genre: "Ужасы",
            smile: ghostSmile,
            background: "linear-gradient(127.83deg, #828282 8.44%, #333333 91.36%)"
        }
    ]

    _channels = [
        {
            name: "Первый канал",
            logo: firstChannel,
            schedule: [
                {
                    time: "13:00",
                    title: "Новости (с субтитрами)"
                }, {
                    time: "14:00",
                    title: "Давай поженимся"
                }, {
                    time: "15:00",
                    title: "Другие новости"
                }
            ]
        }, {
            name: "2x2",
            logo: twoXtwo,
            schedule: [
                {
                    time: "13:00",
                    title: "МУЛЬТ ТВ. Сезон 4, 7 серия"
                }, {
                    time: "14:00",
                    title: "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия"
                }, {
                    time: "15:00",
                    title: "БУРДАШЕВ. Сезон 1, 20 серия"
                }
            ]
        }, {
            name: "РБК",
            logo: rbk,
            schedule: [
                {
                    time: "13:00",
                    title: "День. Горючая смесь: как бороться с суррогатом на АЗС"
                }, {
                    time: "14:00",
                    title: "День. Главные темы"
                }, {
                    time: "15:00",
                    title: "Главные новости"
                }
            ]
        }, {
            name: "AMEDIA PREMIUM",
            logo: amedia,
            schedule: [
                {
                    time: "13:00",
                    title: "Клиент всегда мёртв"
                }, {
                    time: "14:00",
                    title: "Голодные игры: Сойка-пересмешница. Часть I"
                }, {
                    time: "15:00",
                    title: "Секс в большом городе"
                }
            ]
        }
    ]
    getAllMovies = async() => {
        return this._movies
    }

    getAllGenres = async() => {
        return this._genres
    }

    getAllChannels = async() => {
        return this._channels
    }
}