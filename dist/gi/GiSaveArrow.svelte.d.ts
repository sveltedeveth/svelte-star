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
export type GiSaveArrowProps = typeof __propDef.props;
export type GiSaveArrowEvents = typeof __propDef.events;
export type GiSaveArrowSlots = typeof __propDef.slots;
export default class GiSaveArrow extends SvelteComponentTyped<GiSaveArrowProps, GiSaveArrowEvents, GiSaveArrowSlots> {
}
export {};
