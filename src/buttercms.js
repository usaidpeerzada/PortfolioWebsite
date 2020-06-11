import Butter from "buttercms";
export const butter = Butter("e937ec3b543281f794123fca089fcf650d909a65");
butter.post
  .list({
    page: 1,
    page_size: 10
  })
  .then(function(response) {
    console.log(response);
  });
