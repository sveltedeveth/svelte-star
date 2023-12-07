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
export type GiCannonProps = typeof __propDef.props;
export type GiCannonEvents = typeof __propDef.events;
export type GiCannonSlots = typeof __propDef.slots;
export default class GiCannon extends SvelteComponentTyped<GiCannonProps, GiCannonEvents, GiCannonSlots> {
}
export {};
