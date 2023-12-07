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
export type FaFlyProps = typeof __propDef.props;
export type FaFlyEvents = typeof __propDef.events;
export type FaFlySlots = typeof __propDef.slots;
export default class FaFly extends SvelteComponentTyped<FaFlyProps, FaFlyEvents, FaFlySlots> {
}
export {};
