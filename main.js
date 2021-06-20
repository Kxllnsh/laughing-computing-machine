console.clear();

//bookmarking 
const bookmarkingBtn = document.querySelector('.bookmark-btn');

bookmarkingBtn.addEventListener('click', ()=>{
    bookmarkingBtn.classList.toggle('active-bookmark-btn');
})

//bookmarking mobile button
const bMobileBtn = document.querySelector('.mobile-btn');

bMobileBtn.addEventListener('click', ()=>{
    bMobileBtn.classList.toggle('active-mobile-button')
})

//back this project modal
const backThisProjectButton = document.getElementById('card1-btn');
const backThisProject = document.querySelector('.back-this-project');
const overlay = document.querySelector('.background-bkg');
const closeIcon = document.getElementById('close-icon');
const radioInput = document.getElementById('Select');
const html = document.querySelector('html')

backThisProjectButton.addEventListener('click', ()=>{
    backThisProject.classList.add('back-this-project-show');
    overlay.style.display = 'block';
    html.style.overflow = 'hidden'
});

closeIcon.addEventListener('click', ()=>{
    backThisProject.classList.remove('back-this-project-show');
    overlay.style.display = 'none';
    html.style.overflowY = 'scroll'
});
const noRewardActive = document.querySelector('.no-reward-active');
const bStandActive = document.querySelector('.b-stand-active');
const bEditionActive = document.querySelector('.b-edition-active')
//function for no rewards
const noReward = document.getElementById('no-reward').addEventListener('click', ()=>{
    const backContent = document.querySelector(".back-this-project-cards-content h4");
    const bambooHeader = document.getElementById('bamboo-header').classList.remove('color-cyan')
    document.getElementById('b-header').classList.remove('color-cyan');

    backContent.classList.add('color-cyan');
    radioInput.checked = 'true'

    document.getElementById('no-reward-edition').classList.add('show-pledge');
    document.getElementById('bamboo-edition').classList.remove('show-pledge');
    document.getElementById('Black-Edition').classList.remove('show-pledge');

    noRewardActive.classList.add('back-this-project-cards-active');
    bStandActive.classList.remove('back-this-project-cards-active');
    bEditionActive.classList.remove('back-this-project-cards-active');

});

// function for bamboo stand rewards
const bambooStand = document.getElementById('bambooStand').addEventListener('click', ()=>{
    const bambooHeader = document.getElementById('bamboo-header').classList.add('color-cyan')
    const backContent = document.querySelector(".back-this-project-cards-content h4");
    document.getElementById('b-header').classList.remove('color-cyan');

    backContent.classList.remove('color-cyan');
    document.getElementById('bambooSelect').checked = 'true';
    document.getElementById('bamboo-edition').classList.add('show-pledge');
    document.getElementById('Black-Edition').classList.remove('show-pledge');
    document.getElementById('no-reward-edition').classList.remove('show-pledge');

    noRewardActive.classList.remove('back-this-project-cards-active');
    bStandActive.classList.add('back-this-project-cards-active');
    bEditionActive.classList.remove('back-this-project-cards-active');
})

//function for black edition stand rewards
const bEditionStand = document.getElementById('b-edition-stand').addEventListener('click', ()=>{
    document.getElementById('b-header').classList.add('color-cyan');
    const bambooHeader = document.getElementById('bamboo-header').classList.remove('color-cyan')
    const backContent = document.querySelector(".back-this-project-cards-content h4");

    backContent.classList.remove('color-cyan');

    document.getElementById('b-select').checked = 'true';
    document.getElementById('bamboo-edition').classList.remove('show-pledge');
    document.getElementById('Black-Edition').classList.add('show-pledge')
    document.getElementById('no-reward-edition').classList.remove('show-pledge');

    noRewardActive.classList.remove('back-this-project-cards-active');
    bStandActive.classList.remove('back-this-project-cards-active');
    bEditionActive.classList.add('back-this-project-cards-active');
});

//form area
const nRForm = document.getElementById('n-r-form');
const tSupport = document.querySelector('.t-y-section');

//no reward 
nRForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // thank you for your support popup
    backThisProject.classList.remove('back-this-project-show');
    tSupport.classList.add('t-y-show');
});
    //doing a function to close the thank you for support modal
    document.getElementById('t-y-section-button').addEventListener('click', ()=>{
    tSupport.classList.remove('t-y-show');
    overlay.style.display = 'none';
    document.getElementById('no-reward-edition').classList.remove('show-pledge');
    html.style.overflowY = 'scroll'
});

// bamboo stand
const bSForm = document.getElementById('b-s-form');
bSForm.addEventListener('submit', (b)=>{
    b.preventDefault();

    // validation
    const bSEmail = document.getElementById('b-s-amount');

    const formData = {
        email: bSEmail.value
    }

    //email validation
    function isEmailValid(){
        if (bSEmail.value === '' || bSEmail.value === null || bSEmail.value < 25){
            bSEmail.style.border = '2px solid red'
            return false
        }else{
            bSEmail.style.border = ''
            return true
        }
    }
  

    bSEmail.addEventListener('input', ()=>{
        isEmailValid()
    });

    let emailValidate = isEmailValid();

    let checkInputs = emailValidate;

    if(checkInputs){
        backThisProject.classList.remove('back-this-project-show');
        tSupport.classList.add('t-y-show');
        bSEmail.value = '';
        bEEmail.value = '';
        bStandActive.classList.remove('back-this-project-cards-active');
        document.getElementById('bamboo-edition').classList.remove('show-pledge');
    }
});

//black edition
const bEForm = document.getElementById('b-e-form');
const bEEmail = document.getElementById('b-e-amount');
bEForm.addEventListener('submit', (b) => {
    b.preventDefault();

    // validation
    const formData = {
        email: bEEmail.value
    }

    //email validation
    function isEmailValids() {
        if (bEEmail.value === '' || bEEmail.value === null) {
            bEEmail.style.border = '2px solid red'
            return false
        } else if (bEEmail.value < 75){
            bEEmail.style.border = '2px solid red'
        }
        else {
            bEEmail.style.border = ''
            return true
        }
    }


    bEEmail.addEventListener('input', () => {
        isEmailValids()
    });

    let emailValidate = isEmailValids();

    let CheckInputs = emailValidate;

    if (CheckInputs) {
        backThisProject.classList.remove('back-this-project-show');
        tSupport.classList.add('t-y-show');
        bEditionActive.classList.remove('back-this-project-cards-active');
        bSEmail.value = '';
        bEEmail.value = '';
        document.getElementById('Black-Edition').classList.remove('show-pledge');
    }
});

// select rewards adding a function to show the back this project modal and highlight the specific card
const card1Btn = document.getElementById('card1-card');
const card2Btn = document.getElementById('card2-card');

card1Btn.addEventListener('click', ()=>{
    backThisProject.classList.add('back-this-project-show');
    overlay.style.display = 'block';
    html.style.overflow = 'hidden'
});

card2Btn.addEventListener('click', ()=>{
    backThisProject.classList.add('back-this-project-show');
    overlay.style.display = 'block';
    html.style.overflow = 'hidden'
});

// hamburger menu
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', ()=>{
    navList.classList.toggle('nav-list-show');
    overlay.classList.toggle('background-bkg-show');
});