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
export type FaRoadProps = typeof __propDef.props;
export type FaRoadEvents = typeof __propDef.events;
export type FaRoadSlots = typeof __propDef.slots;
export default class FaRoad extends SvelteComponentTyped<FaRoadProps, FaRoadEvents, FaRoadSlots> {
}
export {};
