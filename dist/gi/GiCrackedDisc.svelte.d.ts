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
export type GiCrackedDiscProps = typeof __propDef.props;
export type GiCrackedDiscEvents = typeof __propDef.events;
export type GiCrackedDiscSlots = typeof __propDef.slots;
export default class GiCrackedDisc extends SvelteComponentTyped<GiCrackedDiscProps, GiCrackedDiscEvents, GiCrackedDiscSlots> {
}
export {};
