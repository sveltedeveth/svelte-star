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
export type GiRamProps = typeof __propDef.props;
export type GiRamEvents = typeof __propDef.events;
export type GiRamSlots = typeof __propDef.slots;
export default class GiRam extends SvelteComponentTyped<GiRamProps, GiRamEvents, GiRamSlots> {
}
export {};
