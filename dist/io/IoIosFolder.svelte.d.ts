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
export type IoIosFolderProps = typeof __propDef.props;
export type IoIosFolderEvents = typeof __propDef.events;
export type IoIosFolderSlots = typeof __propDef.slots;
export default class IoIosFolder extends SvelteComponentTyped<IoIosFolderProps, IoIosFolderEvents, IoIosFolderSlots> {
}
export {};
