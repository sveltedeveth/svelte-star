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
export type IoIosLockProps = typeof __propDef.props;
export type IoIosLockEvents = typeof __propDef.events;
export type IoIosLockSlots = typeof __propDef.slots;
export default class IoIosLock extends SvelteComponentTyped<IoIosLockProps, IoIosLockEvents, IoIosLockSlots> {
}
export {};
