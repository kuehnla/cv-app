export default function Field({ label, placeholder, key, className }) {
  return (
    <div>
      <label htmlFor={key}> {label} </label>
      <input type="text" name={key} className={className} placeholder={placeholder} />
    </div>
  );
}