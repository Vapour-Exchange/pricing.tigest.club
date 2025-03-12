
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "@/components/CountdownTimer";
import { FeatureTooltip } from "@/components/FeatureTooltip";
import { CheckCircle2, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Complete feature set with tooltips
const Features = [
  {
    name: "Reply Agent",
    description: "AI agents that automatically reply to your community messages",
    individual: { included: true, details: "1 agent, 60 replies/day" },
    basic: { included: true, details: "1 agent, 100 replies/day" },
    growth: { included: true, details: "3 agents, 100 replies/day" },
  },
  {
    name: "Mention Agent",
    description: "AI agents that respond to social media mentions of your brand",
    individual: { included: true, details: "1 agent, 50 mentions/day" },
    basic: { included: true, details: "1 agent, 100 mentions/day" },
    growth: { included: true, details: "2 agents, 100 mentions/day" },
  },
  {
    name: "Raid Agent",
    description: "AI agents that manage community raids and events",
    individual: { included: true, details: "Up to 1000 members" },
    basic: { included: true, details: "No limit" },
    growth: { included: true, details: "No cap" },
  },
  {
    name: "Onboarding Time",
    description: "Time required to set up and configure your agents",
    individual: { included: true, details: "1 day" },
    basic: { included: true, details: "2 days" },
    growth: { included: true, details: "4 days" },
  },
  {
    name: "Lists per agent",
    description: "Number of separate lists each agent can manage",
    individual: { included: true, details: "2" },
    basic: { included: true, details: "5" },
    growth: { included: true, details: "5" },
  },
  {
    name: "Personas per agent",
    description: "Different AI personalities your agents can use",
    individual: { included: true, details: "2" },
    basic: { included: true, details: "3" },
    growth: { included: true, details: "3" },
  },
  {
    name: "Max members/list per agent",
    description: "Maximum number of community members each list can contain",
    individual: { included: true, details: "150" },
    basic: { included: true, details: "200" },
    growth: { included: true, details: "200" },
  },
  {
    name: "Premium LLM models",
    description: "Access to advanced AI language models for better responses",
    individual: { included: false },
    basic: { included: true },
    growth: { included: true },
  },
  {
    name: "Auto Engagement",
    description: "Automated engagement with your community members",
    individual: { included: false },
    basic: { included: true, details: "10 agents" },
    growth: { included: true, details: "15 agents" },
  },
  {
    name: "Hire Engagement Functionality",
    description: "Ability to hire additional engagement services",
    individual: { included: false },
    basic: { included: false },
    growth: { included: true, details: "10 times/month" },
  },
  {
    name: "Access to Social Graph",
    description: "View and analyze your community's social connections",
    individual: { included: false },
    basic: { included: true },
    growth: { included: true },
  },
  {
    name: "Telegram Community Agents",
    description: "AI agents that work within Telegram communities",
    individual: { included: false },
    basic: { included: true, details: "up to 4" },
    growth: { included: true, details: "up to 4" },
  },
  {
    name: "Access to Post Suggestions",
    description: "AI-generated content ideas for your community",
    individual: { included: false },
    basic: { included: false },
    growth: { included: true },
  },
  {
    name: "Analytics Access",
    description: "Detailed metrics and performance data for your community",
    individual: { included: false },
    basic: { included: false },
    growth: { included: true },
  },
  {
    name: "Giveaway for Community",
    description: "Budget for community rewards and incentives",
    individual: { included: false },
    basic: { included: false },
    growth: { included: true, details: "up to $3000" },
  },
  {
    name: "Account Manager",
    description: "Personal support for your account needs",
    individual: { included: false },
    basic: { included: true, details: "Not dedicated" },
    growth: { included: true, details: "Dedicated" },
  },
  {
    name: "Access to Campaign Agents",
    description: "Specialized AI agents for marketing campaigns",
    individual: { included: false },
    basic: { included: false },
    growth: { included: true, details: "Charged extra" },
  },
];

const FAQs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for business accounts.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "What happens after the trial period?",
    answer: "After the trial period ends, you'll be automatically switched to the selected plan unless you cancel.",
  },
];

export default function Index() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const visibleFeatures = showAllFeatures ? Features : Features.slice(0, 8);

  // Calculate savings percentage for Basic quarterly plan
  const basicMonthlyPrice = 1000;
  const basicQuarterlyPrice = 2000;
  const basicQuarterlyMonthlyEquivalent = basicQuarterlyPrice / 3;
  const savingsPercentage = Math.round((1 - (basicQuarterlyMonthlyEquivalent / basicMonthlyPrice)) * 100);

  return (
    <div className="min-h-screen bg-tigest-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-tigest-text">
            Choose Your Plan
          </h1>
          <p className="text-lg text-tigest-text/80 max-w-2xl mx-auto">
            Unlock powerful tools for your community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Individual Plan */}
          <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-tigest-text">Individual</h2>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">$400<span className="text-lg text-price-muted">/month</span></p>
                <p className="text-sm text-tigest-text/70">or $900/quarter (Save 25%)</p>
              </div>
              <p className="text-sm text-tigest-text/70">Perfect for solo creators</p>
              <Button className="w-full bg-primary hover:bg-primary-hover text-white">Get Started</Button>
            </div>
          </div>

          {/* Basic Plan */}
          <div className="relative p-8 rounded-2xl border-2 border-primary bg-white shadow-lg transform transition-all duration-200 hover:scale-105 animate-fade-in">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">Most Popular</Badge>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-tigest-text">Basic</h2>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">$1,000<span className="text-lg text-price-muted">/month</span></p>
                <div className="flex items-center">
                  <p className="text-sm text-primary font-medium">Special offer: $2,000/quarter</p>
                  <Badge className="ml-2 bg-success text-white">Save {savingsPercentage}%</Badge>
                </div>
                <div className="mt-2">
                  <CountdownTimer />
                </div>
              </div>
              <p className="text-sm text-tigest-text/70">Best for growing communities</p>
              <Button className="w-full bg-primary hover:bg-primary-hover text-white">Get Started</Button>
            </div>
          </div>

          {/* Growth Plan */}
          <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-tigest-text">Growth</h2>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">$5,000<span className="text-lg text-price-muted">/3 months</span></p>
                <p className="text-sm text-tigest-text/70">10-day trial for $500</p>
              </div>
              <p className="text-sm text-tigest-text/70">For established communities</p>
              <Button className="w-full bg-primary hover:bg-primary-hover text-white">Get Started</Button>
            </div>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4 text-tigest-text">Features</th>
                <th className="text-center py-4 px-4 text-tigest-text">Individual</th>
                <th className="text-center py-4 px-4 text-tigest-text">Basic</th>
                <th className="text-center py-4 px-4 text-tigest-text">Growth</th>
              </tr>
            </thead>
            <tbody>
              {visibleFeatures.map((feature, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 text-tigest-text flex items-center">
                    {feature.name}
                    <FeatureTooltip description={feature.description} />
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.individual.included ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="text-success w-5 h-5" />
                        {feature.individual.details && (
                          <span className="text-xs text-tigest-text/70 mt-1">{feature.individual.details}</span>
                        )}
                      </div>
                    ) : (
                      <XCircle className="text-error w-5 h-5 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.basic.included ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="text-success w-5 h-5" />
                        {feature.basic.details && (
                          <span className="text-xs text-tigest-text/70 mt-1">{feature.basic.details}</span>
                        )}
                      </div>
                    ) : (
                      <XCircle className="text-error w-5 h-5 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.growth.included ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="text-success w-5 h-5" />
                        {feature.growth.details && (
                          <span className="text-xs text-tigest-text/70 mt-1">{feature.growth.details}</span>
                        )}
                      </div>
                    ) : (
                      <XCircle className="text-error w-5 h-5 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button
            variant="ghost"
            className="mt-4 mx-auto flex items-center gap-2 text-tigest-text"
            onClick={() => setShowAllFeatures(!showAllFeatures)}
          >
            {showAllFeatures ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show More Features <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-tigest-text">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="text-tigest-text">
            {FAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Footer */}
        <div className="text-center">
          <p className="text-tigest-text/70 mb-4">Need a custom plan for your enterprise?</p>
          <Button variant="outline" className="text-tigest-text border-tigest-text/20 hover:bg-tigest-text/5">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
}
