import { OpenAIApi, Configuration } from "openai";
import { openAIOptions } from "./api/openai";
const fs = require("fs");
require("dotenv").config();

const openAIConfig = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openAIInstance = new OpenAIApi(openAIConfig);

const generateResponse = () => {
  const fileNames = getFileNames();
  fileNames.map(async (fileName: string) => {
    const options = getOptionWithPrompt(fileName);

    const response = await openAIInstance.createCompletion(options);

    if (response.data.choices) {
      writeFile(fileName, response);
    }
  });
};

function getFileNames() {
  let fileNames = fs.readdirSync(`${__dirname}/components`);

  fileNames = fileNames.filter((item: string) => {
    const baseName = item.split(".")[0];
    return (
      item !== `${baseName}.stories.tsx` &&
      item !== `${baseName}.module.css` &&
      !fileNames.includes(`${baseName}.stories.tsx`)
    );
  });
  return fileNames;
}

function getOptionWithPrompt(fileName: string) {
  const file = fs.readFileSync(`${__dirname}/components/${fileName}`);
  const options = {
    ...openAIOptions,
    prompt: `
    Create a stories.tsx file for only storybook sb7 with Control args and set arges type with StoryFn for following react component:
    
    ${file.toString()}}
    `,
  };
  return options;
}

function writeFile(fileName: string, response: any) {
  const fileNameWithoutExt = fileName.split(".")[0];
  try {
    fs.writeFileSync(
      `${__dirname}/components/${fileNameWithoutExt}.stories.tsx`,
      response.data.choices[0].text
    );
  } catch (err) {
    console.error(err);
  }
}

const createStories = {
  generateResponse,
};

generateResponse();
export default createStories;
