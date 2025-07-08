using backend.Data;
using backend.Models;
using backend.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResultadosController : ControllerBase
{
    private readonly AppDbContext _context;

    public ResultadosController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> PostResultado([FromBody] ResultadoRequestDTO request)
    {
        var vencedorValido = new[] { "X", "O", "E" };

        if (!vencedorValido.Contains(request.Vencedor.ToUpper()))
        {
            return BadRequest(new
            {
                erro = "Vencedor inválido. Use apenas: 'X', 'O' ou 'E' (para empate)."
            });
        }

        var resultado = new Resultado
        {
            Vencedor = request.Vencedor.ToUpper(),
            DataHora = DateTime.UtcNow
        };

        _context.Resultados.Add(resultado);
        await _context.SaveChangesAsync();

        return Ok(new ResultadoResponseDTO
        {
            Id = resultado.Id,
            Vencedor = resultado.Vencedor,
            DataHora = resultado.DataHora
        });
    }

    [HttpGet("ultimos-dez-vencedores")]
    public async Task<IActionResult> GetTop10UltimosVencedores()
    {
        var ultimos = await _context.Resultados
            .Where(r => r.Vencedor != "E")
            .OrderByDescending(r => r.DataHora)
            .Take(10)
            .ToListAsync();

        return Ok(ultimos);
    }
}