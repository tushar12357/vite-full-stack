import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Building2, TrendingUp, Target, CheckCircle2, Rocket, Zap, Clock } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCaseStudyById } from "@/data/caseStudiesData";

export default function CaseStudy() {
  const { id } = useParams();

  // Fetch the actual case study by ID
  const caseStudy = id ? getCaseStudyById(id) : undefined;

  // If case study not found, redirect to case studies page
  if (!caseStudy) {
    return <Navigate to="/success-stories" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back Link */}
          <Link to="/success-stories" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>

          {/* Company Info */}
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-6 w-6 text-muted-foreground" />
            <span className="text-xl font-semibold">{caseStudy.company}</span>
            <Badge variant="outline" className="ml-2">{caseStudy.industry}</Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {caseStudy.title}
          </h1>

          {/* Featured Media */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-12 border border-border">
            {caseStudy.video ? (
              <video
                src={caseStudy.video}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={caseStudy.image}
                alt={caseStudy.company}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Overview */}
          <div className="mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {caseStudy.overview}
            </p>
          </div>

          {/* Results Metrics - Featured */}
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Key Results</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {caseStudy.results.metrics.map((metric, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* The Challenge */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">{caseStudy.challenge.title}</h2>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border mb-6">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {caseStudy.challenge.context}
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 rounded-xl p-6 border border-red-200 dark:border-red-800">
                <h3 className="text-lg font-bold mb-4 text-red-900 dark:text-red-100">Key Challenges</h3>
                <ul className="space-y-3">
                  {caseStudy.challenge.problems.map((problem, i) => (
                    <li key={i} className="flex gap-3 text-base">
                      <span className="text-red-500 mt-1 flex-shrink-0">✕</span>
                      <span className="text-muted-foreground">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">{caseStudy.solution.title}</h2>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border mb-6">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {caseStudy.solution.description}
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-xl p-6 border border-green-200 dark:border-green-800 mb-6">
                <h3 className="text-lg font-bold mb-4 text-green-900 dark:text-green-100">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudy.solution.features.map((feature, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {caseStudy.solution.implementation}
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          {caseStudy.results.additionalBenefits && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Additional Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.results.additionalBenefits.map((benefit, i) => (
                  <div key={i} className="flex gap-3 items-start bg-card p-4 rounded-xl border border-border hover:shadow-md transition-shadow">
                    <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Implementation Timeline */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">{caseStudy.implementation.title}</h2>
            </div>
            <div className="space-y-4">
              {caseStudy.implementation.steps.map((step, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 font-bold text-white text-xl shadow-lg">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <Badge variant="outline" className="bg-primary/10">{step.phase}</Badge>
                        <h3 className="font-bold text-lg">{step.activity}</h3>
                        {step.duration && (
                          <span className="text-sm text-muted-foreground ml-auto">
                            Duration: {step.duration}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Details */}
          {caseStudy.technicalDetails && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{caseStudy.technicalDetails.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Integrations</h3>
                  <ul className="space-y-3">
                    {caseStudy.technicalDetails.integrations.map((integration, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{integration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Advanced Features</h3>
                  <ul className="space-y-3">
                    {caseStudy.technicalDetails.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Future Goals */}
          {caseStudy.futureGoals && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{caseStudy.futureGoals.title}</h2>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
                <ul className="grid md:grid-cols-2 gap-4">
                  {caseStudy.futureGoals.plans.map((plan, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <Rocket className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Testimonial */}
          <div className="mb-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-border">
            <div className="text-4xl text-primary mb-6">"</div>
            <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              {caseStudy.results.testimonial.quote}
            </p>
            <div>
              <div className="font-bold text-lg">{caseStudy.results.testimonial.author}</div>
              <div className="text-muted-foreground">{caseStudy.results.testimonial.role}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-accent text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for Similar Results?</h3>
            <p className="text-lg mb-6 text-white/90">
              See how CloserX can transform your business operations
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
