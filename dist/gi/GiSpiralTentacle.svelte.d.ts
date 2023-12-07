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
export type GiSpiralTentacleProps = typeof __propDef.props;
export type GiSpiralTentacleEvents = typeof __propDef.events;
export type GiSpiralTentacleSlots = typeof __propDef.slots;
export default class GiSpiralTentacle extends SvelteComponentTyped<GiSpiralTentacleProps, GiSpiralTentacleEvents, GiSpiralTentacleSlots> {
}
export {};
