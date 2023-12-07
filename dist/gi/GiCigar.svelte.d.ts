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
export type GiCigarProps = typeof __propDef.props;
export type GiCigarEvents = typeof __propDef.events;
export type GiCigarSlots = typeof __propDef.slots;
export default class GiCigar extends SvelteComponentTyped<GiCigarProps, GiCigarEvents, GiCigarSlots> {
}
export {};
