## First things first

For updating the website:

```zsh
yarn depoly
```

1. Go to [Settings](https://github.com/cognitive137/sana137.in/settings).
2. Look for "GitHub Pages" from bottom.
3. Update "Custom domain" accordingly.

## Adding new blogs

1. Create a folder in `src/blogs`, say _`newBlogPost`_.
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

Make sure you don't repeat tags, else none will be chosen.

## Frontmatter

In every blog post, it is necessary to start the blog post with the following content:

```markdown
---
path: '/uri-to-blog-post'
date: 'yyyy-mm-dd'
title: 'Blog Post’s Title'
tags: ['some', 'tags', 'in', 'lowercase']
cover: 'www.example.com/path/to/cover/img?compulsory=true'
excerpt: 'Add excerpt here'
---
```

### Note

1. All except the excerpt are necessary fields. Make sure you would not be able to escape the single or double quotes in excerpt, so make use of enclosing alternatives.

2. In case if you do not wish to have any tags, keep that parameter to `['']`.

3. Use the _`yyyy-mm-dd`_ date format.

4. Make sure path starts with **`/`**, and is unique.

## Updating the website

Run the following commands to update the website:

```bash
gatsby build
cd public
git push
```

## Note about styling

Only the Footer functional component (`src/components/footer.js`) imports `layout.css`.
