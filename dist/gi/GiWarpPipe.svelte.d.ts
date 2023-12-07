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
export type GiWarpPipeProps = typeof __propDef.props;
export type GiWarpPipeEvents = typeof __propDef.events;
export type GiWarpPipeSlots = typeof __propDef.slots;
export default class GiWarpPipe extends SvelteComponentTyped<GiWarpPipeProps, GiWarpPipeEvents, GiWarpPipeSlots> {
}
export {};
