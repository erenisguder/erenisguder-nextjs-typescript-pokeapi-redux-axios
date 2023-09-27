export default function Error({ error }: { error: string }) {
    return (
        <div className="d-flex justify-content-center">
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        </div>
    )
}