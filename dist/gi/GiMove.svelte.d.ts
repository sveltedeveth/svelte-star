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
export type GiMoveProps = typeof __propDef.props;
export type GiMoveEvents = typeof __propDef.events;
export type GiMoveSlots = typeof __propDef.slots;
export default class GiMove extends SvelteComponentTyped<GiMoveProps, GiMoveEvents, GiMoveSlots> {
}
export {};
