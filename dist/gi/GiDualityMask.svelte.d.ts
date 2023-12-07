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
export type GiDualityMaskProps = typeof __propDef.props;
export type GiDualityMaskEvents = typeof __propDef.events;
export type GiDualityMaskSlots = typeof __propDef.slots;
export default class GiDualityMask extends SvelteComponentTyped<GiDualityMaskProps, GiDualityMaskEvents, GiDualityMaskSlots> {
}
export {};
