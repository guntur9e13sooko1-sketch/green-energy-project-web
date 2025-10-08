var config = {
    style: 'mapbox://styles/pujapr8/cldrhai3g002401pfi6k3zzfb',
    accessToken: 'pk.eyJ1IjoicHVqYXByOCIsImEiOiJja3ZtanlwaHUwYm1sMnBxc3M5bXVldTBqIn0.V5WjOTjxGcAPeTkzawhwiQ',
    showMarkers: false,
    markerColor: '',
    alignment: 'center',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    chapters: [
        {
            id: 'title',
            alignment: 'Center',
            hidden: false,
            title: '',
            image: '',
            description: '<center><h1>Sengkarut Tambang Nikel Indonesia</h1></center><br><center><h3>Sebagai negara penghasil nikel yang tinggi, berbagai perusahaan nikel dalam dan luar negeri terus melakukan eksplorasi besar-besaran. Namun, banyak permasalahan dan aksi dari pihak tambang yang melanggar aturan tata kelola dan menimbulkan konflik agraria.</h3></center>',
            location: {
                center: [112.93830, -2.18544],
                zoom: 5.41,
                pitch: 62.00,
                bearing: -39.86
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [
                {
                    layer: 'PT Trimegah Bangun Persada',
                    opacity: 1
                },
                {
                    layer: 'PT. Weda Bay Nikel',
                    opacity: 1
                },
            ],
            onChapterExit: [
               
            ]
        },
        {
            id: 'chap-1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<h2>PT. Trimegah Bangun Persada</h2><h3>Lokasi: Pulau Obi, Provinsi Maluku Utara<br>Dugaan Pelanggaran:<br><ul><li>Penggusuran Tanah Warga</ul></li><ul><li>PenggunaanTanah Sengketa</ul></li></h3>',
            location: {
                center: [127.42402, -1.53821],
                zoom: 12.58,
                pitch: 36.50,
                bearing: -27.85
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'PT Trimegah Bangun Persada',
                    opacity: 1
                },
                {
                    layer: 'PT. Weda Bay Nikel',
                    opacity: 1
                },
                {
                    layer: 'PT. Gema Kreasi Perdana',
                    opacity: 1
                },
            ],
            onChapterExit: [             
            ]
        },
        {
            id: 'chap-2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<h2> PT. Weda Bay Nikel</h2><h3>Lokasi: Halmahera Tengah, Provinsi Maluku Utara <br>Dugaan Pelanggaran:<br><ul><li>Kriminalisasi Masyarakat</li></ul> <ul><li>Pembebasan Lahan semena-mena</li></ul> <ul><li>Mencemari laut dan udara</li></ul></h3>',
            location: {
                center: [127.98544, 0.47825],
                zoom: 13.09,
                pitch: 66.98,
                bearing: -96.90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'PT Trimegah Bangun Persada',
                    opacity: 1
                },
                {
                    layer: 'PT. Weda Bay Nikel',
                    opacity: 1
                },
                {
                    layer: 'PT. Gema Kreasi Perdana',
                    opacity: 1
                },
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'chap-3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<h2>PT. Gema Kreasi Perdana</h2><h3>Lokasi: Kepulauan Konawe, Sulawesi Tenggara<br>Dugaan Pelanggaran:<br><ul><li>Penerobosan lahan warga dan kriminalisasi masyarakat</ul></li></h3>',
            location: {
                center: [123.10207, -4.25449],
                zoom: 14.78,
                pitch: 72.47,
                bearing: -56.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'PT Trimegah Bangun Persada',
                    opacity: 1
                },
                {
                    layer: 'PT. Weda Bay Nikel',
                    opacity: 1
                },
                {
                    layer: 'PT. Gema Kreasi Perdana',
                    opacity: 1
                },
            ],
            onChapterExit: [             
            ]
        },
    ]
} ;
