import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import Logo from '@/components/Logo/index.jsx';
import ButtonHead from '@/components/ButtonHead/index.jsx';
import DownloadIcon from '@mui/icons-material/Download';

const Head = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      sx={{
        height: '85px',
        background: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.2)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Toolbar
        sx={{
          minHeight: '85px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '60px',
          paddingRight: '60px',
        }}
      >
        {/* ÁREA 1: LOGO (Flex 1 garante que ocupe o mesmo espaço que a área 3) */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Logo />
        </Box>

        {/* ÁREA 2: MENU CENTRAL (Centralizado perfeitamente) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            flex: 2, // Espaço central maior para os itens do menu
          }}
        >
          <ButtonHead title='Projetos' fontSize='13px' />
          <ButtonHead title='contatos' fontSize='13px' />
          <ButtonHead title='Experiencias' fontSize='13px' />
          <ButtonHead title='Habilidades' fontSize='13px' />
        </Box>

        {/* ÁREA 3: BOTÃO CURRÍCULO (Flex 1 empurra para o final) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            flex: 1,
          }}
        >
          <ButtonHead
            title='Curriculo'
            icon={<DownloadIcon />}
            border='1px solid'
            borderColor='#2563EB'
            borderRadius='8px' // Bordas menos arredondadas para um visual mais técnico
            fontSize='13px'
            href='/Curriculo_Pedro_Arthur_Desenvolvedor.pdf'
            showBar={false}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Head;
