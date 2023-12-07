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
export type FaGuitarProps = typeof __propDef.props;
export type FaGuitarEvents = typeof __propDef.events;
export type FaGuitarSlots = typeof __propDef.slots;
export default class FaGuitar extends SvelteComponentTyped<FaGuitarProps, FaGuitarEvents, FaGuitarSlots> {
}
export {};
