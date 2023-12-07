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
export type GiGuitarProps = typeof __propDef.props;
export type GiGuitarEvents = typeof __propDef.events;
export type GiGuitarSlots = typeof __propDef.slots;
export default class GiGuitar extends SvelteComponentTyped<GiGuitarProps, GiGuitarEvents, GiGuitarSlots> {
}
export {};
