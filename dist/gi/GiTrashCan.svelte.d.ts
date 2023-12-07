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
export type GiTrashCanProps = typeof __propDef.props;
export type GiTrashCanEvents = typeof __propDef.events;
export type GiTrashCanSlots = typeof __propDef.slots;
export default class GiTrashCan extends SvelteComponentTyped<GiTrashCanProps, GiTrashCanEvents, GiTrashCanSlots> {
}
export {};
