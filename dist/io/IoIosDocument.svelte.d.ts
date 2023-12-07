import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IoIosDocumentProps = typeof __propDef.props;
export type IoIosDocumentEvents = typeof __propDef.events;
export type IoIosDocumentSlots = typeof __propDef.slots;
export default class IoIosDocument extends SvelteComponentTyped<IoIosDocumentProps, IoIosDocumentEvents, IoIosDocumentSlots> {
}
export {};
