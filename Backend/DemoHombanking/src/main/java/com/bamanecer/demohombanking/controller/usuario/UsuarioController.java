package com.bamanecer.demohombanking.controller.usuario;

import com.bamanecer.demohombanking.usuarios.DatosUsuario;
import com.bamanecer.demohombanking.usuarios.IUsuarioRepository;
import com.bamanecer.demohombanking.usuarios.Usuario;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    private IUsuarioRepository usuarioRepository;;

    @GetMapping("/listar")
    public List<Usuario> listar(){
        return usuarioRepository.findAll();
    }

    @GetMapping("/listar/{id}")
    public Usuario listar(@PathVariable Long id){
        return usuarioRepository.findById(id).get();
    }

    @PostMapping("/crear")
    @Transactional
    public ResponseEntity<DatosUsuario> crear(@RequestBody @Valid Usuario usuario, UriComponentsBuilder uriComponentsBuilder){

        Usuario usuarioCreado = usuarioRepository.save(usuario);
        DatosUsuario datosUsuario = new DatosUsuario(usuarioCreado.getId(), usuarioCreado.getNombre(), usuarioCreado.getEmail(),usuarioCreado.getTelefono(),usuarioCreado.getDireccion(),String.valueOf(usuarioCreado.getEstado()));
        URI url = uriComponentsBuilder.path("/usuario/{id}").buildAndExpand(usuario.getId()).toUri();
        return ResponseEntity.created(url).body(datosUsuario);

    }

}
