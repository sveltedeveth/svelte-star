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
export type GiRoadProps = typeof __propDef.props;
export type GiRoadEvents = typeof __propDef.events;
export type GiRoadSlots = typeof __propDef.slots;
export default class GiRoad extends SvelteComponentTyped<GiRoadProps, GiRoadEvents, GiRoadSlots> {
}
export {};
