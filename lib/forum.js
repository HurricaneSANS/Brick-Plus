// Wait for the page to fully load before running the code
window.addEventListener('load', () => {
  // Select all text-md elements on the page
  const textMdElements = document.querySelectorAll('div.text-md');

  // Loop through each text-md element and process its contents
  textMdElements.forEach(textMdElement => {
    // Get the text content of the element
    let textContent = textMdElement.innerHTML;

    // Look for Imgur links in the text content and replace them with image tags
    const imgurRegex = /(https?:\/\/)?(www\.)?i\.imgur\.com\/([a-zA-Z0-9]+\.(jpg|jpeg|gif|png))/g;
    textContent = textContent.replace(imgurRegex, (match, p1, p2, p3) => {
      const imageUrl = `https://i.imgur.com/${p3}`;
      return `<img src="${imageUrl}" />`;
    });

    // Look for YouTube links in the text content and replace them with the corresponding embeds
    const youtubeRegex = /(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/g;
    textContent = textContent.replace(youtubeRegex, (match, p1, p2, p3) => {
      const embedUrl = `https://www.youtube.com/embed/${p3}`;
      return `<iframe width="550" height="305" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    });

    // Update the element's contents with the processed text
    textMdElement.innerHTML = textContent;
  });
});
