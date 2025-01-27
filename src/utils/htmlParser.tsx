import parse, { domToReact, Element, DOMNode } from "html-react-parser";

export const cleanContent = (html: string) => {
  return parse(html, {
    replace: (domNode: DOMNode) => {
      if (domNode.type === "tag") {
        const element = domNode as Element;

        switch (element.name) {
          case "h3":
            return (
              <h3 className="subheading-alt">
                {domToReact(element.children as DOMNode[])}
              </h3>
            );
          case "h4":
            return (
              <h4 className="subheading-alt">
                {domToReact(element.children as DOMNode[])}
              </h4>
            );
          case "p":
            return (
              <p className="body">
                {domToReact(element.children as DOMNode[])}
              </p>
            );
          case "iframe":
            if (element.attribs.src?.includes("youtube.com")) {
              return (
                <div className="relative w-full overflow-hidden pb-[56.25%]">
                  <iframe
                    src={element.attribs.src}
                    title={element.attribs.title || "YouTube video"}
                    className="absolute left-0 top-0 h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              );
            }
            break;
          default:
            return null;
        }
      }
      return null;
    },
  });
};
