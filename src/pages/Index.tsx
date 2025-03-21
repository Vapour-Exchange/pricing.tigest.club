import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "@/components/CountdownTimer";
import { FeatureTooltip } from "@/components/FeatureTooltip";
import { CheckCircle2, XCircle, ChevronDown, ChevronUp, ExternalLink, Sparkles, BookOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 text-white">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      </div>

      <div className="container relative mx-auto px-4 py-20">
       
        <div className="absolute top-4 right-4 flex items-center gap-5 z-20">
          <a 
            href="https://tigest.club/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative overflow-hidden flex items-center gap-2.5 text-white font-medium transition-all duration-300 px-5 py-2.5 rounded-2xl bg-gradient-to-br from-indigo-600/80 to-purple-700/80 hover:from-indigo-500/90 hover:to-purple-600/90 backdrop-blur-md shadow-lg border border-indigo-500/30 hover:shadow-indigo-500/20 hover:shadow-xl"
          >
            
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="absolute w-8 h-8 bg-white rounded-full blur-xl group-hover:scale-150 transition-all duration-700 delay-100 opacity-0 group-hover:opacity-30"></div>
              <div className="absolute w-4 h-4 bg-blue-400 rounded-full blur-md -translate-x-6 translate-y-4 group-hover:translate-x-10 group-hover:-translate-y-4 transition-all duration-500"></div>
              <div className="absolute w-3 h-3 bg-purple-400 rounded-full blur-md translate-x-7 -translate-y-2 group-hover:-translate-x-10 group-hover:translate-y-6 transition-all duration-700"></div>
            </div>
            
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200"></div>
            
          <div className="relative grid place-items-center w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400/80 to-purple-500/80 group-hover:from-indigo-300/90 group-hover:to-purple-400/90 transition-all duration-300">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            
          <span className="relative">
              Explore Tigest
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>
          
          <a href="https://docs.tigest.club/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative overflow-hidden flex items-center gap-2.5 text-white font-medium transition-all duration-300 px-5 py-2.5 rounded-2xl bg-gradient-to-br from-purple-600/80 to-indigo-700/80 hover:from-purple-500/90 hover:to-indigo-600/90 backdrop-blur-md shadow-lg border border-purple-500/30 hover:shadow-purple-500/20 hover:shadow-xl"
          >
            
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="absolute w-8 h-8 bg-white rounded-full blur-xl group-hover:scale-150 transition-all duration-700 delay-100 opacity-0 group-hover:opacity-30"></div>
              <div className="absolute w-4 h-4 bg-purple-400 rounded-full blur-md -translate-x-6 translate-y-4 group-hover:translate-x-10 group-hover:-translate-y-4 transition-all duration-500"></div>
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full blur-md translate-x-7 -translate-y-2 group-hover:-translate-x-10 group-hover:translate-y-6 transition-all duration-700"></div>
            </div>
            
           <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200"></div>
            
        <div className="relative grid place-items-center w-7 h-7 rounded-full bg-gradient-to-br from-purple-400/80 to-indigo-500/80 group-hover:from-purple-300/90 group-hover:to-indigo-400/90 transition-all duration-300">
              <BookOpen className="w-3.5 h-3.5 text-white" />
            </div>
            
            <span className="relative">
              Documentation
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>
        </div>

        {/* Enhanced hero section */}
        <div className="text-center space-y-6 mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4 backdrop-blur-md shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium AI Community Management
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300">
            Elevate Your Community
          </h1>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
            Enterprise-grade AI tools for serious community builders
          </p>
        </div>

        {/* Enhanced premium pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Individual Plan */}
          <Card className="relative overflow-hidden border-0 bg-gradient-to-b from-indigo-900/40 to-indigo-950/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border border-indigo-700/20 rounded-lg pointer-events-none"></div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-white">Individual</CardTitle>
              <CardDescription className="text-blue-200/70">Perfect for solo creators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">$400</span>
                  <span className="text-lg text-blue-300/70 ml-2">/month</span>
                </div>
                <p className="text-sm text-blue-300/70">$900 billed quarterly</p>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">1 Reply Agent (60 replies/day)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">1 Mention Agent (50 mentions/day)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">Community Raid Agent</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">Premium LLM models access</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <Button onClick={() => window.open("https://cal.com/kunaal/tigest-discovery-call", "_blank")}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 border-0 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all duration-300">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Basic Plan - Badge moved inside the card */}
          <Card className="relative overflow-hidden border-0 bg-gradient-to-b from-purple-900/40 to-indigo-950/40 backdrop-blur-md shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 hover:shadow-2xl z-10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
            <div className="absolute inset-0 border border-purple-700/30 rounded-lg pointer-events-none"></div>

            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-white">Basic</CardTitle>
                <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 shadow-lg py-1">
                  Most Popular
                </Badge>
              </div>
              <CardDescription className="text-blue-200/70">Best for growing communities</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">$1,000</span>
                  <span className="text-lg text-blue-300/70 ml-2">/month</span>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-blue-300">$2,000 billed quarterly</p>
                  <Badge className="ml-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">Save {savingsPercentage}%</Badge>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-blue-200 bg-indigo-950/70 rounded-lg p-3 border border-indigo-800/50 backdrop-blur-md">
                <span className="whitespace-nowrap mr-2">Limited time offer ends:</span>
                <CountdownTimer targetDate={PROMOTION_END_DATE} />
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">1 Reply Agent (100 replies/day)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">1 Mention Agent (100 mentions/day)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">Auto Engagement (10 agents)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">Access to Social Graph</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <Button onClick={() => window.open("https://cal.com/kunaal/tigest-discovery-call", "_blank")}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 border-0 shadow-lg shadow-purple-900/30 hover:shadow-purple-500/30 transition-all duration-300">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Growth Plan */}
          <Card className="relative overflow-hidden border-0 bg-gradient-to-b from-indigo-900/40 to-indigo-950/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-indigo-900/20 hover:shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border border-indigo-700/20 rounded-lg pointer-events-none"></div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-white">Growth</CardTitle>
              <CardDescription className="text-blue-200/70">For established communities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">$5,000</span>
                  <span className="text-lg text-blue-300/70 ml-2">/quarter</span>
                </div>
                <p className="text-sm text-blue-300/70">10-day trial for $500</p>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">3 Reply Agents (100 replies/day)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">2 Mention Agents (100 mentions/day)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">Auto Engagement (15 agents)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">Dedicated Account Manager</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <Button onClick={() => window.open("https://cal.com/kunaal/tigest-discovery-call", "_blank")}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 border-0 shadow-lg shadow-indigo-900/20 hover:shadow-indigo-900/40 transition-all duration-300">
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Enhanced Features Comparison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300 mb-4">Complete Feature Comparison</h2>
            <p className="text-blue-200/70 max-w-2xl mx-auto">Every plan includes powerful features to help you grow and engage with your community</p>
          </div>

          <div className="overflow-hidden rounded-xl border border-indigo-800/30 bg-indigo-950/30 backdrop-blur-md shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
                    <th className="text-left py-6 px-6 text-blue-200 font-medium text-sm uppercase tracking-wider border-b border-indigo-800/30">Features</th>
                    <th className="text-center py-6 px-6 text-blue-200 font-medium text-sm uppercase tracking-wider border-b border-indigo-800/30">Individual</th>
                    <th className="text-center py-6 px-6 text-blue-200 font-medium text-sm uppercase tracking-wider border-b border-indigo-800/30 bg-indigo-800/20">Basic</th>
                    <th className="text-center py-6 px-6 text-blue-200 font-medium text-sm uppercase tracking-wider border-b border-indigo-800/30">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleFeatures.map((feature, index) => (
                    <tr key={index} className={`border-b border-indigo-800/20 hover:bg-indigo-900/20 transition-colors ${index % 2 === 0 ? 'bg-indigo-950/20' : 'bg-transparent'}`}>
                      <td className="py-5 px-6 text-white flex items-center gap-2">
                        {feature.link ? (
                          <a
                            href={feature.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-indigo-400 transition-colors"
                          >
                            {feature.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          feature.name
                        )}
                        <FeatureTooltip description={feature.description} />
                      </td>
                      <td className="text-center py-5 px-6">
                        {feature.individual.included ? (
                          <div className="flex flex-col items-center">
                            {feature.displayStyle === "number" ? (
                              <span className="text-indigo-300">{feature.individual.details}</span>
                            ) : (
                              <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                            )}
                            {feature.individual.details && feature.displayStyle !== "number" && (
                              <div className="text-xs text-indigo-300 mt-1">
                                {feature.individual.link ? (
                                  <a
                                    href={feature.individual.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-indigo-400 hover:underline"
                                  >
                                    {feature.individual.details}
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : (
                                  feature.individual.details
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          <XCircle className="text-red-700/70 w-5 h-5 mx-auto opacity-50" />
                        )}
                      </td>
                      <td className="text-center py-5 px-6 bg-indigo-800/10">
                        {feature.basic.included ? (
                          <div className="flex flex-col items-center">
                            {feature.displayStyle === "number" ? (
                              <span className="text-indigo-300">{feature.basic.details}</span>
                            ) : (
                              <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                            )}
                            {feature.basic.details && feature.displayStyle !== "number" && (
                              <div className="text-xs text-indigo-300 mt-1">
                                {feature.basic.link ? (
                                  <a
                                    href={feature.basic.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-indigo-400 hover:underline"
                                  >
                                    {feature.basic.details}
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : (
                                  feature.basic.details
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          <XCircle className="text-red-700/70 w-5 h-5 mx-auto opacity-50" />
                        )}
                      </td>
                      <td className="text-center py-5 px-6">
                        {feature.growth.included ? (
                          <div className="flex flex-col items-center">
                            {feature.displayStyle === "number" ? (
                              <span className="text-indigo-300">{feature.growth.details}</span>
                            ) : (
                              <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                            )}
                            {feature.growth.details && feature.displayStyle !== "number" && (
                              <div className="text-xs text-indigo-300 mt-1">
                                {feature.growth.link ? (
                                  <a
                                    href={feature.growth.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-indigo-400 hover:underline"
                                  >
                                    {feature.growth.details}
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : (
                                  feature.growth.details
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          <XCircle className="text-red-700/70 w-5 h-5 mx-auto opacity-50" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Button
            variant="ghost"
            className="mt-8 mx-auto flex items-center gap-2 text-indigo-300 hover:text-white hover:bg-indigo-900/30 rounded-lg px-6 py-3 transition-all duration-300 backdrop-blur-sm"
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

        {/* Enhanced FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300 mb-4">Frequently Asked Questions</h2>
            <p className="text-blue-200/70">Everything you need to know about our premium services</p>
          </div>

          <div className="bg-indigo-950/30 backdrop-blur-md rounded-xl border border-indigo-800/30 shadow-2xl overflow-hidden">
            <Accordion type="single" collapsible className="text-white">
              {FAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-indigo-800/20 px-2">
                  <AccordionTrigger className="py-6 px-4 hover:text-indigo-400 transition-colors">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-indigo-200/80 px-4 pb-6">
                    {faq.link ? (
                      <div>
                        {faq.answer}{" "}
                        <a
                          href={faq.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-400 hover:underline inline-flex items-center gap-1"
                        >
                          Learn more
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ) : (
                      faq.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900/70 to-purple-900/70 p-10 text-center mb-10 shadow-2xl backdrop-blur-md border border-indigo-700/30">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-20"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300 mb-4">Ready to transform your community?</h2>
            <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
              Join the elite creators who are leveraging AI to build engaged, thriving communities.
            </p>
            <Button
              onClick={() => window.open("https://cal.com/kunaal/tigest-discovery-call", "_blank")}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border-0"
            >
              Schedule Your Discovery Call
            </Button>
          </div>
        </div>

        <footer className="text-center text-indigo-300/50 text-sm backdrop-blur-sm py-8 rounded-lg border border-indigo-800/10 relative overflow-hidden">
         
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/50 via-purple-950/50 to-indigo-950/50"></div>
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:16px_16px]"></div>
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <a 
                href="https://tigest.club/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 text-indigo-300 hover:text-white transition-all duration-300"
              >
                <span className="bg-indigo-950/80 p-2 rounded-lg border border-indigo-800/30 group-hover:border-indigo-600/50 shadow-inner transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
                </span>
                <span className="relative font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Tigest Platform
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </a>
              
              <span className="hidden sm:inline text-indigo-700">•</span>
              
              <a 
                href="https://docs.tigest.club/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 text-indigo-300 hover:text-white transition-all duration-300"
              >
                <span className="bg-indigo-950/80 p-2 rounded-lg border border-indigo-800/30 group-hover:border-purple-600/50 shadow-inner transition-all duration-300">
                  <BookOpen className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                </span>
                <span className="relative font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Developer Documentation
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </a>
            </div>
            
            <div className="text-indigo-400/60 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span>© {new Date().getFullYear()} Tigest.Club</span>
              <span className="hidden sm:inline text-indigo-700/30">|</span>
              <span>Enterprise-grade AI Community Management</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
