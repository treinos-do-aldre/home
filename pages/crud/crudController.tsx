import { useContext } from 'react'

import { CrudContext } from 'context/CrudContext';
import ItemContent from './item';
import TagContent from './tag';
import { CrudControllerStyle } from './style'

const CrudController = () => {
    const { selectMenu, selectedMenu } = useContext(CrudContext);

    return (
        <CrudControllerStyle>
            {(selectedMenu === "item") &&
                <ItemContent />
            }
            {(selectedMenu === "tag") &&
                <TagContent />
            }
        </CrudControllerStyle>
    )
}

export default CrudController
