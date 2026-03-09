export default function Live2DWidget() {
    return (
        <div className="fixed bottom-4 md:bottom-10 left-4 md:left-[60px] w-[120px] md:w-[200px] h-[240px] md:h-[400px] z-[9999] pointer-events-none">
            <iframe
                src="/live2d.html"
                className="w-full h-full border-0 pointer-events-auto"
                {...{ allowtransparency: "true" } as any}
                title="Live2D Character"
            />
        </div>
    );
}