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
export type GiDualityProps = typeof __propDef.props;
export type GiDualityEvents = typeof __propDef.events;
export type GiDualitySlots = typeof __propDef.slots;
export default class GiDuality extends SvelteComponentTyped<GiDualityProps, GiDualityEvents, GiDualitySlots> {
}
export {};
