# CodeQuest Adventure
## End User Documentation

## Contents

1. Abstract
2. Chapter 1. Introduction
3. Chapter 2. Getting Started
4. Chapter 3. Understanding the Game Structure
5. Chapter 4. Landing Page Guide
6. Chapter 5. Subject Worlds Guide
7. Chapter 6. Levels and Progress Guide
8. Chapter 7. How Gameplay Works
9. Chapter 8. Saving and Loading Progress
10. Chapter 9. Visual Design and Themes
11. Chapter 10. Common User Actions
12. Chapter 11. Troubleshooting and FAQs
13. Chapter 12. Power User and Developer Notes
14. Chapter 13. Detailed End User Walkthrough
15. Chapter 14. Feature Reference
16. Chapter 15. Simple Technical Overview
17. Chapter 16. Safety, Limits, and Expectations
18. Chapter 17. Conclusion
19. Source Code

---

## Abstract

CodeQuest Adventure is a browser-based learning game that turns technical subjects into interactive fantasy worlds. Instead of reading a dry list of definitions, the user moves through worlds, opens zones, and solves short scene-based challenges. Each challenge asks the user to choose the correct object, symbol, or action that best matches a technical idea. The application is designed to feel like a journey, not just a quiz.

This document is written as end user documentation. That means it explains the project in simple language and focuses on how a person uses the application, what each part of the interface does, how progress works, what to expect while playing, and what the major screens mean. A technical source code section is included at the end so the full project can still be reviewed when needed.

---

## What Makes CodeQuest Adventure Unique?

CodeQuest Adventure is not just another quiz or flashcard app. It is a gamified learning experience that transforms abstract computer science and programming concepts into memorable, themed adventures. Each subject is presented as a unique world, and each world is filled with zones (levels) and scenarios (mini-challenges) that reinforce learning through recognition, metaphor, and progression.

The application is designed for:
- **Students** who want to revise or reinforce concepts in a fun, low-pressure way.
- **Educators** who want to demonstrate technical ideas in a visually engaging format.
- **Presenters and reviewers** who need a quick, interactive demo of gamified learning.
- **Anyone** who prefers learning by doing, exploring, and seeing progress.

---

## Chapter 1. Introduction

### 1.1 What This Application Is

CodeQuest Adventure is an educational game made for the web. It teaches topics like C, C++, Java, Python, JavaScript, HTML, CSS, Data Structures, DBMS, and Operating Systems using a world-based adventure format. The idea is to make technical topics feel less intimidating and more memorable.

The application is not a coding editor and it is not a full course platform. It is best understood as a guided concept game where the player learns through recognition, theme, and progression.

### 1.2 Who This Documentation Is For

This document is mainly for end users, students, presenters, demo reviewers, and project evaluators. It is also useful for anyone who wants to understand how to move through the product without reading raw source code first.

If you want the actual implementation, there is a dedicated Source Code section at the end of this document.

### 1.3 Main Goal of the Product

The main goal is to turn abstract subjects into a game experience. A user should be able to open the app, choose a world, enter a zone, answer scene-based challenges, and unlock progress in a way that feels enjoyable.

The project tries to replace the feeling of ?I am reading notes? with the feeling of ?I am exploring a challenge.?

### 1.4 Main Benefits for Users

The application gives users a simple learning path, visual progress, clear next steps, and immediate feedback after each choice. It also works in the browser and does not require account creation in its current form.

Because it stores progress locally, a user can return later on the same browser and continue where they left off.

### 1.5 Why Gamification Works

Gamification leverages the psychology of achievement, exploration, and reward. By turning learning into a journey with visible progress, CodeQuest Adventure helps users stay motivated and engaged. The use of worlds, zones, and scenarios provides a sense of place and accomplishment, making even complex topics approachable.

### 1.6 What You Will NOT Find Here

- There are no code editors or compilers.
- There are no long-form lectures or video lessons.
- There is no account system or cloud sync (progress is local to your browser).
- There are no ads, popups, or distractions—just focused, interactive learning.


## Chapter 2. Getting Started

### 2.1 What You Need

To use the product as a player, you only need a modern web browser and a device that can open the application. No login is required. No server setup is required for normal use once the app is running.

If you are opening the project as a local development build, someone still needs to start the app using the project tools, but that is part of setup rather than everyday use.

### 2.2 Opening the Application

When the app loads, you will first see the landing screen. This opening screen introduces the game atmosphere and gives you the main action that moves you into the rest of the experience.

From there, the normal user path is simple: enter the world, choose a subject, choose an available zone, and start playing.

### 2.3 What Happens on First Use

On the first use, your browser has no saved progress for the app. That means every world will start with zero completed zones, and only the first zone in each world will be unlocked.

As soon as you finish zones, the app saves your progress in browser storage. The next time you open it in the same browser, that progress will still be there unless the browser data was cleared.

### 2.4 Best Way to Explore the App

A new user should begin with any world that looks interesting. The app does not force one global order across all subjects. Each world has its own independent zone progression.

This means you can try one world, leave it, and switch to another without damaging anything.

### 2.5 Accessibility and Device Support

CodeQuest Adventure is designed to work on desktops, laptops, and most modern tablets. The interface is responsive, so it adapts to different screen sizes. For the best experience, use a recent version of Chrome, Firefox, Edge, or Safari. Keyboard navigation is supported during gameplay for faster interaction.

---

---

## Chapter 3. Understanding the Game Structure

### 3.1 What a World Means

A world is the app?s name for a subject area. For example, one world represents Python, another represents JavaScript, and another represents Operating Systems.

Each world has its own visual theme, icon, name, and description. This helps users quickly tell subjects apart and gives each topic a stronger identity.

### 3.2 What a Zone Means

A zone is a level inside a world. You can think of a zone as one stage or challenge area in that subject. Each world contains multiple zones.

Zones are unlocked one by one. You normally need to complete the current zone before the next one becomes available.

### 3.3 What a Scenario Means

Inside each zone, there are multiple scenarios. A scenario is a short scene with a description and a few answer options.

The user reads the scene and selects the option that best fits the hidden concept. If the answer is correct, the user moves forward. If the answer is wrong, the app warns the user and tracks the mistake.

### 3.4 What Progress Means

Progress is tracked per world. Finishing zones increases your completion status inside that subject. The subjects page and levels page both show visual progress so you can tell how far you have gone.

This makes it easy to stop, come back later, and continue without confusion.

### 3.5 How the Game is Structured in the Code

Behind the scenes, each world, zone, and scenario is defined in a structured data model. This means the game can be expanded with new subjects and challenges without changing the core gameplay engine. The interface always adapts to the content, so every world feels unique but familiar.

---

---

## Chapter 4. Landing Page Guide

### 4.1 Purpose of the Landing Page

The landing page exists to introduce the atmosphere of the app and guide the user into the game. It is the first impression screen, so it uses motion, typography, and theme to make the app feel like an adventure.

This is why it looks more cinematic than a standard menu page.

### 4.2 Main Things You See

On this screen, the user usually sees the game title, the subtitle, the ambient background effect, and a main button that starts the journey. There may also be summary numbers or short labels describing the worlds and zones available.

These details are there to set the tone and encourage interaction.

### 4.3 Main Action on This Screen

The most important action is the main entry button. Selecting it takes the user to the world selection screen.

If you are using the app for the first time, this is where the real journey begins.

### 4.4 What End Users Should Understand

Users do not need to study anything on the landing page. Its purpose is orientation, not instruction. It simply tells you that you are entering a themed learning world and shows you the first clear step to continue.

### 4.5 Tips for First-Time Users

- Don’t be afraid to click the main button—nothing can go wrong!
- The landing page is designed to be welcoming and visually engaging. Take a moment to enjoy the atmosphere before you begin.
- If you ever get lost, you can always return to the landing page from the browser’s address bar or navigation.


## Chapter 5. Subject Worlds Guide

### 5.1 Why Subjects Are Shown as Worlds

The app uses world names because they are easier to remember than plain subject cards. A world can feel alive, atmospheric, and distinct.

This also helps users mentally separate one subject from another. A temple-like HTML world feels different from a storm-like JavaScript world or an archive-like DBMS world.

### 5.2 What You See on the Subjects Screen

Each world appears as a card or button with an icon, a title, a short description, and a progress indicator. This progress indicator tells you how many zones in that world you have already finished.

Users can quickly scan this page to decide where to go next.

### 5.3 How to Choose a World

You can choose a world by interest, familiarity, or curiosity. If you are learning a specific topic, select the matching world. If you just want to explore, open the world whose theme or title feels most interesting.

The app does not punish you for switching between worlds, so you can explore freely.

### 5.4 What the Progress Bar Means

The progress indicator on each world card shows how much of that world is complete. If you have completed zero zones, the world is still at the beginning. If you have completed several zones, the bar grows accordingly.

This gives you a high-level overview without needing to open every world individually.

### 5.5 Worlds Included in the Current Version

The current version includes worlds for C, C++, Java, Python, JavaScript, HTML, CSS, Data Structures, DBMS, and Operating Systems.

This gives the app broad educational variety even though the interface remains simple.

### 5.6 Expanding the Worlds

The worlds are not fixed. As the project grows, new subjects and worlds can be added. Each world is designed to have its own theme, making it easy to expand the app for more topics or even custom content in the future.

---

---

## Chapter 6. Levels and Progress Guide

### 6.1 What the Levels Screen Does

After you choose a world, the app opens the levels screen for that world. This page shows all the zones in that subject and makes it clear which ones are done, which one is available now, and which ones are still locked.

It is the main progression map for the chosen subject.

### 6.2 Meaning of Locked and Unlocked Zones

An unlocked zone is available to play. A locked zone is not yet available because you have not completed the required previous zone.

This rule keeps progression simple and prevents confusion about where the user should go next.

### 6.3 Meaning of Completed Zones

A completed zone is one you have already cleared successfully. The app marks these zones with a success state so you can identify what has already been done.

This is useful if you return after a break and cannot remember where you stopped.

### 6.4 World Progress on This Screen

The levels screen also shows world-level progress such as total zones finished and a percentage summary. This makes it easy to tell whether you have nearly finished a world or are still in the early part of it.

The page therefore acts as both a menu and a progress tracker.

### 6.5 Best User Behavior Here

Most users should simply choose the currently unlocked zone and continue. If a zone is already complete, you may still revisit it if the app allows it, but your main forward path is always the next available one.

This keeps the learning experience smooth and predictable.

### 6.6 How Progress is Saved and Displayed

Your progress is saved automatically in your browser. The app uses visual cues (such as checkmarks, progress bars, and color changes) to show which zones are complete, which are available, and which are locked. You can always see your current status at a glance.

---

---

## Chapter 7. How Gameplay Works

### 7.1 What the Play Screen Is

The play screen is the core of the app. It is where the user reads the scene, sees the answer choices, makes selections, and receives feedback.

This screen is designed to feel immersive and focused. Most distractions are removed so the user can concentrate on the challenge.

### 7.2 What You See During a Scenario

A normal scenario shows a short scene description, a small number of visual answer options, and supporting interface elements such as progress dots or corruption indicators.

The world theme also remains active in the background so the user stays inside the chosen atmosphere.

### 7.3 How to Answer

To answer, click one of the visible options. In many cases, the app also supports number keys on the keyboard so you can select an option quickly without using the mouse.

The goal is to choose the option that best matches the scene clue.

### 7.4 What Happens If You Are Correct

When your answer is correct, the app gives positive visual feedback and moves you to the next scenario. If that was the final scenario in the zone, the app marks the zone complete and shows a completion screen.

The completion screen may let you move to the next zone or return to the zone map.

### 7.5 What Happens If You Are Wrong

When your answer is wrong, the app gives a negative visual warning and increases the danger level for that run. A few mistakes are allowed, but too many wrong answers cause failure.

This creates a simple risk system that makes the game feel more active and less like a static quiz.

### 7.6 What Failure Means

Failure means you made too many wrong selections in the current zone attempt. When that happens, the app shows a failure screen and lets you try again.

Failure does not delete all your overall progress. It only means you need to replay that zone attempt.

### 7.7 Why the Gameplay Feels Fast

The app keeps scenarios short and focused. There are no long forms or big text blocks in the challenge itself. This is intentional. The design wants each interaction to feel immediate and readable.

This makes the app good for quick practice sessions as well as longer play.

### 7.8 Visual and Audio Feedback

Animations, color changes, and sometimes sound effects are used to make correct and incorrect answers clear. The interface brightens for correct answers and shakes or darkens for mistakes. This helps you know instantly how you are doing without reading extra text.

### 7.9 Keyboard Shortcuts

During gameplay, you can use number keys (1, 2, 3, etc.) to select answer options. This makes the game faster and more accessible, especially for power users or those who prefer keyboard navigation.

---

---

## Chapter 8. Saving and Loading Progress

### 8.1 How Progress Is Saved

The app saves progress in your browser using local storage. This means your completed zones and current unlock status stay available even after you refresh or close the page.

The saved data belongs to the browser profile you are using, not to a cloud account.

### 8.2 What Is Saved

The app keeps track of which levels are complete and what the current unlocked point is for each world. This allows the subjects page and levels page to show accurate progress the next time you open the app.

The save system is lightweight and automatic.

### 8.3 When Progress Can Be Lost

Because the save is local, progress can be lost if browser data is cleared, local storage is disabled, or you switch to a different browser or device.

Users should understand that this version is not designed for account-based sync.

### 8.4 What to Do If Progress Looks Wrong

If your progress looks wrong, first check whether you are using the same browser and browser profile as before. If you cleared site data or switched environments, your local progress may be gone.

In a development or testing context, someone may also have reset the stored progress deliberately.

### 8.5 Privacy and Data Safety

All your progress is stored only in your browser. No personal data is sent to any server. If you want to clear your progress, you can do so by clearing your browser’s site data for this app.

---

---

## Chapter 9. Visual Design and Themes

### 9.1 Why the App Looks Cinematic

The app uses dark gradients, glowing text, ambient particles, and world-specific visual themes to make the learning experience feel memorable.

This is not just for decoration. The visual identity helps users remember that each subject is its own themed space.

### 9.2 Fonts and Mood

The title style and body style are intentionally different. Headings feel more dramatic while body text stays readable. This balance gives the app a futuristic game atmosphere without becoming unreadable.

For users, this means the app feels more polished and purposeful than a plain study page.

### 9.3 Theme Differences Between Worlds

Each world has its own background theme. A forest-like world, a machine-like world, and a temple-like world each feel different on purpose.

These differences help users orient themselves quickly and make subject switching feel exciting rather than repetitive.

### 9.4 Motion and Feedback

Animations are used to communicate state. Correct actions brighten the scene, wrong actions shake or darken it, and transitions help the user understand movement from one scenario to the next.

This makes the interface easier to read emotionally even without long explanation text.

### 9.5 Accessibility in Visual Design

The app uses high-contrast colors, clear icons, and readable fonts to support users with different needs. If you use a screen reader or require reduced motion, most features should remain accessible, though future updates may further improve accessibility.

---

---

## Chapter 10. Common User Actions

### 10.1 Starting a Session

Open the app, enter the world, choose a subject, and open the currently available zone. This is the most common starting flow.

After that, simply follow the scenes until you finish or fail the zone.

### 10.2 Moving Back

Most pages include a back or retreat action so you can return to the previous selection screen. This helps you leave a world, change subjects, or return from a play screen to the zone map.

Users should feel free to navigate back at any time outside of the active challenge flow.

### 10.3 Replaying a Zone

If you fail a zone, the app normally lets you try again immediately. If you want to replay a completed zone for practice, you can return to the level map and select it again if the interface allows it.

Replay is useful for reinforcement and presentation demos.

### 10.4 Continuing After Success

After success, the completion screen usually offers a choice. You can go back to the level map or continue to the next zone if one exists.

This makes forward progression easy and reduces extra clicking.

### 10.5 Switching Subjects Midway

You can leave one world and enter another without losing your earlier completed zones in the first world. Progress is tracked separately per world.

This is helpful for users who want variety or who are studying multiple topics at once.

### 10.6 Resetting Your Progress

If you want to start over, you can clear your browser’s site data for this app. This will erase all saved progress and let you replay the entire adventure from scratch.

---

---

## Chapter 11. Troubleshooting and FAQs

### 11.1 The App Opens but Progress Is Missing

Most often, this means the browser storage was cleared or you are using a different browser or profile. Because the app stores progress locally, it cannot restore cloud progress in the current version.

If this happened during testing, a developer may also have reset the data intentionally.

### 11.2 A Level Is Locked

A locked level usually means the previous required level is not yet complete. Return to the current available zone and finish it first.

The app uses simple one-step progression, so the next zone unlocks when the earlier one is complete.

### 11.3 I Failed a Zone

Failure is part of the challenge system. It usually happens after too many wrong answers in one attempt. Select the retry option and try again more carefully.

Failure does not erase all of your world progress.

### 11.4 The App Looks Different on Another Screen

The app is responsive, so layout and spacing may change depending on screen size. This is normal behavior.

The content and progression rules remain the same even if the visual layout changes slightly.

### 11.5 Can I Use This Offline Forever

That depends on how the app is hosted or built for your environment. The code itself is a frontend project, but the normal user experience still depends on how it is served.

For presentation or deployment questions, a developer or maintainer should explain the hosting method.

### 11.6 The App is Not Loading or Looks Broken

Try refreshing the page or clearing your browser cache. If the problem persists, check that you are using a supported browser and that JavaScript is enabled.

### 11.7 I Want to Suggest a Feature

If you have ideas for new worlds, features, or improvements, contact the project maintainer or submit feedback through the appropriate channel (if available).

---

---

## Chapter 12. Power User and Developer Notes

### 12.1 What Advanced Users Should Know

Even though this is end-user documentation, advanced users may want a clearer idea of how the product is organized. The app is built as a single-page frontend application with route-based screens and local browser storage.

That means almost everything the user sees is controlled by the browser interface and the bundled project files.

### 12.2 Where Content Comes From

The worlds, zones, scenes, and answer options are defined in the project?s source code data layer. The gameplay screen reads that data and renders the matching content based on your route and progress.

Because of this setup, content can be expanded without rewriting the whole interface.

### 12.3 Why a User Might Care

If you are presenting the project, teaching with it, or evaluating it, this matters because it explains why the app feels consistent across many subjects. The same core engine is driving different themed content.

This is a sign of a structured and maintainable design rather than a collection of disconnected pages.

### 12.4 For Developers: How to Add Content

If you are a developer or content author, you can add new worlds, zones, and scenarios by editing the data files in the source code. The app is designed to make this process straightforward—just follow the existing structure and conventions.

---

---

## Chapter 13. Detailed End User Walkthrough

### 13.1 A Full Session Example

A typical session might look like this: you open the app, click the entry button on the landing page, choose the Python world, open the first unlocked zone, answer the scenarios, and then see the completion overlay if you succeed.

From there, you either continue to the next zone or go back to the map. If you return later in the same browser, the app remembers that success and shows the world progress accordingly.

### 13.2 What the User Learns from This Flow

This flow teaches the user how navigation, challenge, risk, and progress all connect. By using the app once from start to finish, the user already understands most of the product.

That simplicity is one of the strengths of the design.

### 13.3 How the App Supports Repetition

Because sessions are short and progression is visual, users can replay content without needing a long setup. This makes the app good for repeated practice or live demos.

It also makes it easier for educators or presenters to show one complete loop quickly.

### 13.4 Example: Exploring Multiple Worlds

You can start in one world (e.g., JavaScript), complete a few zones, then switch to another world (e.g., Data Structures) at any time. Your progress in each world is tracked separately, so you can explore at your own pace and revisit any subject as needed.

---

---

## Chapter 14. Feature Reference

### 14.1 Feature Summary

The main user-facing features are the landing screen, subject worlds, zone progression, scenario gameplay, local progress saving, animated feedback, and retry flow.

Together, these features create a compact but complete game-like learning experience.

### 14.2 Interaction Summary

The user mainly interacts through clicks and optionally through keyboard number keys during gameplay. Navigation between pages is direct and easy to understand.

Most actions are visible as buttons or cards, so there is little ambiguity about what can be selected.

### 14.3 What Makes the Product Memorable

The product is memorable because it combines theme, motion, progression, and subject variety. Even though the underlying challenge model is simple, the presentation makes the experience feel larger than a basic quiz app.

This is especially useful for educational demonstrations and beginner engagement.

### 14.4 List of All Major Features

- Cinematic landing page with animation
- Themed subject worlds
- Zone-based level progression
- Scenario-based challenges
- Visual and audio feedback
- Local progress saving
- Keyboard shortcuts for gameplay
- Responsive design for multiple devices
- Easy replay and reset options
- No login or account required

---

---

## Chapter 15. Simple Technical Overview

### 15.1 Plain-Language Architecture

In simple terms, the app has three main layers from a user point of view: screens, game content, and saved progress. The screens show the interface, the content defines the worlds and challenges, and the save system remembers what you finished.

This is enough to understand the product at a high level without reading implementation details.

### 15.2 Why the App Feels Consistent

It feels consistent because the same gameplay engine is reused across all worlds. The world data changes, but the structure stays stable.

This means users learn the interface once and then can explore many subjects without relearning the controls.

### 15.3 What the Source Code Section Is For

The Source Code section at the end is included so the full implementation can be reviewed in one place. It is separated from the main chapters on purpose because end users usually need explanation first and code second.

That also follows your requirement that code snippets should appear only in the source code area.

### 15.4 For the Curious: How the Game Works Internally

If you are interested in the technical side, the app is built with React, TypeScript, Vite, and Tailwind CSS. All game content is defined in structured data files, and the interface adapts to whatever content is present. Progress is saved in your browser’s local storage, and all navigation is handled client-side for speed and responsiveness.

---

---

## Chapter 16. Safety, Limits, and Expectations

### 16.1 What This App Does Well

The app is good at engagement, visual progression, subject-based exploration, and short concept reinforcement. It is especially good as a demo, practice tool, or gamified teaching aid.

Users can understand it quickly and start interacting almost immediately.

### 16.2 What This App Does Not Try to Be

This app is not a full online course, a compiler, or a cloud learning platform. It does not currently give detailed post-answer explanations, teacher accounts, or synced profiles.

Knowing this helps users set realistic expectations.

### 16.3 Best Use Cases

The best use cases are concept revision, introductory engagement, portfolio demonstration, classroom showcase, and lightweight practice.

It works especially well when the goal is to make technical content feel less intimidating.

### 16.4 Limitations to Be Aware Of

- Progress is not synced across devices or browsers.
- There is no way to recover lost progress if browser data is cleared.
- The app is not intended for deep, long-form study—use it as a supplement, not a replacement, for textbooks or courses.
- Accessibility is good but may be improved in future updates.

---

---

## Chapter 17. Conclusion

### 17.1 Final User Summary

CodeQuest Adventure is an easy-to-understand educational game that turns technical subjects into themed interactive worlds. For end users, the product is simple: enter, choose a world, clear zones, and build progress.

Its strongest qualities are clarity, atmosphere, and progression.

### 17.2 Final Tips

- Explore at your own pace—there’s no penalty for trying different worlds or replaying zones.
- Use keyboard shortcuts for faster gameplay.
- If you want to show off your progress, take a screenshot of your completed worlds!
- For feedback or help, contact the project maintainer.

---

### 17.2 Final Product Summary

From a product point of view, it succeeds by combining learning content with game-like navigation and visual identity. From a user point of view, it succeeds because it feels approachable and guided.

The source code that powers this experience is collected in the next section for full reference.

---

## Thank You for Playing!

We hope you enjoy your journey through CodeQuest Adventure. Whether you are a student, teacher, or just curious, this app is designed to make learning technical subjects more fun and memorable. Happy exploring!

---

## Source Code

This section contains the actual project source files. Code snippets are kept only here so the earlier chapters stay simple and user-friendly.

### src/App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
```

### src/App.tsx

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/Landing";
import Subjects from "./pages/Subjects";
import Levels from "./pages/Levels";
import Play from "./pages/Play";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/levels/:subjectId" element={<Levels />} />
          <Route path="/play/:subjectId/:levelIndex" element={<Play />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

### src/components/NavLink.tsx

```tsx
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
```

### src/components/ui/accordion.tsx

```tsx
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
```

### src/components/ui/alert-dialog.tsx

```tsx
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
```

### src/components/ui/alert.tsx

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
```

### src/components/ui/aspect-ratio.tsx

```tsx
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
```

### src/components/ui/avatar.tsx

```tsx
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
```

### src/components/ui/badge.tsx

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
```

### src/components/ui/breadcrumb.tsx

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
```

### src/components/ui/button.tsx

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

### src/components/ui/calendar.tsx

```tsx
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
```

### src/components/ui/card.tsx

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

### src/components/ui/carousel.tsx

```tsx
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
```

### src/components/ui/chart.tsx

```tsx
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          })}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
```

### src/components/ui/checkbox.tsx

```tsx
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
```

### src/components/ui/collapsible.tsx

```tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
```

### src/components/ui/command.tsx

```tsx
import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
```

### src/components/ui/context-menu.tsx

```tsx
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
```

### src/components/ui/dialog.tsx

```tsx
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
```

### src/components/ui/drawer.tsx

```tsx
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
```

### src/components/ui/dropdown-menu.tsx

```tsx
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
```

### src/components/ui/form.tsx

```tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return <p ref={ref} id={formDescriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />;
  },
);
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={cn("text-sm font-medium text-destructive", className)} {...props}>
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };
```

### src/components/ui/hover-card.tsx

```tsx
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
```

### src/components/ui/input-otp.tsx

```tsx
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  ),
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center", className)} {...props} />,
);
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  ),
);
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
```

### src/components/ui/input.tsx

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
```

### src/components/ui/label.tsx

```tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
```

### src/components/ui/menubar.tsx

```tsx
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
```

### src/components/ui/navigation-menu.tsx

```tsx
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
```

### src/components/ui/pagination.tsx

```tsx
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
```

### src/components/ui/popover.tsx

```tsx
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
```

### src/components/ui/progress.tsx

```tsx
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
```

### src/components/ui/radio-group.tsx

```tsx
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
```

### src/components/ui/resizable.tsx

```tsx
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
```

### src/components/ui/scroll-area.tsx

```tsx
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
```

### src/components/ui/select.tsx

```tsx
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
```

### src/components/ui/separator.tsx

```tsx
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
```

### src/components/ui/sheet.tsx

```tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
```

### src/components/ui/sidebar.tsx

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
});
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      ref={ref}
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]",
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
        >
          {children}
        </div>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<React.ElementRef<typeof Button>, React.ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="ghost"
        size="icon"
        className={cn("h-7 w-7", className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  },
);
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<React.ElementRef<typeof Input>, React.ComponentProps<typeof Input>>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        data-sidebar="input"
        className={cn(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="header" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="footer" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<React.ElementRef<typeof Separator>, React.ComponentProps<typeof Separator>>(
  ({ className, ...props }, ref) => {
    return (
      <Separator
        ref={ref}
        data-sidebar="separator"
        className={cn("mx-2 w-auto bg-sidebar-border", className)}
        {...props}
      />
    );
  },
);
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={cn(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={cn(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-sidebar="group-content" className={cn("w-full text-sm", className)} {...props} />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul ref={ref} data-sidebar="menu" className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} data-sidebar="menu-item" className={cn("group/menu-item relative", className)} {...props} />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-[--skeleton-width] flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ ...props }, ref) => (
  <li ref={ref} {...props} />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
```

### src/components/ui/skeleton.tsx

```tsx
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
```

### src/components/ui/slider.tsx

```tsx
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
```

### src/components/ui/sonner.tsx

```tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
```

### src/components/ui/switch.tsx

```tsx
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
```

### src/components/ui/table.tsx

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />,
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  ),
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
  ),
);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className)}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
  ),
);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
```

### src/components/ui/tabs.tsx

```tsx
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
```

### src/components/ui/textarea.tsx

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
```

### src/components/ui/toast.tsx

```tsx
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
```

### src/components/ui/toaster.tsx

```tsx
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
```

### src/components/ui/toggle-group.tsx

```tsx
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
```

### src/components/ui/toggle.tsx

```tsx
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
```

### src/components/ui/tooltip.tsx

```tsx
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
```

### src/components/ui/use-toast.ts

```ts
import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };
```

### src/hooks/use-mobile.tsx

```tsx
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

### src/hooks/use-toast.ts

```ts
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
```

### src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

@layer base {
  :root {
    --background: 230 25% 7%;
    --foreground: 210 40% 92%;
    --card: 230 20% 12%;
    --card-foreground: 210 40% 92%;
    --popover: 230 20% 12%;
    --popover-foreground: 210 40% 92%;
    --primary: 160 100% 50%;
    --primary-foreground: 230 25% 7%;
    --secondary: 270 80% 60%;
    --secondary-foreground: 210 40% 98%;
    --muted: 230 15% 18%;
    --muted-foreground: 215 15% 55%;
    --accent: 45 100% 55%;
    --accent-foreground: 230 25% 7%;
    --destructive: 0 85% 55%;
    --destructive-foreground: 210 40% 98%;
    --border: 230 15% 20%;
    --input: 230 15% 20%;
    --ring: 160 100% 50%;
    --radius: 0.75rem;
    --neon-cyan: 180 100% 50%;
    --neon-purple: 270 80% 60%;
    --neon-gold: 45 100% 55%;
    --neon-red: 0 85% 55%;
    --neon-blue: 210 100% 60%;
    --gradient-game: linear-gradient(135deg, hsl(230 25% 7%), hsl(250 30% 12%), hsl(230 25% 7%));
    --gradient-primary: linear-gradient(135deg, hsl(160 100% 50%), hsl(180 100% 50%));
    --gradient-accent: linear-gradient(135deg, hsl(270 80% 60%), hsl(300 80% 60%));
    --gradient-gold: linear-gradient(135deg, hsl(45 100% 55%), hsl(35 100% 60%));
    --shadow-neon-primary: 0 0 20px hsl(160 100% 50% / 0.4), 0 0 40px hsl(160 100% 50% / 0.2);
    --shadow-neon-purple: 0 0 20px hsl(270 80% 60% / 0.4), 0 0 40px hsl(270 80% 60% / 0.2);
    --shadow-neon-gold: 0 0 20px hsl(45 100% 55% / 0.4), 0 0 40px hsl(45 100% 55% / 0.2);
    --font-display: 'Orbitron', sans-serif;
    --font-body: 'Rajdhani', sans-serif;
    --sidebar-background: 230 20% 10%;
    --sidebar-foreground: 210 40% 92%;
    --sidebar-primary: 160 100% 50%;
    --sidebar-primary-foreground: 230 25% 7%;
    --sidebar-accent: 230 15% 18%;
    --sidebar-accent-foreground: 210 40% 92%;
    --sidebar-border: 230 15% 20%;
    --sidebar-ring: 160 100% 50%;
  }
}

@layer base {
  * { @apply border-border; }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body);
  }
  h1, h2, h3, h4, h5, h6 { font-family: var(--font-display); }
}

@layer utilities {
  .text-glow-primary {
    text-shadow: 0 0 10px hsl(160 100% 50% / 0.6), 0 0 20px hsl(160 100% 50% / 0.3);
  }
  .text-glow-gold {
    text-shadow: 0 0 10px hsl(45 100% 55% / 0.6), 0 0 20px hsl(45 100% 55% / 0.3);
  }
  .text-glow-purple {
    text-shadow: 0 0 10px hsl(270 80% 60% / 0.6), 0 0 20px hsl(270 80% 60% / 0.3);
  }
  .box-glow-primary { box-shadow: var(--shadow-neon-primary); }
  .box-glow-purple { box-shadow: var(--shadow-neon-purple); }
  .box-glow-gold { box-shadow: var(--shadow-neon-gold); }
}

/* â"€â"€ Keyframes â"€â"€ */

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes pulse-glow {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes drift {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
  25% { transform: translate(5px, -8px) scale(1.1); opacity: 0.7; }
  50% { transform: translate(-3px, -15px) scale(1); opacity: 0.5; }
  75% { transform: translate(8px, -6px) scale(0.9); opacity: 0.6; }
}
@keyframes scene-brighten {
  0% { opacity: 0; }
  50% { opacity: 0.25; }
  100% { opacity: 0; }
}
@keyframes scene-darken {
  0% { opacity: 0; }
  50% { opacity: 0.3; }
  100% { opacity: 0; }
}

.animate-fade-in { animation: fade-in 0.6s ease-out both; }
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-shake { animation: shake 0.4s ease-out; }
.animate-drift { animation: drift 8s ease-in-out infinite; }
.animate-scene-brighten { animation: scene-brighten 1.5s ease-out both; }
.animate-scene-darken { animation: scene-darken 1s ease-out both; }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   WORLD THEMES
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

.world-forest   { background: linear-gradient(180deg, #0a1a0a 0%, #0d2b10 40%, #061206 100%); }
.world-citadel  { background: linear-gradient(180deg, #120818 0%, #1a0d2b 40%, #0a0612 100%); }
.world-machine  { background: linear-gradient(180deg, #080c1a 0%, #0d152b 40%, #060812 100%); }
.world-serpent  { background: linear-gradient(180deg, #081a14 0%, #0d2b1e 40%, #06120e 100%); }
.world-storm    { background: linear-gradient(180deg, #0a0a1e 0%, #10122b 40%, #060816 100%); }
.world-temple   { background: linear-gradient(180deg, #1a1408 0%, #2b1f0d 40%, #120e06 100%); }
.world-prismatic { background: linear-gradient(180deg, #180a18 0%, #200d2b 40%, #100612 100%); }
.world-labyrinth { background: linear-gradient(180deg, #081a16 0%, #0d2b22 40%, #061210 100%); }
.world-archive  { background: linear-gradient(180deg, #1a1508 0%, #2b200d 40%, #120f06 100%); }
.world-core     { background: linear-gradient(180deg, #1a0808 0%, #2b0d0d 40%, #120606 100%); }
```

### src/lib/data.ts

```ts
export interface SceneElement {
  emoji: string;
  label: string;
  correct: boolean;
}

export interface Scenario {
  scene: string;
  elements: SceneElement[];
}

export interface Zone {
  name: string;
  scenarios: Scenario[];
}

export interface World {
  id: string;
  name: string;
  icon: string;
  description: string;
  theme: string;
  zones: Zone[];
}

const sc = (scene: string, ...els: [string, string, boolean][]): Scenario => ({
  scene,
  elements: els.map(([emoji, label, correct]) => ({ emoji, label, correct })),
});

const cZones: Zone[] = [
  { name: "The Weight Chamber", scenarios: [
    sc("Stone pedestals hold objects of different nature. Only the solid, countable one resonates with the gate.", ["ðŸª¨","Solid Stone",true], ["ðŸ'§","Flowing Water",false], ["ðŸ'¨","Thin Air",false]),
    sc("Three vessels sit before you. One holds a single ancient symbol.", ["ðŸ"¤","Rune Tablet",true], ["ðŸ"œ","Long Scroll",false], ["â¬›","Empty Void",false]),
    sc("The scale demands something precise â€" with weight between whole numbers.", ["ðŸ'§","Mercury Drop",true], ["ðŸª¨","Whole Boulder",false], ["ðŸ"¤","Letter Tile",false]),
  ]},
  { name: "The Balance Arena", scenarios: [
    sc("Two forces press against a beam. The realm responds when they are measured.", ["âš–ï¸","Balance Beam",true], ["ðŸ"¨","War Hammer",false], ["ðŸ›¡ï¸","Iron Shield",false]),
    sc("A mechanism with two switches. Both must activate together.", ["âš™ï¸","Both Switches",true], ["ðŸ"€","One Switch",false], ["âŒ","No Switch",false]),
    sc("A counter on the wall needs to advance by exactly one.", ["âž•","Small Gear",true], ["âœ–ï¸","Large Wheel",false], ["âž–","Broken Cog",false]),
  ]},
  { name: "The Forking Paths", scenarios: [
    sc("The tunnel splits. Warmth drifts from one passage, frost from the other.", ["ðŸ"¥","Warm Passage",true], ["â„ï¸","Frozen Corridor",false], ["ðŸŒ«ï¸","Dead End",false]),
    sc("A circular corridor. The same archway appears until you find the exit rune.", ["ðŸ"„","Follow the Pattern",true], ["ðŸšª","Force the Door",false], ["â¬†ï¸","Climb the Wall",false]),
    sc("Colored crystals line the walls. One matches the lock's frequency.", ["ðŸ'Ž","Resonant Crystal",true], ["ðŸ"´","Crimson Shard",false], ["âš«","Dark Fragment",false]),
  ]},
  { name: "The Lever Hall", scenarios: [
    sc("An ancient mechanism. Pull the lever â€" it resets, ready to be pulled again.", ["ðŸ"§","Reusable Lever",true], ["ðŸ'¥","One-Time Charge",false], ["ðŸ§±","Fixed Stone",false]),
    sc("A hall of echoes. Each echo triggers the next, endlessly repeating.", ["ðŸ"Š","Echo the Call",true], ["ðŸ"‡","Silence It",false], ["ðŸ"£","Single Shout",false]),
    sc("The device activates and produces something. Take what it returns.", ["ðŸŽ","Returned Artifact",true], ["ðŸ•³ï¸","Empty Opening",false], ["ðŸ'¨","Vanishing Mist",false]),
  ]},
  { name: "The Ordered Pillars", scenarios: [
    sc("Five pillars in a line. An inscription reads: 'Begin where counting begins.'", ["0ï¸âƒ£","First Pillar",true], ["3ï¸âƒ£","Middle Pillar",false], ["5ï¸âƒ£","Last Pillar",false]),
    sc("Stones arranged in sequence. The next must follow the established pattern.", ["ðŸŸ¢","Matching Stone",true], ["ðŸ"´","Random Stone",false], ["â¬›","Missing Stone",false]),
    sc("A shelf of identical containers. Reaching beyond the end causes collapse.", ["ðŸ"¦","Safe Container",true], ["ðŸ'€","Beyond the Edge",false], ["ðŸ•³ï¸","Negative Space",false]),
  ]},
];

const cppZones: Zone[] = [
  { name: "The Blueprint Forge", scenarios: [
    sc("A forge with a blueprint. Build from the design, not from raw material.", ["ðŸ"","Blueprint",true], ["ðŸ"¨","Raw Hammer",false], ["ðŸª¨","Random Stone",false]),
    sc("The creation has hidden parts only it can access.", ["ðŸ"'","Private Chamber",true], ["ðŸšª","Open Door",false], ["ðŸªŸ","Glass Window",false]),
    sc("The forge remembers its creator. It points back to itself.", ["ðŸªž","Self Mirror",true], ["ðŸŒŠ","Reflection Pool",false], ["ðŸ'¤","Shadow",false]),
  ]},
  { name: "The Ancestor Tree", scenarios: [
    sc("A great tree. New branches grow from old ones, carrying their strength.", ["ðŸŒ³","Growing Branch",true], ["ðŸª¨","Standalone Rock",false], ["ðŸŒŠ","Free River",false]),
    sc("The child carries the parent's shield but adds its own sword.", ["âš"ï¸","Enhanced Heir",true], ["ðŸ›¡ï¸","Exact Copy",false], ["ðŸ'€","Empty Shell",false]),
    sc("Which ancestor's power activates first in the chain?", ["ðŸ''","The Elder",true], ["ðŸ—¡ï¸","The Young",false], ["âš¡","The Wild",false]),
  ]},
  { name: "The Shapeshifter Arena", scenarios: [
    sc("One creature, many forms. The true one reveals itself at the last moment.", ["ðŸ¦Š","Shifting Form",true], ["ðŸª¨","Fixed Form",false], ["ðŸ"'","Locked Form",false]),
    sc("Two warriors share a name but fight differently.", ["âš"ï¸","Adapted Fighter",true], ["ðŸ›¡ï¸","Carbon Copy",false], ["ðŸ'€","No Fighter",false]),
    sc("The arena judges by behavior, not by appearance.", ["ðŸŽ­","Dynamic Spirit",true], ["ðŸ"‹","Static Label",false], ["ðŸ·ï¸","Name Tag",false]),
  ]},
  { name: "The Template Lab", scenarios: [
    sc("A mold that shapes any material poured into it.", ["ðŸ§ª","Universal Mold",true], ["ðŸª¨","Single-Use Cast",false], ["ðŸ"'","Fixed Shape",false]),
    sc("The same recipe works for bread, steel, and glass.", ["ðŸ"œ","Generic Recipe",true], ["ðŸž","Bread-Only",false], ["âš"ï¸","Steel-Only",false]),
    sc("Created not when designed, but when first used.", ["â³","Moment of Use",true], ["ðŸ"","Moment of Design",false], ["ðŸ—ï¸","Moment of Build",false]),
  ]},
  { name: "The Container Vault", scenarios: [
    sc("A chest that grows as you add more treasures.", ["ðŸ"¦","Expanding Chest",true], ["ðŸ—„ï¸","Fixed Cabinet",false], ["ðŸª¨","Stone Box",false]),
    sc("Items stacked high. Only the top one is reachable.", ["ðŸ"š","Top of Stack",true], ["ðŸ"¦","Any Item",false], ["ðŸ"'","Bottom Key",false]),
    sc("A line where the first to arrive leaves first.", ["ðŸš¶","Front of Line",true], ["ðŸƒ","Back Jumper",false], ["ðŸ§","Middle Stand",false]),
  ]},
];

const javaZones: Zone[] = [
  { name: "The Assembly Line", scenarios: [
    sc("The factory needs a design before producing anything.", ["ðŸ"","Machine Blueprint",true], ["âš™ï¸","Random Part",false], ["ðŸ"§","Loose Bolt",false]),
    sc("Each product from the line is independent but follows the same design.", ["ðŸ¤–","Independent Unit",true], ["ðŸ"—","Chained Copy",false], ["ðŸªž","Mirror Image",false]),
    sc("The machine's inner workings are sealed. Only buttons are exposed.", ["ðŸ"˜","Control Panel",true], ["âš™ï¸","Inner Gear",false], ["ðŸ"Œ","Raw Wire",false]),
  ]},
  { name: "The Gear Network", scenarios: [
    sc("A master gear drives all connected gears with its power.", ["âš™ï¸","Connected Gear",true], ["ðŸ"©","Loose Screw",false], ["ðŸª¨","Dead Stone",false]),
    sc("The child machine has everything the parent has, plus more.", ["ðŸ"§","Enhanced Machine",true], ["ðŸ"‹","Exact Copy",false], ["âŒ","Empty Shell",false]),
    sc("A binding contract: all machines in this family must have this ability.", ["ðŸ"œ","Binding Contract",true], ["ðŸ'­","Mere Suggestion",false], ["ðŸ—'ï¸","Discarded Note",false]),
  ]},
  { name: "The Interface Gate", scenarios: [
    sc("A gate that demands proof of capability, not identity.", ["ðŸŽ«","Capability Proof",true], ["ðŸªª","Identity Card",false], ["ðŸ"'","Physical Key",false]),
    sc("The blueprint cannot be built directly â€" only refined versions can.", ["ðŸ"","Refined Design",true], ["ðŸ—ï¸","Direct Build",false], ["ðŸ"¨","Forced Assembly",false]),
    sc("Multiple contracts can bind a single machine.", ["ðŸ"'","Multiple Bonds",true], ["ðŸ"„","Single Bond",false], ["âŒ","No Bond",false]),
  ]},
  { name: "The Error Realm", scenarios: [
    sc("A trap door! But a safety net catches you below.", ["ðŸ•¸ï¸","Safety Net",true], ["ðŸ'€","Free Fall",false], ["ðŸƒ","Run Away",false]),
    sc("Something went wrong deep inside. The alarm must be raised.", ["ðŸš¨","Sound Alarm",true], ["ðŸ¤«","Stay Silent",false], ["ðŸƒ","Flee",false]),
    sc("After the crisis, this room always executes, no matter what happened.", ["ðŸ›ï¸","Final Chamber",true], ["ðŸšª","Optional Room",false], ["ðŸ"'","Sealed Room",false]),
  ]},
  { name: "The Thread Chamber", scenarios: [
    sc("Two workers reach for the same tool. Only one can hold it.", ["ðŸ"'","Claim the Lock",true], ["ðŸ¤","Share Freely",false], ["ðŸ'¥","Both Grab",false]),
    sc("Workers must coordinate. One produces, one consumes.", ["ðŸ"¨","Signal System",true], ["ðŸƒ","Race Ahead",false], ["ðŸ˜´","All Sleep",false]),
    sc("The narrow corridor allows only one traveler at a time.", ["ðŸš§","Controlled Passage",true], ["ðŸšª","Open All Gates",false], ["ðŸ'¨","Rush Through",false]),
  ]},
];

const pythonZones: Zone[] = [
  { name: "The Shifting Sands", scenarios: [
    sc("The vessel changes shape to fit whatever is placed inside.", ["ðŸº","Adaptive Vessel",true], ["ðŸª¨","Rigid Box",false], ["ðŸ"'","Sealed Container",false]),
    sc("No declaration needed. The sand remembers what was written.", ["ðŸ"","Direct Writing",true], ["ðŸ"‹","Official Form",false], ["ðŸ—ï¸","Build First",false]),
    sc("The same vessel now holds a number, now a word, now nothing.", ["ðŸŒŠ","Fluid Container",true], ["ðŸ§±","Fixed Type",false], ["âš"","Anchored Form",false]),
  ]},
  { name: "The Coil Path", scenarios: [
    sc("A serpent's coiling body â€" items arranged head to tail, changeable.", ["ðŸ","Living Coil",true], ["ðŸª¨","Stone Chain",false], ["ðŸ"—","Locked Links",false]),
    sc("This sequence is frozen. Once set, it cannot change.", ["â„ï¸","Frozen Sequence",true], ["ðŸŒŠ","Flowing Stream",false], ["ðŸ"¥","Burning Rope",false]),
    sc("The third scale from the head. Counting starts at zero.", ["ðŸŸ¢","Third Scale",true], ["ðŸŸ¡","Fourth Scale",false], ["ðŸ"´","First Scale",false]),
  ]},
  { name: "The Map Chamber", scenarios: [
    sc("Every treasure has a unique name. Call the name, receive the treasure.", ["ðŸ—ï¸","Named Key",true], ["ðŸ"¢","Number Tag",false], ["ðŸŽ²","Random Pull",false]),
    sc("Two treasures cannot share the same name in this vault.", ["ðŸ·ï¸","Unique Name",true], ["ðŸ"‹","Shared Label",false], ["ðŸ"„","Duplicate Tag",false]),
    sc("Order doesn't matter â€" only the names and what they hold.", ["ðŸ—ºï¸","Named Map",true], ["ðŸ"Š","Ordered List",false], ["ðŸ"","Indexed Shelf",false]),
  ]},
  { name: "The Decorator Temple", scenarios: [
    sc("A spell wrapped around another spell, enhancing its power.", ["ðŸŽ€","Wrapping Enchantment",true], ["âš"ï¸","Separate Spell",false], ["ðŸ"¥","Replacement",false]),
    sc("The inner mechanism works alone. The outer layer adds flair.", ["ðŸ›ï¸","Layered Temple",true], ["ðŸ"¨","Single Hammer",false], ["ðŸ—¡ï¸","Different Tool",false]),
    sc("Pass the recipe to a helper. The helper follows it exactly.", ["ðŸ"œ","Passed Recipe",true], ["ðŸ§ ","Helper's Idea",false], ["ðŸŽ²","Random Action",false]),
  ]},
  { name: "The Import Maze", scenarios: [
    sc("A sealed scroll from another chamber. Break the seal to use its knowledge.", ["ðŸ"¦","Import Scroll",true], ["âœï¸","Rewrite It",false], ["ðŸ¤"","Guess Contents",false]),
    sc("Only take what you need from the library. Leave the rest.", ["ðŸŽ¯","Specific Pick",true], ["ðŸ"š","Take Everything",false], ["âŒ","Take Nothing",false]),
    sc("Give the imported tool a shorter name for convenience.", ["ðŸ·ï¸","Alias Tag",true], ["ðŸ"œ","Full Name Only",false], ["ðŸ¤·","No Name",false]),
  ]},
];

const jsZones: Zone[] = [
  { name: "The Variable Winds", scenarios: [
    sc("A storm rages. One container never tips over, no matter what.", ["ðŸª¨","Immovable Stone",true], ["ðŸ'¨","Loose Leaf",false], ["ðŸŒ€","Spinning Top",false]),
    sc("Energy must stay within these walls. Only one barrier holds.", ["ðŸ›ï¸","Solid Wall",true], ["ðŸªŸ","Glass Wall",false], ["ðŸšª","Open Door",false]),
    sc("Something valuable must be carried forward, unchanging.", ["ðŸ"'","Sealed Artifact",true], ["ðŸŽ'","Open Bag",false], ["ðŸ'§","Cupped Water",false]),
  ]},
  { name: "The Callback Abyss", scenarios: [
    sc("A chasm. The bridge appears only after you signal readiness.", ["ðŸ""","Signal Bell",true], ["ðŸƒ","Jump Across",false], ["ðŸ˜´","Wait Forever",false]),
    sc("A promise inscribed on the wall: 'I will return with the answer.'", ["ðŸ"œ","Trust the Promise",true], ["âŒ","Ignore It",false], ["ðŸƒ","Don't Wait",false]),
    sc("Multiple tasks. Some finish before others. Wait for all.", ["â³","Patient Wait",true], ["ðŸƒ","Take First",false], ["ðŸŽ²","Random Pick",false]),
  ]},
  { name: "The Prototype Chain", scenarios: [
    sc("An artifact inherits traits from an ancient original.", ["ðŸº","Ancient Original",true], ["ðŸ"¨","Newly Forged",false], ["ðŸŽ²","Random Find",false]),
    sc("The child searches itself first, then asks the parent.", ["ðŸ"","Search Upward",true], ["ðŸ ","Stay Local",false], ["ðŸŽ²","Random Search",false]),
    sc("Changing the ancestor changes all descendants.", ["ðŸ''","Modify the Source",true], ["ðŸ—¡ï¸","Modify One Copy",false], ["ðŸ›¡ï¸","Modify Nothing",false]),
  ]},
  { name: "The DOM Tree", scenarios: [
    sc("A great tree. Every branch connects back to the root.", ["ðŸŒ³","Follow the Root",true], ["ðŸƒ","Loose Leaf",false], ["ðŸŒŠ","Flowing River",false]),
    sc("To reach a specific leaf, trace the path through branches.", ["ðŸ"","Trace the Path",true], ["ðŸŽ²","Random Grab",false], ["ðŸ'¨","Call Out",false]),
    sc("Adding a new branch requires knowing where to attach it.", ["ðŸ"Ž","Attach to Branch",true], ["ðŸ—ï¸","Build Separate",false], ["ðŸ"¥","Replace All",false]),
  ]},
  { name: "The Event Storm", scenarios: [
    sc("Lightning strikes. Only those listening hear the thunder.", ["ðŸ'‚","Listen Closely",true], ["ðŸ˜´","Sleep Through",false], ["ðŸƒ","Run Blindly",false]),
    sc("The alarm rings. Multiple responses activate simultaneously.", ["ðŸ""","Multiple Listeners",true], ["ðŸ"‡","Single Response",false], ["âŒ","No Response",false]),
    sc("Stop the chain reaction before it reaches the foundation.", ["ðŸ›'","Stop Propagation",true], ["ðŸ"„","Let It Flow",false], ["ðŸ'¥","Amplify It",false]),
  ]},
];

const htmlZones: Zone[] = [
  { name: "The Foundation Blocks", scenarios: [
    sc("Every temple needs a foundation stone laid first.", ["ðŸ—ï¸","Foundation Stone",true], ["ðŸ›ï¸","Decorative Pillar",false], ["ðŸŽ¨","Paint Brush",false]),
    sc("The body of the temple sits upon the head's wisdom.", ["ðŸ§ ","Head Stone First",true], ["ðŸ¦¶","Body First",false], ["ðŸ"„","Any Order",false]),
    sc("Content lives within the body walls, not floating outside.", ["ðŸ›ï¸","Inside the Walls",true], ["ðŸŒ³","Outside",false], ["â˜ï¸","In the Sky",false]),
  ]},
  { name: "The Nested Chambers", scenarios: [
    sc("Rooms within rooms. Each must close before its parent can.", ["ðŸšª","Close Inner First",true], ["ðŸšª","Close Outer First",false], ["ðŸ"„","Any Order",false]),
    sc("The list contains items. Items live inside, never outside.", ["ðŸ"‹","Items Inside",true], ["ðŸ"„","Reversed",false], ["ðŸ"Ž","Side by Side",false]),
    sc("The great hall contains the small room, not the reverse.", ["ðŸ°","Hall Wraps Room",true], ["ðŸ ","Room Wraps Hall",false], ["ðŸ¤","Equal Standing",false]),
  ]},
  { name: "The Semantic Halls", scenarios: [
    sc("The hall has a header, a main chamber, and a footer. Each has purpose.", ["ðŸ›ï¸","Purposeful Layout",true], ["ðŸ"¦","Generic Boxes",false], ["ðŸŽ¨","Just Colors",false]),
    sc("Navigation should be distinct from content.", ["ðŸ§­","Dedicated Path",true], ["ðŸ"„","Mixed Together",false], ["ðŸ"—","Hidden Away",false]),
    sc("The article stands complete on its own, needing nothing else.", ["ðŸ"°","Self-Contained",true], ["ðŸ§©","Fragmented",false], ["ðŸ"Ž","Attached",false]),
  ]},
  { name: "The Form Altar", scenarios: [
    sc("The altar requires your offering. Place it in the designated vessel.", ["ðŸ"","Input Vessel",true], ["ðŸª¨","Stone Block",false], ["ðŸŒŠ","Water Pool",false]),
    sc("Each offering must have a label so the gods know what it is.", ["ðŸ·ï¸","Labeled Offering",true], ["â"","Anonymous Gift",false], ["ðŸŽ²","Random Drop",false]),
    sc("Press the sacred stone to submit your offering to the temple.", ["ðŸ"˜","Submit Stone",true], ["ðŸƒ","Walk Away",false], ["ðŸ"¥","Burn Offering",false]),
  ]},
  { name: "The Link Bridge", scenarios: [
    sc("The bridge connects two distant temples across the void.", ["ðŸŒ‰","Connecting Bridge",true], ["ðŸƒ","Jump Across",false], ["ðŸŠ","Swim Under",false]),
    sc("The new temple opens while the old one remains standing.", ["ðŸ"'","New Window",true], ["ðŸšª","Replace Current",false], ["ðŸ"'","Close Both",false]),
    sc("An image marks the bridge entrance, showing the destination.", ["ðŸ–¼ï¸","Marked Image",true], ["ðŸ"","Text Only",false], ["âŒ","No Marker",false]),
  ]},
];

const cssZones: Zone[] = [
  { name: "The Color Wells", scenarios: [
    sc("Three wells of color. Mix the primary ones to create any hue.", ["ðŸ"´","Primary Wells",true], ["ðŸŸ¤","Mud Well",false], ["â¬›","Dark Pit",false]),
    sc("Transparency â€" seen through, but still present.", ["ðŸ«§","Semi-Visible",true], ["â¬›","Fully Hidden",false], ["â¬œ","Fully Solid",false]),
    sc("Relative to the parent's magnitude, not absolute.", ["ðŸ"","Relative Measure",true], ["ðŸ"","Fixed Ruler",false], ["ðŸŽ²","Random Size",false]),
  ]},
  { name: "The Box Chamber", scenarios: [
    sc("Every object has content, padding, a border, and margin â€" layered.", ["ðŸ"¦","Layered Box",true], ["ðŸª¨","Solid Block",false], ["ðŸ'¨","No Structure",false]),
    sc("Space inside the border, cushioning the content softly.", ["ðŸ›‹ï¸","Inner Cushion",true], ["ðŸžï¸","Outer Space",false], ["ðŸ§±","The Wall",false]),
    sc("Space outside the border, pushing neighbors away.", ["ðŸžï¸","Outer Push",true], ["ðŸ›‹ï¸","Inner Cushion",false], ["ðŸ"¦","Content",false]),
  ]},
  { name: "The Flex Stream", scenarios: [
    sc("Items flow in a line, adjusting to fit the available space.", ["ðŸŒŠ","Flowing Line",true], ["ðŸ"","Rigid Grid",false], ["ðŸª¨","Fixed Positions",false]),
    sc("Center everything â€" horizontally and vertically, perfectly balanced.", ["âš–ï¸","Perfect Center",true], ["â¬…ï¸","Left Align",false], ["âž¡ï¸","Right Align",false]),
    sc("When the row fills, items wrap to the next line gracefully.", ["ðŸ"„","Wrap Below",true], ["ðŸ"","Shrink All",false], ["âœ‚ï¸","Cut Off",false]),
  ]},
  { name: "The Grid Matrix", scenarios: [
    sc("A precise grid of rows and columns. Everything aligns perfectly.", ["ðŸ"","Perfect Grid",true], ["ðŸŒŠ","Flowing Stream",false], ["ðŸŽ²","Random Scatter",false]),
    sc("One item spans multiple columns, dominating the row.", ["ðŸ›ï¸","Column Span",true], ["ðŸ"¦","Single Cell",false], ["ðŸ"'","Fixed Size",false]),
    sc("Empty space is intentional, not wasted. It breathes.", ["â¬œ","Planned Gap",true], ["ðŸ"¦","Fill Everything",false], ["ðŸ—'ï¸","Remove Space",false]),
  ]},
  { name: "The Animation Spring", scenarios: [
    sc("Smooth transformation from one state to another, like water.", ["ðŸŒ™","Smooth Shift",true], ["âš¡","Instant Jump",false], ["ðŸ"„","Loop Forever",false]),
    sc("A repeating pattern of change â€" endlessly cycling without rest.", ["ðŸ"„","Infinite Cycle",true], ["ðŸ","One-Time Move",false], ["ðŸª¨","Static",false]),
    sc("The spring stretches and returns â€" ease in, ease out.", ["ðŸŽ¯","Eased Motion",true], ["ðŸ"","Linear",false], ["âš¡","Sudden Stop",false]),
  ]},
];

const dsZones: Zone[] = [
  { name: "The Stack Tower", scenarios: [
    sc("Books piled high. Only the top book can be taken.", ["ðŸ"š","Take from Top",true], ["ðŸ"–","Pull from Bottom",false], ["ðŸ"•","Take from Middle",false]),
    sc("Place the new stone on top. It will be the first removed.", ["ðŸ"","Place on Top",true], ["ðŸ"½","Insert at Bottom",false], ["ðŸ"€","Insert Anywhere",false]),
    sc("Undo the last action. Only the most recent can be reversed.", ["â®ï¸","Reverse Latest",true], ["â­ï¸","Reverse Oldest",false], ["ðŸ"€","Reverse Random",false]),
  ]},
  { name: "The Queue Bridge", scenarios: [
    sc("A bridge where the first to arrive crosses first.", ["ðŸš¶","First in Line",true], ["ðŸƒ","Last Arrived",false], ["ðŸŽ²","Random Person",false]),
    sc("Join at the back. Wait your turn patiently.", ["ðŸ"­","Back of Line",true], ["ðŸ"¬","Front of Line",false], ["ðŸ"ª","Middle",false]),
    sc("The print order: first submitted, first printed.", ["ðŸ–¨ï¸","In Order",true], ["ðŸ"„","Reversed",false], ["ðŸŽ²","Shuffled",false]),
  ]},
  { name: "The Tree Canopy", scenarios: [
    sc("One root. From it, everything branches outward.", ["ðŸŒ³","Single Root",true], ["ðŸŒ¿","Multiple Roots",false], ["ðŸƒ","No Root",false]),
    sc("Each branch can have at most two children in this ancient tree.", ["ðŸŒ¿","Two Children Max",true], ["ðŸŒ³","Unlimited",false], ["1ï¸âƒ£","One Child",false]),
    sc("The lowest leaves hold no children of their own.", ["ðŸƒ","Childless Leaf",true], ["ðŸŒ³","Branching Leaf",false], ["ðŸ"„","Self-Looping",false]),
  ]},
  { name: "The Graph Web", scenarios: [
    sc("Connections go both ways â€" a mutual, undirected relationship.", ["ðŸ¤","Mutual Bond",true], ["âž¡ï¸","One Way",false], ["âŒ","No Connection",false]),
    sc("Each connection has a weight â€" some paths cost more than others.", ["âš–ï¸","Weighted Path",true], ["ðŸ"","All Equal",false], ["ðŸŽ²","Random Weight",false]),
    sc("Find the shortest path through the tangled web.", ["ðŸ§­","Shortest Route",true], ["ðŸƒ","Fastest Sprint",false], ["ðŸ"„","Longest Loop",false]),
  ]},
  { name: "The Sort Chamber", scenarios: [
    sc("Compare two neighbors. The heavier one sinks down.", ["âš–ï¸","Neighbor Swap",true], ["ðŸŽ²","Random Shuffle",false], ["ðŸ"","No Movement",false]),
    sc("Find the smallest. Place it at the very beginning.", ["ðŸ"","Find Minimum",true], ["ðŸ"¦","Keep Position",false], ["ðŸ"€","Random Place",false]),
    sc("Split, sort halves, then merge them back together.", ["âœ‚ï¸","Divide and Merge",true], ["ðŸ"¨","Sort in Place",false], ["ðŸ"„","Reverse",false]),
  ]},
];

const dbmsZones: Zone[] = [
  { name: "The Table Hall", scenarios: [
    sc("Rows of records. Columns of attributes. Structure is everything.", ["ðŸ"Š","Structured Table",true], ["ðŸ"","Free Notes",false], ["ðŸŽ²","Random Pile",false]),
    sc("Each record must have something unique to identify it.", ["ðŸ"'","Unique Identifier",true], ["ðŸ·ï¸","Same Label",false], ["ðŸ"Ž","No Marker",false]),
    sc("A column that points to a record in another table, linking them.", ["ðŸ"—","Foreign Reference",true], ["ðŸ"‹","Local Copy",false], ["ðŸ"","Description",false]),
  ]},
  { name: "The Query Gate", scenarios: [
    sc("To retrieve records, you must ask the archive the right way.", ["ðŸ"","Structured Query",true], ["ðŸ—£ï¸","Shout Loudly",false], ["ðŸŽ²","Guess",false]),
    sc("Filter the results. Only those matching the condition pass through.", ["ðŸ§ª","Filter Through",true], ["ðŸ"¦","Take All",false], ["ðŸ"€","Random Sample",false]),
    sc("Sort the retrieved scrolls from smallest to largest.", ["ðŸ"","Ordered Result",true], ["ðŸ"€","Shuffled",false], ["ðŸ"š","Stacked",false]),
  ]},
  { name: "The Normal Form", scenarios: [
    sc("Each cell holds one value only â€" no lists, no groups inside.", ["1ï¸âƒ£","Single Value",true], ["ðŸ"‹","Multiple Values",false], ["ðŸ"„","Nested List",false]),
    sc("Remove partial dependencies â€" everything depends on the full key.", ["ðŸ"'","Full Key Only",true], ["ðŸ"Ž","Partial Key",false], ["ðŸŽ²","Any Column",false]),
    sc("No transitive chains â€" each fact depends on the key directly.", ["âš¡","Direct Link",true], ["ðŸ"—","Chain Link",false], ["ðŸ"„","Circular",false]),
  ]},
  { name: "The Join Bridge", scenarios: [
    sc("Two tables meet where their keys match perfectly.", ["ðŸ¤","Matching Keys",true], ["ðŸ"¦","All from Both",false], ["âŒ","None",false]),
    sc("Keep everything from the left, even with no match on the right.", ["â¬…ï¸","Keep Left All",true], ["âž¡ï¸","Keep Right",false], ["ðŸ¤","Only Matching",false]),
    sc("A full combination â€" every row paired with every other row.", ["ðŸ"„","Full Cross",true], ["ðŸ¤","Only Matching",false], ["â¬…ï¸","Left Only",false]),
  ]},
  { name: "The Transaction Vault", scenarios: [
    sc("All actions succeed together, or none do. No half-measures.", ["âš›ï¸","All or Nothing",true], ["ðŸ"€","Partial OK",false], ["ðŸŽ²","Random",false]),
    sc("Once completed, the changes are permanent and enduring.", ["ðŸ'Ž","Permanent Record",true], ["ðŸ'¨","Temporary",false], ["ðŸ"„","Reversible",false]),
    sc("Concurrent visitors cannot see each other's incomplete work.", ["ðŸ"'","Isolated Work",true], ["ðŸ'€","Visible to All",false], ["ðŸ¤","Shared Space",false]),
  ]},
];

const osZones: Zone[] = [
  { name: "The Process Chamber", scenarios: [
    sc("A new task is born. It starts ready, waiting for the core's attention.", ["ðŸŸ¡","Ready State",true], ["ðŸƒ","Running",false], ["ðŸ'€","Terminated",false]),
    sc("The running task needs something from outside. It must pause and wait.", ["â³","Wait Patiently",true], ["ðŸƒ","Keep Running",false], ["ðŸ'€","Kill It",false]),
    sc("A parent task creates a child. Both can run independently.", ["ðŸ´","Fork New Task",true], ["ðŸ"‹","Copy Same",false], ["âŒ","Cannot Create",false]),
  ]},
  { name: "The Memory Banks", scenarios: [
    sc("Fixed-size blocks of memory, pre-divided and waiting.", ["ðŸ"¦","Fixed Partitions",true], ["ðŸŒŠ","Fluid Memory",false], ["ðŸŽ²","Random Alloc",false]),
    sc("Pages mapped to frames. Not all pages in memory at once.", ["ðŸ"'","Page to Frame",true], ["ðŸ"š","All in Memory",false], ["ðŸ"€","Random",false]),
    sc("The least recently used page gets replaced when memory fills.", ["ðŸ"­","Oldest Unused",true], ["ðŸ"¬","Newest",false], ["ðŸŽ²","Random Evict",false]),
  ]},
  { name: "The Schedule Wheel", scenarios: [
    sc("Each task gets an equal time slice. Then the next one runs.", ["â°","Equal Turns",true], ["ðŸ†","Longest First",false], ["ðŸŽ²","Random",false]),
    sc("The shortest task runs first to minimize everyone's waiting.", ["ðŸƒ","Shortest First",true], ["ðŸŒ","Longest First",false], ["ðŸ"„","Arrival Order",false]),
    sc("Tasks arrive and run in the order they came. Simple fairness.", ["ðŸ"‹","First Come First",true], ["ðŸƒ","Shortest",false], ["ðŸ†","Highest Priority",false]),
  ]},
  { name: "The Lock Mechanism", scenarios: [
    sc("Two workers reach for the same tool. Only one can hold the lock.", ["ðŸ"'","Claim the Lock",true], ["ðŸ¤","Share Freely",false], ["ðŸ'¥","Both Grab",false]),
    sc("A counting mechanism â€" allows limited concurrent access.", ["ðŸ"¢","Counter Gate",true], ["ðŸšª","Open Door",false], ["ðŸ"'","One Only",false]),
    sc("Everyone waits in a circle, each holding what another needs. Break it.", ["ðŸ""","Release One",true], ["â³","Wait Longer",false], ["ðŸ'¥","Force Entry",false]),
  ]},
  { name: "The File Tunnel", scenarios: [
    sc("Files organized in a tree of directories, branching outward.", ["ðŸ"‚","Tree Structure",true], ["ðŸ"„","Flat List",false], ["ðŸŽ²","Random Heap",false]),
    sc("Each file has an identifier â€" a number pointing to its data.", ["ðŸ"¢","Index Node",true], ["ðŸ·ï¸","Name Tag",false], ["ðŸ"Ž","No Identifier",false]),
    sc("Continuous space on disk for the fastest possible read.", ["ðŸ"","Contiguous Block",true], ["ðŸ"—","Linked Pieces",false], ["ðŸ"Š","Indexed Table",false]),
  ]},
];

export const worlds: World[] = [
  { id: "c", name: "The Ancient Ruins", icon: "ðŸ›ï¸", description: "Crumbling stone and forgotten knowledge. The foundation of all worlds.", theme: "forest", zones: cZones },
  { id: "cpp", name: "The Shadow Citadel", icon: "ðŸ°", description: "Dark towers of inheritance and shifting forms.", theme: "citadel", zones: cppZones },
  { id: "java", name: "The Living Machine", icon: "âš™ï¸", description: "Gears of abstraction and threads of control.", theme: "machine", zones: javaZones },
  { id: "python", name: "The Serpent's Domain", icon: "ðŸ", description: "Shifting sands and fluid power.", theme: "serpent", zones: pythonZones },
  { id: "javascript", name: "The Storm Nexus", icon: "âš¡", description: "Asynchronous lightning and event-driven chaos.", theme: "storm", zones: jsZones },
  { id: "html", name: "The Stone Temple", icon: "ðŸ›ï¸", description: "Ancient structure and semantic meaning.", theme: "temple", zones: htmlZones },
  { id: "css", name: "The Prismatic Caves", icon: "ðŸ'Ž", description: "Color, layout, and transformation.", theme: "prismatic", zones: cssZones },
  { id: "ds", name: "The Labyrinth", icon: "ðŸŒ€", description: "Paths of logic and ordered chaos.", theme: "labyrinth", zones: dsZones },
  { id: "dbms", name: "The Grand Archive", icon: "ðŸ"œ", description: "Tables of truth and queries of power.", theme: "archive", zones: dbmsZones },
  { id: "os", name: "The Machine Core", icon: "ðŸ"¥", description: "Processes, memory, and the heartbeat of systems.", theme: "core", zones: osZones },
];
```

### src/lib/storage.ts

```ts
const STORAGE_KEY = "codequest_progress";

export interface UserProgress {
  selectedSubject: string | null;
  subjectProgress: Record<string, SubjectProgress>;
}

export interface SubjectProgress {
  completedLevels: number[];
  currentLevel: number;
  wrongAttempts: Record<number, number>;
}

const defaultProgress: UserProgress = {
  selectedSubject: null,
  subjectProgress: {},
};

export function getProgress(): UserProgress {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { ...defaultProgress };
}

export function saveProgress(progress: UserProgress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function getSubjectProgress(subject: string): SubjectProgress {
  const progress = getProgress();
  return (
    progress.subjectProgress[subject] || {
      completedLevels: [],
      currentLevel: 0,
      wrongAttempts: {},
    }
  );
}

export function updateSubjectProgress(
  subject: string,
  update: Partial<SubjectProgress>
): void {
  const progress = getProgress();
  const current = getSubjectProgress(subject);
  progress.subjectProgress[subject] = { ...current, ...update };
  saveProgress(progress);
}

export function completeLevel(subject: string, level: number): void {
  const sp = getSubjectProgress(subject);
  if (!sp.completedLevels.includes(level)) {
    sp.completedLevels.push(level);
  }
  sp.currentLevel = Math.max(sp.currentLevel, level + 1);
  sp.wrongAttempts[level] = 0;
  updateSubjectProgress(subject, sp);
}

export function addWrongAttempt(subject: string, level: number): number {
  const sp = getSubjectProgress(subject);
  const current = sp.wrongAttempts[level] || 0;
  sp.wrongAttempts[level] = current + 1;
  updateSubjectProgress(subject, sp);
  return current + 1;
}

export function resetWrongAttempts(subject: string, level: number): void {
  const sp = getSubjectProgress(subject);
  sp.wrongAttempts[level] = 0;
  updateSubjectProgress(subject, sp);
}

export function isLevelUnlocked(subject: string, level: number): boolean {
  if (level === 0) return true;
  const sp = getSubjectProgress(subject);
  return sp.completedLevels.includes(level - 1);
}

export function resetAllProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
}
```

### src/lib/utils.ts

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### src/main.tsx

```tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### src/pages/Index.tsx

```tsx
import Landing from "./Landing";
export default Landing;
```

### src/pages/Landing.tsx

```tsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 animate-drift"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)" }}
      />

      <div
        className={`relative z-10 text-center transition-all duration-[1500ms] ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8">
          <span className="text-6xl sm:text-8xl animate-float inline-block">ðŸ—¡ï¸</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-primary text-glow-primary mb-3 tracking-wider">
          CodeQuest
        </h1>
        <p className="font-display text-sm sm:text-base text-foreground/40 tracking-[0.3em] uppercase mb-1">
          Intelligence Survival Game
        </p>
        <p className="font-body text-sm text-foreground/25 mb-16 max-w-xs mx-auto">
          Survive the world. Learn its rules. No questions asked.
        </p>

        <button
          onClick={() => navigate("/subjects")}
          className="group relative px-14 py-4 bg-primary/90 text-primary-foreground font-display text-lg font-bold rounded-lg
            transition-all duration-300 hover:scale-105 hover:bg-primary box-glow-primary active:scale-95"
        >
          <span className="relative z-10 tracking-wider">ENTER THE WORLD</span>
        </button>

        <div className="mt-20 flex gap-10 justify-center text-foreground/20 font-body text-xs tracking-wide">
          <div className="text-center">
            <div className="text-xl mb-1">ðŸŒ</div>
            <div>10 Worlds</div>
          </div>
          <div className="text-center">
            <div className="text-xl mb-1">ðŸ—ºï¸</div>
            <div>50 Zones</div>
          </div>
          <div className="text-center">
            <div className="text-xl mb-1">ðŸ'€</div>
            <div>Survive or Perish</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
```

### src/pages/Levels.tsx

```tsx
import { useNavigate, useParams } from "react-router-dom";
import { worlds } from "@/lib/data";
import { isLevelUnlocked, getSubjectProgress } from "@/lib/storage";
import { Lock, CheckCircle2 } from "lucide-react";

const Levels = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams<{ subjectId: string }>();
  const world = worlds.find((w) => w.id === subjectId);

  if (!world) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-destructive font-display">World not found</p>
      </div>
    );
  }

  const progress = getSubjectProgress(world.id);
  const completedCount = progress.completedLevels.length;
  const pct = Math.round((completedCount / world.zones.length) * 100);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate("/subjects")}
          className="font-body text-foreground/30 hover:text-foreground/60 transition-colors mb-8 text-sm"
        >
          â† Back to Worlds
        </button>

        <div className="text-center mb-10">
          <span className="text-4xl mb-3 block">{world.icon}</span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-primary text-glow-primary tracking-wider">
            {world.name}
          </h1>
          <p className="font-body text-foreground/30 text-sm mt-2 max-w-sm mx-auto">{world.description}</p>

          <div className="max-w-xs mx-auto mt-4">
            <div className="flex justify-between text-[10px] font-body text-foreground/20 mb-1">
              <span>
                {completedCount}/{world.zones.length} zones
              </span>
              <span>{pct}%</span>
            </div>
            <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${pct}%`, background: "var(--gradient-primary)" }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {world.zones.map((zone, index) => {
            const unlocked = isLevelUnlocked(world.id, index);
            const completed = progress.completedLevels.includes(index);
            const isCurrent = unlocked && !completed;

            return (
              <button
                key={index}
                disabled={!unlocked}
                onClick={() => navigate(`/play/${world.id}/${index}`)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left
                  ${
                    completed
                      ? "bg-primary/5 border-primary/20 hover:border-primary/40 hover:scale-[1.01]"
                      : isCurrent
                        ? "bg-card/50 border-primary/30 hover:border-primary/60 hover:scale-[1.01] ring-1 ring-primary/10"
                        : "bg-muted/10 border-border/20 cursor-not-allowed opacity-30"
                  }`}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  {completed ? (
                    <CheckCircle2 className="w-6 h-6 text-primary/70" />
                  ) : isCurrent ? (
                    <span className="text-xl animate-pulse">ðŸ"®</span>
                  ) : (
                    <Lock className="w-5 h-5 text-foreground/20" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span className="font-display text-sm text-foreground/70 tracking-wide">Zone {index + 1}</span>
                  <span className="font-body text-xs text-foreground/30 ml-3">{zone.name}</span>
                </div>

                {isCurrent && (
                  <span className="text-[10px] font-display text-primary/50 tracking-widest uppercase">Enter</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Levels;
```

### src/pages/NotFound.tsx

```tsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
```

### src/pages/Play.tsx

```tsx
import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { worlds } from "@/lib/data";
import { completeLevel } from "@/lib/storage";

type Phase = "entering" | "exploring" | "correct" | "wrong" | "complete" | "failed";

const THEME_PARTICLES: Record<string, string> = {
  forest: "34, 197, 94",
  citadel: "168, 85, 247",
  machine: "59, 130, 246",
  serpent: "16, 185, 129",
  storm: "99, 102, 241",
  temple: "245, 158, 11",
  prismatic: "236, 72, 153",
  labyrinth: "20, 184, 166",
  archive: "217, 119, 6",
  core: "239, 68, 68",
};

const Play = () => {
  const navigate = useNavigate();
  const { subjectId, levelIndex } = useParams<{ subjectId: string; levelIndex: string }>();

  const world = worlds.find((w) => w.id === subjectId);
  const lvl = parseInt(levelIndex || "0");
  const zone = world?.zones[lvl];

  const [roomIdx, setRoomIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("entering");
  const [corruption, setCorruption] = useState(0);
  const [clickedIdx, setClickedIdx] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const scenario = zone?.scenarios[roomIdx];
  const particleColor = THEME_PARTICLES[world?.theme || "forest"];

  const particles = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
      })),
    []
  );

  // Reset on level change
  useEffect(() => {
    setRoomIdx(0);
    setCorruption(0);
    setPhase("entering");
    setClickedIdx(null);
    setTransitioning(false);
  }, [subjectId, levelIndex]);

  // Enter animation
  useEffect(() => {
    setPhase("entering");
    setClickedIdx(null);
    const t = setTimeout(() => setPhase("exploring"), 2200);
    return () => clearTimeout(t);
  }, [roomIdx]);

  // Keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (phase !== "exploring" || !scenario) return;
      const num = parseInt(e.key);
      if (num >= 1 && num <= scenario.elements.length) {
        handleClick(num - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const handleClick = useCallback(
    (idx: number) => {
      if (phase !== "exploring" || !scenario || !world || !zone) return;
      const el = scenario.elements[idx];
      setClickedIdx(idx);

      if (el.correct) {
        setPhase("correct");
        setTimeout(() => {
          setTransitioning(true);
          setTimeout(() => {
            if (roomIdx + 1 >= zone.scenarios.length) {
              completeLevel(world.id, lvl);
              setPhase("complete");
              setTransitioning(false);
            } else {
              setRoomIdx((r) => r + 1);
              setTransitioning(false);
            }
          }, 600);
        }, 1400);
      } else {
        setPhase("wrong");
        const next = corruption + 1;
        setCorruption(next);
        if (next >= 3) {
          setTimeout(() => setPhase("failed"), 1000);
        } else {
          setTimeout(() => {
            setPhase("exploring");
            setClickedIdx(null);
          }, 1200);
        }
      }
    },
    [phase, scenario, world, zone, roomIdx, lvl, corruption]
  );

  if (!world || !zone || !scenario) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center gap-4">
        <p className="font-display text-muted-foreground">World not found</p>
        <button onClick={() => navigate("/subjects")} className="text-primary font-body underline">
          Return
        </button>
      </div>
    );
  }

  const isLastLevel = lvl >= world.zones.length - 1;

  return (
    <div
      className={`fixed inset-0 world-${world.theme} overflow-hidden select-none ${phase === "wrong" ? "animate-shake" : ""}`}
      style={{ filter: `brightness(${Math.max(0.4, 1 - corruption * 0.2)})` }}
    >
      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full animate-drift"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: `rgba(${particleColor}, 0.25)`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)" }}
      />

      {/* Corruption overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-black transition-opacity duration-700"
        style={{ opacity: corruption * 0.15 }}
      />

      {/* Correct flash */}
      {phase === "correct" && (
        <div
          className="absolute inset-0 pointer-events-none animate-scene-brighten"
          style={{ backgroundColor: `rgba(${particleColor}, 0.12)` }}
        />
      )}

      {/* Wrong flash */}
      {phase === "wrong" && <div className="absolute inset-0 pointer-events-none bg-red-900/20 animate-scene-darken" />}

      {/* Transition overlay */}
      <div
        className={`absolute inset-0 bg-black pointer-events-none z-40 transition-opacity duration-500 ${transitioning ? "opacity-100" : "opacity-0"}`}
      />

      {/* HUD */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 py-4">
        <button
          onClick={() => navigate(`/levels/${world.id}`)}
          className="text-foreground/30 hover:text-foreground/70 font-body text-sm transition-colors"
        >
          â† Retreat
        </button>
        <span className="text-foreground/20 font-display text-[10px] tracking-[0.3em] uppercase">{zone.name}</span>
      </div>

      {/* Scene text */}
      <div
        className={`absolute top-[18%] left-0 right-0 text-center px-8 z-20 transition-all duration-[1200ms] ease-out ${phase === "entering" ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}
      >
        <p className="text-base sm:text-xl text-foreground/60 font-body max-w-md mx-auto italic leading-relaxed tracking-wide">
          {scenario.scene}
        </p>
      </div>

      {/* Interactive elements */}
      <div
        className={`absolute inset-x-0 top-[40%] flex items-start justify-center gap-6 sm:gap-14 px-6 z-20 transition-all duration-700 ease-out ${phase === "entering" ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
      >
        {scenario.elements.map((el, i) => {
          const isClicked = clickedIdx === i;
          const isCorrect = isClicked && el.correct && phase === "correct";
          const isWrong = isClicked && !el.correct && phase === "wrong";

          return (
            <button
              key={`${roomIdx}-${i}`}
              onClick={() => handleClick(i)}
              disabled={phase !== "exploring"}
              className={`group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl transition-all duration-500 outline-none
                ${phase === "exploring" ? "hover:scale-110 hover:bg-white/[0.03] cursor-pointer active:scale-95" : "cursor-default"}
                ${isCorrect ? "scale-[1.2] bg-white/10 ring-2 ring-primary/30" : ""}
                ${isWrong ? "scale-90 opacity-30" : ""}
              `}
            >
              <span
                className={`text-5xl sm:text-7xl block transition-all duration-500 animate-float
                  ${phase === "exploring" ? "group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]" : ""}
                  ${isCorrect ? "drop-shadow-[0_0_35px_rgba(34,197,94,0.8)]" : ""}
                  ${isWrong ? "grayscale blur-[1px]" : ""}
                `}
                style={{ animationDelay: `${i * 0.8}s`, animationDuration: `${3 + i * 0.5}s` }}
              >
                {el.emoji}
              </span>
              <span
                className={`text-xs sm:text-sm font-body tracking-wide transition-all duration-500
                  ${phase === "exploring" ? "text-foreground/40 group-hover:text-foreground/70" : "text-foreground/20"}
                  ${isCorrect ? "text-primary text-glow-primary" : ""}
                `}
              >
                {el.label}
              </span>
              {phase === "exploring" && <span className="text-[10px] text-foreground/15 font-display">{i + 1}</span>}
            </button>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5 z-30">
        {zone.scenarios.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-500
              ${i < roomIdx ? "w-2 h-2 bg-primary/70" : i === roomIdx ? "w-3 h-3 bg-primary/40 ring-1 ring-primary/20" : "w-2 h-2 bg-foreground/8"}
            `}
          />
        ))}
      </div>

      {/* Corruption bars */}
      <div className="absolute bottom-4 left-5 flex gap-1.5 z-30">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-1 h-5 rounded-full transition-all duration-700 ${i < corruption ? "bg-destructive/50" : "bg-foreground/8"}`}
          />
        ))}
      </div>

      {/* COMPLETE OVERLAY */}
      {phase === "complete" && (
        <div className="absolute inset-0 bg-background/90 flex items-center justify-center z-50 animate-fade-in">
          <div className="text-center max-w-sm px-8">
            <div className="text-5xl mb-8 animate-float">âœ¨</div>
            <p className="text-2xl sm:text-3xl font-display text-primary text-glow-primary mb-2">You survived.</p>
            <p className="text-foreground/40 font-body text-sm mb-10">{zone.name} has been conquered.</p>

            {isLastLevel ? (
              <div className="space-y-4">
                <p className="text-foreground/60 font-body italic text-sm leading-relaxed mb-6 whitespace-pre-line">
                  {"\"You didn't memorize code.\nYou survived it.\""}
                </p>
                <button
                  onClick={() => navigate("/subjects")}
                  className="px-10 py-3 bg-primary text-primary-foreground font-display rounded-lg box-glow-primary hover:scale-105 transition-transform"
                >
                  Return to Worlds
                </button>
              </div>
            ) : (
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => navigate(`/levels/${world.id}`)}
                  className="px-6 py-3 border border-border text-foreground/50 font-display text-sm rounded-lg hover:border-foreground/30 transition-colors"
                >
                  Zone Map
                </button>
                <button
                  onClick={() => navigate(`/play/${world.id}/${lvl + 1}`)}
                  className="px-8 py-3 bg-primary text-primary-foreground font-display text-sm rounded-lg box-glow-primary hover:scale-105 transition-transform"
                >
                  Next Zone â†'
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FAILED OVERLAY */}
      {phase === "failed" && (
        <div className="absolute inset-0 bg-background/95 flex items-center justify-center z-50 animate-fade-in">
          <div className="text-center max-w-sm px-8">
            <div className="text-5xl mb-8">ðŸ'€</div>
            <p className="text-2xl font-display text-destructive mb-2">The darkness consumed you.</p>
            <p className="text-foreground/30 font-body text-sm mb-10">Observe more carefully.</p>
            <button
              onClick={() => {
                setRoomIdx(0);
                setCorruption(0);
                setPhase("entering");
                setClickedIdx(null);
              }}
              className="px-10 py-3 border border-destructive/30 text-foreground/60 font-display text-sm rounded-lg hover:border-destructive/60 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Play;
```

### src/pages/Subjects.tsx

```tsx
import { useNavigate } from "react-router-dom";
import { worlds } from "@/lib/data";
import { getSubjectProgress } from "@/lib/storage";

const Subjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="font-body text-foreground/30 hover:text-foreground/60 transition-colors mb-8 text-sm"
        >
          â† Retreat
        </button>

        <div className="text-center mb-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary text-glow-primary mb-2 tracking-wider">
            Choose Your World
          </h1>
          <p className="font-body text-foreground/30 text-sm">Each world holds its own dangers and secrets</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {worlds.map((world) => {
            const progress = getSubjectProgress(world.id);
            const completed = progress.completedLevels.length;
            const total = world.zones.length;
            const pct = Math.round((completed / total) * 100);

            return (
              <button
                key={world.id}
                onClick={() => navigate(`/levels/${world.id}`)}
                className="group relative text-left p-6 rounded-xl border transition-all duration-500
                  bg-card/50 border-border/50
                  hover:border-primary/40 hover:scale-[1.02]
                  hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{world.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-sm font-bold text-foreground/80 group-hover:text-primary transition-colors tracking-wide">
                      {world.name}
                    </h2>
                    <p className="font-body text-xs text-foreground/30 mt-1 leading-relaxed">{world.description}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-full h-1 bg-muted/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary/60 rounded-full transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="font-body text-[10px] text-foreground/20 mt-1.5 tracking-wide">
                    {completed}/{total} zones survived
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
```

### src/test/example.test.ts

```ts
import { describe, it, expect } from "vitest";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});
```

### src/test/setup.ts

```ts
import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
```

### src/vite-env.d.ts

```ts
/// <reference types="vite/client" />
```

### components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### eslint.config.js

```js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);
```

### index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- TODO: Set the document title to the name of your application -->
    <title>Lovable App</title>
    <meta name="description" content="Lovable Generated Project" />
    <meta name="author" content="Lovable" />

    <!-- TODO: Update og:title to match your application name -->
    <meta property="og:title" content="Lovable App" />
    <meta property="og:description" content="Lovable Generated Project" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Lovable" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### package.json

```json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@playwright/test": "^1.57.0",
    "@tailwindcss/typography": "^0.5.16",
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/react": "^16.0.0",
    "@types/node": "^22.16.5",
    "@types/react": "^18.3.23",
    "@types/react-dom": "^18.3.7",
    "@vitejs/plugin-react-swc": "^3.11.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "jsdom": "^20.0.3",
    "lovable-tagger": "^1.1.13",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.38.0",
    "vite": "^5.4.19",
    "vitest": "^3.2.4"
  }
}
```

### playwright-fixture.ts

```ts
// Re-export the base fixture from the package
// Override or extend test/expect here if needed
export { test, expect } from "lovable-agent-playwright-config/fixture";
```

### playwright.config.ts

```ts
import { createLovableConfig } from "lovable-agent-playwright-config/config";

export default createLovableConfig({
  // Add your custom playwright configuration overrides here
  // Example:
  // timeout: 60000,
  // use: {
  //   baseURL: 'http://localhost:3000',
  // },
});
```

### postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### README.md

```md
# CodeQuest Adventure

Project documentation is available in [docs/PROJECT_DOCUMENTATION.md](./docs/PROJECT_DOCUMENTATION.md).
```

### tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          purple: "hsl(var(--neon-purple))",
          gold: "hsl(var(--neon-gold))",
          red: "hsl(var(--neon-red))",
          blue: "hsl(var(--neon-blue))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-8px)" },
          "40%": { transform: "translateX(8px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
        "success-pop": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shake: "shake 0.5s ease-in-out",
        "success-pop": "success-pop 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### tsconfig.app.json

```json
{
  "compilerOptions": {
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleDetection": "force",
    "moduleResolution": "bundler",
    "noEmit": true,
    "noFallthroughCasesInSwitch": false,
    "noImplicitAny": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "skipLibCheck": true,
    "strict": false,
    "target": "ES2020",
    "types": [
      "vitest/globals"
    ],
    "useDefineForClassFields": true
  },
  "include": [
    "src"
  ]
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "allowJs": true,
    "noImplicitAny": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "skipLibCheck": true,
    "strictNullChecks": false
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```

### tsconfig.node.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

### vite.config.ts

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
```

### vitest.config.ts

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```


