import {
  Container,
  Typography,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  List,
  Sheet,
  Divider,
} from "@mui/joy";
import CircleIcon from "@mui/icons-material/Circle";

export default function StyleGuide() {
  return (
    <Sheet
      sx={{
        py: 4,
        px: 4,
        m: 3,
      }}
    >
      <Typography
        level="display1"
        component="h1"
        sx={{
          mr: 2,
          mb: 1,
        }}
      >
        Style Guide
      </Typography>
      <Divider sx={{ mb: 1, mt: 3 }} />
      <List
        sx={{
          ml: 3,
        }}
      >
        <ListSubheader
          component="div"
          sx={{
            ml: -2,
          }}
        >
          Table of contents
        </ListSubheader>
        <ListItemButton
          onClick={() => {
            window.location.href = "#introduction";
          }}
        >
          <ListItemDecorator>I.</ListItemDecorator>
          Introduction
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            window.location.href = "#writing-guidelines";
          }}
        >
          <ListItemDecorator>II.</ListItemDecorator>
          Writing Guidelines
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            window.location.href = "#formatting-guidelines";
          }}
        >
          <ListItemDecorator>III.</ListItemDecorator>
          Formatting Guidelines
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            window.location.href = "#design-guidelines";
          }}
        >
          <ListItemDecorator>IV.</ListItemDecorator>
          Design Guidelines
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            window.location.href = "#references";
          }}
        >
          <ListItemDecorator>V.</ListItemDecorator>
          References
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            window.location.href = "#appendices";
          }}
        >
          <ListItemDecorator>VI.</ListItemDecorator>
          Appendices
        </ListItemButton>
      </List>
      <Divider sx={{ mb: 2, mt: 1 }} />
      <Typography
        level="h2"
        id="introduction"
        sx={{
          mb: 1,
        }}
      >
        I. Introduction
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Welcome to my style guide! This guide is a project of mine to get
        familiar with creating documentation, and to help me create a consistent
        brand identity.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        The purpose of this style guide is to establish and maintain a
        consistent voice and tone in all official communications and content
        produced by myself. This includes written materials such as marketing
        materials, website copy, and email correspondence, as well as visual
        elements like branding and design. By providing clear guidelines on
        grammar, punctuation, formatting, and layout, my style guide ensures
        that all materials produced by myself are professional and easy to
        understand. Additionally, it helps to create a unified and recognizable
        brand identity. In short, the purpose of this style guide is to enhance
        the clarity, consistency, and professionalism of all of our
        communications and materials.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Additonally, this style guide will help to ensure that all of my content
        is accessible to all audiences. This includes people with disabilities,
        people who speak languages other than English, and people who have
        different levels of education. By following the guidelines in this style
        guide, I can ensure that all of my content is accessible to all
        audiences.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        This style guide is intended for use by myself and anyone else who may
        be contributing to my website or other content. It is not intended to be
        used by third parties or the general public. It is not intended to be a
        comprehensive guide to writing and design, but rather a guide to writing
        and design that is consistent with my brand and style.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 4,
        }}
      >
        This style guide is a living document. It will be updated as I learn
        more about writing and design. If you have any questions or suggestions,
        please feel free to <a href="mailto:gerrardsarah@gmail.com">email me</a>
        .
      </Typography>
      <Typography
        level="h2"
        id="writing-guidelines"
        sx={{
          mb: 1,
        }}
      >
        II. Writing guidelines
      </Typography>
      <Typography
        level="h3"
        className="stlying-h3"
        sx={{
          ml: 1,
          mb: 1,
        }}
      >
        Voice and tone
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 2,
          mb: 2,
        }}
      >
        It&apos;s important to establish a consistent voice and tone in all of my
        communications and content. This helps to create a unified brand
        identity, and ensures that all of my content is easy to understand. The
        voice and tone of my content should be professional, friendly, and
        approachable. It should be clear and concise, and should avoid jargon
        and technical terms. It should be written in a way that is accessible to
        all audiences, including people with disabilities, people who speak
        languages other than English, and people who have different levels of
        education.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 2,
          mb: 1,
        }}
      >
        Some examples of how I will achieve this include:
      </Typography>
      <List
        size="sm"
        sx={{
          mb: 1,
        }}
      >
        <ListItem sx={{ ml: 2 }}>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          Simple language and explaining any complex concepts in plain terms is
          encouraged to avoid creating barriers. For example, instead of writing
          &quot;utilize our proprietary algorithm&quot;, write &quot;use our special computer
          program&quot;.
        </ListItem>
        <ListItem sx={{ ml: 2 }}>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          Using active voice instead of passive. For example, instead of writing
          &quot;the website was created by me&quot;, write &quot;I created the website&quot;.
        </ListItem>
        <ListItem sx={{ ml: 2 }}>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          Avoiding the use of long, complex sentences, use short, simple
          sentences. For example, instead of writing &quot;I created the website in
          order to provide a platform for me to share my work and ideas&quot;, write
          &quot;I created the website to share my work and ideas&quot;.
        </ListItem>
        <ListItem sx={{ ml: 2 }}>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          Instead of using complicated or confusing language, using simple
          language. For example, instead of writing &quot;the website was created by
          me, and it is intended to be a platform for me to share my work and
          ideas&quot;, write &quot;I created the website to share my work and ideas&quot;.
        </ListItem>
        <ListItem sx={{ ml: 2 }}>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          Using short, simple words instead of long, complex words. For example,
          instead of writing &quot;utilize&quot;, write &quot;use&quot;.
        </ListItem>
      </List>
      <Typography
        level="h3"
        className="styling-h3"
        sx={{
          ml: 1,
          mb: 1,
        }}
      >
        Personal-specific terms
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 2,
          mb: 2,
        }}
      >
        In order to establish a personal and relatable tone, personal pronouns
        and possessive terms will be used when referring to myself and my
        website. Specifically, I will use &quot;I&quot; and &quot;me&quot; when referring to myself,
        instead of more formal or impersonal terms like &quot;one&quot; or &quot;the user.&quot;
        Similarly, I will use &quot;my website&quot; instead of more generic terms like
        &quot;this website&quot; or &quot;the website.&quot; This approach helps to create a more
        personal and approachable tone, and allows for a clearer and more direct
        communication.
      </Typography>
      <Typography level="h3" className="styling-h3" sx={{ mb: 1 }}>
        Grammar and punctuation
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 2,
          mb: 3,
        }}
      >
        Proper grammar and punctuation in all of my communications and content
        will be used. This includes capitalizing the first letter of sentences,
        using correct spelling, and using correct punctuation. I will also use
        correct grammar in all of my communications and content. This includes
        using correct verb tenses, pronouns, and subject-verb agreement. To
        avoid inconsistencies, I will use American English spelling and grammar
        conventions.
      </Typography>
      <Typography
        level="h2"
        id="formatting-guidelines"
        sx={{
          mb: 1,
        }}
      >
        III. Formatting guidelines
      </Typography>
      <Typography
        level="h3"
        className="styling-h3"
        sx={{
          ml: 1,
          mb: 1,
        }}
      >
        General formatting
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 2,
          mb: 2,
        }}
      >
        All formatting will be consistent across all documentation and content.
        Some examples of how to achieve this include:
        <List
          size="sm"
          sx={{
            mb: 3,
          }}
        >
          <ListItem sx={{ ml: 2 }}>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Consistent font and font size across all documentation and content.
            For example, I will use the font &quot;Roboto&quot; for all documentation and
            content.
          </ListItem>
          <ListItem sx={{ ml: 2 }}>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Lists will be presented by bullet points or numbers and indented to
            visually separate them from other text on the page
          </ListItem>
          <ListItem sx={{ ml: 2 }}>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Headings will be used to visually separate sections of content and
            to help users navigate the page. Headings will be used in a logical
            order, with the most important heading being the largest and the
            least important heading being the smallest.
          </ListItem>
          <ListItem sx={{ ml: 2 }}>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Paragraphs will be separated by a blank line to distinguish them
            from other text on the page, making them easy to read and
            understand.
          </ListItem>
          <ListItem sx={{ ml: 2 }}>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Links will be underlined and a different color than the surrounding
            text to make them easy to identify and distinguish from other text
            on the page.
          </ListItem>
          <ListItem sx={{ ml: 2 }}>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Images will be used to visually enhance the content and make it more
            engaging. Images will be used to illustrate concepts, to break up
            text, and to add visual interest to the page.
          </ListItem>
        </List>
      </Typography>
      <Typography
        level="h2"
        id="design-guidelines"
        sx={{
          mb: 1,
        }}
      >
        IV. Design guidelines
      </Typography>
      <Typography
        level="h3"
        className="styling-h3"
        sx={{
          ml: 1,
          mb: 1,
        }}
      >
        Design principles
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 2,
          mb: 2,
        }}
      >
        To create inclusive and accessible content, I will follow the following
        design principles:
        <List size="sm" sx={{ ml: 2, mb: 3 }}>
          <ListItem>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Use a high contrast between text and background colors to make text
            easy to read.
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Provide alternative text for all images and non-text elements.
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Use a simple, clean, and uncluttered design to make content easy to
            read and understand.
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Semantic HTML tags to convey the meaning od different types of
            content.
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            The use of resizable font sizes to allow users to adjust as needed.
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Consistent experience across all devices.
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            Regularly test the accessibility of my site and make updates as
            needed.
          </ListItem>
        </List>
      </Typography>
      <Typography
        level="h2"
        id="references"
        sx={{
          mb: 1,
        }}
      >
        V. References
      </Typography>
      <Typography level="body1">
        Along with what is mentioned, I will be using the following resources to
        help me create my style guide:
        <List size="sm" sx={{ ml: 2, mb: 3 }}>
          <ListItem>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
              Web Content Accessibility Guidelines (WCAG) 2.1
            </a>
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            <a href="https://developers.google.com/style">
              Google Developer Documentation Style Guides
            </a>
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            <a href="https://support.apple.com/en-ca/guide/applestyleguide/welcome/web">
              Apple Style Guide
            </a>
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <CircleIcon
                sx={{
                  fontSize: 10,
                }}
              />
            </ListItemDecorator>
            <a href="https://www.microsoft.com/en-us/style-guide">
              Microsoft Style Guide
            </a>
          </ListItem>
        </List>
      </Typography>
      <Typography
        level="h2"
        id="appendices"
        sx={{
          mb: 1,
        }}
      >
        VI. Appendices
      </Typography>
      <Typography
        level="h3"
        className="styling-h3"
        sx={{
          ml: 1,
        }}
      >
        Glossary of terms
      </Typography>
      <List size="sm" sx={{ ml: 2, mb: 1 }}>
        <ListItem>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          <div>
            <strong>Accessibility</strong>: The design of products, devices,
            services, or environments for people who experience disabilities.
          </div>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          <div>
            <strong>Alternative text</strong>: Text that describes an image or
            other non-text element.
          </div>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          <div>
            <strong>Contrast</strong>: The difference in luminance or color that
            makes an object (or its representation in an image or display)
            distinguishable.
          </div>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          <div>
            <strong>Design principles</strong>: A set of rules or guidelines
            that inform the design of a product or system.
          </div>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          <div>
            <strong>Formatting guidelines</strong>: A set of rules or guidelines
            that inform the formatting of a product or system.
          </div>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          <div>
            <strong>High contrast</strong>: A color scheme that uses colors that
            are very different from each other, allowing for better visibility
            and readability for users with visual impairments or low vision.
          </div>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          <div>
            <strong>KISS:</strong> A design principle that states that most
            systems work best if they are kept simple rather than made
            complicated; therefore simplicity should be a key goal in design and
            unnecessary complexity should be avoided. Stands for keep it simple,
            stupid.
          </div>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          <div>
            <strong>Style guide</strong>: A set of rules or guidelines that
            inform the writing and design of a product or system.
          </div>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CircleIcon
              sx={{
                fontSize: 10,
              }}
            />
          </ListItemDecorator>
          <div>
            <strong>Typography</strong>: The art and technique of arranging
          </div>
        </ListItem>
      </List>
      <Typography
        level="h3"
        className="styling-h3"
        sx={{
          ml: 1,
          mb: 1,
        }}
      >
        Any feedback?
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 2,
          mb: 3,
        }}
      >
        If you have any questions or feedback about this style guide, please{" "}
        <a href="mailto:gerrardsarah@gmail.com">contact me.</a>
      </Typography>
    </Sheet>
  );
}
