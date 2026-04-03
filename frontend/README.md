# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Face recognition setup

This project uses `face-api.js` (loaded from CDN) to compute face descriptors in the browser. To enable client-side face verification you must download the face-api model files and place them under `public/models` in the frontend folder.

1. Create the folder `frontend/public/models`.
2. Download these model files and place them inside that folder:
	- `tiny_face_detector_model-weights_manifest.json` and related shard files
	- `face_landmark_68_model-weights_manifest.json` and related shard files
	- `face_recognition_model-weights_manifest.json` and related shard files

You can find prebuilt model bundles in the face-api.js repository or from CDN mirrors. After placing the files, start the frontend dev server with:

```bash
cd frontend
npm install
npm run dev
```

If you prefer npm-based installs for face-api, add `face-api.js` and `@tensorflow/tfjs` to `package.json` and run `npm install`.
