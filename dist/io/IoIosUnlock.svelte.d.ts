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
export type IoIosUnlockProps = typeof __propDef.props;
export type IoIosUnlockEvents = typeof __propDef.events;
export type IoIosUnlockSlots = typeof __propDef.slots;
export default class IoIosUnlock extends SvelteComponentTyped<IoIosUnlockProps, IoIosUnlockEvents, IoIosUnlockSlots> {
}
export {};
