## 2026-07-08 - [Forgiving URL Input]
**Learning:** Automatically normalizing URL input (prepending https://) and changing input type from 'url' to 'text' allows users to enter domain names directly, which is a common and expected behavior that reduces form submission friction.
**Action:** For URL inputs that allow domain-only entries, use type='text' combined with manual normalization logic to bypass strict browser validation while providing a better user experience.
