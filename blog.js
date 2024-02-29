

const blogposts = [
    {   title: "Coding Sick",
        date: "November 5th, 2023",
        images: [
            {
                number: 1,
                afterParagraph: 2,
                src: "img/blog/051123basicunitconverter.PNG", 
                alt: "Screenshot of a basic unit converter, converting Length, Volume and Mass between Metric and Imperial units"
            }
        ],
        previewPost: "I've been sick with the plague, but I still had the urge to be productive and do some coding. I had previously (temporarily) skipped a project in the Scrimba front end path in order to start the next chapter that seemed to be about databases and APIs, something that would come in super useful to me with some of the projects I want to work on. Also, I could tell this was a project I could be doing quite easily, and I had some ideas on how to make it a bit bigger and better, but it also felt like it would take time I could rather be using to progress. ",
        post: `
                <p>
                I've been sick with the plague, but I still had the urge to be productive and do some coding. I had previously (temporarily) skipped a project in the Scrimba front end path in order to start the next chapter that seemed to be about databases and APIs, something that would come in super useful to me with some of the projects I want to work on. Also, I could tell this was a project I could be doing quite easily, and I had some ideas on how to make it a bit bigger and better, but it also felt like it would take time I could rather be using to progress. 
                </p>

                <p>
                    Anyway! Turns out this was the perfect little project for my sick self. Does it take me three tries to count on my hands when I needed to take new medication? Absolutely. My brain is like mush with fever and whatever brainfog this Covid has decided to bring with it. Can I still manage to do a coding project in a single evening? Yes. And I love that. 
                </p>

                <p>
                    (Let's disregard that it took me 30-60min of problemsolving to figure out the reason my eventlistener wasn't working was because I never actually connected the javascript file to the HTML...) 
                </p>

                <p>
                    At least my basic unit converter project is now done. I still really want to circle back and do this with a lot more options for conversions and where the conversions are a bit more "fluent", listening for changes in input - rather than depending on a button to convert. Maybe I'll give this project a fresh go at a later time.
                </p>`
    },

    {   title: "Updates to my Website", 
        date: "October 14th, 2023", 
        images: [
            {
                src: "img/blog/141023PortfolioGrid.PNG", 
                alt: "Screenshot of my PortfolioTab looks today, 14.10.23"
            }
        ],
        post: `
            <p>
                It was about time I made some changes to my website. As my programming knowledge improves, the more features I can implement and the more I can tweak things to how I'd like them to look and feel. 
            </p>

            <p>
                My about-tab has been looking really sad for a while, and for now I've settled for making an actual introduction-text wrapped around a photo of me. It was nice spending some time in my photo-editing software again to make the design, and I got to use some of the digital resources I've been saving up for quite a while. Speaking of editing software, - I highly recommend <a href="https://affinity.serif.com/en-gb/" target="_blank">the Affinity suite</a>. It's affordable and powerful. 
            </p>

            <img class="blogPhoto floatRight" src="img/blog/141023PortfolioGrid.PNG" alt="Screenshot of my PortfolioTab looks today, 14.10.23"/>

            <p>
                My Portfolio was also in need of an update. It wasn't looking very put-together, and it scaled badly with the screen size. Now I've used CSS Grid instead of CSS Flex, and the following CSS allows a more scalable design where the items adjust themselves according to where there's available space for their size: <span style="font-style: italic"><br>&emsp;&emsp;grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); <br>&emsp;&emsp;grid-auto-flow: dense;</span>
            </p>

            <p>
                I've also implemented more of a card-feeling to the different projects, so that all the related project-info is more "gathered" visually. I have different classes for if I want to highlight some projects by making them bigger and more eyecatching, - or if some projects simply require more space vertically or horizontally. Those classes will come in handy as my Portfolio steadily fills up. 
            </p>
            
            <p>
                I have a ton of different ideas of things to fix and implement when it comes to my blog-tab, which I'll have to take one step at a time. For now I've settled for placing my images slightly better, and I've created CSS-classes for the images to float left, right or center of the page. I still think there's much room for improvement on how the images should flow with the text, so this won't be the final change I do to them. I also want to implement enlarging them by clicking, but I haven't decided yet whether to enlarge them in the blog-post itself, where the text will move to allow for a larger image-view, - or whether I should implement modals to show the images on top of the site. My resources-tab also needs some sprucing up, but I'm still thinking about how I want it to look before addressing that.
            </p>

            <p>
                I've also finally added my e-mail address to the mail-icon, and <a href="https://css-tricks.com/how-to-safely-share-your-email-address-on-a-website/" target="_blank">this article on obfuscation</a> (the practice of making something difficult to understand) was super helpful in this regard. <br>Feel free to get in touch &#128516; (... unless you're a spammer, obviously 	&#128521;)

            </p>`
    }


]


function renderBlogPosts(){
    
};


export { renderBlogPosts }