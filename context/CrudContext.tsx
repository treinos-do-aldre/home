import { createContext, useEffect, useState } from 'react'
import { Theme, DarkTheme } from 'styles/theme'
import { ThemeProps } from 'styles/theme'
import TestesService from '@services/testes'

export const CrudContext = createContext({} as {
    selectMenu: (menu: "item" | "tag") => void,
    selectedMenu: string,
    items: any[],
    tags: any[],
    loading: boolean,
    refreshItems: (load?: boolean) => void,
    refreshTags: (load?: boolean) => void,
    actionId: number,
    setActionId: (actionId: number) => void
})

export function CrudProvider({ children }: any) {
    const [tags, setTags] = useState<any[]>([]);
    const [items, setItems] = useState<any[]>([]);
    const [selectedMenu, selectMenu] = useState<"item" | "tag">("item");
    const [stage, setStage] = useState<"table" | "edit" | "new">("table");
    const [loading, setLoading] = useState<boolean>(false);
    const [actionId, setActionId] = useState(-1);
    const service = TestesService();

    const refreshItems = async (load: boolean = false) => {
        console.log(load)
        if (load) { setItems([]) };
        setLoading(load);
        const res = await service.customRequest("item", "get", "", {});
        setItems(res.data);
        setLoading(false);
        setActionId(-1)
    }

    const refreshTags = async (load: boolean = false) => {
        if (load) { setTags([]) };
        setLoading(load);
        const res = await service.customRequest("tag", "get", "", {});
        setTags(res.data);
        setLoading(false);
        setActionId(-1)
    }

    useEffect(() => {
        if (selectedMenu && (stage === "table")) {
            switch (selectedMenu) {
                case "item":
                    refreshItems(true);
                    break;
                case "tag":
                    refreshTags(true);
                    break;
                default:
                    break;
            }
        }
    }, [selectedMenu, stage])


    return (
        <CrudContext.Provider value={{
            selectedMenu,
            selectMenu,
            items,
            tags,
            loading,
            refreshItems,
            refreshTags,
            actionId,
            setActionId
        }}>
            {children}
        </CrudContext.Provider>
    )
}
