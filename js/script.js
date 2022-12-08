
$("#encounter-layout").hide()
$("#transition-layout").hide()
$("#title-button").on("click", lore)

function encounter() {
    $("#encounter-layout").show()
    $("#transition-layout").hide()
    $("#lore").hide()
    $(".transition-img-box").show()
    $("#body-img").addClass("encounter-img")
    $("#body-img").removeClass("transition-img")
    console.log(encounter)
}
function transition() {
    $("#encounter-layout").hide()
    $("#transition-layout").show()
    $("#lore").hide()
    $("#body-img").addClass("transition-img")
    $("#body-img").removeClass("encounter-img")
    document.getElementById("body-img").src = "img/transition.gif"
    console.log(transition)
}
function lore() {
    $("#lore2").hide()
    $("#title-page").hide()
    $("header").show()
    $("#body-img").show()
    $("#scrolling2").hide()
    document.getElementById("lore-img").src = "img/intro.png"
    $("#encounter-layout").hide()
    $("#transition-layout").hide()
    $("#lore").show()
    $("#slow-load-img").hide().delay(5000).fadeIn(15000);
    $("#lore-button").hide().delay(20900).fadeIn(800);
    intro()
    $("#lore-button").addClass("start")
    $(".start").on("click", function () {
        encounter()
        cat()
    })
}
function home() {
    document.getElementById("lore-img2").src = "img/end.png"
    $("#scrolling2").show()
    $("#lore").hide()
    $("#encounter-layout").hide()
    $("#transition-layout").hide()
    $("#body-img").hide()
    $("#lore2").show()
    $("#slow-load-img2").hide().delay(5000).fadeIn(5000);
    $("#lore-button2").hide().delay(11500).fadeIn(1000);
    end()
    console.log("end through home")
    $("#play-button2").text("Replay")
    $("#lore-button2").addClass("reset-game")
    $(".reset-game").on("click", function () {
        location.reload()
    })
}

// delayed typing: https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var b = 0
var introtext = "CRACK! You hear the bullets scream through the air and your heart pounds as your paws thud against the ground in rhythmic panic. The shouts of the hunters ring in your ears as you sprint into the cover of the trees. Home is a distant memory, you are hopelessly lost, and the forest isn't as safe as it seems…";
var endtext = "The fear and adrenaline of the day subside as you sink into the loving embrace of your family. Here in your warm burrow, surrounded by loved ones, you are finally safe.";
var speed = 65;
var zoom = 65

function intro() {
  if (i < introtext.length) {
    document.getElementById("scrolling").innerHTML += introtext.charAt(i);
    i++;
    setTimeout(intro, speed);
  }
}
$("#lore").on("click", function() {
    fast()
    $("#slow-load-img").show()
    $("#lore-button").show()
})
    function fast() {
    speed = 5
    }

$("#lore2").on("click", function() {
    fast2()
    $("#slow-load-img2").show()
    $("#lore-button2").show()
 })
    function fast2() {
        zoom = 5
    }

function end() {
  if (b < endtext.length) {
    document.getElementById("scrolling2").innerHTML += endtext.charAt(b);
    b++;
    setTimeout(end, zoom);
    console.log("running end")
  }
}

function death() {
    console.log("you died")
    $("#encounter-layout").hide()
    $("#transition-layout").show()
    $("#body-img").addClass("transition-img")
    $("#body-img").removeClass("encounter-img")
    document.getElementById("body-img").src = "img/death.png"
    $("#continue-button").text("Play Again")
    $("#continue-button").addClass("play-again")
    $(".play-again").on("click", function() {
        location.reload()
    })
}
function resetbuttons() {
    $("#continue-button").unbind()
    $("#option-1").unbind()
    $("#option-2").unbind()
    $("#option-3").unbind()
    $("#option-4").unbind()
}


// Pathways

function cat() {
    encounter()
    resetbuttons()
    $("#encounter-text").text("You Encounter A Cat!")
    document.getElementById("body-img").src = "img/cat.png"

    $("#option-1").text("Bow Respectfully")
    $("#option-1").addClass("cat-option-1")
    $(".cat-option-1").on("click", function () {
        transition()
        $("#transition-text").text("The cat appreciates the gesture and lets you past.")
        $("#continue-button").addClass("continue-raccoon")
        $(".continue-raccoon").on("click", raccoon)
    })

    $("#option-2").text("Run Past It")
    $("#option-2").addClass("cat-option-2")
    $(".cat-option-2").on("click", function () {
        death()
        $("#transition-text").text("The cat lashes out with it's claws on your way past.")
    })

    $("#option-3").text("Warn the Cat About the Hunters")
    $("#option-3").addClass("cat-option-3")
    $(".cat-option-3").on("click", function () {
        transition()
        $("#transition-text").text("The cat heeds the warning and slips off deeper into the woods.")
        $("#continue-button").addClass("continue-porcupine")
        $(".continue-porcupine").on("click", porcupine)
    })

    $("#option-4").text("Sneak Away")
    $("#option-4").addClass("cat-option-4")
    $(".cat-option-4").on("click", function () {
        death()
        $("#transition-text").text("You turn back the way you came, running right into the hunters searching for you.")
    })
}

function clearing() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/clearing.png"
    $("#encounter-text").text("You Encounter A Clearing!")
  
    $("#option-1").text("Return the Way you Came")
    $("#option-1").addClass("clearing-option-1")
    $(".clearing-option-1").on("click", function () {
        death()
        $("#transition-text").text("You run straight into the hunters, looks like rabbit stew for them tonight.")
    })
  
    $("#option-2").text("Run Through the Bushes")
    $("#option-2").addClass("clearing-option-2")
    $(".clearing-option-2").on("click", function () {
        transition()
        $("#transition-text").text("You hear something up ahead…")
        $("#continue-button").addClass("continue-porcupine")
        $(".continue-porcupine").on("click", porcupine)
    })
  
    $("#option-3").text("Follow the Path")
    $("#option-3").addClass("clearing-option-3")
    $(".clearing-option-3").on("click", function () {
        transition()
        $("#transition-text").text("You hear something up ahead…")
        $("#continue-button").addClass("continue-wolf")
        $(".continue-wolf").on("click", wolf)
    })
  
    $("#option-4").text("Make your way through the trees")
    $("#option-4").addClass("clearing-option-4")
    $(".clearing-option-4").on("click", function () {
        death()
        $("#transition-text").text("AUGH a bear trap concealed in the underbrush!")
    })
 }

 function wolf() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/wolf.png"
    $("#encounter-text").text("You Encounter A Wolf!")
  
    $("#option-1").text("Freeze and Hope it Didn’t See You")
    $("#option-1").addClass("wolf-option-1")
    $(".wolf-option-1").on("click", function () {
        death()
        $("#transition-text").text("The wolf notices you quivering and scoops you up in its maw.")
    })
  
    $("#option-2").text("Jump Over It")
    $("#option-2").addClass("wolf-option-2")
    $(".wolf-option-2").on("click", function () {
        death()
        $("#transition-text").text("The wolf catches you perfectly in its mouth and swallows you in one bite.")
    })
  
    $("#option-3").text("Hide")
    $("#option-3").addClass("wolf-option-3")
    $(".wolf-option-3").on("click", function () {
        transition()
        $("#transition-text").text("You hunker down behind a tree and slowly crawl back up the path the way you came.")
        $("#continue-button").addClass("continue-clearing")
        $(".continue-clearing").on("click", clearing)
    })
  
    $("#option-4").text("Run")
    $("#option-4").addClass("wolf-option-4")
    $(".wolf-option-4").on("click", function () {
        death()
        $("#transition-text").text("The wolf delights in the hunt and just when you think you’ve outrun it, it pouches out of the shadow of the trees, pinning you to the ground.")
    })
 }

 function porcupine() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/porcupine.png"
    $("#encounter-text").text("You Encounter A Porcupine!")
  
    $("#option-1").text("Keep Running")
    $("#option-1").addClass("porcupine-option-1")
    $(".porcupine-option-1").on("click", function () {
        death()
        $("#transition-text").text("The porcupine startles as you break into the clearing and its quills hit you.")
    })
  
    $("#option-2").text("Veer Left")
    $("#option-2").addClass("porcupine-option-2")
    $(".porcupine-option-2").on("click", function () {
        transition()
        $("#transition-text").text("You continue on your way through the woods.")
        $("#continue-button").addClass("continue-clearing")
        $(".continue-clearing").on("click", clearing)
    })
  
    $("#option-3").text("Jump Into Bushes")
    $("#option-3").addClass("porcupine-option-3")
    $(".porcupine-option-3").on("click", function () {
        transition()
        $("#transition-text").text("Hunkering down in the leaves you continue on your journey.")
        $("#continue-button").addClass("continue-cat")
        $(".continue-cat").on("click", cat)
    })
  
    $("#option-4").text("Greet It")
    $("#option-4").addClass("porcupine-option-4")
    $(".porcupine-option-4").on("click", function () {
        death()
        $("#transition-text").text("Distracted, your foot catches a root and you tumble right into the porcupine.")
    })
 }
 
 function raccoon() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/raccoon.png"
    $("#encounter-text").text("You Encounter A Raccoon!")
  
    $("#option-1").text("It Looks Hostile…")
    $("#option-1").addClass("raccoon-option-1")
    $(".raccoon-option-1").on("click", function () {
        transition()
        $("#transition-text").text("You back away from the raccoon, quickly scampering down the path.")
        $("#continue-button").addClass("continue-cat")
        $(".continue-cat").on("click", cat)
    })
  
    $("#option-2").text("Ask For Directions")
    $("#option-2").addClass("raccoon-option-2")
    $(".raccoon-option-2").on("click", function () {
        transition()
        $("#transition-text").text("The raccoons shrugs and points into the trees.")
        $("#continue-button").addClass("continue-lynx")
        $(".continue-lynx").on("click", lynx)
    })
  
    $("#option-3").text("Ignore And Keep Moving")
    $("#option-3").addClass("raccoon-option-3")
    $(".raccoon-option-3").on("click", function () {
        death()
        $("#transition-text").text("You leave the raccoon behind and fall through a pile of leaves and tumble down a steep ridge.")
    })
  
    $("#option-4").text("Introduce Yourself")
    $("#option-4").addClass("raccoon-option-4")
    $(".raccoon-option-4").on("click", function () {
        transition()
        $("#transition-text").text("The raccoon offers a paw to shake before scampering into the underbrush and you do the same.")
        $("#continue-button").addClass("continue-badger")
        $(".continue-badger").on("click", badger)
    })
 }
 function lynx() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/lynx.png"
    $("#encounter-text").text("You Encounter A Lynx!")
  
    $("#option-1").text("Bow Before It")
    $("#option-1").addClass("lynx-option-1")
    $(".lynx-option-1").on("click", function () {
        death()
        $("#transition-text").text("The lynx grows annoyed you interrupted it and swipes at you with its claws.")
    })
  
    $("#option-2").text("Hide")
    $("#option-2").addClass("lynx-option-2")
    $(".lynx-option-2").on("click", function () {
        death()
        $("#transition-text").text("This lynx loves playing hide and seek with its prey and delights in pulling you from the underbrush.")
    })
  
    $("#option-3").text("Run Past")
    $("#option-3").addClass("lynx-option-3")
    $(".lynx-option-3").on("click", function () {
        transition()
        $("#transition-text").text("The lynx watches you scurry by but doesn’t move to follow.")
        $("#continue-button").addClass("continue-owl")
        $(".continue-owl").on("click", owl)
    })
  
    $("#option-4").text("Enter Nearby Burrow")
    $("#option-4").addClass("lynx-option-4")
    $(".lynx-option-4").on("click", function () {
        transition()
        $("#transition-text").text("The burrow leads you away from the lynx.")
        $("#continue-button").addClass("continue-raccoon")
        $(".continue-raccoon").on("click", raccoon)
    })
 }

 function badger() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/badger.png"
    $("#encounter-text").text("You Encounter A Badger!")
  
    $("#option-1").text("Compliment Its Stripes")
    $("#option-1").addClass("badger-option-1")
    $(".badger-option-1").on("click", function () {
        transition()
        $("#transition-text").text("It moves along happily.")
        $("#continue-button").addClass("continue-branch-path")
        $(".continue-branch-path").on("click", branchpath)
    })
  
    $("#option-2").text("Move Along")
    $("#option-2").addClass("badger-option-2")
    $(".badger-option-2").on("click", function () {
        transition()
        $("#transition-text").text("The badger glares at you as you leave.")
        $("#continue-button").addClass("continue-raccoon")
        $(".continue-raccoon").on("click", raccoon)
    })
  
    $("#option-3").text("Say Hello")
    $("#option-3").addClass("badger-option-3")
    $(".badger-option-3").on("click", function () {
        death()
        $("#transition-text").text("The badger lashes out, it is incredibly anti-social and hates small talk.")
    })
  
    $("#option-4").text("Stop For A Moment To Rest")
    $("#option-4").addClass("badger-option-4")
    $(".badger-option-4").on("click", function () {
        transition()
        $("#transition-text").text("The badger ignores you and you move along after a moment of steadying your nerves.")
        $("#continue-button").addClass("continue-fox")
        $(".continue-fox").on("click", fox)
    })
 }

 function fox() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/fox.png"
    $("#encounter-text").text("You Encounter A Fox!")
  
    $("#option-1").text("Kick The Fox")
    $("#option-1").addClass("fox-option-1")
    $(".fox-option-1").on("click", function () {
        transition()
        $("#transition-text").text("You hit the fox right in the nose and take off into the woods while it's stunned.")
        $("#continue-button").addClass("continue-owl")
        $(".continue-owl").on("click", owl)
    })
  
    $("#option-2").text("Run")
    $("#option-2").addClass("fox-option-2")
    $(".fox-option-2").on("click", function () {
        death()
        $("#transition-text").text("The fox easily catches up to you and sinks its teeth into your hind leg.")
    })
  
    $("#option-3").text("Jump Over It")
    $("#option-3").addClass("fox-option-3")
    $(".fox-option-3").on("click", function () {
        transition()
        $("#transition-text").text("You manage to clear the fox and take off through the underbrush.")
        $("#continue-button").addClass("continue-badger")
        $(".continue-badger").on("click", badger)
    })
  
    $("#option-4").text("Hide")
    $("#option-4").addClass("fox-option-4")
    $(".fox-option-4").on("click", function () {
        death()
        $("#transition-text").text("You hear a sniffing nearby and panic as the fox descends upon you.")
    })
 }
 
 function branchpath() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/branchpath.png"
    $("#encounter-text").text("You Encounter A Branching Pathway!")
  
    $("#option-1").text("Slip Into Burrow")
    $("#option-1").addClass("branchpath-option-1")
    $(".branchpath-option-1").on("click", function () {
        death()
        $("#transition-text").text("A sleepy badger does not take kindly to home invaders.")
    })
  
    $("#option-2").text("Sneak Through The Bushes")
    $("#option-2").addClass("branchpath-option-2")
    $(".branchpath-option-2").on("click", function () {
        transition()
        $("#transition-text").text("The bushes are kind of sharp but you pass without much injury.")
        $("#continue-button").addClass("continue-bear")
        $(".continue-bear").on("click", bear)
    })
  
    $("#option-3").text("Follow The Treeline")
    $("#option-3").addClass("branchpath-option-3")
    $(".branchpath-option-3").on("click", function () {
        transition()
        $("#transition-text").text("You follow tree to tree until you reach the next clearing.")
        $("#continue-button").addClass("continue-badger")
        $(".continue-badger").on("click", badger)
    })
  
    $("#option-4").text("Continue On Current Path")
    $("#option-4").addClass("branchpath-option-4")
    $(".branchpath-option-4").on("click", function () {
        transition()
        $("#transition-text").text("The pathway continues and on it you can see footprints…")
        $("#continue-button").addClass("continue-hunter")
        $(".continue-hunter").on("click", hunter)
    })
 }

 function owl() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/owl.png"
    $("#encounter-text").text("You Encounter An Owl!")
  
    $("#option-1").text("Check If Its Sleeping")
    $("#option-1").addClass("owl-option-1")
    $(".owl-option-1").on("click", function () {
        transition()
        $("#transition-text").text("You peer up at the owl and see its eyes are closed so you quietly move away from the tree.")
        $("#continue-button").addClass("continue-lynx")
        $(".continue-lynx").on("click", lynx)
    })
  
    $("#option-2").text("Duck Under The Branches")
    $("#option-2").addClass("owl-option-2")
    $(".owl-option-2").on("click", function () {
        transition()
        $("#transition-text").text("After a couple suspenseful seconds the owl flies away and you are able to continue down the path.")
        $("#continue-button").addClass("continue-hunter")
        $(".continue-hunter").on("click", hunter)
    })
  
    $("#option-3").text("Cover Your Face")
    $("#option-3").addClass("owl-option-3")
    $(".owl-option-3").on("click", function () {
        transition()
        $("#transition-text").text("You quiver on the ground but nothing attacks you, tentatively you lift your paws away from your eyes to see the owl gone, thankful you hurry off.")
        $("#continue-button").addClass("continue-fox")
        $(".continue-fox").on("click", fox)
    })
  
    $("#option-4").text("Scare It Away")
    $("#option-4").addClass("owl-option-4")
    $(".owl-option-4").on("click", function () {
        death()
        $("#transition-text").text("You thump your back legs on the ground waking the owl and attracting its ire.")
    })
 }

 function hunter() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/hunter.png"
    $("#encounter-text").text("You Encounter The Hunters!")
  
    $("#option-1").text("Freeze And Hope They Don’t See You")
    $("#option-1").addClass("hunter-option-1")
    $(".hunter-option-1").on("click", function () {
        transition()
        $("#transition-text").text("The hunters linger in the area but soon hear rustling in another direction and you are able to crawl away without incident.")
        $("#continue-button").addClass("continue-branch-path")
        $(".continue-branch-path").on("click", branchpath)
    })
  
    $("#option-2").text("Run Back The Way You Came")
    $("#option-2").addClass("hunter-option-2")
    $(".hunter-option-2").on("click", function () {
        death()
        $("#transition-text").text("The hunters notice you scampering up the pathway and line up their rifles and catchyour stride.")
    })
  
    $("#option-3").text("Play Dead")
    $("#option-3").addClass("hunter-option-3")
    $(".hunter-option-3").on("click", function () {
        death()
        $("#transition-text").text("Your frantic breathing gives you away and the hunters finalize your ruse.")
    })
  
    $("#option-4").text("Run Into The Clearing")
    $("#option-4").addClass("hunter-option-4")
    $(".hunter-option-4").on("click", function () {
        transition()
        $("#transition-text").text("They startle and you hear gunshots wizz by as you make it back into the safety of the undergrowth.")
        $("#continue-button").addClass("continue-owl")
        $(".continue-owl").on("click", owl)
    })
 }

 function bear() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/bear.png"
    $("#encounter-text").text("You Encounter A Bear!")
  
    $("#option-1").text("Offer Knowledge Of Nearby Berries")
    $("#option-1").addClass("bear-option-1")
    $(".bear-option-1").on("click", function () {
        death()
        $("#transition-text").text("The bear pats you on the head but doesn’t realize its own strength and crushes you.")
    })
  
    $("#option-2").text("Bow Respectfully")
    $("#option-2").addClass("bear-option-2")
    $(".bear-option-2").on("click", function () {
        transition()
        $("#transition-text").text("The bear nods in acknowledgement and you hop past through the brush.")
        $("#continue-button").addClass("continue-sheltered")
        $(".continue-sheltered").on("click", sheltered)
    })
  
    $("#option-3").text("Wish Happy Hibernation ")
    $("#option-3").addClass("bear-option-3")
    $(".bear-option-3").on("click", function () {
        transition()
        $("#transition-text").text("The bear nods in appreciation and you continue through the trees.")
        $("#continue-button").addClass("continue-snake")
        $(".continue-snake").on("click", snake)
    })
  
    $("#option-4").text("Ask Directions")
    $("#option-4").addClass("bear-option-4")
    $(".bear-option-4").on("click", function () {
        transition()
        $("#transition-text").text("The bear gestures into the trees and you follow its lead.")
        $("#continue-button").addClass("continue-branch-path")
        $(".continue-branch-path").on("click", branchpath)
    })
 }

 function snake() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/snake.png"
    $("#encounter-text").text("You Encounter A Snake!")
  
    $("#option-1").text("Freeze And Wait")
    $("#option-1").addClass("snake-option-1")
    $(".snake-option-1").on("click", function () {
        transition()
        $("#transition-text").text("You stop in your tracks and scamper back the way you came at the warning rattle of the snakes tail.")
        $("#continue-button").addClass("continue-bear")
        $(".continue-bear").on("click", bear)
    })
  
    $("#option-2").text("Continue Past It")
    $("#option-2").addClass("snake-option-2")
    $(".snake-option-2").on("click", function () {
        death()
        $("#transition-text").text("The snake sends a warning rattle before snapping forward and sinking its teeth into your fur.")
    })
  
    $("#option-3").text("Stomp It")
    $("#option-3").addClass("snake-option-3")
    $(".snake-option-3").on("click", function () {
        death()
        $("#transition-text").text("You hit it with your strong hind leg but it lashes out and injects you with its venom before you can get away.")
    })
  
    $("#option-4").text("Hop Over It")
    $("#option-4").addClass("snake-option-4")
    $(".snake-option-4").on("click", function () {
        death()
        $("#transition-text").text("The snake reflexively snatches you out of the air, its teeth around your neck.")
    })
 }
 
 function sheltered() {
    encounter()
    resetbuttons()
    document.getElementById("body-img").src = "img/sheltered-meadow.png"
    $("#encounter-text").text("You Encounter A Sheltered Meadow!")
  
    $("#option-1").text("Go Through The Meadow")
    $("#option-1").addClass("sheltered-option-1")
    $(".sheltered-option-1").on("click", function () {
        transition()
        $("#transition-text").text("This part of the forest seems familiar…")
        $("#continue-button").addClass("continue-home")
        $(".continue-home").on("click", home)
    })
  
    $("#option-2").text("Follow The Flowers")
    $("#option-2").addClass("sheltered-option-2")
    $(".sheltered-option-2").on("click", function () {
        death()
        $("#transition-text").text("Metal surrounds you as a hunters trap narrows your worldview.")
    })
  
    $("#option-3").text("Continue Through Underbrush")
    $("#option-3").addClass("sheltered-option-3")
    $(".sheltered-option-3").on("click", function () {
        death()
        $("#transition-text").text("Something’s claws snap down on your front paw and you feel a set of sharp teeth descend upon you.")
    })
  
    $("#option-4").text("Follow The Path")
    $("#option-4").addClass("sheltered-option-4")
    $(".sheltered-option-4").on("click", function () {
        transition()
        $("#transition-text").text("You scamper up the path slightly disoriented of your surroundings.")
        $("#continue-button").addClass("continue-bear")
        $(".continue-bear").on("click", bear)
    })
 }



 