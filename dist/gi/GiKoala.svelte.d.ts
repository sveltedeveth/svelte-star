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
export type GiKoalaProps = typeof __propDef.props;
export type GiKoalaEvents = typeof __propDef.events;
export type GiKoalaSlots = typeof __propDef.slots;
export default class GiKoala extends SvelteComponentTyped<GiKoalaProps, GiKoalaEvents, GiKoalaSlots> {
}
export {};
