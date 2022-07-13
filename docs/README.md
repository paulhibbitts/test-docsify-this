# Docsify This

![3D cubes](images/rohit-choudhari-puy-FW4fOJc-unsplash.jpg  ':class=banner-image')  
Photo by <a href="https://unsplash.com/@lilrohit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rohit Choudhari</a> on <a href="https://unsplash.com/s/photos/network?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

This site, which is built using [Docsify](https://docsify.js.org) and based on the [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit), provides a quick way to display a remote Markdown file as a standalone Web page.

Markdown File Source URL:</br>
<input class="myfield" type="URL" autofocus="autofocus" onfocus="this.select()" id="text" size="200px" value="https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/" /></br>
<input class="button" style="border:none;" type="button" id="btn" value="Display as Standalone Page" onclick="openURLs(document.getElementById('text').value,false)"/> <input class="button" style="border:none;" type="button" id="btn" value="Display as Standalone Page with Table of Contents" onclick="openURLs(document.getElementById('text').value,true)"/></br>

_To display a file stored on GitHub, tap the **Raw** button when [viewing a file](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file) and then copy/paste the URL into the above field._

## Examples

* [Docsify Open Publishing Starter Kit README file](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md), displayed as a [Standalone Page](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/)
* [Docsify Open Publishing Starter Kit README file](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md), displayed as a [Standalone Page with a Table of Contents](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/&toc=true)

## Technical Details

This is a customized [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) site which can render multiple remote Markdown files (for example, a Markdown file in a GitHub repository). You can use a rich media embed service such as [embed.ly](https://embed.ly/) to workaround iframe cross-domain issues.  

For example, to render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page the URL would be:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/

To render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page with a table of contents the URL would be:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/&toc=true

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page, the URL would be:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs/&homepage=introduction.md

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page with a table of contents, the URL would be:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs/&homepage=introduction.md&toc=true

_TIP: If not a README.md file, the filename will also need to be passed using the **homepage** URL parameter._

## More Examples

* [GitHub Training Manual Working Locally with Git file](https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md), displayed as a [Standalone Page with a Table of Contents](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&toc=true#/)
* [Single Page Docsify Open Course Starter Kit](https://github.com/paulhibbitts/cpt-363-user-interface-design/blob/main/README.md), displayed as a [Standalone Page with a Table of Contents](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/paulhibbitts/cpt-363-user-interface-design/main/&toc=true#/)

---

**🙇🏻‍♂️Credits**  
[Beau Shaw](https://github.com/DaddyWarbucks) for his [Remote Docsify](https://github.com/DaddyWarbucks/remote-docsify) example.  
[Alan Levine](https://github.com/cogdog) for the inspiration of a consolidated ReadMe collection.
