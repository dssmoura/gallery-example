import React from 'react'
import { func, string } from 'prop-types'

function getDOM (html) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(`<div class="container">${html}</div>`, 'text/html')
  return doc.querySelector('.container')
}

function getJSX(root, injectGallery) {
  return [...root.children].map(element => {
    let children

    if (element.querySelector('img + img') && injectGallery) {
      const imageSources = [...element.querySelectorAll('img')].map(img => img.src)
      children = injectGallery(imageSources)
    } else {
      children = element.children.length ? getJSX(element) : element.textContent
    }

    const props = [...element.attributes].reduce((prev, curr) => ({
      ...prev,
      [curr.name]: curr.value
    }), {})

    return React.createElement(element.tagName, props, children)
  })
}

const HTMLContent = ({ content, injectGallery }) => getJSX(getDOM(content), injectGallery)

HTMLContent.propTypes = {
  content: string.isRequired,
  injectGallery: func.isRequired,
}

export default HTMLContent