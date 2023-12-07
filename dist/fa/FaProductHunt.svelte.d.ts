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
export type FaProductHuntProps = typeof __propDef.props;
export type FaProductHuntEvents = typeof __propDef.events;
export type FaProductHuntSlots = typeof __propDef.slots;
export default class FaProductHunt extends SvelteComponentTyped<FaProductHuntProps, FaProductHuntEvents, FaProductHuntSlots> {
}
export {};
