import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section, ScrollToTopOnMount } from 'react-fullpage';
import Questions from './Questions';
import swal from 'sweetalert';
import './static/style';

// => in the render() method of your app
const data = [
  {
    title: 'Vamos comenzar con el nombre del niñ@? *',
    id: 'nombre__nin',
    link: 'edad_nin',
    i: 1
  },
  {
    title: 'Que edad tiene? *',
    id: 'edad_nin',
    link: 'fam_nin',
    i: 2
  },
  {
    title: '¿Cómo te llamas?) *',
    id: 'fam_nin',
    link: 'correo_nin',
    i: 3
  },
  {
    title: 'Nos podrías proporcionar un correo?) *',
    id: 'correo_nin',
    link: 'tel_nin',
    i: 4
  },
  {
    title: 'Nos podrías proporcionar un teléfono?) *',
    id: 'tel_nin',
    link: 'hobby_nin',
    i: 5
  },
  {
    title: 'Que hobbies tiene el nin@? *',
    id: 'hobby_nin',
    link: 'rgpd_nin',
    i: 6
  },
  {
    title: 'Escribe "Si" para aceptar la ley de protección de datos, y puedas participar) *',
    id: 'rgpd_nin',
    link: '',
    i: 7
  }
]

const anchorFunc = (anchor_data) => { // return array of anchor tags
  return anchor_data.map((item) => (
    item.id
  ))
}

export default function FullPage() {

  let options = {
    sectionClassName: 'section',
    anchors: anchorFunc(data),
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: '50px',
    sectionPaddingBottom: '50px',
    arrowNavigation: false
  };

  const [obj, setObj] = useState({});


  const inputDataHandler = (name, value) => {
    console.log(name, value)
    console.log(obj)
    setObj({
      ...obj,
      [name]: value
    });
  }

  const submitBtnHandler = () => {
    console.log(obj);
    //API call here
    swal({ //show success message on completion
      title: "",
      text: "Thanks for completing the survey !!",
      icon: "success",
      dangerMode: false,
    })
  }

  return (
    <div>
      <ScrollToTopOnMount />
      <SectionsContainer {...options}>
        {
          data.map((item, i) => {
            return (
              <Section key={i} >
                <div>
                  <header className="App-header">
                    <Questions
                      item={item}
                      index={i}
                      isSubmit={i == (data.length - 1) ? true : false}
                      inputDataHandler={inputDataHandler}
                      submitBtnHandler={submitBtnHandler}
                    />
                  </header>
                </div>
              </Section>
            )
          })
        }
      </SectionsContainer>
    </div>
  );
}

