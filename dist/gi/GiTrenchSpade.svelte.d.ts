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
export type GiTrenchSpadeProps = typeof __propDef.props;
export type GiTrenchSpadeEvents = typeof __propDef.events;
export type GiTrenchSpadeSlots = typeof __propDef.slots;
export default class GiTrenchSpade extends SvelteComponentTyped<GiTrenchSpadeProps, GiTrenchSpadeEvents, GiTrenchSpadeSlots> {
}
export {};
