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
export type IoIosAttachProps = typeof __propDef.props;
export type IoIosAttachEvents = typeof __propDef.events;
export type IoIosAttachSlots = typeof __propDef.slots;
export default class IoIosAttach extends SvelteComponentTyped<IoIosAttachProps, IoIosAttachEvents, IoIosAttachSlots> {
}
export {};
