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
export type GiPcProps = typeof __propDef.props;
export type GiPcEvents = typeof __propDef.events;
export type GiPcSlots = typeof __propDef.slots;
export default class GiPc extends SvelteComponentTyped<GiPcProps, GiPcEvents, GiPcSlots> {
}
export {};
