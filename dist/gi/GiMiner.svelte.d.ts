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
export type GiMinerProps = typeof __propDef.props;
export type GiMinerEvents = typeof __propDef.events;
export type GiMinerSlots = typeof __propDef.slots;
export default class GiMiner extends SvelteComponentTyped<GiMinerProps, GiMinerEvents, GiMinerSlots> {
}
export {};
