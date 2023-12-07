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
export type GiDartProps = typeof __propDef.props;
export type GiDartEvents = typeof __propDef.events;
export type GiDartSlots = typeof __propDef.slots;
export default class GiDart extends SvelteComponentTyped<GiDartProps, GiDartEvents, GiDartSlots> {
}
export {};
