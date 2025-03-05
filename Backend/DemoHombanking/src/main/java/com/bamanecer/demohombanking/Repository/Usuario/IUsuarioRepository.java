package com.bamanecer.demohombanking.Repository.Usuario;

import com.bamanecer.demohombanking.usuarios.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface IUsuarioRepository extends JpaRepository<Usuario,Long> {


}
