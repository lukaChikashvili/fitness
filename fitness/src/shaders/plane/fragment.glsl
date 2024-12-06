uniform vec2 rippleCenter;
uniform float time;
uniform float rippleIntensity;
uniform vec3 color1;
uniform vec3 color2;

varying vec2 vUv;

void main() {
    float dist = distance(vUv, rippleCenter);
    float ripple = sin((dist - time) * 20.0) * rippleIntensity / (dist + 1.0);
    vec3 color = mix(color1, color2, vUv.y + ripple);
    gl_FragColor = vec4(color, 1.0);
}
