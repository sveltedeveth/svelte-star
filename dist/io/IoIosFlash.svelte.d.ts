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
export type IoIosFlashProps = typeof __propDef.props;
export type IoIosFlashEvents = typeof __propDef.events;
export type IoIosFlashSlots = typeof __propDef.slots;
export default class IoIosFlash extends SvelteComponentTyped<IoIosFlashProps, IoIosFlashEvents, IoIosFlashSlots> {
}
export {};
