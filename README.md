# Flip and Match
![Flip and Match project displayed on different screen sizes](/documentation/amiresponsive/amiresponsive-screenshot.png)

## Introduction
Flip and Match is a fun and interactive memory game designed to support curious young minds. With the use of shapes, colours, and exciting images, we aim to encourage learning through exploration. The user’s goal is to reveal the image on the flip-side of a card and match it with its pairs. 

## User Experience Design
The five planes of UXD greatly influenced the development of this project. Throughout each stage of the project’s progress, I took into account the importance of each new feature added and how it worked towards shaping a positive user outcome.
Below, you'll find the planning and development of the project across each plane:
- The Strategy Plane
- The Scope Plane
- The Structure Plane
- The Skeleton Plane
- The Surface Plane

## Strategy Plane
Flip and Match is designed with a primary target audience of children aged between 4 years old and upwards, and possibly even younger with the support of an adult. For the project to be successful, I had to make the game appealing to both children and parents, as ultimately the game would be introduced to a child via a parent. 
**Project objectives:**
- Ensure that the game's layout is intuitive and provides users with confidence as they traverse each game stage. 
- Provide the user with consistency throughout the site, avoiding disorganised content.
- Provide users with a sense of accomplishment throughout the game and invoke wholesome feelings of desire and joy as they progress.
- Provide parents with comfort by creating an educational game that fosters incandescence and growth in children.

## Scope Plane
Using the strategy plane as guidance, I analysed the project objectives to establish which ones were compatible with each other. I concluded that the project could be broken down into three stages, allowing the content to be more easily digested.

**Game Stages:**
- A section that provides the user with some information, such as how to play the game. 
- A section where users can play the game.
- A section that concludes the game, such as a score board.

## Structure Plane
A user's journey experience plays a large role in project popularity, as a poor first impression can easily lead to a last visit. Knowing that the target audience for Flip and Match would be as young as 4 years old, I knew that a user's path through the game would have to be as unambiguous as possible.
Users move through each stage of the game by clicking the brightly coloured buttons located at the very bottom of the page, along with an icon and text that states their purpose. These buttons take the player directly to the heart of the action.
Key information is also highlighted with the use of colours; however, failing to read this won't impact the game at all. Flip and Match presents zero set-up time, meaning that reading page content is completely optional, so players can focus on matching cards and being top of the scoreboard!

## Skeleton Plane
Balsamiq was used to create all of the wireframes for this project. Below you’ll find screenshots of the original project layout, which remains mostly unchanged in the final deployed website.
![Flip and Match Wireframe for mobile devices](/documentation/wireframe/mobile-wireframe.png)
*This image shows the wire for mobile devices*
![Flip and Match Wireframe for tablets](/documentation/wireframe/tablet-wireframe.png)
*This image shows the wire for tablets*
![Flip and Match Wireframe for desktops](/documentation/wireframe/desktop-wireframe.png)
*This image shows the wire for desktops*
## Surface Plane
### Project Features
- **Basic text:** By using simple wording and a cartoon-like font, the user is able to easily digest the information presented without feeling confused and overwhelmed.

- **Colours:** With the use of contrasting and vibrant colours, the user is intuitively guided through each stage of the game.

- **Memory game benefits:** The welcome screen features snippets of information located towards the bottom of the screen, that will provide the user or their parents with the key benefits of playing such a memory game.

- **Timer and score board:** With the use of a timer, the game offers an element of competition, as users are able to race against time and add their score to the score-board, in an attempt to claim first place. 
 
- **Retry button:** The retry button displayed on the score-board screen acts independently of the score-saving features. This means that users, without saving their score, can quickly jump into another game of Flip and Match.

### Features left to implement
- **Image variety:** Upon starting a new game, users will be presented with a random group of memory card images to keep the game feeling fresh.

## Technologies Used
- **HTML:** used as the basic building blocks to create the structure of the project.
- **CSS:** used to style the web page elements throughout the project
- **JavaScript** was used to give the project logic, and to tailor its behaviours. 
- **Google Fonts:** used to source the fronts across the website – front used: Coming soon.
- **Font Awesome:** used to obtain the button icons across the prodject.
- **Favicon Generator:** used to source the favicon for the project.
- **PhotoKit(Eyedropper** tool): used to find the hex colour codes for the style sheet. 
- **GitHub:** used to store the code for the project and deploy the site using GitHub pages.
- **Git:** used for version control with the use of Gitpod, allowing me to commit to Git and
Push to GitHub.
- **Gitpod:** was the chosen development environment (IDE) used to create the
project.
- **Google and Opera Development Tools:** used as the main method for finding and fixing
bugs, and testing the responsiveness of the site.
- **Unsplash:** was used to source the images for this project
- **Pixelied:** was used to convert .jpg image files to .webp files.
- **Lighthouse:** used for testing the performance and accessibility of the website.
- **W3C Markup Validator and W3C CSS Validator:** were used to validate the pages of
the project to ensure there were no errors.
- **AmIResponsive:** used to create the responsive image in the README file.
    

## Testing
I tested this website across the following web browsers:  
- Google Chrome  
- Microsoft Edge  
- Opera

When testing the responsiveness of this website, I used Google Chrome Developer Tools to  
emulating the following devices:  
- Apple iPhone SE  
- Apple iPhone 14 Pro Max  
- Apple iPhone XR  
- Samsung Galaxy Note 3  
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- LG Optimus L70  
- Microsoft Lumia 950  
- iPad Mini  
- Kindle Fire HDX
     
I also field tested my site on several devices, which include:  
- Google Pixel 6  
- Google Pixel 7  
- iPhone 11  

**Validation**
- [HTML validation](/documentation/validation/html-validation.png)
*This image shows the HTML code returning no errors*
- [CSS validation](/documentation/validation/css-validation.png)
*This image shows the CSS code returning no errors*


**Detected bugs and solutions**  
- The numbers of the `ol` items were displaying outside of the viewport on smaller mobile phone devices. For the solution, I simply use the `list-style-position` rule and set it to inside.
- The flip animation for the card elements was producing lag as the hidden images were being loaded. To solve this I re-downloaded the images at a lower resolution and converted them from JPEG to WebP file type.
- The user was able to log the same card into both the first and second card variables simply by double-clicking. To fix this, I added an if statement to check if the card clicked has a class of either flip, which put the card in a flipped state.

## Deployment
**Deploying a GitHub Repository via GitHub Pages**  
This website is deployed using GitHub pages by following these steps:  
1. Login to GitHub.  
2. Click on the repository section and select the repository you wish to deploy.  
3. Click on **Settings** in the menu bar at the top.  
4. Then click **Pages** in the menu to the left.  
5. In the **Source** drop-down menu, select **deploy from branch**.  
6. In the **Branch** drop-down menu, select **Main**.  
7. Once the page has been reset, the following message should be displayed at the top of  
the GitHub **Pages section**. **"Your site is ready to be published at (Link to the GitHub  
Page Web Address)"**. Note this link might take a while to appear.
  
**Forking a GitHub Repository**  
If you wish to make changes to a repository without affecting it, you can do this by  
following these steps:  
1. Select the GitHub repository you wish to fork.  
2. Click **Fork** on the right-hand side of the menu at the top of the page.  
3. You will now have a copy of the repository, allowing you to make changes without affecting  
the original.

**Making a Local Clone**
1. Login to GitHub.  
2. Click on the repository section and select the repository you wish to clone.  
3. Click the **Code** button.  
4. Copy the repository URL.  
5. Open the Git Bash terminal.  
6. Type in **git clone**, then paste in the URL you copied.  
7. Press **Enter** to create a clone.

## Credits
**Code**
- The list-style-position rule was found on [Stackoverflow](https://stackoverflow.com/questions/74593632/how-do-i-align-an-outside-bullet-list-item-to-the-margin-of-the-page).
- The code for the 3D card flip effect was replicated from [W3Schools](https://www.w3schools.com/howto/howto_css_flip_card.asp).
- The method used to sort the objects array into ascending order was found on [freecodecamp.org](https://www.freecodecamp.org/news/how-to-sort-javascript-array-accurately/).

**Content**
- The information in the welcome screen benefits was sources from [Junilearning](https://junilearning.com/blog/guide/enhancing-cognitive-abilities/#:~:text=One%20example%20of%20how%20Juni,ultimately%20increasing%20their%20cognitive%20performance.) and [Skool Of Code](https://skoolofcode.us/blog/why-memory-games-are-essential-for-childrens-development/).

**Media**
The images for the project were sourced from:  
- [Unsplash](https://www.unsplash.com)

## Acknowledgements  
I would like to thank my partner for her unwavering patience and support throughout the  
entirety of this project! Without her, this would not have been possible!

