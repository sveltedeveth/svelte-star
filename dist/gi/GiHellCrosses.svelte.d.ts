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
export type GiHellCrossesProps = typeof __propDef.props;
export type GiHellCrossesEvents = typeof __propDef.events;
export type GiHellCrossesSlots = typeof __propDef.slots;
export default class GiHellCrosses extends SvelteComponentTyped<GiHellCrossesProps, GiHellCrossesEvents, GiHellCrossesSlots> {
}
export {};
