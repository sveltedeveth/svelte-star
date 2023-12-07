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
export type FaDrumSteelpanProps = typeof __propDef.props;
export type FaDrumSteelpanEvents = typeof __propDef.events;
export type FaDrumSteelpanSlots = typeof __propDef.slots;
export default class FaDrumSteelpan extends SvelteComponentTyped<FaDrumSteelpanProps, FaDrumSteelpanEvents, FaDrumSteelpanSlots> {
}
export {};
