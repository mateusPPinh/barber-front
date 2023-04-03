import { Fragment, useCallback, useRef, useState } from "react";
import { Container, ProfilePictureContainer, ProfileContent, InputsContainer, PhotoInput, Image } from "./styles"
import { TypographyComponent } from "../../components/Typography";

import { useAuth } from "../../contexts/auth";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import {MdPhotoCamera} from 'react-icons/md'
import api from '../../http/api/api'
import { Button } from "../../components/Button";
import {useNavigate} from 'react-router-dom';

import emptyAvatar from '../../assets/emptyAvatar.png'

const Profile = () => {
  const navigate = useNavigate();

  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);

  const {user, updateUserPhoto} = useAuth();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
            <Input placeholder={user.name} />
            <Input placeholder={user.email} />
          </InputsContainer>
        </ProfileContent>
        <Button onClick={handlePatchProfile}>Confirmar mudanças</Button>
      </Container>
    </Fragment>
  )
}

export default Profile;