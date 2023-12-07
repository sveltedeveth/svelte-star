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
export type GiReticuleProps = typeof __propDef.props;
export type GiReticuleEvents = typeof __propDef.events;
export type GiReticuleSlots = typeof __propDef.slots;
export default class GiReticule extends SvelteComponentTyped<GiReticuleProps, GiReticuleEvents, GiReticuleSlots> {
}
export {};
