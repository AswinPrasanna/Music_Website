const music = new Audio('Um Anbila.mp3');

// create Array 
const songs = [
    // 1 song
    {
        id: "1",
        songName: 'Vaalaakamal <br> <div class="subtitle">John Jebaraj</div> ',
        poster: "img/1.jpg"
    },
     // 2 song
    {
        id: "2",
        songName: 'Kartharayum Avar Vasanathayum <br> <div class="subtitle">Ravi Bharath</div> ',
        poster: "img/2.jpg"
    },
    // 3 song
    {
        id: "3",
        songName: 'indian enru solvom <br> <div class="subtitle">John Jebaraj</div> ',
        poster: "img/3.jpg"
    },
    //4 song
    {
        id: "4",
        songName: 'Chinna chinna Aasaigal <br> <div class="subtitle">Giftson Durai</div> ',
        poster: "img/4.jpg"
    },
    // 5 song
    {
        id: 5,
        songName: 'Ennai Vittu kodukathavar <br> <div class="subtitle"> Davidsam Joyson</div> ',
        poster: "img/5.jpg"
    },
    // 6 song
    {
        id: "6",
        songName: 'Um Janangal <br> <div class="subtitle">Joseph Aldrin</div> ',
        poster: "img/6.jpg"
    },
    // 7 song
    {
        id: "7",
        songName: 'Um Anbila <br> <div class="subtitle">Sinmaye Sivakumar | Giftson Durai</div> ',
        poster: "img/7.jpg"
    },
    // 8 song
    {
        id: "8",
        songName: 'Nigarilla Raajiyam<br> <div class="subtitle">Prince Samuel</div> ',
        poster: "img/8.jpg"
    },
    // 9 song
    {
        id: "9",
        songName: 'Siluvai naadhar yesuvin<br> <div class="subtitle">Beryl Natasha</div> ',
        poster: "img/9.jpg"
    },
    // 10 song
    {
        id: "10",
        songName: 'Adada VELICHAM Vanthu<br> <div class="subtitle">JESUS|CHRIST</div> ',
        poster: "img/10.jpg"
    },
    // 11 song
    {
        id: "11",
        songName: 'Namma Yesu Sami<br> <div class="subtitle">Christmas Song</div> ',
        poster: "img/11.jpg"
    },
    // 12 song
    {
        id: "12",
        songName: 'EnnaPathi Illaye<br> <div class="subtitle">RaviBarath</div> ',
        poster: "img/12.jpg"
    },
     // 13 song
    {
        id: "13",
        songName: 'Marida Em Ma Nesare <br> <div class="subtitle">Nataraja Mudaliar</div> ',
        poster: "img/13.jpg"
    },
    // 14 song
    {
        id: "14",
        songName: 'Thanga Maharasa<br> <div class="subtitle">Christmas Song</div> ',
        poster: "img/14.jpg"
    },
    // 15 song
    {
        id: "15",
        songName: 'Paadi Thuthi Maname <br> <div class="subtitle">Jikki</div> ',
        poster: "img/15.jpg"
    },
    // 16 song
    {
        id: "16",
        songName: 'Kakkum Valla Meetpar<br> <div class="subtitle">D.G.S.Dhinakaran</div> ',
        poster: "img/16.jpg"
    },
    // 17 song
    {
        id: "17",
        songName: 'Ninupolina Varevaru<br> <div class="subtitle">Benny Joshua</div> ',
        poster: "img/17.jpg"
    },
    // 18 song
    {
        id: "18",
        songName: 'valla kirubai nalla kirubai<br> <div class="subtitle">Gersson Edinbaro</div> ',
        poster: "img/18.jpg"
    },
    // 19 song
    {
        id: "19",
        songName: 'Naanga Vera Maari Bro<br> <div class="subtitle">John Jebaraj</div> ',
        poster: "img/19.jpg"
    },
    // 20 song
    {
        id: "20",
        songName: 'Kirubai 2<br> <div class="subtitle">Darwin Ebenezer</div> ',
        poster: "img/21.jpg"
    },

]


Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


//search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
  //  console.log(id);
  let card = document.createElement('a');
  card.classList.add('card');
  card.href = '#' + id;
  card.innerHTML = '<img src = "${poster}" alt=""><div class="contect">${songName}</div>';
  search_results.appendChild(card);
})

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input_value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let indexaj = 0; indexaj < item.length; indexaj++) {
        let as = items[indexaj].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[indexaj].style.display = "flex";
        } else {
            items[indexaj].style.display = "none";

        }
        if (input_value == 0) {
            items[indexaj].style.display = "none";
        } else {
            items[indexaj].style.display = "";
        }
        
    }
}) 
//search data end


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active1');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let indexaj = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');

let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        indexaj = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${indexaj}.mp3`;
        poster_master_play.src =`img/${indexaj}.jpg`;
        music.play();
        download_music.href = `audio/${indexaj}.mp3`;
        let song_title = songs.filter((ele)=>{
            return ele.id == indexaj;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active1');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${indexaj-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active1');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill'); 
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 50) {
         vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    indexaj -= 1;
    if (indexaj < 1) {
        indexaj = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${indexaj}.mp3`;
    poster_master_play.src =`img/${indexaj}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    let song_title = songs.filter((ele)=>{
        return ele.id == indexaj;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.remove('bi-pause-circle-fill');
    wave.classList.add('active1');
   // document.getElementById(`${indexaj}`).classList.remove('bi-play-fill');
   // document.getElementById(`${indexaj}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${indexaj-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    indexaj -= 0;
    indexaj += 1;
    if (indexaj > Array.from(document.getElementsByClassName('songItem')).length) {
        indexaj = 1;
        }
    music.src = `audio/${indexaj}.mp3`;
    poster_master_play.src =`img/${indexaj}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == indexaj;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.remove('bi-pause-circle-fill');
    wave.classList.add('active1');
    //document.getElementById(`${indexaj}`).classList.remove('bi-play-fill');
   // document.getElementById(`${indexaj}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${indexaj-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_rigth = document.getElementById('pop_art_rigth');
let item = document.getElementsByClassName('item')[0];

pop_art_rigth.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})







let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
        shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
        shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
})




const next_music = () => {
    if (indexaj == songs.length) {
        indexaj = 1
    } else {
        indexaj ++;
    }
    makeAllPlays();
    e.target.classList.remove('bi-play-circle-fill');
    e.target.classList.add('bi-pause-circle-fill');
    music.src = `audio/${indexaj}.mp3`;
    poster_master_play.src =`img/${indexaj}.jpg`;
    music.play();
    download_music.href = `audio/${indexaj}.mp3`;
    let song_title = songs.filter((ele)=>{
        return ele.id == indexaj;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');
    music.addEventListener('ended',()=>{
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active1');
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${indexaj-1}`].style.background = "rgb(105, 105, 170, .1)";
}


const repeat_music = () => {
    indexaj;
    makeAllPlays();
    e.target.classList.remove('bi-play-circle-fill');
    e.target.classList.add('bi-pause-circle-fill');
    music.src = `audio/${indexaj}.mp3`;
    poster_master_play.src =`img/${indexaj}.jpg`;
    music.play();
    download_music.href = `audio/${indexaj}.mp3`;
    let song_title = songs.filter((ele)=>{
        return ele.id == indexaj;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');
    music.addEventListener('ended',()=>{
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active1');
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${indexaj-1}`].style.background = "rgb(105, 105, 170, .1)";
}


const random_music = () => {
    if (indexaj == songs.length) {
        indexaj = 1
    } else {
        indexaj = Math.floor((Math.random() * songs.length) + 1);
    }
    makeAllPlays();
    e.target.classList.remove('bi-play-circle-fill');
    e.target.classList.add('bi-pause-circle-fill');
    music.src = `audio/${indexaj}.mp3`;
    poster_master_play.src =`img/${indexaj}.jpg`;
    music.play();
    download_music.href = `audio/${indexaj}.mp3`;
    let song_title = songs.filter((ele)=>{
        return ele.id == indexaj;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');
    music.addEventListener('ended',()=>{
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active1');
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${indexaj-1}`].style.background = "rgb(105, 105, 170, .1)";
}

music.addEventListener('ended', ()=>{
   let b = shuffle.innerHTML;

   switch (b) {
    case 'repeat':
        repeat_music();
        break;
    case 'next':
            next_music();
            break;
    case 'random':
        random_music();
        break;``
   }``
})