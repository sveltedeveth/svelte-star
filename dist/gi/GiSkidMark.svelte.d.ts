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
export type GiSkidMarkProps = typeof __propDef.props;
export type GiSkidMarkEvents = typeof __propDef.events;
export type GiSkidMarkSlots = typeof __propDef.slots;
export default class GiSkidMark extends SvelteComponentTyped<GiSkidMarkProps, GiSkidMarkEvents, GiSkidMarkSlots> {
}
export {};
