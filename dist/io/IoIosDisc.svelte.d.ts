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
export type IoIosDiscProps = typeof __propDef.props;
export type IoIosDiscEvents = typeof __propDef.events;
export type IoIosDiscSlots = typeof __propDef.slots;
export default class IoIosDisc extends SvelteComponentTyped<IoIosDiscProps, IoIosDiscEvents, IoIosDiscSlots> {
}
export {};
