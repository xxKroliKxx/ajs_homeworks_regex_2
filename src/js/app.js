export default function phoneFormat(phone) {
  const newPhone = phone.replace(/\D+/g, '');
  if (newPhone.length === 11 && !newPhone.startsWith(7)) {
    return `+7${newPhone.substring(1)}`;
  }
  return `+${newPhone}`;
}
