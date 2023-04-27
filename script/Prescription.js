const token = localStorage.getItem("jwt");

console.log("Start");
async function getPrescription(token) {
  await fetch(`https://api.ezdrug.tech/Prescription`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("inside");
      console.log(data);

      const tbody = document.getElementById("prescription");
      data.forEach((item) => {
        console.log(item);
        const dateString = new Date(item.creationDateTime).toLocaleDateString();
        var value = "";
        if (item.dispensing) {
          value = `<button class="btn btn-secondary  w-50 text-white " disabled >Recived</button>`;
        } else {
          value = `<button  class="btn primary-bg  w-50 text-white" >Order</button>`;
        }
        const row = `
      <tr class="">                        
        <td class="text-center py-5 my-5">
          <div
            class="img rounded-circle mb-2"
            style="
              background-image: url(${item.doctor.imageURL});
            "
          ></div>
          <strong>${item.doctor.firstName} ${item.doctor.lastName}</strong>
        </td>
        <td>${dateString}</td>
        <td>
          <button onclick="goTo('PrescriptionDetails.html?id=${item.id}')" class="btn bg-secondry   text-white w-50">View </button>
        </td>
        <td>
        <form action="https://api.ezdrug.tech/Prescription/Dispensing/${item.id}"  method="POST">
        <input type="hidden" name="URLs.domainName" value="http://127.0.0.1:5500" />

        <input type="hidden" name="URLs.successUrl" value="PConfirm.html?id=" />
  
        <input type="hidden" name="URLs.faildUrl" value="Pdeny.html?id=" />
        <input type="hidden" name="URLs.token" value="${token}">
        
        ${value}

        </form>
        </td
      </tr>
      `;
        tbody.innerHTML += row;
      });
    })
    .catch((error) => console.error(error));
}

getPrescription(token);

console.log("end");
