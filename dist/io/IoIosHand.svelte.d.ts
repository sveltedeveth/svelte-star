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
export type IoIosHandProps = typeof __propDef.props;
export type IoIosHandEvents = typeof __propDef.events;
export type IoIosHandSlots = typeof __propDef.slots;
export default class IoIosHand extends SvelteComponentTyped<IoIosHandProps, IoIosHandEvents, IoIosHandSlots> {
}
export {};
