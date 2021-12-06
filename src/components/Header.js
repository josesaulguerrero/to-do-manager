//libraries and hooks
//components
//assets and styled components

export const Header = ({ className, children }) => {
   return (
      <header className={className} >
         {children}
      </header>
   );
};