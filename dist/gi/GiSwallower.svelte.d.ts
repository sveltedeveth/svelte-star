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
export type GiSwallowerProps = typeof __propDef.props;
export type GiSwallowerEvents = typeof __propDef.events;
export type GiSwallowerSlots = typeof __propDef.slots;
export default class GiSwallower extends SvelteComponentTyped<GiSwallowerProps, GiSwallowerEvents, GiSwallowerSlots> {
}
export {};
