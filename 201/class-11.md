# Read 11: Audio, Video, Images

## Video and Audio Content

[Source](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

1. Explain how the ability to use video and audio on the web has evolved since the early 2000s.

- early 2000s saw plugins like Flash, but HTML5 brought support fpr multimedia.

2. Describe the use of the src and controls attributes in the <video> element.

- src: this attribute in the video tag element specifies the URL or file path of the video is coming from.
- controls: a boolean attribute that, when present, displays standard playback controls for the video, such as play, pause, volume, and fullscreen options.

3. Why is it important to have fallback content inside the <video> element?

- adding fallback content is cruicial for compatibility and accessibility. if a browser doesn't support the video element or the video format specified in the src attribute, the fallback content will then be displayed. 
- this ensures users can still access some form of content.

4. Write a very short story where <audio> and <video> are characters.

- The story revolves around two inseparable companions named Audio and Video. Audio can create beautiful melodies, while Video can create captivating visuals. Together, they entertain, educate, and inspire the people in the Digital Realm.

## A Complete Guide to Grid

[Source](https://css-tricks.com/snippets/css/complete-guide-grid/)

1. How does Grid layout differ from Flex?

- grid layout: two-dimentional system for complex grid stuctures, ideal for overall page layouts.
- flexbox: one-dimentional system for arranging items in a row or column, suitable for dynamic and responsive components.

2. Grid container, grid item, and grid line are a few important terms to understand when using Grid. Please describe these terms in a few sentences.

- grid container: parent element that establishes the grid context.
- grid item: individual elements inside the grid container.
- grid line: horizontal and vertical lines forming the grid stucture.

## Responsive Images

[Source](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

1. Besides making a site visually appealing across different screen sizes, why should developers make images responsive?

- ensure optimal performance and user experience on various device.
- reduce page load times by serving appropriately sized images, saving bandwidth.

2. Define the following <img> attributes srcset and sizes. Write an example of how they are used.

- srcset: specifies a list a image sources with different resolutions. ex. < img src="image.jpg" srcset="image-480w.jpg 480w alt="Responsive Image" >
- sizes: use with srcset to define the imgae's display size relative to the viewport width.

3. How is srcset more helpful for responsive images than CSS or JavaScript?

- using srcset provides browser support for responsive images, automatically selecting the appropriate image. CSS or JavaScript solutions may involve additional scripting and complexity.

## Things I want to know more about

- definately want to incorporate adding video or audio. reminds me of early 2000s myspace or facebook.

[Home](README.md)
