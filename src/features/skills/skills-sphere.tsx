"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  CSS3DObject,
  CSS3DRenderer,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";

import {
  getSkillDeviconClass,
  skillInitials,
} from "@/content/skill-icons";
import { skillCategoryLabels } from "@/content/skills";
import { distributeOnSphere } from "@/lib/skill-sphere";
import type { Skill } from "@/types/content";

const SPHERE_RADIUS = 220;
const AUTO_ROTATE_SPEED = 0.0018;
const DRAG_SENSITIVITY = 0.005;
const DEVICON_HREF =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css";

type SkillsSphereProps = {
  skills: readonly Skill[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

type SkillNodeBinding = {
  skill: Skill;
  object: CSS3DObject;
  root: HTMLDivElement;
};

export function SkillsSphere({
  skills,
  selectedId,
  onSelect,
}: SkillsSphereProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const onSelectRef = useRef(onSelect);
  const selectedIdRef = useRef(selectedId);
  const bindingsRef = useRef<SkillNodeBinding[]>([]);

  useEffect(() => {
    onSelectRef.current = onSelect;
    selectedIdRef.current = selectedId;
  }, [onSelect, selectedId]);

  useEffect(() => {
    ensureDeviconStylesheet();
  }, []);

  useEffect(() => {
    for (const binding of bindingsRef.current) {
      const selected = binding.skill.id === selectedId;
      binding.root.dataset.selected = selected ? "true" : "false";
      binding.root.setAttribute("aria-pressed", selected ? "true" : "false");
    }
  }, [selectedId]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || skills.length === 0) {
      return;
    }

    const width = host.clientWidth;
    const height = host.clientHeight;

    const scene = new THREE.Scene();
    const group = new THREE.Group();
    scene.add(group);

    const camera = new THREE.PerspectiveCamera(42, width / height, 1, 2000);
    camera.position.z = 650;

    const webglRenderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    webglRenderer.setSize(width, height);
    webglRenderer.domElement.style.position = "absolute";
    webglRenderer.domElement.style.inset = "0";
    webglRenderer.domElement.style.pointerEvents = "none";
    host.appendChild(webglRenderer.domElement);

    const cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(width, height);
    cssRenderer.domElement.style.position = "absolute";
    cssRenderer.domElement.style.inset = "0";
    cssRenderer.domElement.style.pointerEvents = "none";
    host.appendChild(cssRenderer.domElement);

    const wireframe = createWireframeGlobe(SPHERE_RADIUS);
    group.add(wireframe);

    const points = distributeOnSphere(skills.length, SPHERE_RADIUS);
    const bindings: SkillNodeBinding[] = skills.map((skill, index) => {
      const point = points[index] ?? { x: 0, y: 0, z: SPHERE_RADIUS };
      const element = createSkillElement(skill, selectedIdRef.current === skill.id);
      element.addEventListener("pointerdown", (event) => {
        event.stopPropagation();
      });
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        onSelectRef.current(skill.id);
      });

      const object = new CSS3DObject(element);
      object.position.set(point.x, point.y, point.z);
      object.scale.setScalar(1);
      group.add(object);

      return { skill, object, root: element };
    });
    bindingsRef.current = bindings;

    group.rotation.x = -0.28;
    group.rotation.y = 0.45;

    const pointer = {
      dragging: false,
      moved: false,
      previousX: 0,
      previousY: 0,
      velocityX: 0,
      velocityY: 0,
    };

    const onPointerDown = (event: PointerEvent) => {
      pointer.dragging = true;
      pointer.moved = false;
      pointer.previousX = event.clientX;
      pointer.previousY = event.clientY;
      pointer.velocityX = 0;
      pointer.velocityY = 0;
      host.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!pointer.dragging) {
        return;
      }

      const dx = event.clientX - pointer.previousX;
      const dy = event.clientY - pointer.previousY;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        pointer.moved = true;
      }

      pointer.previousX = event.clientX;
      pointer.previousY = event.clientY;
      pointer.velocityX = dx * DRAG_SENSITIVITY;
      pointer.velocityY = dy * DRAG_SENSITIVITY;

      group.rotation.y += pointer.velocityX;
      group.rotation.x = THREE.MathUtils.clamp(
        group.rotation.x + pointer.velocityY,
        -1.1,
        1.1,
      );
    };

    const onPointerUp = (event: PointerEvent) => {
      pointer.dragging = false;
      if (host.hasPointerCapture(event.pointerId)) {
        host.releasePointerCapture(event.pointerId);
      }
    };

    host.addEventListener("pointerdown", onPointerDown);
    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerup", onPointerUp);
    host.addEventListener("pointercancel", onPointerUp);

    const resizeObserver = new ResizeObserver(() => {
      const nextWidth = host.clientWidth;
      const nextHeight = host.clientHeight;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      webglRenderer.setSize(nextWidth, nextHeight);
      cssRenderer.setSize(nextWidth, nextHeight);
    });
    resizeObserver.observe(host);

    let frameId = 0;
    const animate = () => {
      frameId = window.requestAnimationFrame(animate);

      if (!pointer.dragging) {
        group.rotation.y += AUTO_ROTATE_SPEED + pointer.velocityX;
        group.rotation.x = THREE.MathUtils.clamp(
          group.rotation.x + pointer.velocityY,
          -1.1,
          1.1,
        );
        pointer.velocityX *= 0.94;
        pointer.velocityY *= 0.94;
      }

      for (const binding of bindings) {
        binding.object.lookAt(camera.position);
        updateNodeDepth(binding, camera, group);
      }

      webglRenderer.render(scene, camera);
      cssRenderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      host.removeEventListener("pointerdown", onPointerDown);
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerup", onPointerUp);
      host.removeEventListener("pointercancel", onPointerUp);
      bindingsRef.current = [];

      for (const binding of bindings) {
        binding.root.remove();
        group.remove(binding.object);
      }

      wireframe.geometry.dispose();
      const material = wireframe.material;
      if (Array.isArray(material)) {
        material.forEach((item) => item.dispose());
      } else {
        material.dispose();
      }

      webglRenderer.dispose();
      webglRenderer.domElement.remove();
      cssRenderer.domElement.remove();
    };
  }, [skills]);

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-background/50">
      <div
        aria-hidden
        className="page-grid pointer-events-none absolute inset-0 opacity-40"
      />

      <div
        ref={hostRef}
        role="application"
        aria-label="Esfera interactiva de skills. Arrastra para rotar."
        className="relative h-[28rem] cursor-grab touch-none active:cursor-grabbing sm:h-[34rem]"
      />

      <p className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 font-mono text-[10px] text-muted-foreground uppercase backdrop-blur-sm">
        <span aria-hidden className="text-accent">
          ◈
        </span>
        Drag to explore skills universe
      </p>
    </div>
  );
}

function createWireframeGlobe(radius: number): THREE.Mesh {
  const geometry = new THREE.IcosahedronGeometry(radius, 2);
  const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color("#3dff9a"),
    wireframe: true,
    transparent: true,
    opacity: 0.22,
    depthWrite: false,
  });

  return new THREE.Mesh(geometry, material);
}

const depthScratch = {
  world: new THREE.Vector3(),
  cameraDir: new THREE.Vector3(),
  nodeDir: new THREE.Vector3(),
};

function createSkillElement(skill: Skill, selected: boolean): HTMLDivElement {
  const categoryLabel = skillCategoryLabels[skill.category];
  const root = document.createElement("div");
  root.setAttribute("role", "button");
  root.tabIndex = 0;
  root.className = "skill-sphere-root";
  root.dataset.skillId = skill.id;
  root.dataset.selected = selected ? "true" : "false";
  root.setAttribute("aria-pressed", selected ? "true" : "false");
  root.setAttribute(
    "aria-label",
    `${skill.name}, ${categoryLabel}${skill.description ? `. ${skill.description}` : ""}`,
  );
  root.title = skill.description ?? skill.name;

  root.innerHTML = `
    <div class="skill-sphere-node">
      <span class="skill-sphere-icon">${renderIconMarkup(skill)}</span>
      <span class="skill-sphere-label">${escapeHtml(skill.name)}</span>
    </div>
  `;

  root.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      root.click();
    }
  });

  return root;
}

function renderIconMarkup(skill: Skill): string {
  const iconClass = getSkillDeviconClass(skill.id);
  if (iconClass) {
    return `<i class="${iconClass}" aria-hidden="true"></i>`;
  }

  return `<span class="skill-sphere-fallback">${escapeHtml(skillInitials(skill.name))}</span>`;
}

function updateNodeDepth(
  binding: SkillNodeBinding,
  camera: THREE.PerspectiveCamera,
  group: THREE.Group,
) {
  binding.object.getWorldPosition(depthScratch.world);
  depthScratch.cameraDir
    .copy(camera.position)
    .sub(group.position)
    .normalize();
  depthScratch.nodeDir.copy(depthScratch.world).normalize();
  const facing = depthScratch.cameraDir.dot(depthScratch.nodeDir);
  const selected = binding.root.dataset.selected === "true";

  const opacity = selected
    ? 1
    : THREE.MathUtils.clamp(0.22 + (facing + 1) * 0.42, 0.18, 1);
  const scale = selected
    ? 1.08
    : THREE.MathUtils.clamp(0.78 + (facing + 1) * 0.18, 0.72, 1.05);

  binding.root.style.opacity = String(opacity);
  binding.root.style.transform = `scale(${scale})`;
  binding.root.style.pointerEvents =
    facing < -0.15 && !selected ? "none" : "auto";
  binding.root.style.zIndex = String(Math.round((facing + 1) * 100));
}

function ensureDeviconStylesheet() {
  const id = "devicon-stylesheet";
  if (document.getElementById(id)) {
    return;
  }

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = DEVICON_HREF;
  document.head.appendChild(link);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
