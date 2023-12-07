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
export type GiWaterFountainProps = typeof __propDef.props;
export type GiWaterFountainEvents = typeof __propDef.events;
export type GiWaterFountainSlots = typeof __propDef.slots;
export default class GiWaterFountain extends SvelteComponentTyped<GiWaterFountainProps, GiWaterFountainEvents, GiWaterFountainSlots> {
}
export {};
