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
export type GiObeliskProps = typeof __propDef.props;
export type GiObeliskEvents = typeof __propDef.events;
export type GiObeliskSlots = typeof __propDef.slots;
export default class GiObelisk extends SvelteComponentTyped<GiObeliskProps, GiObeliskEvents, GiObeliskSlots> {
}
export {};
