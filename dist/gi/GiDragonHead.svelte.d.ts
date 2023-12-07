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
export type GiDragonHeadProps = typeof __propDef.props;
export type GiDragonHeadEvents = typeof __propDef.events;
export type GiDragonHeadSlots = typeof __propDef.slots;
export default class GiDragonHead extends SvelteComponentTyped<GiDragonHeadProps, GiDragonHeadEvents, GiDragonHeadSlots> {
}
export {};
