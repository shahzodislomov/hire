export default function Live2DWidget() {
    return (
        <div className="fixed bottom-10 left-[60px] w-[200px] h-[400px] z-[9999] pointer-events-none">
            <iframe
                src="/live2d.html"
                className="w-full h-full border-0 pointer-events-auto"
                allowtransparency="true"
                title="Live2D Character"
            />
        </div>
    );
}