const cards = document.querySelector(".cards")

let card = [
    {
        id: 1,
        img1: "https://s3-alpha-sig.figma.com/img/24e5/0b3c/a22c95a96b25b207b760ab6545995150?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGQdDjO~0R1tRvdaI2dkmIJDJ6zqBROPn5igPds5e3r3YxF7rxmtDVMEfN5--0aftlMqqEJiUP4I0jIP9isvms9ji1ufgrFaD8Rj~HdhkYihquNm2CZeBINAAA~T4inXnljz2wcOt2D7UOksNRIkg0CB1G8CSy1ImqXzUU7cATv53ZJ~nx~WNk0nreeGkuZPRG66xfBQ83BmAN7ZxYA6bPywhkm3AfX1jM89fhCmgkZARpkSWuAklM15K9kB-uE3rtFCsSZCSRROuRfxYaiWMe0wO9v8k30ENs0~XPYfIL~gqKotyx3bOSeHs~vn2VnZ2BizJpnkxXe4WyWdTN~l1w__",
        img2: "https://s3-alpha-sig.figma.com/img/4a98/df37/b3de947c39102b151251150791b5ba1e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NMTBquuzCkSkJpVHGgvkeP6XyWeeiNFjQRVxtuF7RlMs5-LMVOtskTqKrNB~Dmr4s4b2dUFXnrVVT~TywGqRxU-W~HwlJWijuzdeQekAwlYll-Pg6uK4i39WlfwFmbGohl57uXwu6CHp6sl0avkrzd8rrFoZ75VQA-2~BzRYci3Mz6KL5~yzZMQn51~0aeqevmMUv4Rd9F8r57JqzppUOCHf3aTCO0vDt~kukjCDDlnFf6oXLL7AzomYAV059k80vdyt6bOYgIma2RJD9XXLhYEhRRq-jpi4wijZU-F~6xrVkWwGSW5akdeSj2GZ9lgxuOSs9JnQnVm1RrwXa9J9kw__",
        title: "Lorem ipsum dolor sit amet consectetur",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem, ex nihil aspernatur id a quaequisquam ipsum iste eos.",
    },
    {
        id: 2,
        img1: "https://s3-alpha-sig.figma.com/img/24e5/0b3c/a22c95a96b25b207b760ab6545995150?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGQdDjO~0R1tRvdaI2dkmIJDJ6zqBROPn5igPds5e3r3YxF7rxmtDVMEfN5--0aftlMqqEJiUP4I0jIP9isvms9ji1ufgrFaD8Rj~HdhkYihquNm2CZeBINAAA~T4inXnljz2wcOt2D7UOksNRIkg0CB1G8CSy1ImqXzUU7cATv53ZJ~nx~WNk0nreeGkuZPRG66xfBQ83BmAN7ZxYA6bPywhkm3AfX1jM89fhCmgkZARpkSWuAklM15K9kB-uE3rtFCsSZCSRROuRfxYaiWMe0wO9v8k30ENs0~XPYfIL~gqKotyx3bOSeHs~vn2VnZ2BizJpnkxXe4WyWdTN~l1w__",
        img2: "https://s3-alpha-sig.figma.com/img/4a98/df37/b3de947c39102b151251150791b5ba1e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NMTBquuzCkSkJpVHGgvkeP6XyWeeiNFjQRVxtuF7RlMs5-LMVOtskTqKrNB~Dmr4s4b2dUFXnrVVT~TywGqRxU-W~HwlJWijuzdeQekAwlYll-Pg6uK4i39WlfwFmbGohl57uXwu6CHp6sl0avkrzd8rrFoZ75VQA-2~BzRYci3Mz6KL5~yzZMQn51~0aeqevmMUv4Rd9F8r57JqzppUOCHf3aTCO0vDt~kukjCDDlnFf6oXLL7AzomYAV059k80vdyt6bOYgIma2RJD9XXLhYEhRRq-jpi4wijZU-F~6xrVkWwGSW5akdeSj2GZ9lgxuOSs9JnQnVm1RrwXa9J9kw__",
        title: "Lorem ipsum dolor sit amet consectetur",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem, ex nihil aspernatur id a quaequisquam ipsum iste eos.",
    },
    {
        id: 3,
        img1: "https://s3-alpha-sig.figma.com/img/24e5/0b3c/a22c95a96b25b207b760ab6545995150?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGQdDjO~0R1tRvdaI2dkmIJDJ6zqBROPn5igPds5e3r3YxF7rxmtDVMEfN5--0aftlMqqEJiUP4I0jIP9isvms9ji1ufgrFaD8Rj~HdhkYihquNm2CZeBINAAA~T4inXnljz2wcOt2D7UOksNRIkg0CB1G8CSy1ImqXzUU7cATv53ZJ~nx~WNk0nreeGkuZPRG66xfBQ83BmAN7ZxYA6bPywhkm3AfX1jM89fhCmgkZARpkSWuAklM15K9kB-uE3rtFCsSZCSRROuRfxYaiWMe0wO9v8k30ENs0~XPYfIL~gqKotyx3bOSeHs~vn2VnZ2BizJpnkxXe4WyWdTN~l1w__",
        img2: "https://s3-alpha-sig.figma.com/img/4a98/df37/b3de947c39102b151251150791b5ba1e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NMTBquuzCkSkJpVHGgvkeP6XyWeeiNFjQRVxtuF7RlMs5-LMVOtskTqKrNB~Dmr4s4b2dUFXnrVVT~TywGqRxU-W~HwlJWijuzdeQekAwlYll-Pg6uK4i39WlfwFmbGohl57uXwu6CHp6sl0avkrzd8rrFoZ75VQA-2~BzRYci3Mz6KL5~yzZMQn51~0aeqevmMUv4Rd9F8r57JqzppUOCHf3aTCO0vDt~kukjCDDlnFf6oXLL7AzomYAV059k80vdyt6bOYgIma2RJD9XXLhYEhRRq-jpi4wijZU-F~6xrVkWwGSW5akdeSj2GZ9lgxuOSs9JnQnVm1RrwXa9J9kw__",
        title: "Lorem ipsum dolor sit amet consectetur",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem, ex nihil aspernatur id a quaequisquam ipsum iste eos.",
    },
]

// for (let i = 0; i < card.length; i++){
//     cards.innerHTML += `
//             <div class="card">
//             <div class="box-imgs">
//                 <div class="box-img1">
//                     <img class="img1"
//                         src= ${card[i].img1}
//                         alt="">
//                 </div>
//                 <div class="box-img2">
//                     <img class="img2"
//                         src= ${card[i].img2}
//                         alt="">
//                 </div>
//             </div>
//             <div class="desc">
//                 <h3>${card[i].title}</h3>
//                 <p>${card[i].Description}</p>
//             </div>
//         </div>
//     `
// }

card.forEach((data) => (
        cards.innerHTML += `
            <div class="card">
            <div class="box-imgs">
                <div class="box-img1">
                    <img class="img1"
                        src= ${data.img1}
                        alt="">
                </div>
                <div class="box-img2">
                    <img class="img2"
                        src= ${data.img2}
                        alt="">
                </div>
            </div>
            <div class="desc">
                <h3>${data.title}</h3>
                <p>${data.Description}</p>
            </div>
        </div>
    `
))