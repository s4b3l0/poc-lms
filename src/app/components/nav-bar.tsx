import {Menubar} from "primereact/menubar";
import {MenuItem} from "primereact/menuitem";
import React from "react";



class NavComponent {
    items: MenuItem[] = [
        {
            label: 'home',
            icon: 'pi pi-fw pi-home',
            url: '/'
        },
        {
            label: 'dashboard',
            icon: 'pi pi-fw pi-home',
            url: '/dashboard'
        },
        {
            label: 'about',
            icon: 'pi pi-fw pi-info',
            url: '/about'
        }
    ];

    render() : React.ReactNode {

        return <Menubar model={this.items}/>;
    }
};

export default function NavBar() :React.ReactNode {
    return (
        new NavComponent().render()
    );
}