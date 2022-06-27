import { PageArea } from "./styled"

export default function About() {
    return (
        <>
            <PageArea>
                <img src={require("./owl.png")} />
                <h1>Owl Music</h1>
                <text> &emsp; Aplicativo desenvolvido para a matéria de Programação III do Curso de Ciência da Computação da Universidade do Oeste de Santa Catarina (UNOESC). <br/> &emsp; Desenvolvido pelos acadêmicos Filipe Galelli Scaravonatto e Óbertan Barcellos dos Santos. </text>
            </PageArea>
        </>
    )
}