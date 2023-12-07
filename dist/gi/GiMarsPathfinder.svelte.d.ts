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
export type GiMarsPathfinderProps = typeof __propDef.props;
export type GiMarsPathfinderEvents = typeof __propDef.events;
export type GiMarsPathfinderSlots = typeof __propDef.slots;
export default class GiMarsPathfinder extends SvelteComponentTyped<GiMarsPathfinderProps, GiMarsPathfinderEvents, GiMarsPathfinderSlots> {
}
export {};
