export default function({styles, sources}) {

    return (
        <div className={styles.sources}>
            <h3>Sources:</h3>
            <div>

            {sources.map(function (source) {
                return (<a href={source.link}>{source.name}</a>)
            })}
            </div>
        </div>
    );
}