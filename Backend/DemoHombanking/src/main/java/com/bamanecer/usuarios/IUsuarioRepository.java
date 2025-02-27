package com.bamanecer.usuarios;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuarioRepository extends JpaRepository<Usuario,Long> {
}
