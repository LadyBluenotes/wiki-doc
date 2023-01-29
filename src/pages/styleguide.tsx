import { Divider, Typography, ListSubheader, ListItemButton, ListItemIcon, ListItemText, List } from "@mui/material";

export default function StyleGuide(){

    return (
        <>
            <Typography variant="h1">Style Guide</Typography>
            <Divider sx={{ my: 2 }} />
            <List
                        sx={{ 
                            width: '100%', 
                            maxWidth: '100%', 
                            bgcolor: 'background.paper',
                            position: 'relative',
                        }}
                        component="nav"
                        aria-labelledby="table of contents"
                        subheader={
                            <ListSubheader component="div">
                                Table of contents
                            </ListSubheader>
                        }
                        >
                        <ListItemButton onClick={() =>{
                            window.location.href = '#introduction';
                        }}>
                            <ListItemIcon>
                                I.
                            </ListItemIcon>
                            <ListItemText primary="Introduction" />
                        </ListItemButton>
                        <ListItemButton onClick={() =>{
                            window.location.href = '#writing-guidelines';
                        }}>
                            <ListItemIcon>
                                II.
                            </ListItemIcon>
                            <ListItemText primary="Writing Guidelines" />
                        </ListItemButton>
                        <ListItemButton onClick={() =>{
                            window.location.href = '#formatting-guidelines';
                        }}>
                            <ListItemIcon>
                                III.
                            </ListItemIcon>
                            <ListItemText primary="Formatting Guidelines" />
                        </ListItemButton>
                        <ListItemButton onClick={() =>{
                            window.location.href = '#design-guidelines';
                        }}>
                            <ListItemIcon>
                                IV.
                            </ListItemIcon>
                            <ListItemText primary="Design Guidelines" />
                        </ListItemButton>
                        <ListItemButton onClick={() =>{
                            window.location.href = '#references';
                        }}>
                            <ListItemIcon>
                                V.
                            </ListItemIcon>
                            <ListItemText primary="References" />
                        </ListItemButton>
                        <ListItemButton onClick={() =>{
                            window.location.href = '#appendices';
                        }}>
                            <ListItemIcon>
                                VI.
                            </ListItemIcon>
                            <ListItemText primary="Appendices" />
                        </ListItemButton>
                    </List>
                <Divider sx={{ my: 2 }} />
                    <Typography variant="h2" id="introduction" >I. Introduction</Typography>
                        <Typography variant="body1">
                            Welcome to my style guide! This guide is a project of mine to get familiar with creating documentation, and to help me create a consistent brand identity.
                        <br/>
                        <br/>
                            The purpose of this style guide is to establish and maintain a consistent voice and tone in all official communications and content produced by myself. This includes written materials such as marketing materials, website copy, and email correspondence, as well as visual elements like branding and design. By providing clear guidelines on grammar, punctuation, formatting, and layout, my style guide ensures that all materials produced by myself are professional and easy to understand. Additionally, it helps to create a unified and recognizable brand identity. In short, the purpose of this style guide is to enhance the clarity, consistency, and professionalism of all of our communications and materials.
                        <br/>
                        <br/>
                            Additonally, this style guide will help to ensure that all of my content is accessible to all audiences. This includes people with disabilities, people who speak languages other than English, and people who have different levels of education. By following the guidelines in this style guide, I can ensure that all of my content is accessible to all audiences.
                        <br/>
                        <br/>
                            This style guide is intended for use by myself and anyone else who may be contributing to my website or other content. It is not intended to be used by third parties or the general public. It is not intended to be a comprehensive guide to writing and design, but rather a guide to writing and design that is consistent with my brand and style.
                        <br/>
                        <br/>
                            This style guide is a living document. It will be updated as I learn more about writing and design. If you have any questions or suggestions, please feel free to <a href="mailto:gerrardsarah@gmail.com">email me</a>.
                        </Typography>
                <Divider sx={{ my: 2, opacity:0 }} />
                    <Typography variant="h2" id="writing-guidelines" >II. Writing guidelines</Typography>
                        <Typography variant="h3" className="stlying-h3">
                            Voice and tone
                        </Typography>
                        <Typography variant="body1">
                            It's important to establish a consistent voice and tone in all of my communications and content. This helps to create a unified brand identity, and ensures that all of my content is easy to understand. The voice and tone of my content should be professional, friendly, and approachable. It should be clear and concise, and should avoid jargon and technical terms. It should be written in a way that is accessible to all audiences, including people with disabilities, people who speak languages other than English, and people who have different levels of education.
                            <br/>
                            <br/>
                            Some examples of how I will achieve this include:
                            <br/>
                            <ul>
                                <li>Simple language and explaining any complex concepts in plain terms is encouraged to avoid creating barriers. For example, instead of writing "utilize our proprietary algorithm", write "use our special computer program".</li>
                                <li>Using active voice instead of passive. For example, instead of writing "the website was created by me", write "I created the website".</li>
                                <li>Avoiding the use of long, complex sentences, use short, simple sentences. For example, instead of writing "I created the website in order to provide a platform for me to share my work and ideas", write "I created the website to share my work and ideas".</li>
                                <li>Instead of using complicated or confusing language, using simple language. For example, instead of writing "the website was created by me, and it is intended to be a platform for me to share my work and ideas", write "I created the website to share my work and ideas".</li>
                                <li>Using short, simple words instead of long, complex words. For example, instead of writing "utilize", write "use".</li>
                            </ul>
                        </Typography>
                        <Typography variant="h3" className="styling-h3">
                            Personal-specific terms
                        </Typography>
                        <Typography variant="body1">
                            In order to establish a personal and relatable tone, personal pronouns and possessive terms will be used when referring to myself and my website. Specifically, I will use "I" and "me" when referring to myself, instead of more formal or impersonal terms like "one" or "the user." Similarly, I will use "my website" instead of more generic terms like "this website" or "the website." This approach helps to create a more personal and approachable tone, and allows for a clearer and more direct communication.
                            <br/>
                            <br/>
                        </Typography>
                        <Typography variant="h3" className="styling-h3">
                            Grammar and punctuation
                        </Typography>
                        <Typography variant="body1">
                            Proper grammar and punctuation in all of my communications and content will be used. This includes capitalizing the first letter of sentences, using correct spelling, and using correct punctuation. I will also use correct grammar in all of my communications and content. This includes using correct verb tenses, pronouns, and subject-verb agreement. To avoid inconsistencies, I will use American English spelling and grammar conventions.
                            <br/>
                            <br/>
                        </Typography>
                <Divider sx={{ my: 2, opacity:0 }} />
                    <Typography variant="h2" id="formatting-guidelines" >III. Formatting guidelines</Typography>
                        <Typography variant="h3" className="styling-h3">
                            General formatting
                        </Typography>
                        <Typography variant="body1">
                            All formatting will be consistent across all documentation and content. Some examples of how to achieve this include:
                            <br/>
                            <ul>
                                <li>Consistent font and font size across all documentation and content. For example, I will use the font "Roboto" for all documentation and content.</li>
                                <li>Lists will be presented by bullet points or numbers and indented to visually separate them from other text on the page</li>
                                <li>Headings will be used to visually separate sections of content and to help users navigate the page. Headings will be used in a logical order, with the most important heading being the largest and the least important heading being the smallest.</li>
                                <li>Paragraphs will be separated by a blank line to distinguish them from other text on the page, making them easy to read and understand.</li>
                                <li>Links will be underlined and a different color than the surrounding text to make them easy to identify and distinguish from other text on the page.</li>
                                <li>Images will be used to visually enhance the content and make it more engaging. Images will be used to illustrate concepts, to break up text, and to add visual interest to the page.</li>
                            </ul>
                        </Typography>
                <Divider sx={{ my: 2, opacity:0 }} />
                    <Typography variant="h2" id="design-guidelines" >IV. Design guidelines</Typography>
                        <Typography variant="h3" className="styling-h3">
                            Design principles
                        </Typography>
                        <Typography variant="body1">
                            To create inclusive and accessible content, I will follow the following design principles:
                            <br/>
                            <ul>
                                <li>Use a high contrast between text and background colors to make text easy to read.</li>
                                <li>Provide alternative text for all images and non-text elements.</li>
                                <li>Use a simple, clean, and uncluttered design to make content easy to read and understand.</li>
                                <li>Semantic HTML tags to convey the meaning od different types of content.</li>
                                <li>The use of resizable font sizes to allow users to adjust as needed.</li>
                                <li>Consistent experience across all devices.</li>
                                <li>Regularly test the accessibility of my site and make updates as needed.</li>
                            </ul>
                        </Typography>
                <Divider sx={{ my: 2, opacity:0 }} />
                    <Typography variant="h2" id="references" >V. References</Typography>
                        <Typography variant="body1">
                            Along with what is mentioned, I will be using the following resources to help me create my style guide:
                            <br/>
                            <ul>
                                <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG) 2.1</a></li>
                                <li><a href="https://developers.google.com/style">Google Developer Documentation Style Guides</a></li>
                                <li><a href="https://support.apple.com/en-ca/guide/applestyleguide/welcome/web">Apple Style Guide</a></li>
                                <li><a href="https://www.microsoft.com/en-us/style-guide">Microsoft Style Guide</a></li>
                            </ul>
                        </Typography>
                <Divider sx={{ my: 2, opacity:0 }} />
                    <Typography variant="h2" id="appendices" >VI. Appendices</Typography>
                        <Typography variant="h3" className="styling-h3">
                            Glossary of terms
                        </Typography>
                        <Typography variant="body1">
                            <ul>
                                <li><strong>Accessibility</strong>: The design of products, devices, services, or environments for people who experience disabilities.</li>
                                <li><strong>Alternative text</strong>: Text that describes an image or other non-text element.</li>
                                <li><strong>Contrast</strong>: The difference in luminance or color that makes an object (or its representation in an image or display) distinguishable.</li>
                                <li><strong>Design principles</strong>: A set of rules or guidelines that inform the design of a product or system.</li>
                                <li><strong>Formatting guidelines</strong>: A set of rules or guidelines that inform the formatting of a product or system.</li>
                                <li><strong>High contrast</strong>: A color scheme that uses colors that are very different from each other, allowing for better visibility and readability for users with visual impairments or low vision.</li>
                                <li><strong>KISS:</strong> A design principle that states that most systems work best if they are kept simple rather than made complicated; therefore simplicity should be a key goal in design and unnecessary complexity should be avoided. Stands for keep it simple, stupid.</li>
                                <li><strong>Style guide</strong>: A set of rules or guidelines that inform the writing and design of a product or system.</li>
                                <li><strong>Typography</strong>: The art and technique of arranging type to make written language legible, readable, and appealing when displayed.</li>
                            </ul>
                        </Typography>
                        <Typography variant="h3" className="styling-h3">
                            Any feedback?
                        </Typography>
                        <Typography variant="body1">
                            If you have any questions or feedback about this style guide, please <a href="mailto:gerrardsarah@gmail.com">contact me.</a>
                        </Typography>
        </>
    )
}