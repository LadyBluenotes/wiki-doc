import { Typography, Divider, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export default function OpenSource() {
  return (
        <>
            <Typography variant="h1">Material UI</Typography>
            <Divider sx={{ my: 2 }} />
                <Typography variant="h2">Project details:</Typography>
                    <Link href="https://mui.com/"><LanguageIcon /></Link>
                        <Link href="https://github.com/mui"><GitHubIcon /></Link>
                        <Typography variant="body1">Material UI is popular open source JavaScript library used in building user interfaces. It provides a set of pre-built React components that implement Google's Material Design guidelines, making it easier for developers to create visually consistent and aesthetically pleasing UIs.</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h2">Contribution summary:</Typography>
                <Typography variant="h3" className="styling-h3">Role:</Typography>
                    <Typography variant="body1">Contributor</Typography>
                <Typography variant="h3" className="styling-h3">Duration:</Typography>
                    <Typography variant="body1">January 2023 - Present</Typography>
                <Typography variant="h3" className="styling-h3">Responsibilities:</Typography>
                    <Typography variant="body1">As a contributor to Material UI, I played a role in enhancing the project's documentation. My responsibilities included:
                        <ul>
                            <li>Enhancing the documentation by revising and updating it to align with the project's style guide and templates, to ensure consistency in grammar, style, tone, and formatting.</li>
                            <li>Working closely with the project maintainers to guarantee coherence and adherence to their standards.</li>
                            <li>Providing clear and concise demo code examples, utilizing React framework, to supplement the articles.</li>
                        </ul>
                    </Typography>
                <Typography variant="h3" className="styling-h3">Technologies used:</Typography>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Markdown</li>
                    </ul>
        </>
    );
}
      