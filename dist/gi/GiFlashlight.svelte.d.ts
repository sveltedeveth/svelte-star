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
export type GiFlashlightProps = typeof __propDef.props;
export type GiFlashlightEvents = typeof __propDef.events;
export type GiFlashlightSlots = typeof __propDef.slots;
export default class GiFlashlight extends SvelteComponentTyped<GiFlashlightProps, GiFlashlightEvents, GiFlashlightSlots> {
}
export {};
