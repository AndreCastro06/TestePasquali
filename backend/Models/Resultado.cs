namespace backend.Models;

public class Resultado
{
    public int Id { get; set; }
    public string Vencedor { get; set; } = string.Empty; // "X", "O" ou "E" para empate
    public DateTime DataHora { get; set; }
}