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
export type TiPlaneProps = typeof __propDef.props;
export type TiPlaneEvents = typeof __propDef.events;
export type TiPlaneSlots = typeof __propDef.slots;
export default class TiPlane extends SvelteComponentTyped<TiPlaneProps, TiPlaneEvents, TiPlaneSlots> {
}
export {};
