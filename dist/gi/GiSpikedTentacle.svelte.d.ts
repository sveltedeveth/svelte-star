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
export type GiSpikedTentacleProps = typeof __propDef.props;
export type GiSpikedTentacleEvents = typeof __propDef.events;
export type GiSpikedTentacleSlots = typeof __propDef.slots;
export default class GiSpikedTentacle extends SvelteComponentTyped<GiSpikedTentacleProps, GiSpikedTentacleEvents, GiSpikedTentacleSlots> {
}
export {};
