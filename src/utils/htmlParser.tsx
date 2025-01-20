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
              <p className="body mt-0">
                {domToReact(element.children as DOMNode[])}
              </p>
            );
          default:
            return null;
        }
      }
      return null;
    },
  });
};
