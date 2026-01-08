import { toast } from "react-toastify";




export const loadInstalledList = () => {
    try {
        const data = localStorage.getItem('Installedlist');
        return data? JSON.parse(data) : [];
    }
    catch(err) {
        console.log(err);
        return [];
    }
}


export const updateList = (app) => {
    const InstalledList = loadInstalledList();

    try {
        const isDuplicate = InstalledList.some(p => p.id === app.id);
        if(isDuplicate) return toast.error("Already Installed");
        const updatedInstalledList = [...InstalledList, app];
        localStorage.setItem('Installedlist', JSON.stringify(updatedInstalledList));
    }
    catch(err) {
        console.log(err);
    }
}

export const removeFromInstalledList = id => {
    const InstalledList = loadInstalledList();

    try {
        const updateInstalledlist = InstalledList.filter(p => p.id !== id);
        localStorage.setItem('Installedlist', JSON.stringify(updateInstalledlist));
    }
    catch(err) {
        console.log(err);
    }
}