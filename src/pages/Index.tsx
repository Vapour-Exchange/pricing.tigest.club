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
import Features from "@/data/features.json";
import FAQs from "@/data/faq.json";

// Define the promotion end date outside the component
const PROMOTION_END_DATE = new Date("2025-04-13T23:59:59");

export default function Index() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const visibleFeatures = showAllFeatures ? Features : Features.slice(0, 8);

  // Calculate savings percentage for Basic quarterly plan
  const basicMonthlyPrice = 1000;
  const basicQuarterlyPrice = 2000;
  const basicQuarterlyMonthlyEquivalent = basicQuarterlyPrice / 3;
  const savingsPercentage = Math.round((1 - (basicQuarterlyMonthlyEquivalent / basicMonthlyPrice)) * 100);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Choose Your Plan
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Unlock powerful tools for your community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Individual Plan */}
          <div className="relative p-8 rounded-2xl border border-gray-800 bg-gray-900/50 shadow-sm transition-all duration-200 hover:shadow-lg animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Individual</h2>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-white">$400<span className="text-lg text-gray-400">/month</span></p>
                <p className="text-sm text-gray-400">or $900/quarter (Save 25%)</p>
              </div>
              <p className="text-sm text-gray-400">Perfect for solo creators</p>
              <Button onClick={() => window.open("https://cal.com/kunaal/tigest-discovery-call", "_blank")} className="w-full align-bottom bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </div>
          </div>

          {/* Basic Plan */}
          <div className="relative p-8 rounded-2xl border border-blue-500 bg-gray-900/50 shadow-lg transform transition-all duration-200 hover:scale-105 animate-fade-in">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white">Most Popular</Badge>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Basic</h2>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-white">$1,000<span className="text-lg text-gray-400">/month</span></p>
                <div className="flex items-center">
                  <p className="text-sm text-blue-400 font-medium">Special offer: $2,000/quarter</p>
                  <Badge className="ml-2 bg-green-600 text-white">Save {savingsPercentage}%</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 bg-gray-800/50 rounded-lg p-2">
                <span className="whitespace-nowrap mr-2">Limited time offer ends:</span>
                <CountdownTimer targetDate={PROMOTION_END_DATE} />
              </div>
              <p className="text-sm text-gray-400">Best for growing communities</p>
              <Button onClick={() => window.open("https://cal.com/kunaal/tigest-discovery-call", "_blank")} className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </div>
          </div>

          {/* Growth Plan */}
          <div className="relative p-8 rounded-2xl border border-gray-800 bg-gray-900/50 shadow-sm transition-all duration-200 hover:shadow-lg animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Growth</h2>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-white">$5,000<span className="text-lg text-gray-400">/3 months</span></p>
                <p className="text-sm text-gray-400">10-day trial for $500</p>
              </div>
              <p className="text-sm text-gray-400">For established communities</p>
              <Button onClick={() => window.open("https://cal.com/kunaal/tigest-discovery-call", "_blank")} className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </div>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Feature Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-800 bg-gray-900/30">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-5 px-6 text-gray-400 font-medium text-sm uppercase tracking-wider border-b border-gray-800">Features</th>
                  <th className="text-center py-5 px-6 text-gray-400 font-medium text-sm uppercase tracking-wider border-b border-gray-800">Individual</th>
                  <th className="text-center py-5 px-6 text-gray-400 font-medium text-sm uppercase tracking-wider border-b border-gray-800 bg-blue-900/10">Basic</th>
                  <th className="text-center py-5 px-6 text-gray-400 font-medium text-sm uppercase tracking-wider border-b border-gray-800">Growth</th>
                </tr>
              </thead>
              <tbody>
                {visibleFeatures.map((feature, index) => (
                  <tr key={index} className={`border-b border-gray-800 hover:bg-gray-800/50 transition-colors ${index % 2 === 0 ? 'bg-gray-900/50' : 'bg-transparent'}`}>
                    <td className="py-4 px-6 text-white flex items-center gap-2">
                      {feature.name}
                      <FeatureTooltip description={feature.description} />
                    </td>
                    <td className="text-center py-4 px-6">
                      {feature.individual.included ? (
                        <div className="flex flex-col items-center">
                          <CheckCircle2 className="text-green-500 w-5 h-5" />
                          {feature.individual.details && (
                            <span className="text-xs text-gray-400 mt-1">{feature.individual.details}</span>
                          )}
                        </div>
                      ) : (
                        <XCircle className="text-gray-600 w-5 h-5 mx-auto opacity-50" />
                      )}
                    </td>
                    <td className="text-center py-4 px-6 bg-blue-900/10">
                      {feature.basic.included ? (
                        <div className="flex flex-col items-center">
                          <CheckCircle2 className="text-green-500 w-5 h-5" />
                          {feature.basic.details && (
                            <span className="text-xs text-gray-400 mt-1">{feature.basic.details}</span>
                          )}
                        </div>
                      ) : (
                        <XCircle className="text-gray-600 w-5 h-5 mx-auto opacity-50" />
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {feature.growth.included ? (
                        <div className="flex flex-col items-center">
                          <CheckCircle2 className="text-green-500 w-5 h-5" />
                          {feature.growth.details && (
                            <span className="text-xs text-gray-400 mt-1">{feature.growth.details}</span>
                          )}
                        </div>
                      ) : (
                        <XCircle className="text-gray-600 w-5 h-5 mx-auto opacity-50" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button
            variant="ghost"
            className="mt-6 mx-auto flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg px-4 py-2"
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
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="text-white">
            {FAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-800">
                <AccordionTrigger className="hover:text-blue-400">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Footer */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Need a custom plan for your enterprise?</p>
          <Button onClick={() => window.open("https://cal.com/kunaal/tigest-discovery-call", "_blank")} variant="outline" className="text-white border-gray-700 bg-gray-800">
            <span className="text-white">Contact Sales</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
