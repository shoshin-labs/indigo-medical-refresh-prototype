# Indigo Medical refresh prototype

A static prototype showing how the Indigo Medical website could be refreshed to make patient journeys — especially appointments — clearer and more task-focused.

## Included
- `docs/review-for-dr-rogers.md` — short polished review
- `docs/prioritised-improvement-list.md` — must/should/could backlog
- `index.html` — refreshed homepage concept
- `appointments.html` — clearer appointments journey
- `patient-access.html` — simplified online-booking onboarding
- `styles.css` and `script.js` — shared styling and interaction

## Notes
- This is an exploratory prototype, not an official Indigo Medical site.
- Content is based on publicly visible site structure and wording, then reorganised for better patient UX.
- No build step is required.

## Run locally
```bash
cd /var/lib/hermes-agent/indigo-medical-refresh-prototype
python3 -m http.server 4173
```
Then open:
- `http://localhost:4173/`
- `http://localhost:4173/appointments.html`
- `http://localhost:4173/patient-access.html`
