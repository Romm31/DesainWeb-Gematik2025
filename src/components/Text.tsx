import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  forwardRef
} from "react";
import type { ElementType } from "react";
import { gsap } from "gsap";
import "./TextType.css";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

/** FIXED: no-any */
type AsComponent = ElementType;

/** FIXED: TS Polymorphic typing */
type PolymorphicProps<T extends ElementType> =
  React.ComponentPropsWithoutRef<T> & TextTypeProps;

const TextType = forwardRef<HTMLElement, PolymorphicProps<AsComponent>>(
  (
    {
      text,
      as: Component = "div",
      typingSpeed = 50,
      initialDelay = 0,
      pauseDuration = 2000,
      deletingSpeed = 30,
      loop = true,
      className = "",
      showCursor = true,
      hideCursorWhileTyping = false,
      cursorCharacter = "|",
      cursorClassName = "",
      cursorBlinkDuration = 0.5,
      textColors = [],
      variableSpeed,
      onSentenceComplete,
      startOnVisible = false,
      reverseMode = false,
      ...props
    },
    forwardedRef
  ) => {
    /** STATE */
    const [displayedText, setDisplayedText] = useState("");
    const [charIdx, setCharIdx] = useState(0);
    const [textIdx, setTextIdx] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isVisible, setIsVisible] = useState(!startOnVisible);

    /** REFS */
    const rootRef = useRef<HTMLElement | null>(null);
    const cursorRef = useRef<HTMLSpanElement | null>(null);

    /** Sync forwarded ref */
    useEffect(() => {
      const node = rootRef.current;

      if (!forwardedRef) return;

      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if ("current" in forwardedRef) {
        forwardedRef.current = node;
      }
    }, [forwardedRef]);

    /** Normalize text array */
    const textArr = useMemo(() => {
      return Array.isArray(text) ? text : [text];
    }, [text]);

    /** Cursor blink animation */
    useEffect(() => {
      if (!cursorRef.current || !showCursor) return;

      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true
      });
    }, [showCursor, cursorBlinkDuration]);

    /** Visible trigger (observer) */
    useEffect(() => {
      if (!startOnVisible) return;

      const el = rootRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [startOnVisible]);

    /** Typing logic */
    useEffect(() => {
      if (!isVisible) return;

      let timeout: ReturnType<typeof setTimeout>;

      const realText = reverseMode
        ? textArr[textIdx].split("").reverse().join("")
        : textArr[textIdx];

      const speed = variableSpeed
        ? Math.random() * (variableSpeed.max - variableSpeed.min) +
          variableSpeed.min
        : typingSpeed;

      const run = () => {
        if (isDeleting) {
          if (displayedText === "") {
            setIsDeleting(false);
            const next = (textIdx + 1) % textArr.length;
            setTextIdx(next);
            setCharIdx(0);

            if (!loop && next === 0) return;

            if (onSentenceComplete)
              onSentenceComplete(textArr[textIdx], textIdx);

            timeout = setTimeout(run, pauseDuration);
          } else {
            timeout = setTimeout(
              () => setDisplayedText((t) => t.slice(0, -1)),
              deletingSpeed
            );
          }
        } else {
          if (charIdx < realText.length) {
            timeout = setTimeout(() => {
              setDisplayedText((t) => t + realText[charIdx]);
              setCharIdx((i) => i + 1);
            }, speed);
          } else if (textArr.length > 1) {
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        }
      };

      timeout = setTimeout(run, initialDelay);

      return () => clearTimeout(timeout);
    }, [
      displayedText,
      charIdx,
      isDeleting,
      reverseMode,
      textIdx,
      typingSpeed,
      deletingSpeed,
      pauseDuration,
      textArr,
      isVisible,
      loop,
      initialDelay,
      variableSpeed,
      onSentenceComplete
    ]);

    const hideCursor =
      hideCursorWhileTyping &&
      (charIdx < textArr[textIdx].length || isDeleting);

    const activeColor =
      textColors.length > 0
        ? textColors[textIdx % textColors.length]
        : undefined;

    /** RENDER */
    return (
      <Component ref={rootRef} className={`text-type ${className}`} {...props}>
        <span className="text-type__content" style={{ color: activeColor }}>
          {displayedText}
        </span>

        {showCursor && (
          <span
            ref={cursorRef}
            className={`text-type__cursor ${cursorClassName} ${
              hideCursor ? "text-type__cursor--hidden" : ""
            }`}
          >
            {cursorCharacter}
          </span>
        )}
      </Component>
    );
  }
);

TextType.displayName = "TextType";

export default TextType;
