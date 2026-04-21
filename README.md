# Geonmoo's Portfolio 🚀

please visit https://geonmoolee.github.io/!

- fork from https://github.com/yujisatojr/react-portfolio-template

---

## 🚀 유지보수 및 배포 방법 (Maintenance Guide)

포트폴리오 코드를 업데이트할 때는 사이트 반영과 원본 백업을 위해 아래의 두 가지 과정을 세트로 진행합니다.

### 1. 웹사이트 업데이트 (Deploy)

수정한 코드를 빌드하여 실제 깃허브 페이지 도메인에 반영합니다.

(빌드 결과를 gh-pages 브랜치에 push하고, 깃허브 페이지는 gh-pages 브랜치에 대응됩니다.)

```bash
npm run deploy
```

### 2. 원본 소스 코드 백업 (Backup)

수정한 리액트 원본 코드가 날아가지 않도록 main 브랜치에 저장합니다.

```Bash
git add .
git commit -m "포트폴리오 내용 업데이트"
git push origin main
```
