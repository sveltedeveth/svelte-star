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
export type GiPurpleTentacleProps = typeof __propDef.props;
export type GiPurpleTentacleEvents = typeof __propDef.events;
export type GiPurpleTentacleSlots = typeof __propDef.slots;
export default class GiPurpleTentacle extends SvelteComponentTyped<GiPurpleTentacleProps, GiPurpleTentacleEvents, GiPurpleTentacleSlots> {
}
export {};
