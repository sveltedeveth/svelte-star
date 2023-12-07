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
export type GiBleedingHeartProps = typeof __propDef.props;
export type GiBleedingHeartEvents = typeof __propDef.events;
export type GiBleedingHeartSlots = typeof __propDef.slots;
export default class GiBleedingHeart extends SvelteComponentTyped<GiBleedingHeartProps, GiBleedingHeartEvents, GiBleedingHeartSlots> {
}
export {};
