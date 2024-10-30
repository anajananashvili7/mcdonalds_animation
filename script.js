const animateObject = (object, animationClassName) => {
    object.classList.add(animationClassName)
}

showStripes = (stripes) => {
    for(let i = 0; i < stripes.length; i++){
        const stripe = stripes[i]
        setTimeout(()=>animateObject(stripe, 'fade-in-left'), i*100);
    }
}

resetStripeStyles = (stripes)=> {
    for(let i = 0; i < stripes.length; i++){
        const stripe = stripes[i]
        stripe.classList.remove('fade-in-left')
    }
}

const playAnimation = (bannerScreen) => {
    let time = 0;
    const headline = bannerScreen.querySelector('#headline');
    const stripeContainer = bannerScreen.querySelector('.stripes');
    const stripes = bannerScreen.getElementsByClassName('stripe');
    const bigBang = bannerScreen.querySelector('#bigbang')
    const price = bannerScreen.querySelector('#price')
    const productName = bannerScreen.querySelector('#product-name')
    const productName2 = bannerScreen.querySelector('#product-name-2')
    const productName3 = bannerScreen.querySelector('#product-name-3')
    const overlay = bannerScreen.querySelector('#overlay')
    const overlay2 = bannerScreen.querySelector('#overlay-2')
    const overlay3 = bannerScreen.querySelector('#overlay-3')
    const background1 = bannerScreen.querySelector('#background-1')
    const background2 = bannerScreen.querySelector('#background-2')
    const background3 = bannerScreen.querySelector('#background-3')
    const ctaLogo = bannerScreen.querySelector('#cta-logo')
    const cta = bannerScreen.querySelector('#cta')

    // SCENE 1

    // show headline
    setTimeout(()=> {
        animateObject(headline, 'scale-in-bottom');
        bigBang.classList.remove('fade-out');
        bigBang.classList.add('transparent');
        price.classList.remove('fade-out');
        price.classList.add('transparent');
       
    }, time)
    time += 500;

    // show stripes
    setTimeout(()=>{
        showStripes(stripes)
    }, time)
    time+=900

    // remove headline
    setTimeout(()=> {
        animateObject(headline, 'scale-out-bottom')
    }, time)
    time += 500;

    // show "bigbang" and price
    setTimeout(()=> {
        bigBang.classList.remove('transparent')
        animateObject(bigBang, 'scale-in-br')
        animateObject(price, 'scale-in-br')
    }, time)
    time += 500;

    // show product name
    setTimeout(()=> {
        animateObject(productName, 'fade-in-br')
    }, time)
    time += 500;

    // pulsate bigbang
    setTimeout(()=> {
        bigBang.classList.remove('scale-in-br')
        animateObject(bigBang, 'pulsate-fwd')
        animateObject(overlay, 'fade-out-fwd')
        background1.classList.add('hidden')
        animateObject(productName, 'fade-out')
        animateObject(stripeContainer, 'slide-out-right')

    }, time)


    // SCENE 2

    // set stage
    setTimeout(()=> {
        overlay2.classList.remove('hidden')
        background2.classList.remove('hidden')
        productName.classList.remove('fade-in-br')
    }, time)

    time+=900

    // reset stripes
    
    setTimeout(()=>{
        resetStripeStyles(stripes)
        stripeContainer.classList.remove('slide-out-right')
    }, time)

    // show stripes
    setTimeout(()=>{
        showStripes(stripes)
    }, time)
    time+=900

     // show product name
     setTimeout(()=> {
        productName2.classList.remove('hidden')
        animateObject(productName2, 'fade-in-br')
    }, time)
    time += 900;

    
    setTimeout(()=> {
        bigBang.classList.remove('scale-in-br')
        animateObject(bigBang, 'pulsate-fwd')
        animateObject(overlay2, 'fade-out-fwd')
        overlay3.classList.remove('hidden')
        background2.classList.add('hidden')
        background3.classList.remove('hidden')
        productName.classList.remove('fade-in-br')
        animateObject(productName2, 'fade-out')
        animateObject(stripeContainer, 'slide-out-right')

    }, time)

    time+=900


    // reset stripes
    
    setTimeout(()=>{
        resetStripeStyles(stripes)
        stripeContainer.classList.remove('slide-out-right')
    }, time)

    // show stripes
    setTimeout(()=>{
        showStripes(stripes)
    }, time)
    time+=900

    // show product name
     setTimeout(()=> {
        productName3.classList.remove('hidden')
        animateObject(productName3, 'fade-in-br')
    }, time)
    time += 900;


    setTimeout(()=> {
        bigBang.classList.remove('scale-in-br')
        bigBang.classList.remove('pulsate-fwd')
        animateObject(bigBang, 'fade-out')
        animateObject(price, 'fade-out')
        animateObject(overlay3, 'fade-out-fwd')
        background3.classList.add('transparent')
        productName3.classList.remove('fade-in-br')
        animateObject(productName3, 'fade-out')
        animateObject(stripeContainer, 'slide-out-right')

    }, time)

    time+=900

    // Show CTA LOGO
     // show product name
     setTimeout(()=> {
        ctaLogo.classList.remove('hidden')
        animateObject(ctaLogo, 'fade-in-br')
        cta.classList.remove('hidden')
        animateObject(cta, 'slide-in-right')
    }, time)
    time += 900;


    // Clean up and restart the animation
setTimeout(() => {
    // Reset to the first background and hide others
    background1.classList.remove('hidden');
    background2.classList.add('hidden');
    background3.classList.add('hidden');
    
    // Reset overlay visibility
    overlay.classList.remove('hidden'); 
    overlay2.classList.add('hidden');
    overlay3.classList.add('hidden');
    overlay.classList.remove('fade-out-fwd');
    overlay2.classList.remove('fade-out-fwd');
    overlay3.classList.remove('fade-out-fwd');
    headline.classList.remove('scale-out-bottom');
    

    // Reset stripe styles
    resetStripeStyles(stripes);
    stripeContainer.classList.remove('slide-out-right');
    
    // Hide CTA logo and CTA
    ctaLogo.classList.add('hidden');
    cta.classList.add('hidden');
    price.classList.remove('scale-in-br');

    // Restart the animation
    playAnimation(bannerScreen);
}, time + 2000); 

};

    


const bannerScreen = document.querySelector('#banner-screen')
bannerScreen.addEventListener("load", playAnimation(bannerScreen));
