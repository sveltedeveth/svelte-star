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
export type GiThornyTentacleProps = typeof __propDef.props;
export type GiThornyTentacleEvents = typeof __propDef.events;
export type GiThornyTentacleSlots = typeof __propDef.slots;
export default class GiThornyTentacle extends SvelteComponentTyped<GiThornyTentacleProps, GiThornyTentacleEvents, GiThornyTentacleSlots> {
}
export {};
