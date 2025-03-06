package com.bamanecer.demohombanking.usuarios;

import com.bamanecer.demohombanking.util.RoleEnum;
import jakarta.persistence.*;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity(name="credenciales")
@Table(name="credenciales")
@Getter
public class Credenciales implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int usuario_id;
    private String usuario;
    private String password_hash;
    @Enumerated(EnumType.STRING)
    private RoleEnum perfil;

    public Credenciales (DatosCredenciales datosCredenciales){

        this.usuario_id= Integer.parseInt(datosCredenciales.usuario_id());
        this.usuario= datosCredenciales.usuario();
        this.password_hash= datosCredenciales.password_hash();
        this.perfil= RoleEnum.valueOf(datosCredenciales.perfil());
    }

    public Credenciales(){

    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return password_hash;
    }


    @Override
    public String getUsername() {
        return usuario;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
