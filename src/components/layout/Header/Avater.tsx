export const AvatarPanel: React.FC = () => {
  return (
    <div className="flex gap-2.5 items-center self-stretch py-2 pr-2 pl-4 rounded-lg bg-bgDark-900">
      <img
        loading="lazy"
        srcSet="..."
        src="https://avatars.githubusercontent.com/u/34406937?v=4"
        className="shrink-0 self-stretch w-8 border border-red-300 border-solid aspect-square"
      />
      <div className="self-stretch my-auto">Olakunle Te...</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0a1019cf3715d86cb4a4131fabc3778d768b5286166cb65a241e01bd9950d7c?"
        className="shrink-0 self-stretch my-auto w-6 aspect-square"
      />
    </div>
  )
}