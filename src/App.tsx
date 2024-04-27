import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';

import { AboutComponent } from './components/about/About.component.tsx';

function App() {
    return (
        <>
            <HeaderComponent />
            <main>
                <AboutComponent />
            </main>
            <FooterComponent />
        </>
    );
}

export default App;
