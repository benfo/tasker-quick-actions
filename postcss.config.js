const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "src/*.html",
    "src/*.jsx"
    // etc.
  ]
});
module.exports = {
  theme: {},
  variants: {},
  plugins: [...(process.env.NODE_ENV === "production" ? [] : [])]
};
