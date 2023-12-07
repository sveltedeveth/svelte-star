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
export type GiQuicksandProps = typeof __propDef.props;
export type GiQuicksandEvents = typeof __propDef.events;
export type GiQuicksandSlots = typeof __propDef.slots;
export default class GiQuicksand extends SvelteComponentTyped<GiQuicksandProps, GiQuicksandEvents, GiQuicksandSlots> {
}
export {};
