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
export type GiDangoProps = typeof __propDef.props;
export type GiDangoEvents = typeof __propDef.events;
export type GiDangoSlots = typeof __propDef.slots;
export default class GiDango extends SvelteComponentTyped<GiDangoProps, GiDangoEvents, GiDangoSlots> {
}
export {};
