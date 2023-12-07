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
export type GiRelicBladeProps = typeof __propDef.props;
export type GiRelicBladeEvents = typeof __propDef.events;
export type GiRelicBladeSlots = typeof __propDef.slots;
export default class GiRelicBlade extends SvelteComponentTyped<GiRelicBladeProps, GiRelicBladeEvents, GiRelicBladeSlots> {
}
export {};
