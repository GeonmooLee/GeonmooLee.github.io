## Project Media Folder Structure

Project images and videos live under `public/projects/<projectId>/`.

Rules:
- The folder name must match the `id` in `src/data/projects.ts`.
- `01.jpg` is the preferred project card thumbnail.
- Detail pages can use any local media file, including `02.jpg`, `03.png`, `demo.gif`, or `demo.mp4`.
- Use zero-padded numbers so files stay in natural order.
- Large videos can be linked externally, but small local clips can live here too.

Recommended structure:

```text
public/projects/<projectId>/
  01.jpg        # preferred thumbnail image
  02.jpg        # optional detail image
  03.jpg        # optional detail image
  demo.gif      # optional local animation
  demo.mp4      # optional local video
```

Code helpers:

```ts
getProjectImageSrc(projectId, 1); // /projects/<projectId>/01.jpg
getProjectImageSrc(projectId, 2); // /projects/<projectId>/02.jpg
```

To scaffold folders for every project id:

```bash
npm run scaffold:assets
```
