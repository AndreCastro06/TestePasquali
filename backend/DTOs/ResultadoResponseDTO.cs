namespace backend.DTOs;

public class ResultadoResponseDTO
{
    public int Id { get; set; }
    public string Vencedor { get; set; } = string.Empty;
    public DateTime DataHora { get; set; }
}