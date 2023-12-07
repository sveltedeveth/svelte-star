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
export type GiTentacleHeartProps = typeof __propDef.props;
export type GiTentacleHeartEvents = typeof __propDef.events;
export type GiTentacleHeartSlots = typeof __propDef.slots;
export default class GiTentacleHeart extends SvelteComponentTyped<GiTentacleHeartProps, GiTentacleHeartEvents, GiTentacleHeartSlots> {
}
export {};
