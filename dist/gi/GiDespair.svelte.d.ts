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
export type GiDespairProps = typeof __propDef.props;
export type GiDespairEvents = typeof __propDef.events;
export type GiDespairSlots = typeof __propDef.slots;
export default class GiDespair extends SvelteComponentTyped<GiDespairProps, GiDespairEvents, GiDespairSlots> {
}
export {};
