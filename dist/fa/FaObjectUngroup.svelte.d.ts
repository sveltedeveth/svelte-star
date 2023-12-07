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
export type FaObjectUngroupProps = typeof __propDef.props;
export type FaObjectUngroupEvents = typeof __propDef.events;
export type FaObjectUngroupSlots = typeof __propDef.slots;
export default class FaObjectUngroup extends SvelteComponentTyped<FaObjectUngroupProps, FaObjectUngroupEvents, FaObjectUngroupSlots> {
}
export {};
