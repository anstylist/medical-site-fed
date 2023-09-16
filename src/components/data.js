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
