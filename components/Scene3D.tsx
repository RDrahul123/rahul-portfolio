"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 90;
const RADIUS = 3.1;
const LINK_DIST = 1.3;

function NetworkNodes({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const autoRotation = useRef(0);

  const positions = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = RADIUS * Math.cbrt(Math.random() * 0.55 + 0.45);
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }
    return pts;
  }, []);

  const pointsGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(positions.length * 3);
    positions.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, [positions]);

  const linesGeometry = useMemo(() => {
    const verts: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < LINK_DIST) {
          verts.push(
            positions[i].x,
            positions[i].y,
            positions[i].z,
            positions[j].x,
            positions[j].y,
            positions[j].z
          );
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(verts), 3)
    );
    return geo;
  }, [positions]);

  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    if (!reducedMotion) {
      autoRotation.current += delta * 0.06;
    }
    const tiltX = pointer.current.y * 0.3;
    const tiltY = pointer.current.x * 0.4;
    group.rotation.y += (autoRotation.current + tiltY - group.rotation.y) * 0.04;
    group.rotation.x += (tiltX - group.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial color="#7C5CFF" transparent opacity={0.28} />
      </lineSegments>
      <points geometry={pointsGeometry}>
        <pointsMaterial
          color="#22D3EE"
          size={0.055}
          sizeAttenuation
          transparent
          opacity={0.95}
        />
      </points>
    </group>
  );
}

export default function Scene3D() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.75]}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.7} />
      <NetworkNodes reducedMotion={reducedMotion} />
    </Canvas>
  );
}
