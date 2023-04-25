import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import MarkdownIt from "markdown-it";

interface Props {
  repository: string;
}

export default function Readme({ repository }: Props) {
    
  const [markdownContent, setMarkdownContent] = useState("");

  const md = new MarkdownIt();

  const octokit = new Octokit({
    auth: process.env.GH_token,
  });

  useEffect(() => {
    async function fetchReadme() {
      try {
        const response = await octokit.request(
          `GET /repos/{OWNER}/${repository}/readme`,
          {
            owner: "LadyBluenotes",
            repo: `${repository}`,
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
