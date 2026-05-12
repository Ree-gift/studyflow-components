# StudyFlow Component Library

A reusable, modular React component library for building modern study productivity applications. Built for Task 2 of the BuildLabs Development Track Internship.

---

## Overview

This component library provides reusable UI components specifically designed for a study productivity platform. All components accept props for customization, follow consistent styling conventions, and are fully documented.

**Live Demo:** https://studyflow-components.vercel.app  
**GitHub:** https://github.com/Ree-gift/studyflow-components

---

## Tech Stack
- React 18+
- Vite (build tool)
- CSS Modules (scoped styling)
- Vanilla CSS (no Tailwind/frameworks)

---

## Installation

```bash
# Clone the repository
git clone https://github.com/Ree-gift/studyflow-components.git
cd studyflow-components

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Components

### Button
A versatile button with multiple variants, sizes, and states.

```jsx
import { Button } from './components';

<Button variant="primary" size="lg" onClick={handleClick}>
  Get Started
</Button>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'outline' \| 'white' \| 'danger' | 'primary' | Button style |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| fullWidth | boolean | false | Full width button |
| disabled | boolean | false | Disabled state |
| loading | boolean | false | Loading spinner |
| onClick | function | - | Click handler |

---

### FeatureCard
A card component for displaying features with icon, title, and description.

```jsx
import { FeatureCard } from './components';

<FeatureCard
  icon="feature-icon-1"
  title="AI Study Plans"
  description="Get personalized study schedules..."
  onClick={handleClick}
>
  Expanded content here
</FeatureCard>
```

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| icon | string | Icon class name |
| title | string | Card title |
| description | string | Card description |
| onClick | function | Click handler |
| expanded | boolean | Expanded state |
| children | ReactNode | Expanded content |

---

### TestimonialCard
A card for displaying user testimonials.

```jsx
import { TestimonialCard } from './components';

<TestimonialCard
  rating={5}
  quote="Great product!"
  authorName="John Doe"
  authorRole="Student, MIT"
  authorInitials="JD"
/>
```

---

### PricingCard
A card for displaying pricing tiers.

```jsx
import { PricingCard } from './components';

<PricingCard
  planName="Pro"
  description="For serious students"
  price={9}
  period="/month"
  popular={true}
  features={[{text: 'Unlimited tasks'}, {text: 'AI features'}]}
  onAction={() => {}}
  actionLabel="Get Started"
/>
```

---

### Navbar
A responsive navigation bar.

```jsx
import { Navbar } from './components';

<Navbar
  logoText="StudyFlow"
  links={[{ label: 'Features', href: '#features' }]}
  actions={[{ label: 'Log In', variant: 'outline', onClick: handleLogin }]}
/>
```

---

### Modal
A reusable modal dialog.

```jsx
import { Modal } from './components';

<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Welcome"
  size="md"
>
  Modal content here
</Modal>
```

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| isOpen | boolean | Visibility |
| onClose | function | Close handler |
| title | string | Header title |
| size | 'sm' \| 'md' \| 'lg' \| 'xl' | Modal width |
| children | ReactNode | Body content |
| footer | ReactNode | Footer actions |

---

### Form Components

**Input:**
```jsx
<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error="Invalid email"
  required
/>
```

**Checkbox:**
```jsx
<Checkbox
  label="I agree to terms"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>
```

**Select:**
```jsx
<Select
  label="Role"
  options={[
    { value: 'student', label: 'Student' },
    { value: 'tutor', label: 'Tutor' }
  ]}
  value={role}
  onChange={(e) => setRole(e.target.value)}
/>
```

---

### Complete Forms

**LoginForm:**
```jsx
import { LoginForm } from './components';

<LoginForm
  isOpen={showLogin}
  onClose={() => setShowLogin(false)}
  onSubmit={(data) => console.log(data)}
/>
```

**SignupForm:**
```jsx
import { SignupForm } from './components';

<SignupForm
  isOpen={showSignup}
  onClose={() => setShowSignup(false)}
  onSubmit={(data) => console.log(data)}
/>
```

**ContactForm:**
```jsx
import { ContactForm } from './components';

<ContactForm onSubmit={(data) => console.log(data)} />
```

---

## Project Structure

```
studyflow-components/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.css
│   │   ├── Navbar/
│   │   ├── Modal/
│   │   ├── Form/
│   │   ├── Forms/
│   │   └── index.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## Key Decisions

1. **No UI Frameworks** - Pure CSS to demonstrate fundamental styling skills
2. **CSS Variables** - Consistent theming with CSS custom properties
3. **Component Composition** - All components accept children and custom props
4. **Accessibility** - ARIA labels, keyboard navigation support
5. **Responsive** - Mobile-first approach with media queries

---

## Build & Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel
npm run deploy
```

---

## Task 2 Requirements Met

- ✅ Reusable components (Button, Cards, Navbar, Modal, Forms)
- ✅ Props-based customization
- ✅ Consistent styling (CSS variables)
- ✅ Proper naming conventions (sf-prefix)
- ✅ Clear folder structure
- ✅ Component documentation (props, usage)
- ✅ Demo page showcasing all components
- ✅ GitHub repository
- ✅ Live demo deployed

---

**Intern:** Ree-gift  
**Track:** Development  
**Week:** 2 (Task 2)  
**Status:** Completed