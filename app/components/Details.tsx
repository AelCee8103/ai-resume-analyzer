import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./Accordion";
import { cn } from "~/lib/utils";

interface Tip {
  type: "good" | "improve";
  tip: string;
  explanation: string;
}

interface CategoryData {
  score: number;
  tips: Tip[];
}

const ScoreBadge: React.FC<{ score: number }> = ({ score }) => {
  const isGreen = score > 69;
  const isYellow = score > 39;

  let bgColor = "bg-red-50";
  let textColor = "text-red-600";
  let iconColor = "text-red-500";

  if (isGreen) {
    bgColor = "bg-green-50";
    textColor = "text-green-600";
    iconColor = "text-green-500";
  } else if (isYellow) {
    bgColor = "bg-yellow-50";
    textColor = "text-yellow-600";
    iconColor = "text-yellow-500";
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-sm font-medium",
        bgColor,
        textColor
      )}
    >
      {isGreen && (
        <svg
          className={cn("w-4 h-4", iconColor)}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <span>{score}/100</span>
    </div>
  );
};

const CategoryHeader: React.FC<{ title: string; categoryScore: number }> = ({
  title,
  categoryScore,
}) => {
  return (
    <div className="flex items-center gap-3">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

const CategoryContent: React.FC<{ tips: Tip[] }> = ({ tips }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
          >
            {tip.type === "good" ? (
              <div className="mt-0.5 p-1 bg-green-100 rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-green-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <div className="mt-0.5 p-1 bg-yellow-100 rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-yellow-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
            <span className="text-sm text-gray-700 leading-tight">
              {tip.tip}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className={cn(
              "p-4 rounded-lg border-l-4",
              tip.type === "good"
                ? "bg-green-50 border-green-500 text-green-800"
                : "bg-yellow-50 border-yellow-500 text-yellow-800"
            )}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider">
                {tip.type === "good" ? "What's working" : "How to improve"}
              </span>
            </div>
            <p className="text-sm opacity-90">{tip.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

interface DetailsProps {
  feedback: Feedback;
}

const Details: React.FC<DetailsProps> = ({ feedback }) => {
  const sections = [
    {
      id: "tone",
      title: "Tone & Style",
      data: feedback.toneAndStyle,
    },
    {
      id: "content",
      title: "Content",
      data: feedback.content,
    },
    {
      id: "structure",
      title: "Structure",
      data: feedback.structure,
    },
    {
      id: "skills",
      title: "Skills",
      data: feedback.skills,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <Accordion allowMultiple defaultOpen="tone">
        {sections.map((section) => (
          <AccordionItem key={section.id} id={section.id}>
            <AccordionHeader itemId={section.id}>
              <CategoryHeader
                title={section.title}
                categoryScore={section.data.score}
              />
            </AccordionHeader>
            <AccordionContent itemId={section.id}>
              <CategoryContent tips={section.data.tips} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Details;
