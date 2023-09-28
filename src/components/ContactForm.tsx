import styled from "styled-components";
import { useForm } from 'react-hook-form'
import { useStateContext } from '../context/ContextProvider';
import { useRef, useState, useEffect, SetStateAction } from 'react';
import emailjs from '@emailjs/browser';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

import TextField from '@mui/material/TextField';
import Spinner from "./Spinner";
import Notification from "./Notification";
import Flex from "./StyledComponents/FlexStyled";

const Section = styled.section`
  background-color: inherit;
  width: 100%;
//   background-image: linear-gradient(#008080, #fff);
`

const Img = styled.img`
  width: 20%;
  margin: 0 auto;
  border-radius: 50%;
`

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: #1a374d;
`

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  padding: 1rem;
  margin-top: 60px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: rgba(255,255,255,0.8);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7); 

  @media (max-width: 992px) {
    width: 100%;
    margin: auto;
  }
`

const Button = styled.button`
  color: #fff;
  border: 1px solid #fff;
  // background-color: #1a374d;
  background-color: var(--red);
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(27, 55, 77, 0.7); 
  transition: 0.25s ease all;

  &:hover {
    background-color: #fff;
    color: #1a374d;
    border-color: #1a374d;
    color: var(--red);
    border-color: var(--red);
  }
`

const ContactForm = () => {
  // You can use this after handleSubmit and before formState: reset, watch, 
  const {register, handleSubmit, formState: { errors }} = useForm({mode: 'onChange'})

  const [sending, setSending] = useState(false)
  const {setActive} = useStateContext()
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<SetStateAction<null | boolean>>(null);

  useEffect(() => {
    if(sending) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'visible'
    }
  }, [sending])

  const registerOptions = {
    name: {
        required: 'Obavezno polje.',
        minLength: {
            value: 3,
            message: 'Ime mora biti minimum 3 karaktera.'
        }
    },
    email: {required: 'Obavezno polje.'},
    message: {
        required: 'Obavezno polje.',
        minLength: {
            value: 20,
            message: 'Poruka mora biti minumum 20 karaktera'
        },
        maxLength: {
            value: 1000,
            message: 'Maksimalno 1000 karaktera.'
        }
    }
  }

  const handleError = (errors: any) => {console.log(errors)}

  const handleMessage = () => {
    setSending(true);
    
    if (formRef.current) {
      emailjs.sendForm('service_h2f12xb', 'template_rgj08vb', formRef.current, 'UWirvxxXyA94uge89')
        .then((result) => {
          console.log(result.text);
          setSuccess(true);
          formRef.current?.reset(); // Add optional chaining to avoid potential null error
          setSending(false);
        }, (error) => {
          console.log(error.text);
          setSuccess(false);
          setSending(false);
        });
    }
  }
  

  useEffect(() => {
    // Remove notification after 4sec
    setTimeout(() => {
      setSuccess(false)
    }, 4000)

    const contactElement = document.getElementById('contact');
    const id = contactElement ? contactElement.id : null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting && setActive(id);
      },
      {
        rootMargin: "0px",
        threshold: 0.5 // Change this threshold value as per your requirement
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [success]);

  return (
    <Flex>

      <Section id="contact" ref={ref}>
          <AnimationOnScroll animateIn="animate__fadeIn">
              <Form ref={formRef} onSubmit={handleSubmit(handleMessage, handleError)}>
                  <Img src="./images/icon/icon_contact.jpg" alt="icon tool man" />
                  <Title>Pošalji poruku</Title>
                
                  <TextField
                          fullWidth
                          variant="outlined"
                          label="Ime"
                          error={!!errors?.name}
                          helperText={errors?.name && <>{errors.name.message}</>}
                          id="name"
                          {...register('name', registerOptions.name)}
                          style={{marginBottom: '1rem'}}
                      />
                  <TextField
                          fullWidth
                          variant="outlined"
                          label="Email"
                          error={!!errors?.email}
                          helperText={errors?.email && <>{errors.email.message}</>}
                          id="email"
                          type="email"
                          {...register('email', registerOptions.email)}
                          style={{marginBottom: '1rem'}}

                      />
                  <TextField
                          fullWidth
                          variant='outlined'
                          label="Poruka"
                          error={!!errors?.message}
                          helperText={errors?.message && <>{errors.message.message}</>}
                          id="message"
                          multiline
                          rows={4}
                          inputProps={{
                              style: {
                                  whiteSpace: 'pre-wrap'
                              }
                          }}
                          {...register('message', registerOptions.message)}
                          style={{marginBottom: '1rem'}}
                      />
                  
                  <Button type="submit"><FontAwesomeIcon icon={faScrewdriverWrench} size="lg" />&nbsp;&nbsp;Pošalji</Button>
              </Form>
          </AnimationOnScroll>
        {/* While sending data show Spinner and prevent user to do anything! */}
        {sending && <Spinner />}
        {/* Show message is data is send with success */}
        {success &&  <Notification />}
      </Section>
    </Flex>
  );
}

export default ContactForm;