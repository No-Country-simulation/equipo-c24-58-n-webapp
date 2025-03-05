package com.bamanecer.demohombanking.Security;

import com.bamanecer.demohombanking.Repository.Usuario.ICredencialesRepository;
import com.bamanecer.demohombanking.Repository.Usuario.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AutenticacionService implements UserDetailsService {
    @Autowired
   private ICredencialesRepository credencialesRepository;

    @Override
    public UserDetails loadUserByUsername(String usuario) throws UsernameNotFoundException {
        return credencialesRepository.findByUsuario(usuario);
    }
}
