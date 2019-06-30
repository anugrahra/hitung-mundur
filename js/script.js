const tanggalTujuan = new Date('Jan 1, 2020 00:00:00').getTime()

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
                        menuju <span class="duapuluh">2020</span>
                    </p>
                    `

    if (selisih < 0) {
        clearInterval(hitungMundur)
        teks.innerHTML('Selamat Tahun Baru 2020')
    }

}, 1000)
