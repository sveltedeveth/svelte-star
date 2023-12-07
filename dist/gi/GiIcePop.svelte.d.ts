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
export type GiIcePopProps = typeof __propDef.props;
export type GiIcePopEvents = typeof __propDef.events;
export type GiIcePopSlots = typeof __propDef.slots;
export default class GiIcePop extends SvelteComponentTyped<GiIcePopProps, GiIcePopEvents, GiIcePopSlots> {
}
export {};
