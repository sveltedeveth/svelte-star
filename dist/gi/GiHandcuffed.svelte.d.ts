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
export type GiHandcuffedProps = typeof __propDef.props;
export type GiHandcuffedEvents = typeof __propDef.events;
export type GiHandcuffedSlots = typeof __propDef.slots;
export default class GiHandcuffed extends SvelteComponentTyped<GiHandcuffedProps, GiHandcuffedEvents, GiHandcuffedSlots> {
}
export {};
