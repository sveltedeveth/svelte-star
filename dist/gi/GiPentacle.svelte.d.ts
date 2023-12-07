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
export type GiPentacleProps = typeof __propDef.props;
export type GiPentacleEvents = typeof __propDef.events;
export type GiPentacleSlots = typeof __propDef.slots;
export default class GiPentacle extends SvelteComponentTyped<GiPentacleProps, GiPentacleEvents, GiPentacleSlots> {
}
export {};
