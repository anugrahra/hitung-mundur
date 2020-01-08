const tanggalTujuan = new Date('Jan 1, 2021 00:00:00').getTime()

const hitungMundur = setInterval(function () {
    const sekarang = new Date().getTime()
    const selisih = tanggalTujuan - sekarang
    
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24))
    
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60))
    
    const detik = Math.floor(selisih % (1000 * 60) / 1000)
    
    const teks = document.getElementById('teks')
    teks.innerHTML = `
                    <p class="utama">Tinggal<br>
                        <span class="oren">`+ hari +`</span> hari<br>
                        <span class="ijo">`+ jam +`</span> jam<br>
                        <span class="biru">`+ menit +`</span> menit<br>
                        <span class="merah">`+ detik +`</span> detik<br>
                        menuju <span class="duapuluh">2021</span>
                    </p>
                    `

    if (selisih < 0) {
        clearInterval(hitungMundur)
        teks.innerHTML('Selamat Tahun Baru 2021')
    }

}, 1000)

//ganti warna detik
var i = 0
function gantiWarna() {
    var warnaDetik = document.getElementById('bodi')
    var warna = ['black', '#3b444b', '#353839', '#232b2b', '#0e1111']
    warnaDetik.style.backgroundColor = warna[i]
    i = (i + 1) % warna.length
}
setInterval(gantiWarna, 1000)

//tgl sekarang
const skr = new Date()

//hari
const weekday = new Array(7)
weekday[0] = "Minggu"
weekday[1] = "Senin"
weekday[2] = "Selasa"
weekday[3] = "Rabu"
weekday[4] = "Kamis"
weekday[5] = "Jumat"
weekday[6] = "Sabtu"

const skrHari = weekday[skr.getDay()]

//bulan
const month = new Array(12)
month[0] = "Januari"
month[1] = "Februari"
month[2] = "Maret"
month[3] = "April"
month[4] = "Mei"
month[5] = "Juni"
month[6] = "Juli"
month[7] = "Agustus"
month[8] = "September"
month[9] = "Oktober"
month[10] = "November"
month[11] = "Desember"

const skrBulan = month[skr.getMonth()]

document.getElementById("tglSkr").innerHTML = skrHari + ', ' + skr.getDay() + ' ' + skrBulan + ' ' + skr.getFullYear()