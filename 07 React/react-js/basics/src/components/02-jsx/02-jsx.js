function Jsx2() {
    const isAdmin = false;
    const loading = false;

    if (loading) {
        console.log("Loading..")
    }

    return (
        <>
            {
                isAdmin
                    ? <>
                        <h2>Admin Menu</h2>
                        <ul>
                            <li>Kullanici Olustur</li>
                            <li>Kullaniciyi Guncelle</li>
                            <li>Kullaniciyi Sil</li>
                        </ul>
                    </>
                    : loading
                        ? <h2>Loading...</h2>
                        : <>
                            <h2>Kullanici Menu</h2>
                            <ul>
                                <li>Profilim</li>
                                <li>Cikis Yap</li>
                            </ul>
                        </>
            }
        </>
    )
};

export default Jsx2;