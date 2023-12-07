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
export type IoIosHammerProps = typeof __propDef.props;
export type IoIosHammerEvents = typeof __propDef.events;
export type IoIosHammerSlots = typeof __propDef.slots;
export default class IoIosHammer extends SvelteComponentTyped<IoIosHammerProps, IoIosHammerEvents, IoIosHammerSlots> {
}
export {};
