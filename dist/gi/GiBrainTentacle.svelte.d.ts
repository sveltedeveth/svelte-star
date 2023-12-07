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
export type GiBrainTentacleProps = typeof __propDef.props;
export type GiBrainTentacleEvents = typeof __propDef.events;
export type GiBrainTentacleSlots = typeof __propDef.slots;
export default class GiBrainTentacle extends SvelteComponentTyped<GiBrainTentacleProps, GiBrainTentacleEvents, GiBrainTentacleSlots> {
}
export {};
