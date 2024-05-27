function kirimdata() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector('input[name="Peminatan"]:checked').value;
    var alamat = document.getElementById("alamat").value;
    var tanggal = document.getElementById("tanggal").value;
    var angkatan = document.getElementById("angkatan").value;

    alert(
        "Nama: " + name +
        "\nNIM: " + nim +
        "\nPeminatan: " + peminatan +
        "\nAlamat: " + alamat +
        "\nTanggal: " + tanggal +
        "\nAngkatan: " + angkatan
    );
}

var tanggalInput = document.getElementById('tanggal');
flatpickr(tanggalInput, {
    enableTime: false,
    dateFormat: 'd-m-Y',
});
