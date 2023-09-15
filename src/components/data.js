export const dataDepartament = () => {
  const departament = [

    { id: 1, name: 'Dental service', link: '#', icon: 'dental', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 2, name: 'Therapy departament', link: '#', icon: 'therapy', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 3, name: 'Neurology', link: '#', icon: 'brain', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 4, name: 'Emergency departament', link: '#', icon: 'ambulance', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 5, name: 'Orthopedic', link: '#', icon: 'brain', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 6, name: 'Diagnostic departament', link: '#', icon: 'medicaldrip', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 7, name: 'Gastroenterologist', link: '#', icon: 'stomach', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 8, name: 'Cardiology', link: '#', icon: 'heartorgan', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 9, name: 'Ophthalmology', link: '#', icon: 'templareye', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 10, name: 'Plastic surgeons', link: '#', icon: 'abdominal', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 11, name: 'Pneumology', link: '#', icon: 'lungs', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 12, name: 'Oncology', link: '#', icon: 'ribbon', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' }
  ]
  return departament
}
export const dataLink = () => {
  const link = [
    { id: 1, name: 'About', link: '#' },
    { id: 2, name: 'Find a doctor', link: '#' },
    { id: 3, name: 'Patients and visitors', link: '#' },
    { id: 4, name: 'International service', link: '#' },
    { id: 5, name: 'Terms and conditions', link: '#' },
    { id: 6, name: 'Privacy policy', link: '#' }
  ]
  return link
}

export const dataTimetable = () => {
  const timetable = [
    { id: 0, doctor: { id: 1, name: 'Crystal Fitzhugh', specialty: 'Neurology' }, day: 'Sunday', start_time: '09:00', end_time: '12:00' },
    { id: 1, doctor: { id: 2, name: 'Perry Barkley', specialty: 'Orthopedic' }, day: 'Sunday', start_time: '12:00', end_time: '15:00' },
    { id: 2, doctor: { id: 3, name: 'Juan Perez', specialty: 'Ophthalmology' }, day: 'Sunday', start_time: '15:00', end_time: '18:00' },
    { id: 3, doctor: { id: 4, name: 'Gail Parrish', specialty: 'Cardiology' }, day: 'Sunday', start_time: '18:00', end_time: '21:00' },
    { id: 4, doctor: { id: 5, name: 'Helen Scheffler', specialty: 'Gastroenterologist' }, day: 'Sunday', start_time: '21:00', end_time: '24:00' },
    { id: 5, doctor: { id: 1, name: 'Crystal Fitzhugh', specialty: 'Neurology' }, day: 'Monday', start_time: '09:00', end_time: '12:00' },
    { id: 6, doctor: { id: 2, name: 'Perry Barkley', specialty: 'Orthopedic' }, day: 'Monday', start_time: '12:00', end_time: '15:00' },
    { id: 7, doctor: { id: 3, name: 'Juan Perez', specialty: 'Orthopedic' }, day: 'Monday', start_time: '15:00', end_time: '18:00' },
    { id: 8, doctor: { id: 4, name: 'Gail Parrish', specialty: 'Cardiology' }, day: 'Monday', start_time: '18:00', end_time: '21:00' },
    { id: 9, doctor: { id: 5, name: 'Helen Scheffler', specialty: 'Gastroenterologist' }, day: 'Tuesday', start_time: '21:00', end_time: '24:00' },
    { id: 10, doctor: { id: 1, name: 'Crystal Fitzhugh', specialty: 'Neurology' }, day: 'Tuesday', start_time: '09:00', end_time: '12:00' },
    { id: 11, doctor: { id: 2, name: 'Perry Barkley', specialty: 'Orthopedic' }, day: 'Tuesday', start_time: '12:00', end_time: '15:00' },
    { id: 12, doctor: { id: 3, name: 'Juan Perez', specialty: 'Ophthalmology' }, day: 'Wednesday', start_time: '9:00', end_time: '12:00' },
    { id: 13, doctor: { id: 4, name: 'Gail Parrish', specialty: 'Cardiology' }, day: 'Wednesday', start_time: '15:00', end_time: '18:00' },
    { id: 14, doctor: { id: 5, name: 'Helen Scheffler', specialty: 'Gastroenterologist' }, day: 'Wednesday', start_time: '21:00', end_time: '24:00' },
    { id: 15, doctor: { id: 1, name: 'Crystal Fitzhugh', specialty: 'Neurology' }, day: 'Thursday', start_time: '09:00', end_time: '12:00' },
    { id: 16, doctor: { id: 2, name: 'Perry Barkley', specialty: 'Orthopedic' }, day: 'Thursday', start_time: '12:00', end_time: '15:00' },
    { id: 17, doctor: { id: 3, name: 'Juan Perez', specialty: 'Ophthalmology' }, day: 'Thursday', start_time: '18:00', end_time: '21:00' },
    { id: 18, doctor: { id: 4, name: 'Gail Parrish', specialty: 'Cardiology' }, day: 'Friday', start_time: '15:00', end_time: '18:00' },
    { id: 19, doctor: { id: 5, name: 'Helen Scheffler', specialty: 'Gastroenterologist' }, day: 'Friday', start_time: '21:00', end_time: '24:00' },
    { id: 20, doctor: { id: 2, name: 'Perry Barkley', specialty: 'Orthopedic' }, day: 'Saturday', start_time: '12:00', end_time: '15:00' },
    { id: 21, doctor: { id: 3, name: 'Juan Perez', specialty: 'Ophthalmology' }, day: 'Saturday', start_time: '9:00', end_time: '12:00' },
    { id: 22, doctor: { id: 4, name: 'Gail Parrish', specialty: 'Cardiology' }, day: 'Saturday', start_time: '15:00', end_time: '18:00' },
    { id: 23, doctor: { id: 6, name: 'Maria Gomez', specialty: 'Gastroenterologist' }, day: 'Thursday', start_time: '21:00', end_time: '24:00' },
    { id: 24, doctor: { id: 6, name: 'Maria Gomez', specialty: 'Gastroenterologist' }, day: 'Sunday', start_time: '21:00', end_time: '24:00' },
    { id: 25, doctor: { id: 7, name: 'Mattie Delgado', specialty: 'Ophthalmology' }, day: 'Monday', start_time: '21:00', end_time: '24:00' }
  ]
  return timetable
}

export const dataCountries = () => {
  const countries = [
    { id: 'clmiy14yb0002n238adlw2rkt', name: 'Peru' },
    { id: 'clmiy14yc0003n238m0j96505', name: 'Colombia' }
  ]
  return countries
}

export const dataRh = () => {
  const rh = [
    { id: 1, name: 'A+' },
    { id: 2, name: 'A-' },
    { id: 3, name: 'B+' },
    { id: 4, name: 'B-' },
    { id: 5, name: 'AB+' },
    { id: 6, name: 'AB-' },
    { id: 7, name: 'O+' },
    { id: 8, name: 'O-' }
  ]
  return rh
}

export const dataHospitals = () => {
  const hospitals = [
    { id: 1, name: 'Augu Hospital' },
    { id: 2, name: 'Fria Hospital' },
    { id: 3, name: 'Kadi Hospital' },
    { id: 4, name: 'Leve Hospital' },
    { id: 5, name: 'Mebid Hospital' },
    { id: 6, name: 'Qyee Hospital' },
    { id: 7, name: 'Spix Hospital' },
    { id: 8, name: 'Tinzer Hospital' }
  ]
  return hospitals
}

export const dataDoctor = () => {
  const doctors = [

    { id: 1, name: 'Kasey burt' },
    { id: 2, name: 'Lyle Kauffman' },
    { id: 3, name: 'Larry lin' },
    { id: 4, name: 'Victoria roach' },
    { id: 5, name: 'David collins' }
  ]
  return doctors
}

export const dataAppointments = () => {
  const appointments = [
    {
      id: 0,
      patient: {
        name: 'Ana García',
        email: 'ana@example.com',
        phone: '123-456-7890',
        nationality: 'Mexican',
        date_birth: '1985-03-15',
        country: 'Mexico',
        sex: 'Female'
      },
      doctor: {
        id: 123,
        name: 'Juan Rodriguez',
        specialty: 'Cardiology',
        image: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393389/medical-site/doctors-8_cvetjm.jpg'
      },
      hospital: 'City Medical Center',
      date_appointment: '2023-08-15',
      message: 'Experiencing occasional chest pain and shortness of breathExperiencing occasional chest pain and shortness of breath.Experiencing occasional chest pain and shortness of breath..Experiencing occasional chest pain and shortness of breath.',
      state: 'PENDING'
    },
    {
      id: 1,
      patient: {
        name: 'Carlos Martinez',
        email: 'carlos@example.com',
        phone: '987-654-3210',
        nationality: 'Spanish',
        date_birth: '1990-06-20',
        country: 'Spain',
        sex: 'Male'
      },
      doctor: {
        id: 234,
        name: 'Maria Sanchez',
        specialty: 'Emergency departament',
        image: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393391/medical-site/doctors-6_pm77j9.jpg'
      },
      hospital: 'City General Hospital',
      date_appointment: '2023-09-10',
      message: 'Annual check-up and blood tests.',
      state: 'PENDING'
    },
    {
      id: 2,
      patient: {
        name: 'Emily Johnson',
        email: 'emily@example.com',
        phone: '555-123-4567',
        nationality: 'American',
        date_birth: '1988-11-02',
        country: 'United States',
        sex: 'Female'
      },
      doctor: {
        id: 345,
        name: 'Michael Brown',
        specialty: 'Dermatology',
        image: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393390/medical-site/doctors-5_w2yhmu.jpg'
      },
      hospital: 'Sunset Medical Center',
      date_appointment: '2023-08-25',
      message: 'Skin rash and itching on arms and legs.',
      state: 'PENDING'
    },
    {
      id: 3,
      patient: {
        name: 'Luis Hernandez',
        email: 'luis@example.com',
        phone: '222-999-8888',
        nationality: 'Mexican',
        date_birth: '1975-02-10',
        country: 'Mexico',
        sex: 'Male'
      },
      doctor: {
        id: 456,
        name: 'Laura Gomez',
        specialty: 'Orthopedics',
        image: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393389/medical-site/doctors-7_cddw1a.jpg'
      },
      hospital: 'Greenfield Ortho Clinic',
      date_appointment: '2023-08-20',
      message: 'Knee pain and difficulty walking.',
      state: 'PENDING'
    },
    {
      id: 4,
      patient: {
        name: 'Sophie Dubois',
        email: 'sophie@example.com',
        phone: '123-987-5555',
        nationality: 'French',
        date_birth: '1995-09-18',
        country: 'France',
        sex: 'Female'
      },
      doctor: {
        id: 567,
        name: 'David Lee',
        specialty: 'Ophthalmology',
        image: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393389/medical-site/doctors-1_oqluuf.jpg'
      },
      hospital: 'VisionCare Clinic',
      date_appointment: '2023-09-05',
      message: 'Blurry vision and eye strain.',
      state: 'PENDING'
    },
    {
      id: 5,
      patient: {
        name: 'Raj Patel',
        email: 'raj@example.com',
        phone: '777-555-1111',
        nationality: 'Indian',
        date_birth: '1982-04-30',
        country: 'India',
        sex: 'Male'
      },
      doctor: {
        id: 678,
        name: 'Priya Sharma',
        specialty: 'Gastroenterology',
        image: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393389/medical-site/doctors-2_xoxxld.jpg'
      },
      hospital: 'Digestive Health Clinic',
      date_appointment: '2023-08-18',
      message: 'Stomach pain and acid reflux.',
      state: 'PENDING'
    },
    {
      id: 6,
      patient: {
        name: 'Isabella Gonzalez',
        email: 'isabella@example.com',
        phone: '444-777-2222',
        nationality: 'Mexican',
        date_birth: '2001-12-08',
        country: 'Mexico',
        sex: 'Female'
      },
      doctor: {
        id: 789,
        name: 'Ricardo Martinez',
        specialty: 'Pediatrics',
        image: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393388/medical-site/doctors-4_er4fly.jpg'
      },
      hospital: 'Sunshine Pediatric Clinic',
      date_appointment: '2023-09-12',
      message: 'Fever and persistent cough in child.',
      state: 'CANCELLED'
    },
    {
      id: 7,
      patient: {
        name: 'John Smith',
        email: 'john@example.com',
        phone: '666-444-7777',
        nationality: 'British',
        date_birth: '1970-07-12',
        country: 'United Kingdom',
        sex: 'Male'
      },
      doctor: {
        id: 890,
        name: 'Emma Wilson',
        specialty: 'Rheumatology',
        image: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393389/medical-site/doctors-2_xoxxld.jpg'
      },
      hospital: 'Arthritis Care Center',
      date_appointment: '2023-08-30',
      message: 'Joint pain and stiffness in hands.',
      state: 'CANCELLED'
    },
    {
      id: 8,
      patient: {
        name: 'Maria Lopez',
        email: 'maria@example.com',
        phone: '999-111-3333',
        nationality: 'Mexican',
        date_birth: '1989-01-25',
        country: 'Mexico',
        sex: 'Female'
      },
      doctor: {
        id: 901,
        name: 'Alejandro Ramirez',
        specialty: 'Gynecology',
        image: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393388/medical-site/doctors-3_tpteqa.jpg'
      },
      hospital: "Women's Health Clinic",
      date_appointment: '2023-09-08',
      message: 'Irregular menstrual cycles and pelvic pain.',
      state: 'DONE'
    },
    {
      id: 9,
      patient: {
        name: 'Mohammed Ali',
        email: 'mohammed@example.com',
        phone: '777-222-8888',
        nationality: 'Egyptian',
        date_birth: '1978-08-05',
        country: 'Egypt',
        sex: 'Male'
      },
      doctor: {
        id: 1234,
        name: 'Aisha Khan',
        specialty: 'Endocrinology',
        image: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393389/medical-site/doctors-2_xoxxld.jpg'
      },
      hospital: 'Hormone Health Center',
      date_appointment: '2023-09-02',
      message: 'Fatigue and unexplained weight gain.',
      state: 'DONE'
    }
  ]
  return appointments
}
