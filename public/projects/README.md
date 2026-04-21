## Project media folder structure

이 폴더는 **프로젝트별 썸네일/이미지/영상**을 정리하기 위한 루트 디렉터리입니다.

중요: 썸네일은 가장 안정적으로 `public/projects/<projectId>/thumbnail.(webp|png|jpg)`에서 서빙됩니다.
(`src/assets`는 번들에 포함되는 방식이라, 개발 중 파일 추가/교체가 환경에 따라 반영이 늦거나 꼬일 수 있습니다.)

핵심 규칙:
- **폴더명 = `src/data/projects.ts`의 `id`와 동일**
- 썸네일 파일명은 가급적 **`thumbnail.webp` 또는 `thumbnail.png` 또는 `thumbnail.jpg`로 통일**
- 원본(대용량) 파일은 `raw/`에 넣고, 웹용으로 최적화한 파일만 `gallery/` / `videos/`에 둡니다.

권장 구조:

```text
src/assets/projects/<projectId>/
  thumbnail.webp        # 카드 썸네일 (필수, 권장)
  thumbnail.png         # 가능 (도식/회로도/스크린샷에 유리)
  thumbnail.jpg         # 가능 (사진 위주에 유리)
  gallery/              # 상세페이지 이미지들
    01-...webp
    02-...webp
  videos/               # 상세페이지 영상(가급적 embed 링크 권장)
    demo.mp4
  raw/                  # 원본(대용량) 자료 (gitignore 권장)
```

### 썸네일(권장 위치)

```text
public/projects/<projectId>/
  thumbnail.webp
  thumbnail.png
  thumbnail.jpg
```

### 자동 생성(스캐폴딩)
프로젝트 `id`를 기준으로 위 폴더 구조를 자동 생성하려면 아래를 실행하세요.

```bash
npm run scaffold:assets
```

