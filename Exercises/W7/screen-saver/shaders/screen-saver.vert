attribute vec4 vertexPos;

uniform mat4 uModelViewMat;
uniform mat4 uProjectionMat;

void main() {
    gl_Position = uProjectionMat * uModelViewMat * vertexPos;
}