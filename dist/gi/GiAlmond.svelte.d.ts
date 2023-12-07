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
export type GiAlmondProps = typeof __propDef.props;
export type GiAlmondEvents = typeof __propDef.events;
export type GiAlmondSlots = typeof __propDef.slots;
export default class GiAlmond extends SvelteComponentTyped<GiAlmondProps, GiAlmondEvents, GiAlmondSlots> {
}
export {};
