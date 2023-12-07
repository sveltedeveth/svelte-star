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
export type DiCelluloidProps = typeof __propDef.props;
export type DiCelluloidEvents = typeof __propDef.events;
export type DiCelluloidSlots = typeof __propDef.slots;
export default class DiCelluloid extends SvelteComponentTyped<DiCelluloidProps, DiCelluloidEvents, DiCelluloidSlots> {
}
export {};
