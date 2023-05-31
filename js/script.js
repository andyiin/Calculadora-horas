/**
 * @author Andrea Solís Tejada
 */

document.addEventListener("DOMContentLoaded", function() {
    let calcularHoras = document.querySelector("#calcularHoras");

    calcularHoras.addEventListener("click", function() {
        let horaEntrada = document.querySelector("#horaEntrada").value;
        let minutoEntrada = document.querySelector("#minutosEntrada").value;
        let horaSalida = document.querySelector("#horaSalida").value;
        let minutoSalida = document.querySelector("#minutosSalida").value;

        let horas = horaSalida - horaEntrada;
        let minutos = minutoSalida - minutoEntrada;

        if (minutos < 0) {
            horas--;
            minutos = 60 + minutos;
        }

        document.querySelector("#horaTotal").value = horas;
        document.querySelector("#minutosTotal").value = minutos;
    });

});