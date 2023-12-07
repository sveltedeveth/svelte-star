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
export type GiHangingSignProps = typeof __propDef.props;
export type GiHangingSignEvents = typeof __propDef.events;
export type GiHangingSignSlots = typeof __propDef.slots;
export default class GiHangingSign extends SvelteComponentTyped<GiHangingSignProps, GiHangingSignEvents, GiHangingSignSlots> {
}
export {};
