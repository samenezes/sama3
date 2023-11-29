import { useLocalStorage } from "@uidotdev/usehooks";

export default function Tarefa({ id, nome, concluida }) {
    const [lista, setLista] = useLocalStorage("lista");

    function check() {
        const temporario = lista.map((tarefa) => {
            if (tarefa.id == id) {
                tarefa.concluida = !tarefa.concluida
            }
            return tarefa
        });
        setLista(temporario);
    }

    function excluir() {
        const temporario = lista.filter((tarefa) => {
            if (tarefa.id == id) {
                return false
            }
            return true
        });
        setLista(temporario);
    }

    return (
        <div>
            <li>{nome}</li>
            <button onClick={excluir}>Excluir</button>
        </div>
    )
}