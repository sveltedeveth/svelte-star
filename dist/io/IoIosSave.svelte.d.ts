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
export type IoIosSaveProps = typeof __propDef.props;
export type IoIosSaveEvents = typeof __propDef.events;
export type IoIosSaveSlots = typeof __propDef.slots;
export default class IoIosSave extends SvelteComponentTyped<IoIosSaveProps, IoIosSaveEvents, IoIosSaveSlots> {
}
export {};
