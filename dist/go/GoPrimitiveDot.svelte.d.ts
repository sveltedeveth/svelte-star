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
export type GoPrimitiveDotProps = typeof __propDef.props;
export type GoPrimitiveDotEvents = typeof __propDef.events;
export type GoPrimitiveDotSlots = typeof __propDef.slots;
export default class GoPrimitiveDot extends SvelteComponentTyped<GoPrimitiveDotProps, GoPrimitiveDotEvents, GoPrimitiveDotSlots> {
}
export {};
