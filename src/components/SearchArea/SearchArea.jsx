import React, { useState } from 'react';
import './index.css';
import lupa from './imagens/lupa.svg';
import not1 from './imagens/not1.svg';
import kit from './imagens/kit.svg';
import pet from './imagens/pet.svg';

const SearchArea = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const toggleDropdown1 = () => setIsOpen1(!isOpen1);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);

  return (
    <div className="search-bar">
      <h1 className="titlee">Descubra Veterinários perto de você!</h1>
      <div className="input-container">
        {/* Dropdown 1 */}
        <div className="custom-select" onClick={toggleDropdown1}>
          <div className="selected-option">
            {selectedOption1 || 'Especialidades e serviços'}
          </div>
          {isOpen1 && (
            <div className="options">
              <div className="option" onClick={() => {
                setSelectedOption1('Consultas');
                setIsOpen1(false);
              }}>
                <img src={pet} alt="Consultas" className="option-icon" />
                Consultas
              </div>
              <div className="option" onClick={() => {
                setSelectedOption1('Vacinas');
                setIsOpen1(false);
              }}>
                <img src={pet} alt="Vacinas" className="option-icon" />
                Vacinas
              </div>
              <div className="option" onClick={() => {
                setSelectedOption1('Curativos');
                setIsOpen1(false);
              }}>
                <img src={pet} alt="Curativos" className="option-icon" />
                Curativos
              </div>
              <div className="option" onClick={() => {
                setSelectedOption1('Aplicação');
                setIsOpen1(false);
              }}>
                <img src={pet} alt="Aplicação" className="option-icon" />
                Aplicação
              </div>
              <div className="option" onClick={() => {
                setSelectedOption1('Exames');
                setIsOpen1(false);
              }}>
                <img src={pet} alt="Exames" className="option-icon" />
                Exames
              </div>
              <div className="option" onClick={() => {
                setSelectedOption1('Dermatologia');
                setIsOpen1(false);
              }}>
                <img src={pet} alt="Dermatologia" className="option-icon" />
                Dermatologia
              </div>
              <div className="option" onClick={() => {
                setSelectedOption1('Nefrologia');
                setIsOpen1(false);
              }}>
                <img src={pet} alt="Nefrologia" className="option-icon" />
                Nefrologia
              </div>
            </div>
          )}
        </div>

        {/* Dropdown 2 */}
        <div className="custom-select1" onClick={toggleDropdown2}>
          <div className="selected-option">
            {selectedOption2 || 'Cidade'}
          </div>
          {isOpen2 && (
            <div className="options">
              <div className="option" onClick={() => {
                setSelectedOption2('São Paulo, SP');
                setIsOpen2(false);
              }}>
                <img src={pet} alt="São Paulo, SP" className="option-icon" />
                São Paulo, SP
              </div>
              <div className="option" onClick={() => {
                setSelectedOption2('Jundiaí, SP');
                setIsOpen2(false);
              }}>
                <img src={pet} alt="Jundiaí, SP" className="option-icon" />
                Jundiaí, SP
              </div>
              <div className="option" onClick={() => {
                setSelectedOption2('Rio de Janeiro, RJ');
                setIsOpen2(false);
              }}>
                <img src={pet} alt="Rio de Janeiro, RJ" className="option-icon" />
                Rio de Janeiro, RJ
              </div>
              <div className="option" onClick={() => {
                setSelectedOption2('Belo Horizonte, MG');
                setIsOpen2(false);
              }}>
                <img src={pet} alt="Belo Horizonte, MG" className="option-icon" />
                Belo Horizonte, MG
              </div>
              <div className="option" onClick={() => {
                setSelectedOption2('Salvador, BA');
                setIsOpen2(false);
              }}>
                <img src={pet} alt="Salvador, BA" className="option-icon" />
                Salvador, BA
              </div>
              <div className="option" onClick={() => {
                setSelectedOption2('Brasilia, DF');
                setIsOpen2(false);
              }}>
                <img src={pet} alt="Brasilia, DF" className="option-icon" />
                Brasilia, DF
              </div>
              <div className="option" onClick={() => {
                setSelectedOption2('Florianópolis, SC');
                setIsOpen2(false);
              }}>
                <img src={pet} alt="Florianópolis, SC" className="option-icon" />
                Florianópolis, SC
              </div>
            </div>
          )}
        </div>

        <button className="search-button">
          <img src={lupa} alt="house" className="svgImage1" />
          <span>BUSCAR</span>
        </button>

      </div>
      <div className="button-container">
        <button className="option-button">
          <img src={kit} alt="house" className="svgImage1" />
          Domicílio
        </button>
        <button className="option-button">
          <img src={not1} alt="house" className="svgImage1" />
          Online
        </button>
        <button className="option-button1">
          URGÊNCIA/EMERGÊNCIA
        </button>
      </div>
    </div>
  );
};

export default SearchArea;
