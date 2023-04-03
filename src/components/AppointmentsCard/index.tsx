import {MdLockClock} from 'react-icons/md'
import { Container } from './styles';

export interface IAppointmentsCardProps {
  userPick: string;
  customer: string;
  appointmentHour: string;
  isMorningOrIsAffternon?: boolean;
}

export const AppointmentsCard = (props: IAppointmentsCardProps) => {
  return (
    <Container>
      <div>
        <img src={props.userPick} alt="" />
        <span className='customer__name'>{props.customer}</span>
      </div>
      <div className='right__container'>
        <MdLockClock color='#FF9000'/>
        <span>{props.appointmentHour}</span>
      </div>
    </Container>
  )
}