import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Layout from "@/components/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend or email service
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 to-background py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Get in Touch
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              We'd Love to Hear <span className="text-primary">From You</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question, feedback, or want to learn more about RabbitHQ?
              Our team is here to help. Reach out and we'll get back to you as
              soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto max-w-6xl px-4 -mt-10 relative z-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="text-center shadow-md">
            <CardContent className="pt-6">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Email Us</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                hello@rabbithq.com
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-md">
            <CardContent className="pt-6">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Call Us</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                +1 (555) 123-4567
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-md">
            <CardContent className="pt-6">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Office Hours</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Mon – Fri, 9AM – 6PM EST
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <Send className="h-7 w-7 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                      Message Sent!
                    </h3>
                    <p className="max-w-sm text-muted-foreground">
                      Thank you for reaching out. Our team will review your
                      message and get back to you shortly.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about what you need..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full sm:w-auto gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <iframe
                    title="RabbitHQ Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1697041439586!5m2!1sen!2sus"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">RabbitHQ Headquarters</p>
                  <p className="text-sm text-muted-foreground">
                    123 Innovation Drive, Suite 400
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="mb-2 font-semibold">Need Immediate Help?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Check out our FAQ or documentation for quick answers to common
                  questions.
                </p>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/faq">Visit FAQ</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
