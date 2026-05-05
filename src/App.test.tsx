import { getProjectById } from "./data/projects";

test("contains updated VESS vacancy detector project data", () => {
  const project = getProjectById("vess-vacancy-detector");

  expect(project?.title).toBe("시각장애인을 위한 빈자리 탐지기");
  expect(project?.period).toBe("2021.06 – 2022.01 / VESS");
  expect(project?.detail?.bullets).toContain(
    "서울시각장애인연합회 인터뷰를 통해 지하철 빈자리 확인 문제를 검증",
  );
});
