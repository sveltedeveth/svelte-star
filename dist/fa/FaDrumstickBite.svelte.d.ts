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
export type FaDrumstickBiteProps = typeof __propDef.props;
export type FaDrumstickBiteEvents = typeof __propDef.events;
export type FaDrumstickBiteSlots = typeof __propDef.slots;
export default class FaDrumstickBite extends SvelteComponentTyped<FaDrumstickBiteProps, FaDrumstickBiteEvents, FaDrumstickBiteSlots> {
}
export {};
