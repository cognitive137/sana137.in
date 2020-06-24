## First things first

For updating the website (assuming you have the repo locally):

```zsh
yarn depoly
```

1. Go to GitHub repo [Settings](https://github.com/cognitive137/sana137.in/settings).
2. Look for "GitHub Pages" from bottom.
3. Update "Custom domain" accordingly.

# Usage note

## Getting the repo

```bash
# Run the following commands
git clone https://github.com/cognitive137/sana137.in
cd path/to/cloned/repo
yarn # to install dependencies
```

## Adding new blogs

1. Create a folder in `blogs`, say _`newBlogPost`_.
2. In the folder _`newBlogPost`_, create a markdown file **`index.md`**.
3. Put the content of the blog in the **`index.md`** file.

## Adding background to tags

Adding cover to tags is handled via an array of objects. That array is located at `./src/tagData/index.js`.

That file contains an array `tagData`. Each element of `tagData`, must be an object, with two keys, `tag` and `cover`.

Each object should match:

```javascript
{
  tag: 'unique tag here',
  cover: 'www.example.com/path/to/cover'
}
```

Make sure you don't repeat tags in array in `./src/tagData/index.js`, else none will be chosen.

## Frontmatter

In every blog post, it is necessary to start the blog post with the following content:

```markdown
---
cover: 'www.example.com/path/to/cover/img'
date: 'yyyy-mm-dd'
excerpt: 'Add excerpt here'
page: 'true/false'
path: '/uri-to-blog-post'
tags: ['some', 'tags', 'in', 'lowercase']
title: 'Blog Post’s Title'

---
```

### Note

1. All except the excerpt are necessary fields. Make sure you would not be able to escape the single or double quotes in excerpt, so make use of enclosing alternatives.

2. In case if you do not wish to have any tags, keep that parameter to `['']`.

3. Use the _`yyyy-mm-dd`_ date format.

4. Make sure path starts with **`/`**, and is unique.

## Testing your addition renders perfectly

Run the following commands to test if the site works fine locally.

```bash
yarn clean
yarn start
# Look in the terminal on which port the site is live.
# navigate to localhost:port/path-to-new-blog
```

## Updating the website

Run the following commands to update the website:

```bash
yarn clean
yarn build
yarn deploy
```
Run the following commands to push the local changes to remote:

```bash
git add .
git commit -m "Added new blog (or) made some changes"
git push
```

## Note about styling

Only the Footer functional component (`src/components/footer.js`) imports `layout.css`.
