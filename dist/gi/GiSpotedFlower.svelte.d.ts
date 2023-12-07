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
export type GiSpotedFlowerProps = typeof __propDef.props;
export type GiSpotedFlowerEvents = typeof __propDef.events;
export type GiSpotedFlowerSlots = typeof __propDef.slots;
export default class GiSpotedFlower extends SvelteComponentTyped<GiSpotedFlowerProps, GiSpotedFlowerEvents, GiSpotedFlowerSlots> {
}
export {};
