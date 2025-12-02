import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Clock, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CASE_STUDIES_DATA } from "@/data/caseStudiesData";

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const study = id ? CASE_STUDIES_DATA[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-gray-400 mb-8">The case study you are looking for does not exist.</p>
          <Link to="/case-studies">
            <Button variant="outline">Back to Case Studies</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <article className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* BACK */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
            <Badge variant="outline" className="text-primary border-primary">{study.industry}</Badge>
          </div>

          {/* HEADER */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {study.overview}
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-16 bg-gray-900">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* METRICS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {study.results.metrics.map((metric, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-white mb-1">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CONTENT SECTIONS */}
          <div className="space-y-16">
            {/* Challenge */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                {study.challenge.title}
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">{study.challenge.context}</p>
                <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                  {study.challenge.problems.map((problem, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                      <span className="text-gray-300">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                {study.solution.title}
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">{study.solution.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {study.solution.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                {study.results.title}
              </h2>



              <div className="grid md:grid-cols-2 gap-4">
                {study.results.additionalBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation Timeline */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                {study.implementation.title}
              </h2>
              <div className="space-y-6">
                {study.implementation.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 md:gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary text-primary flex items-center justify-center font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      {i !== study.implementation.steps.length - 1 && (
                        <div className="w-px h-full bg-white/10 my-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{step.activity}</h3>
                        <Badge variant="secondary" className="text-xs">{step.duration}</Badge>
                      </div>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-primary to-accent text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for Similar Results?</h3>
            <p className="text-lg mb-6 text-white/90">
              See how CloserX can transform your business operations
            </p>
            <div className="flex justify-center">
              <DemoModal
                buttonClassName="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8 font-semibold"
              >
                Schedule a Demo
              </DemoModal>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
