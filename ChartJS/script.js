const cnv = document.getElementById("viewChart");
const ctx = cnv.getContext("2d");

const viewChart = new Chart(ctx,{
    type: "radar",
    data:  {
        labels: ["Enero","Febrero","Marzo","Abril","Mayo"],
        datasets: [{
            label: "Visitas",
            data: [300000,260000,480000,430000,640000],
            backgroundColor: ["#9225","#2925","#2295","#2225","#5555"],
            borderColor: ["#922","#292","#229","#222","#555"],
            borderWidth: 1
        },{
            label: "cuentas",
            data: [600000,460000,180000,330000,240000],
            backgroundColor: ["#9225","#2925","#2295","#2225","#5555"],
            borderColor: ["#922","#292","#229","#222","#555"],
            borderWidth: 1
        }]
    } ,
    options: {
        scale: {
            y: {beginAtZero: true}
        }
    }
})