import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import MarkdownIt from "markdown-it";

interface Props {
  repository: string;
}

export default function Readme({ repository }: Props) {

    const token = process.env.TOKEN; // your github token
    const owner = process.env.REPO_OWNER; // owner of the repo you'd like to get the readme from
    const repo = repository; // repo name of where you'd like to get the readme from

  const [markdownContent, setMarkdownContent] = useState("");

  const md = new MarkdownIt();

  const octokit = new Octokit({
    auth: process.env.GH_token,
  });

  useEffect(() => {
    async function fetchReadme() {
      try {
        const response = await octokit.request(
          `GET /repos/{OWNER}/${repo}/readme`,
          {
            owner: `${owner}`,
            repo: `${repo}`,
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );

        console.log(response.data.download_url);

        const readmeResponse = await fetch(response.data.download_url);
        const readmeText = await readmeResponse.text();

        return setMarkdownContent(readmeText);


      } catch (error) {
        console.log(error);
      }
    }
    fetchReadme();
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: md.render(markdownContent) }} />
    </div>
  )
}
