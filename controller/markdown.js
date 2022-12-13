const MarkdownIt = require('markdown-it')
const hljs = require('highlight.js')

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});


const parse = async (req, res) => {
  try {
    const markdownString = req.body.Text;
    console.log(markdownString)
    const renderHTML = md.render(markdownString);
    return res.send({
      success: true,
      message: "SUCCESSFULLY PARSED THE MARKDOWN",
      data: renderHTML,
    })
  } catch(err) {
    console.log(err)
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO PARSE MARKDOWN",
    })
  }
}


module.exports = {
  parse
}
