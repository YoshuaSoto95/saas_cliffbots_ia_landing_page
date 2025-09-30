import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";

function Counter({ to, decimals = 0, suffix = "" }) {
    const nodeRef = useRef();
    // 'ref' es para el observer, 'nodeRef' es para el número que se actualiza.
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            const node = nodeRef.current;
            // Anima desde 0 hasta el valor 'to'
            const controls = animate(0, to, {
                duration: 2, // Duración de la animación en segundos
                ease: "easeOut",
                onUpdate(value) {
                    // Actualiza el contenido de texto del span en cada frame
                    node.textContent = value.toFixed(decimals);
                },
            });
            return () => controls.stop();
        }
    }, [inView, to, decimals]);

    return (
        // 'ref' observa si el componente está a la vista
        <span ref={ref}>
            {/* 'nodeRef' es el elemento cuyo texto vamos a manipular */}
            <span ref={nodeRef}>0</span>
            {suffix}
        </span>
    );
}

export default Counter;