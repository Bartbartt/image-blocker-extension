
// List of blocked domains
const blockedDomains = ["ar.inspiredpencil.com", "craiyon.com", "reddit.com", "stablediffusionweb.com",
    "openart.ai", "search.krea.ai", "creativefabrica.com", "journeyart.ai", "freepik.com", "lexica.art",
    "diffus.me", "miramuseai.net", "prompthunt.com", "krea.ai", "creator.nightcafe.studio",
    "aiartshop.com", "saatchiart.com", "playground.com", "lumenor.ai", "prompthero.ai", "shedevrum.ai",
    "starryai.com", "neural.love", "tensor.art", "artpal.com", "ai-generated", "aigenerated", "ai-art",
    "aiart", "ai-image", "aiimage", "image-generated", "imagegenerated", "generated-image",
    "generatedimage", "seaart.ai", "deepdreamgenerator.com", "prompthero.com", "blackink.ai",
    "stablecog.com", "story.com", "geniusaiprompts.com", "midjourney", " dalle ", "-nft-", "/nft/",
    "-ai-", "/ai/", "ai-photo", "aiphoto", "hotpot.ai", "-dalle-", "/dalle/", "dalleai"]

// Function to check if a URL belongs to a blocked domain
function isBlocked(url) {
  return blockedDomains.some((domain) => url.toLowerCase().includes(domain))
}

// Remove blocked images
function removeBlockedImages() {
    const divNameGoogle = 'eA0Zlc WghbWd FnEtTd mkpRId m3LIae RLdvSe qyKxnc ivg-i PZPZlf GMCzAd'
    const images = document.querySelectorAll("img")
    images.forEach((img) => {
        let parentContainerGoogle = img.parentElement
        for (var i = 0; i <1;){
            if(!parentContainerGoogle.className.includes(divNameGoogle) && parentContainerGoogle.parentElement != null){
                parentContainerGoogle = parentContainerGoogle.parentElement
            }
            else{i++}
        }
        if (parentContainerGoogle.className.includes(divNameGoogle)){
            const imageDomain = parentContainerGoogle.dataset.lpage
            if (isBlocked(imageDomain)){
                console.log(`Blocking image: ${imageDomain}`)
                img.remove()
            }
        }    
    })
}

// Observe the page for changes (e.g., infinite scrolling)
const observer = new MutationObserver(removeBlockedImages)
observer.observe(document.body, { childList: true, subtree: true })

// Run the removal function on initial load
removeBlockedImages()

//idee voor later misschien? getElementsByClassName
//idee voor later mogelijk: de variabele die de div de naam matcht je weet wel, die misschien ergen bovenaan aanduiden en zorgen dat de code flexibel is en makkelijker geupdate kan worden? idk man








