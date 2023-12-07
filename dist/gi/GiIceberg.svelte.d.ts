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
export type GiIcebergProps = typeof __propDef.props;
export type GiIcebergEvents = typeof __propDef.events;
export type GiIcebergSlots = typeof __propDef.slots;
export default class GiIceberg extends SvelteComponentTyped<GiIcebergProps, GiIcebergEvents, GiIcebergSlots> {
}
export {};
