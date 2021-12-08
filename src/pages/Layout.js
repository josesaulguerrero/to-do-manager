//libraries and hooks
import React from "react";
//components
//assets and styled components
import { AppLayout } from "@styles/AppLayout";
import { Background } from "@styles/Background";
import { Header } from "@components/Header";
import { Logo } from "@components/Logo";
import { ThemeToggler } from "@components/ThemeToggler";
import { InputBar } from "@components/InputBar";
import { List } from "@components/List";
import { ListFooter } from "@components/ListFooter";
import { Instruction } from "@components/Instruction";
// context

export const Layout = ({ children }) => {
   return (
      <AppLayout>
         <Background />
         <Header>
            <Logo />
            <ThemeToggler />
         </Header>
         <InputBar />
         <List>
            {children}
            <ListFooter />
         </List>
         <Instruction />
      </AppLayout>
   );
};