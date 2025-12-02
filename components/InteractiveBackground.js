import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function InteractiveBackground() {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.appendChild(renderer.domElement);

        // Mouse tracking
        const mouse = new THREE.Vector2(0.5, 0.5);
        const targetMouse = new THREE.Vector2(0.5, 0.5);

        const onMouseMove = (event) => {
            targetMouse.x = event.clientX / window.innerWidth;
            targetMouse.y = 1.0 - (event.clientY / window.innerHeight); // Invert Y for shader
        };

        window.addEventListener('mousemove', onMouseMove);

        // Texture loading
        const loader = new THREE.TextureLoader();
        const texture = loader.load('/clouds.jpg');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

        // Custom Shader Material
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTexture: { value: texture },
                uMouse: { value: mouse },
                uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                uTime: { value: 0 }
            },
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        uniform sampler2D uTexture;
        uniform vec2 uMouse;
        uniform vec2 uResolution;
        uniform float uTime;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          
          // Calculate distance from mouse
          // Aspect ratio correction
          float aspect = uResolution.x / uResolution.y;
          vec2 mousePos = uMouse;
          mousePos.x *= aspect;
          vec2 currentPos = uv;
          currentPos.x *= aspect;
          
          float dist = distance(currentPos, mousePos);
          
          // Distortion effect
          // Strength decreases with distance
          // Reduced radius from 0.5 to 0.25 for a tighter effect
          float strength = 0.02 * smoothstep(0.35, 0.0, dist);
          
          // Direction vector from mouse to pixel
          vec2 dir = normalize(currentPos - mousePos);
          
          // Apply distortion
          vec2 distortedUv = uv - dir * strength;
          
          gl_FragColor = texture2D(uTexture, distortedUv);
        }
      `
        });

        // Full screen plane
        const geometry = new THREE.PlaneGeometry(2, 2);
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Smooth mouse movement (Lerp)
            // Increased from 0.05 to 0.15 for faster response
            mouse.x += (targetMouse.x - mouse.x) * 0.15;
            mouse.y += (targetMouse.y - mouse.y) * 0.15;

            material.uniforms.uMouse.value = mouse;
            material.uniforms.uTime.value += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Handle Resize
        const onResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.uResolution.value.x = window.innerWidth;
            material.uniforms.uResolution.value.y = window.innerHeight;
        };

        window.addEventListener('resize', onResize);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            mount.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1, // Behind everything
                pointerEvents: 'none' // Let clicks pass through
            }}
        />
    );
}
