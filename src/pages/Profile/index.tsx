import { Fragment, useCallback, useRef, useState } from "react";
import { Container, ProfilePictureContainer, ProfileContent, InputsContainer, PhotoInput, Image } from "./styles"
import { TypographyComponent } from "../../components/Typography";
import {toast} from 'react-toastify';

import { useAuth } from "../../contexts/auth";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import {MdPhotoCamera} from 'react-icons/md'
import api from '../../http/api/api'
import { Button } from "../../components/Button";
import {useNavigate} from 'react-router-dom';

import emptyAvatar from '../../assets/emptyAvatar.png'
import * as yup from 'yup'

const Profile = () => {
  const navigate = useNavigate();

  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);

  const {user, updateUserPhoto, updateUser} = useAuth();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState<string>(user.name || '');
  const [email, setEmail] = useState<string>(user.email || '');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState(false)

  const handleUpdateProfile = useCallback(async () => {
    try {
      setLoading(true)
      if (newPassword !== confirmPassword) {
        toast.error('Usuário ou senha incorreto, tente novamente', {
          style: {
            backgroundColor: "#28262E",
            color: "#666360",
          },
          hideProgressBar: true,
          icon: false,        
        })
        return;
      }

      const schema = yup.object().shape({
        name: yup.string(),
        email: yup.string().required(),
        oldPassword: yup.string().required(),
        newPassword: yup.string().required(),
        confirmPassword: yup.string().required()
      })

      await schema.validate({
        name,
        email,
        newPassword,
        oldPassword,
        confirmPassword
      }, {
        abortEarly: false
      })
  
      const response = await api.put(`/users/${user.id}`, {
        name,
        email,
        oldPassword,
        password: newPassword,
      });
 
      if (updateUser && response.data) {
        updateUser(response.data);
      }
  
      toast.success('Dados atualizados com sucesso!')
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = err.message;

        console.log(err);
        toast.error(errors)
      } else {
        setLoading(false)
        toast.error('Aconteceu algum erro ao tentar cadastrar, por favor, tente novamente!')
      }
    }
  }, [user, name, email, oldPassword, newPassword, confirmPassword]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    } else {
      setPreview(null);
    }
  };

  const handlePatchProfile = useCallback(async () => {
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('photo', selectedFile);
  
        const response = await api.patch(`/users/${user.id}/photo`, formData);
        if (response.data.photo) {
          const newPhotoUrl = `http://localhost:3000/uploads${response.data.photo}`;
          setUserImage(newPhotoUrl);
          if (updateUserPhoto) {
            updateUserPhoto(newPhotoUrl);
            navigate('/dashboard');
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [selectedFile]);

  // apply dumb function for load the two requests
  const handleConfirmChanges = async () => {
    await handlePatchProfile();
    await handleUpdateProfile();
  };
  
  return (
    <Fragment>
      <Header isHeaderOnProfile={true}/>
      <Container>
        <ProfilePictureContainer>
          <PhotoInput>
          <Image
              src={
                preview
                  ? preview
                  : userImage
                  ? userImage
                  : user.photo
                  ? `http://localhost:3000/uploads${user.photo}`
                  : `${emptyAvatar}`
                }
            />
            <button onClick={() => fileInputRef.current?.click()}>
              <MdPhotoCamera color="#000" size={20}/>
            </button>
            <input ref={fileInputRef} type="file" style={{ visibility: 'hidden' }}  onChange={handleFileChange}/>
          </PhotoInput>
        </ProfilePictureContainer>

        <ProfileContent>
          <TypographyComponent 
            fontVariant="span"
            color="white"
            size={20}
            lineHeight={26}
            fontWeight={500}
            marginBottom={24}
          >
            Meu perfil
          </TypographyComponent>

          <InputsContainer>
          <Input 
              placeholder={user.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input 
              placeholder={user.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputsContainer>

          <InputsContainer>
          <Input
              placeholder='Senha atual'
              type='password'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <Input
              placeholder='Nova senha'
              type='password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              placeholder='Confirmar senha'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputsContainer>
        </ProfileContent>
        <Button onClick={handleConfirmChanges} mt={24}>
          {loading ? 'Carregando...' : 'Confirmar mudanças'}
        </Button>
      </Container>
    </Fragment>
  )
}

export default Profile;