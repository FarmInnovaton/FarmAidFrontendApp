$(document).ready((params) =>{
    addScript("https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js");
    $("#display_gom_btn").on("click", (e) => {
        e.preventDefault();
        $("#mytable_ada").fadeOut("fast");

        gombefarmerSwal(2)
        $("#mytable_gom").fadeIn("slow");
        
    });

    $("#display_ada_btn").on("click", (e) => {
        e.preventDefault();
        $("#mytable_gom").fadeOut("fast");
        adamawafarmerSwal(1)
        $("#mytable_ada").fadeIn("slow");
    });
});

function addScript(filename) {
    var head = document.getElementsByTagName("head")[0];
  
    var script = document.createElement("script");
    script.src = filename;
    script.type = "text/javascript";
  
    head.append(script);
  }

/**
 * Start definition for gombe Farmers retrieval
 * @param {*} params
 */
 function gombefarmerSwal(params) {
    // addScript("https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js");
  
    swal
      .fire({
        title: "Loading Farmers Data from Gombe",
        text: "Please wait...",
        timer: 4000,
        allowOutsideClick: false,
        showConfirmButton: false,
        icon: "info",
      })
      .then(function () {
        $("#mytable_gom").fadeOut("fast");
  
        $("#mytable_gom").ready(function () {
          Swal.fire({
            title: "Please wait",
            text: "Loading data ....",
            icon: "info",
            allowOutsideClick: false,
            showConfirmButton: false,
          });
          const url =
            "https://farm-aid-backend.herokuapp.com/api/farmer/state_public/Gombe";
          const token = localStorage.getItem("access_token");
          const headers = new Headers();
          headers.append("Content-Type", "application/json");
          headers.append("Authorization", token);
  
          fetch(url, {
            method: "GET",
            headers,
          })
            .then(async (res) => res.json())
            .then((data) => {
              // DataTable here
  
              if ($("#mytable_gom").length) {
                $("#mytable_gom").DataTable({
                  data: data,
                  columns: [
                    { data: "firstname" },
                    { data: "lastname" },
                    { data: "crops" },
                    { data: "state" },
                    { data: "lga" },
                    { data: "village" },
                    { data: "sizeOfFarm" },
                  ],
                });

                $("#mytable_gom").css("display", "block");
                html =
                  "<span>" +
                  "Total Number of Farmers in Gombe: " +
                  data.length +
                  "</span>";
                document.getElementById("gom").innerHTML = html;
                Swal.close();
              }
  
              // End DataTable here
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });
      });
  }
  // End of Gombe Farmers retrieval

  /**
 * Start definition for Adamawa Farmers retrieval
 * @param {*} params
 */
 function adamawafarmerSwal(params) {
    // addScript("https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js");
  
    swal
      .fire({
        title: "Loading Farmers Data from Adamawa",
        text: "Please wait...",
        timer: 4000,
        allowOutsideClick: false,
        showConfirmButton: false,
        icon: "info",
      })
      .then(function () {
        $("#mytable_ada").fadeOut("fast");
  
        $("#mytable_ada").ready(function () {
          Swal.fire({
            title: "Please wait",
            text: "Loading data ....",
            icon: "info",
            allowOutsideClick: false,
            showConfirmButton: false,
          });

          const url =
            "https://farm-aid-backend.herokuapp.com/api/farmer/state_public/Adamawa";
          const token = localStorage.getItem("access_token");
          const headers = new Headers();
          headers.append("Content-Type", "application/json");
          headers.append("Authorization", token);
  
          fetch(url, {
            method: "GET",
            headers,
          })
            .then(async (res) => res.json())
            .then((data) => {
              // DataTable here
  
              if ($("#mytable_ada").length) {
                $("#mytable_ada").DataTable({
                  data: data,
                  columns: [
                    { data: "firstname" },
                    { data: "lastname" },
                    { data: "crops" },
                    { data: "state" },
                    { data: "lga" },
                    { data: "village" },
                    { data: "sizeOfFarm" },
                  ],
                });
                $("#mytable_ada").css("display", "block");
  
                html =
                  "<span>" +
                  "Total Number of Farmers in Adamawa: " +
                  data.length +
                  "</span>";
                document.getElementById("ada").innerHTML = html;
                Swal.close();
              }
  
              // End DataTable here
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });
      });
  }
  // End of Adamawa Farmers retrieval

