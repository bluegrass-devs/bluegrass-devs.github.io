companyData.forEach(company => {
  let link = `<a href="${company.url}" target="_blank" class="btn btn-default btn-lg portfolio-link" data-toggle="modal">${company.name}</a>`

  if (company.location === "local") {
    $("#company_local").append(`<li>${link}</li>`);
  } else {
    $("#company_remote").append(`<li>${link}</li>`);
  }
});
