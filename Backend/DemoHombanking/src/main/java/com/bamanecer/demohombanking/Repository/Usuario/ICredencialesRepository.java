package com.bamanecer.demohombanking.Repository.Usuario;

import com.bamanecer.demohombanking.usuarios.Credenciales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface ICredencialesRepository extends JpaRepository<Credenciales, Long> {

    UserDetails findByUsuario(String subject);
}
