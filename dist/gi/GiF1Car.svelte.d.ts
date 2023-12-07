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
export type GiF1CarProps = typeof __propDef.props;
export type GiF1CarEvents = typeof __propDef.events;
export type GiF1CarSlots = typeof __propDef.slots;
export default class GiF1Car extends SvelteComponentTyped<GiF1CarProps, GiF1CarEvents, GiF1CarSlots> {
}
export {};
