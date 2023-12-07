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
export type GiPisaTowerProps = typeof __propDef.props;
export type GiPisaTowerEvents = typeof __propDef.events;
export type GiPisaTowerSlots = typeof __propDef.slots;
export default class GiPisaTower extends SvelteComponentTyped<GiPisaTowerProps, GiPisaTowerEvents, GiPisaTowerSlots> {
}
export {};
