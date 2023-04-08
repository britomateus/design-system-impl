/**
 * Config file for style-dictionary
 */

module.exports = {
  source: ["design_tokens/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "global_styles/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
    },
  },
};
